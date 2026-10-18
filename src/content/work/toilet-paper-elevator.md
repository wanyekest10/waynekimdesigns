---
title: Toilet Paper Elevator
slug: toilet-paper-elevator
headline: "A small e-ink screen above the toilet paper holder that turns a household's toilet paper into an elevator ride past the world's landmarks."
context: "Personal project, 2026"
order: 1
year: "2026"
featured: true
label: "Physical computing and fabrication"
summary: "Toilet paper use, measured in landmark heights."
hero: "/work/tpe-assets/hero-wall.webp"
heroAlt: "Toilet Paper Elevator on a bathroom wall: a gray e-ink pod reading Ground floor, a slim raceway down to the holder, and a full roll on the bar"
tocLabels:
  "3 screens, 1 state machine": "Code & pixels"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
  - { label: "Why an elevator", to: "why-an-elevator" }
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

Most people in a home use toilet paper every day, and nobody ever sees how much. I wanted to explore making that constant, invisible habit visible, yet playful, in the one room where people least want to feel observed.

That set the rules early. The display had to be household-level and anonymous. It couldn't show sessions, single anyone out, or ask for attention. And it couldn't preach about sustainability, which would turn a curious object into a lecture.

<figure class="frame hiw"><video src="/work/tpe-assets/how-it-works.mp4" poster="/work/tpe-assets/how-it-works-poster.jpg" autoplay muted loop playsinline aria-label="A new roll goes on, the screen climbs from 4 ft to 44 ft, then arrives at the Hollywood Sign and moves on past the Statue of Liberty and the Eiffel Tower"></video><figcaption>Install, climb, arrive. A new roll goes on, the count climbs, and the screen announces each landmark it passes.</figcaption></figure>

## Why an elevator

The first version was a highway: a roll spins like a wheel, so every pull was distance driven from LA City Hall to the Santa Monica Pier. But one household moves slowly, and a trip measured in miles barely changes from week to week. Height works better, because feet move every day and the world is full of tall things people already know. So it climbs from the ground floor past eighteen landmarks, from the Hollywood Sign to the Eiffel Tower to the Burj Khalifa.

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

### 3D model

<figure class="v3d-fig wide">
  <div class="v3d" data-src="/work/tpe-assets/tpe.glb"><canvas aria-label="3D model of Toilet Paper Elevator. Drag to turn it, and use the slider to pull the parts apart."></canvas><p class="v3d-load">Loading the 3D model…</p><span class="v3d-part" hidden></span></div>
  <div class="v3d-ui">
    <div class="v3d-views" role="group" aria-label="View"><button type="button" data-view="whole" aria-pressed="true">Whole</button><button type="button" data-view="pod">Pod</button><button type="button" data-view="sensor">Sensor</button></div>
    <label class="v3d-slide"><span>Assembled</span><input class="v3d-explode" type="range" min="0" max="100" value="0" aria-label="Pull the parts apart" /><span>Apart</span></label>
  </div>
  <figcaption>Drag to turn it, pinch or scroll to zoom, and tap a part to see what it is. The shell, carrier, panel, raceway, finger, and sleeve come from the Fusion files; the screen, Arduino, and battery are stand-ins.</figcaption>
</figure>

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

### 3 screens, 1 state machine

The screen is a small state machine. It starts on G, climbs while nobody's looking, and flips to an arrival screen for one visit when the count passes a landmark.

<div class="flow" role="list" aria-label="Screen states">
  <div class="step"><span class="n">01</span><b>Start</b><small>G, ground floor. First stop, the Hollywood Sign.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Climbing</b><small>Feet up, with the stops behind and ahead.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Arriving</b><small>Passed a landmark. Shown for one visit.</small></div>
</div>
<p class="flow-note">↻ After an arrival, it goes back to climbing toward the next stop.</p>

When a visit ends, the code checks whether the climb passed a new landmark. If it did, that landmark gets the arrival screen for one visit, then it's back to climbing.

```cpp
void endSession() {
  stats.lifetimeMm += sessionMm;
  int passed = passedIndex(heightFt());
  if (passed > stats.lastShown) {   // a new landmark
    stats.arrivalIdx = passed;      // show the arrival
    stats.lastShown = passed;       // only once
  } else {
    stats.arrivalIdx = -1;          // back to climbing
  }
  saveStats();
  render();
}
```

### How the screens changed

I tested the first screens with people and iterated. The final version adds the stop you just passed, the squares and start date, and a city and height for each landmark. Landmarks people already know replaced the world's tallest buildings, and they read "ft tall" while your climb reads "ft up."

<figure class="pair natural">
  <img src="/work/tpe-assets/screen-early-climb.webp" alt="An early climbing screen on the bare e-paper module: 12,028 ft up, next stop Mount Fuji, 360 ft to go"/>
  <img src="/work/tpe-assets/screen-early-arrive.webp" alt="An early arrival screen: Now arriving, Motherland Monument, 335 ft up, up next Great Pyramid, stands at 455 ft"/>
  <figcaption>Before: early climbing and arrival screens on the bare module.</figcaption>
</figure>

<figure class="pair natural">
  <img src="/work/tpe-assets/screen-30ft.png" alt="The final climbing screen: 30 ft up, 91 squares since Oct 11, previous stop Ground floor, next stop Hollywood Sign, 45 ft tall"/>
  <img src="/work/tpe-assets/screen-arrive-hollywood.png" alt="The final arrival screen: Now arriving, Hollywood Sign, Los Angeles, USA, 45 ft tall. So far 45 ft up, next stop Christ the Redeemer"/>
  <figcaption>After: the final climbing and arrival screens. See every <a href="/work/tpe-assets/screens-climb-all.webp" target="_blank" rel="noopener">climbing screen</a> and <a href="/work/tpe-assets/screens-arrival-all.webp" target="_blank" rel="noopener">arrival screen</a>.</figcaption>
</figure>

## Building it

Three problems, in the order I hit them.

### 1. Counting the roll

I measured my own roll (300 squares of 100 mm, wound from a 64 mm radius down to a 21 mm core), and since each magnet is a quarter turn, the code shrinks the paper per pulse as the roll gets thinner. Tearing jerks the roll and adds phantom pulses, so each pulse is scaled down to match real pulls, and once a roll has turned past its full length the code assumes a new one went on.

```cpp
const float R_FULL_MM = 64.0;   // full roll, measured
const float R_CORE_MM = 21.0;   // empty tube, measured
const float COUNT_SCALE = 0.67; // tearing adds pulses

float mmForNextPulse() {
  float turns = stats.rollPulses / (float)MAGNETS;
  // the roll gets thinner as it turns
  float r = R_FULL_MM - turns * PAPER_THICKNESS_MM;
  if (r < R_CORE_MM) r = R_CORE_MM;
  return 2.0 * PI * r / MAGNETS;  // one quarter turn
}
```

<figure class="grid3">
  <div><img src="/work/tpe-assets/measure-tube.webp" alt="Calipers measuring the inside of a cardboard tube at 39 mm"/><p>Measuring the tube.</p></div>
  <div><video src="/work/tpe-assets/sensor-test.mp4" poster="/work/tpe-assets/sensor-test-poster.jpg" autoplay muted loop playsinline aria-label="A green LED blinking each time a magnet in the sleeve passes the sensor"></video><p>The first pulse: an LED blinks for each magnet.</p></div>
  <div><img src="/work/tpe-assets/parts-early.webp" alt="The e-paper module, breadboard, Arduino, and a tube with an orange printed insert holding magnets"/><p>The first parts on the bench.</p></div>
</figure>

### 2. The pod

I designed the pod in Fusion. Everything prints in gray. The LiPo sits trapped in a closed shell, and the display's own screws and brass standoffs hold it together.

<figure class="pair">
  <img src="/work/tpe-assets/fusion-shell.webp" alt="The pod shell in Fusion 360, shown see-through with the screen opening, screw bosses, and cable openings"/>
  <img src="/work/tpe-assets/fusion-standoff.webp" alt="Close-up of a printed boss with a hex pocket that traps a nut"/>
  <figcaption>The shell, see-through, and a hex pocket that traps each nut.</figcaption>
</figure>

<figure class="pair square">
  <img src="/work/tpe-assets/pod-side-view.webp" alt="The pod from the side, held in a hand: the back plate, the LiPo battery, the printed carrier, and the Arduino stacked between the shell layers"/>
  <img src="/work/tpe-assets/pod-open.webp" alt="The pod opened up: the e-paper screen tilted back, the Arduino on a breadboard on its printed carrier, the shell behind, and the magnet sleeve beside it"/>
  <figcaption>The stack from the side, battery behind the carrier, and the pod opened up.</figcaption>
</figure>

### 3. Iterating the wire

How do you get a wire from the holder to the screen without anything exposed in a bathroom? It took five tries. I placed the screen with paper and string first. Exposed jumpers worked but looked unfinished. A braided cord hid the wires, with a gray collar around the holder's arm to hold the sensor, but the cord drooped and the collar stuck out. A purple collar and raceway pinned everything flat to the wall. In the end the raceway's own arm could carry the sensor right up to the sleeve, so the collar wasn't needed at all. Easier to install, and calmer to look at.

<figure class="grid5">
  <div><img src="/work/tpe-assets/mock-paper.webp" alt="A paper rectangle taped to the wall with a string running down to the holder"/><p>1. Paper and string, to place the screen.</p></div>
  <div><img src="/work/tpe-assets/iter-1-exposed.webp" alt="The first version: the pod on the wall with loose orange and yellow jumper wires running to the holder"/><p>2. Exposed wiring.</p></div>
  <div><img src="/work/tpe-assets/iter-2-braided.webp" alt="The pod with a black braided cord looping down to a gray collar on the holder"/><p>3. A braided cord and a collar.</p></div>
  <div><img src="/work/tpe-assets/iter-3-purple-collar.webp" alt="A purple raceway down the wall into a purple collar around the holder's arm"/><p>4. A raceway and a purple collar.</p></div>
  <div><img src="/work/tpe-assets/iter-4-final.webp" alt="The final version: the gray pod and slim gray raceway, whose arm runs along the holder to the sleeve"/><p>5. The raceway alone.</p></div>
</figure>

<figure class="pair">
  <img src="/work/tpe-assets/arm-tip.webp" alt="Close-up of the raceway's arm along the holder, the sensor wires inside, ending at the sleeve's face where the magnets sit"/>
  <img src="/work/tpe-assets/fusion-tip.webp" alt="The tip of the raceway's arm in Fusion, see-through: the wire slots and the pocket for the A3144 Hall sensor"/>
  <figcaption>The arm at the magnets, and its tip in Fusion: slots for the three wires and a pocket for the sensor.</figcaption>
</figure>

## Installed

<figure class="grid3 tallnat">
  <div><img src="/work/tpe-assets/bts-counter.webp" alt="Everything on the counter, wired up: the pod reading 15 ft up, the gray raceway with the sensor wires running down it, and the magnet sleeve in hand"/><p>Every part, before it went up.</p></div>
  <div><img src="/work/tpe-assets/final-wall.webp" alt="The finished version in daylight: the gray pod showing 4 ft up above the holder and sleeve"/><p>The sleeve on the bar.</p></div>
  <div><img src="/work/tpe-assets/wall-full-length.webp" alt="The full length on the wall: the pod at the top, the raceway down to the holder, and a roll of toilet paper on the bar"/><p>On the wall, with a roll.</p></div>
</figure>

## Reflection

**Leave things out.** The per-session trip summary was the first thing I cut. It was interesting data, and exactly the kind that makes someone feel watched.

**Calm by default.** E-ink only changes when it needs to, and never lights up. In a bathroom, that matters more than any feature.

**Building to learn CAD.** I used this sprint to learn Fusion. Most of what I know about tolerances came from this pod.

<figure class="embed"><iframe src="https://www.youtube-nocookie.com/embed/vQzPGvjoA7A?rel=0&modestbranding=1&playsinline=1" title="Toilet Paper Elevator, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
