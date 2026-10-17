// Toilet Paper Elevator: a small 3D viewer for the Fusion parts.
// Drag to turn, scroll or pinch to zoom, slide to pull the parts apart, tap a part to name it.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Units are millimetres. x runs across the wall, y up, z out from the wall.
const PARTS: Record<string, { label: string; explode: [number, number, number] }> = {
  Cover: { label: 'Cover, with the screen window', explode: [0, 0, 150] },
  epaper_pcb: { label: '4.2" e-paper screen (stand-in)', explode: [0, 0, 100] },
  epaper_disp: { label: '4.2" e-paper screen (stand-in)', explode: [0, 0, 100] },
  standoffs: { label: 'Brass standoffs', explode: [0, 0, 100] },
  carrier: { label: 'Carrier plate', explode: [0, 0, 55] },
  breadboard: { label: 'Arduino MKR WiFi 1010 on a breadboard (stand-in)', explode: [0, 0, 55] },
  mkr: { label: 'Arduino MKR WiFi 1010 (stand-in)', explode: [0, 0, 55] },
  lipo: { label: '3.7V LiPo (stand-in)', explode: [0, 0, 25] },
  panel: { label: 'Back panel, against the wall', explode: [0, 0, 0] },
  raceway: { label: 'Raceway, down the wall', explode: [0, 0, 0] },
  finger: { label: "Finger, along the holder's arm", explode: [0, 0, 0] },
  side_panel: { label: 'Side panel, closes the wire channel', explode: [-26, 0, 0] },
  a3144_reference: { label: 'A3144 Hall sensor', explode: [0, 0, 26] },
  sleeve: { label: 'Sleeve, inside the roll', explode: [42, 0, 0] },
  magnets: { label: 'Four magnets, one facing the sensor', explode: [42, 0, 0] },
  holder: { label: 'Toilet paper holder, for reference', explode: [0, 0, 0] },
};

const VIEWS: Record<string, { target: [number, number, number]; dir: [number, number, number]; dist: number }> = {
  whole: { target: [25, -115, 45], dir: [0.55, 0.2, 1], dist: 900 },
  pod: { target: [0, 0, 80], dir: [0.75, 0.25, 1], dist: 560 },
  sensor: { target: [-15, -240, 68], dir: [-0.7, 0.35, 0.85], dist: 260 },
};

export function mount(root: HTMLElement) {
  const canvas = root.querySelector('canvas') as HTMLCanvasElement;
  const loading = root.querySelector('.v3d-load') as HTMLElement;
  const chip = root.querySelector('.v3d-part') as HTMLElement;
  const slider = root.parentElement!.querySelector('.v3d-explode') as HTMLInputElement;
  const viewBtns = [...root.parentElement!.querySelectorAll<HTMLButtonElement>('[data-view]')];

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.82;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(200, 400, 300);
  scene.add(key, new THREE.AmbientLight(0xffffff, 0.25));

  const camera = new THREE.PerspectiveCamera(30, 1, 1, 5000);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 80;
  controls.maxDistance = 1800;

  let needs = true;
  const ask = () => { needs = true; };
  controls.addEventListener('change', ask);

  // Camera moves ease between views.
  let tween: { from: THREE.Vector3; to: THREE.Vector3; tf: THREE.Vector3; tt: THREE.Vector3; t: number } | null = null;
  const goTo = (name: string, instant = false) => {
    const v = VIEWS[name];
    const tt = new THREE.Vector3(...v.target);
    const to = tt.clone().add(new THREE.Vector3(...v.dir).normalize().multiplyScalar(v.dist));
    viewBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === name)));
    if (instant) { camera.position.copy(to); controls.target.copy(tt); controls.update(); ask(); return; }
    tween = { from: camera.position.clone(), to, tf: controls.target.clone(), tt, t: 0 };
  };

  const resize = () => {
    const w = root.clientWidth, h = root.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    ask();
  };
  new ResizeObserver(resize).observe(root);

  const nodes: { obj: THREE.Object3D; base: THREE.Vector3; dir: THREE.Vector3 }[] = [];
  let explode = 0, target = 0;

  new GLTFLoader().load(root.dataset.src!, (gltf) => {
    gltf.scene.traverse((o) => {
      const p = PARTS[o.name];
      if (p && o !== gltf.scene) nodes.push({ obj: o, base: o.position.clone(), dir: new THREE.Vector3(...p.explode) });
      if ((o as THREE.Mesh).isMesh) {
        const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial;
        m.envMapIntensity = 0.9;
      }
    });
    scene.add(gltf.scene);
    loading.style.display = 'none';
    goTo('whole', true);
  }, undefined, () => { loading.textContent = "The 3D model didn't load."; });

  slider?.addEventListener('input', () => { target = Number(slider.value) / 100; ask(); });
  viewBtns.forEach((b) => b.addEventListener('click', () => goTo(b.dataset.view!)));

  // Tap or hover to name a part.
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  let downAt = 0;
  const pick = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObjects(nodes.map((n) => n.obj), true)[0];
    let o: THREE.Object3D | null = hit ? hit.object : null;
    while (o && !PARTS[o.name]) o = o.parent;
    if (o) { chip.textContent = PARTS[o.name].label; chip.hidden = false; } else chip.hidden = true;
  };
  canvas.addEventListener('pointerdown', () => { downAt = performance.now(); });
  canvas.addEventListener('pointerup', (e) => { if (performance.now() - downAt < 250) pick(e); });
  canvas.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' && e.buttons === 0) pick(e); });
  canvas.addEventListener('pointerleave', () => { chip.hidden = true; });

  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const loop = () => {
    requestAnimationFrame(loop);
    if (Math.abs(target - explode) > 0.001) {
      explode += (target - explode) * 0.15;
      nodes.forEach((n) => n.obj.position.copy(n.base).addScaledVector(n.dir, explode));
      ask();
    }
    if (tween) {
      tween.t = Math.min(1, tween.t + 0.035);
      const k = ease(tween.t);
      camera.position.lerpVectors(tween.from, tween.to, k);
      controls.target.lerpVectors(tween.tf, tween.tt, k);
      if (tween.t >= 1) tween = null;
      ask();
    }
    if (controls.update()) needs = true;
    if (needs) { renderer.render(scene, camera); needs = false; }
  };
  loop();
}
