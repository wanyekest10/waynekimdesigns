// Toilet Paper Elevator: how it counts.
// The sleeve's four magnets pass one Hall sensor. Each pass counts a square,
// squares become feet, and the e-paper screen catches up with a refresh flash.
(() => {
  const root = document.querySelector('.tpe-mech');
  if (!root) return;

  const NS = 'http://www.w3.org/2000/svg';
  const A = '/work/tpe-assets/';
  const FT_PER_SQUARE = 0.328; // 100 mm squares
  const screens = [
    { at: 0, src: 'screen-g.png' },
    { at: 12, src: 'screen-4ft.png' },
    { at: 45, src: 'screen-15ft.png' },
    { at: 91, src: 'screen-30ft.png' },
    { at: 137, src: 'screen-arrive-hollywood.png' },
  ];
  const LATER = { squares: 3300, feet: 1083, src: 'screen-arrive-eiffel.png' };
  screens.concat(LATER).forEach((s) => { const i = new Image(); i.src = A + s.src; });

  // Drawing
  const cx = 150, cy = 140, R = 128, sleeveR = 46, magR = 32;
  const svg = root.querySelector('svg');
  const el = (tag, attrs, parent = svg) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent.appendChild(n);
    return n;
  };

  // Paper hanging off the front of the roll
  const clip = el('clipPath', { id: 'tpe-paper-clip' });
  el('rect', { x: cx + R - 2, y: cy, width: 56, height: 160 }, clip);
  el('rect', { x: cx + R - 2, y: cy, width: 56, height: 160, class: 'm-paper' });
  const perfs = el('g', { 'clip-path': 'url(#tpe-paper-clip)' });
  const PERF = 30;
  const perfLines = [];
  for (let i = 0; i < 8; i++) perfLines.push(el('line', { x1: cx + R + 2, x2: cx + R + 50, class: 'm-perf' }, perfs));

  // Roll, rings, tube
  el('circle', { cx, cy, r: R, class: 'm-roll' });
  [112, 96, 82, 70].forEach((r) => el('circle', { cx, cy, r, class: 'm-ring' }));
  el('circle', { cx, cy, r: 58, class: 'm-tube' });

  // Sleeve and magnets (rotating group)
  const spin = el('g', {});
  el('circle', { cx, cy, r: sleeveR, class: 'm-sleeve' }, spin);
  const mags = [0, 1, 2, 3].map((k) => {
    const a = (k * Math.PI) / 2;
    return el('circle', { cx: cx + magR * Math.cos(a), cy: cy + magR * Math.sin(a), r: 8, class: 'm-mag' }, spin);
  });
  el('circle', { cx, cy, r: 12, class: 'm-pin' });

  // Hall sensor, fixed at the top of the sleeve
  const sx = cx, sy = cy - magR;
  const ripple = el('circle', { cx: sx, cy: sy, r: 12, class: 'm-ripple' });
  const sensor = el('rect', { x: sx - 13, y: sy - 8, width: 26, height: 16, rx: 4, class: 'm-sensor' });

  const later = root.querySelector('.m-later');
  const outSq = root.querySelector('[data-k="squares"]');
  const outFt = root.querySelector('[data-k="feet"]');
  const img = root.querySelector('.m-screen img');
  const flash = root.querySelector('.m-flash');

  // State
  let theta = 0, squares = 0, shown = '', phase = 'spin', phaseT = 0, last = 0, running = false;
  const fmt = (n) => n.toLocaleString('en-US');

  const show = (src) => {
    if (shown === src) return;
    shown = src;
    flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
    setTimeout(() => { img.src = A + src; }, 160);
  };
  const setCount = (sq, ft) => {
    outSq.textContent = fmt(sq);
    outFt.textContent = fmt(ft ?? Math.round(sq * FT_PER_SQUARE));
  };
  const draw = () => {
    spin.setAttribute('transform', `rotate(${(theta * 180) / Math.PI} ${cx} ${cy})`);
    const off = ((theta / (Math.PI / 2)) * PERF) % PERF;
    perfLines.forEach((l, i) => { const y = cy + off + i * PERF; l.setAttribute('y1', y); l.setAttribute('y2', y); });
    // Is a magnet under the sensor? Magnet k sits at angle theta + k*90deg; sensor at -90deg.
    const rel = ((theta + Math.PI / 2) % (Math.PI / 2) + Math.PI / 2) % (Math.PI / 2);
    const near = rel < 0.16 || rel > Math.PI / 2 - 0.16;
    sensor.classList.toggle('on', near);
  };
  const reset = () => {
    theta = 0; squares = 0; phase = 'spin'; phaseT = 0;
    later.hidden = true; setCount(0); show(screens[0].src); draw();
  };

  // Angular speed in revolutions per second: slow start, then time-lapse.
  const speed = (t) => (t < 3.5 ? 0.45 : t < 5.5 ? 0.45 + ((t - 3.5) / 2) * 3.3 : 3.75);

  const tick = (now) => {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now; phaseT += dt;

    if (phase === 'spin') {
      const before = Math.floor(theta / (Math.PI / 2));
      theta += speed(phaseT) * 2 * Math.PI * dt;
      const after = Math.floor(theta / (Math.PI / 2));
      if (after > before) {
        squares = Math.min(137, after);
        ripple.classList.remove('go'); void ripple.getBBox(); ripple.classList.add('go');
        setCount(squares);
        const s = [...screens].reverse().find((x) => squares >= x.at);
        if (s) show(s.src);
      }
      if (squares >= 137) { phase = 'arrived'; phaseT = 0; theta = 137 * (Math.PI / 2); }
    } else if (phase === 'arrived' && phaseT > 3) {
      phase = 'later'; phaseT = 0; later.hidden = false; setCount(LATER.squares, LATER.feet); show(LATER.src);
    } else if (phase === 'later' && phaseT > 3.5) {
      reset();
    }
    draw();
    requestAnimationFrame(tick);
  };

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { theta = 0.4; setCount(137); shown = ''; show(screens[4].src); draw(); return; }

  reset();
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !running) { running = true; last = performance.now(); requestAnimationFrame(tick); }
    else if (!e.isIntersecting) running = false;
  }, { threshold: 0.2 }).observe(root);
})();
