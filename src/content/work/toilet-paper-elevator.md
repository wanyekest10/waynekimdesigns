---
title: Toilet Paper Elevator
slug: toilet-paper-elevator
headline: "A small e-ink screen above the toilet paper holder that turns a household's toilet paper into an elevator ride past the world's landmarks."
context: "Personal project, 2026"
order: 4
year: "2026"
featured: true
label: "Physical computing and fabrication"
summary: "Toilet paper use, measured in landmark heights."
hero: "/work/tpe-assets/hero-wall.webp"
heroAlt: "Toilet Paper Elevator on a bathroom wall: a gray e-ink pod reading Ground floor, a slim raceway down to the holder, and a full roll on the bar"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
short:
  - { lead: "The question.", text: "How do you make an invisible, private, slightly taboo habit visible, without making anyone in the house feel watched?" }
  - { lead: "What I built.", text: "A sleeve inside the roll counts every square. A quiet e-ink screen above the holder turns the total into a climb: 4 ft up, next stop, the Hollywood Sign." }
  - { lead: "What I learned.", text: "In an intimate space, the design is mostly what you leave out. No sessions, no names, no alerts. Just a slow number going up." }
facts:
  - { label: "Project", value: "Personal project" }
  - { label: "Role", value: "Designer and builder, solo" }
  - { label: "Duration", value: "14-day sprint, 2026" }
  - { label: "Stack", value: "Arduino MKR WiFi 1010 · Hall effect sensor · Waveshare 4.2\" e-paper · 3.7V LiPo" }
  - { label: "Tools", value: "Arduino IDE · Fusion 360 · Prusa MK3S" }
---

## An invisible habit

Everyone in a home uses toilet paper every day, and nobody ever sees how much. I wanted to make that constant, invisible habit visible, in the one room where people least want to feel observed.

That set the rules early. The display had to be household-level and anonymous. It couldn't show sessions, single anyone out, or ask for attention. And it couldn't preach about sustainability, which would turn a curious object into a lecture.

## From highway to elevator

The first version was a highway: an odometer driving the roll's length from LA City Hall to the Santa Monica Pier. But a single household moves slowly, and a trip measured in miles barely changes from week to week.

Stacking it up instead worked better. Height gives you milestones within days, and the world is full of tall things people already know. So the climb starts at the ground floor and works up a ladder of landmarks: the Hollywood Sign at 45 feet first, then taller and taller, with the Moon waiting after the summit.

<figure class="pair">
  <img style="object-position: center top" src="/work/tpe-assets/screen-test.webp" alt="An early screen on the breadboard reading 12,028 ft up, next stop Mount Fuji"/>
  <img src="/work/tpe-assets/screen-arrival.webp" alt="An arrival screen: now arriving, Motherland Monument, with the Great Pyramid up next"/>
  <figcaption>Testing the climb and an arrival screen on the e-paper module.</figcaption>
</figure>

## Climbing and arriving

The screen has two states. Most of the time it's climbing: one big number, feet up, and the landmarks behind and ahead. When the count passes a landmark, it switches to an arrival screen, with the name set large, where it is, and how tall it is. Eighteen landmarks in all, from the Hollywood Sign to the Burj Khalifa, and then the Moon.

<figure class="pair natural">
  <img src="/work/tpe-assets/screen-30ft.png" alt="Climbing screen: 30 ft up, 91 squares since Oct 11, previous stop Ground floor, next stop Hollywood Sign, 45 ft tall"/>
  <img src="/work/tpe-assets/screen-arrive-hollywood.png" alt="Arrival screen: Now arriving, Hollywood Sign, Los Angeles, USA, 45 ft tall. So far 45 ft up, next stop Christ the Redeemer"/>
  <figcaption>Climbing, and arriving. See every <a href="/work/tpe-assets/screens-climb-all.webp" target="_blank" rel="noopener">climbing screen</a> and <a href="/work/tpe-assets/screens-arrival-all.webp" target="_blank" rel="noopener">arrival screen</a>.</figcaption>
</figure>

## How it works

<figure class="wide tpe-mech" aria-label="Animation: the roll turns, its four magnets pass the Hall sensor, the square count climbs, and the e-paper screen updates from ground floor to the Hollywood Sign">
  <div class="m-stage">
    <div class="m-roll-wrap">
      <svg viewBox="0 0 340 290" role="img" aria-hidden="true"></svg>
      <p class="m-legend"><span><i class="lg-sensor"></i>Hall sensor</span><span><i class="lg-mag"></i>4 magnets in the sleeve</span></p>
      <p class="m-later" hidden>Months later</p>
      <dl class="m-read"><div><dt>Squares</dt><dd data-k="squares">0</dd></div><div><dt>Feet up</dt><dd data-k="feet">0</dd></div></dl>
    </div>
    <div class="m-screen"><div class="m-bezel"><img src="/work/tpe-assets/screen-g.png" alt="" /><span class="m-flash"></span></div></div>
  </div>
  <figcaption>Each time a magnet passes the sensor, a square is counted. Squares become feet, and the screen catches up.</figcaption>
</figure>
<script src="/work/tpe-assets/mechanism.js" defer></script>

### Wiring

Three parts, one board.

<div class="hub" aria-label="Wiring: the Arduino MKR WiFi 1010 connects to a LiPo battery, the e-paper screen, and the Hall effect sensor">
  <div class="hub-part" style="grid-row:1"><b>3.7V LiPo</b><small>Power, so it runs without a cable</small></div>
  <div class="hub-link" style="grid-row:1"><span>Power</span></div>
  <div class="hub-part" style="grid-row:2"><b>Waveshare 4.2" e-paper</b><small>The screen</small></div>
  <div class="hub-link" style="grid-row:2"><span>SPI</span></div>
  <div class="hub-part focal" style="grid-row:3"><b>Hall effect sensor</b><small>Pulses each time a magnet passes</small></div>
  <div class="hub-link focal" style="grid-row:3"><span>Pulse</span></div>
  <div class="hub-board"><b>Arduino MKR WiFi 1010</b><small>Counts squares, works out the height, and draws the screen</small></div>
</div>

The slow e-paper refresh is on purpose. The number doesn't flash or animate when you're in the room. It's simply different the next time you look.

## Measuring the roll

Before modeling anything, I measured my own roll and holder: a 128 mm roll on a 39 mm tube, around a 16 mm spring pin. The sleeve had to spin freely inside the tube while the holder stayed still, which is why the sensing ended up as magnets and a Hall sensor instead of an encoder.

<figure class="pair">
  <img src="/work/tpe-assets/measure-tube.webp" alt="Calipers measuring the inside of a cardboard tube at 39 mm"/>
  <img src="/work/tpe-assets/measure-roll.webp" alt="Calipers measuring a full roll at 128 mm"/>
</figure>

<figure class="pair">
  <video src="/work/tpe-assets/sensor-test.mp4" poster="/work/tpe-assets/sensor-test-poster.jpg" autoplay muted loop playsinline></video>
  <img src="/work/tpe-assets/parts-early.webp" alt="The e-paper module, breadboard, Arduino, and a tube with an orange printed insert holding magnets"/>
  <figcaption>The first working pulse: a green LED blinks each time a magnet passes the sensor.</figcaption>
</figure>

## Prototyping the install

The hard part wasn't the electronics. It was getting a wire from the holder to the screen without anything exposed in a bathroom. I worked it out on the wall in cheap materials first: a paper screen and a string, then printed collars and raceways in bright filament so I could see every joint.

<figure class="grid3 tall">
  <div><img src="/work/tpe-assets/mock-paper.webp" alt="A paper rectangle taped to the wall with a string running down to the holder"/><p>Paper and string, to place the screen.</p></div>
  <div><img src="/work/tpe-assets/collar-pink.webp" alt="A pink printed collar and raceway wrapped around the holder's elbow"/><p>A first collar for the sensor.</p></div>
  <div><img src="/work/tpe-assets/mock-purple.webp" alt="A purple raceway running from the paper screen to the holder, with the gray sleeve on the bar"/><p>The raceway, end to end.</p></div>
</figure>

<figure class="frame"><img src="/work/tpe-assets/collar-wires.webp" alt="Close-up of the purple collar with the sensor wires routed inside, next to the sleeve's four magnets"/><figcaption>A wider sensor pocket, so the soldered pins don't touch.</figcaption></figure>

## Building the pod

I designed the pod in Fusion, along with a raceway that carries the sensor wire down the wall and along the holder's arm to the end of the sleeve. Everything prints in gray. The LiPo sits trapped in a closed shell, and the display's own screws and brass standoffs hold it together.

<figure class="v3d-fig wide">
  <div class="v3d" data-src="/work/tpe-assets/tpe.glb"><canvas aria-label="3D model of Toilet Paper Elevator. Drag to turn it, and use the slider to pull the parts apart."></canvas><p class="v3d-load">Loading the 3D model…</p><span class="v3d-part" hidden></span></div>
  <div class="v3d-ui">
    <div class="v3d-views" role="group" aria-label="View"><button type="button" data-view="whole" aria-pressed="true">Whole</button><button type="button" data-view="pod">Pod</button><button type="button" data-view="sensor">Sensor</button></div>
    <label class="v3d-slide"><span>Assembled</span><input class="v3d-explode" type="range" min="0" max="100" value="0" aria-label="Pull the parts apart" /><span>Apart</span></label>
  </div>
  <figcaption>Drag to turn it, pinch or scroll to zoom, and tap a part to see what it is. The shell, carrier, panel, raceway, finger, and sleeve come from the Fusion files; the screen, Arduino, and battery are stand-ins.</figcaption>
</figure>

<figure class="grid3">
  <div><img src="/work/tpe-assets/fusion-shell.webp" alt="The pod shell in Fusion 360, shown see-through with the screen opening, screw bosses, and cable openings"/><p>The shell, see-through.</p></div>
  <div><img src="/work/tpe-assets/fusion-wire.webp" alt="Wireframe view of the pod shell showing the internal standoffs and the board outline"/><p>Standoffs and cutouts.</p></div>
  <div><img src="/work/tpe-assets/fusion-standoff.webp" alt="Close-up of a printed boss with a hex pocket that traps a nut"/><p>A hex pocket traps each nut.</p></div>
</figure>

<figure class="pair natural">
  <img src="/work/tpe-assets/bts-counter.webp" alt="Everything on the counter, wired up: the pod reading 15 ft up, the gray raceway with the sensor wires running down it, and the magnet sleeve in hand"/>
  <img src="/work/tpe-assets/arm-closeup.webp" alt="Close-up of the raceway's arm along the holder, the sensor wires inside, ending at the sleeve's face where the magnets sit"/>
  <figcaption>Every part on the counter, and the arm bringing the sensor to the magnets.</figcaption>
</figure>

### Getting the wire to the roll

The wire took four tries. Exposed jumpers worked but looked like a bomb. A braided cord hid the wires, with a gray collar around the holder's arm to hold the sensor, but the cord drooped and the collar stuck out. A purple collar and raceway pinned it flat to the wall. In the end the raceway's own arm could carry the sensor right up to the sleeve, so the collar wasn't needed at all. Easier to install, and calmer to look at.

<figure class="grid4">
  <div><img src="/work/tpe-assets/iter-1-exposed.webp" alt="The first version: the pod on the wall with loose orange and yellow jumper wires running to the holder"/><p>1. Exposed wiring.</p></div>
  <div><img src="/work/tpe-assets/iter-2-braided.webp" alt="The pod with a black braided cord looping down to a gray collar on the holder"/><p>2. A braided cord and a collar.</p></div>
  <div><img src="/work/tpe-assets/iter-3-purple-collar.webp" alt="A purple raceway down the wall into a purple collar around the holder's arm"/><p>3. A raceway and a purple collar.</p></div>
  <div><img src="/work/tpe-assets/iter-4-final.webp" alt="The final version: the gray pod and slim gray raceway, whose arm runs along the holder to the sleeve"/><p>4. The raceway alone.</p></div>
</figure>

<figure class="pair">
  <img src="/work/tpe-assets/battery-plate.webp" alt="The battery mounted on a printed plate next to the breadboard and Arduino, with a brass standoff marked"/>
  <img src="/work/tpe-assets/pod-side.webp" alt="The assembled pod from the side, showing the battery and board stacked behind the screen"/>
</figure>

<figure class="pair">
  <img src="/work/tpe-assets/exploded-b.webp" alt="All the parts laid out: the gray shell, the screen and board, the sleeve, the collar, and braided wire"/>
  <img src="/work/tpe-assets/pod-and-sleeve.webp" alt="The finished pod and raceway on a counter, screen reading 15 ft up, beside the printed sleeve"/>
</figure>

## On the wall

I left it running in my bathroom for a few days before filming, to see what real household numbers feel like. The screen shows feet up, the square count since it started, and the next stop.

<figure class="pair natural">
  <img src="/work/tpe-assets/wall-full-length.webp" alt="The full length on the wall: the pod at the top, the raceway down to the holder, and a roll of toilet paper on the bar"/>
  <img src="/work/tpe-assets/final-wall.webp" alt="The finished version in daylight: the gray pod showing 4 ft up above the holder and sleeve"/>
</figure>

<figure class="grid3">
  <div><img src="/work/tpe-assets/install-sleeve.webp" alt="Hands sliding the gray magnet sleeve into a new roll"/><p>The sleeve goes in the roll.</p></div>
  <div><img src="/work/tpe-assets/install-roll.webp" alt="Putting the roll back on the holder's bar"/><p>The roll goes on the bar.</p></div>
  <div><img src="/work/tpe-assets/install-seated.webp" alt="The roll seated on the holder under the screen"/><p>Nothing else changes.</p></div>
</figure>

<figure class="pair">
  <img src="/work/tpe-assets/close-4ft.webp" alt="Close-up of the screen at 4 ft up above the roll"/>
  <img src="/work/tpe-assets/close-10ft.webp" alt="Close-up of the screen at 10 ft up above the roll"/>
  <figcaption>4 ft up, then 10.</figcaption>
</figure>

## Reflection

**Leave things out.** The per-session trip summary was the first thing I cut. It was interesting data, and exactly the kind that makes someone feel watched.

**Calm by default.** E-ink only changes when it needs to, and never lights up. In a bathroom, that matters more than any feature.

**Building to learn CAD.** I used this sprint to learn Fusion. Most of what I know about tolerances came from this pod.

<figure class="embed"><iframe src="https://www.youtube-nocookie.com/embed/vQzPGvjoA7A?rel=0&modestbranding=1&playsinline=1" title="Toilet Paper Elevator, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
