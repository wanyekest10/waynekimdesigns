---
title: Toilet Paper Elevator
slug: toilet-paper-elevator
headline: "A small e-ink screen above the toilet paper holder that turns a household's toilet paper into an elevator ride past the world's landmarks."
context: "Personal project, 2026"
order: 2
year: "2026"
featured: true
label: "Physical computing and fabrication"
summary: "Toilet paper use, measured in landmarks."
cardVideo: "/work/tpe-assets/card-loop.mp4"
hero: "/work/tpe-assets/hero-wall.webp"
card: "/work/tpe-assets/card-still.webp"
heroVideo: "/work/tpe-assets/how-it-works.mp4"
heroPoster: "/work/tpe-assets/how-it-works-poster.jpg"
heroAlt: "A new roll goes on, the e-ink screen climbs from 4 ft to 44 ft, then arrives at the Hollywood Sign and moves on past the Statue of Liberty and the Eiffel Tower"
tocLabels:
  "3 screens, 1 state machine": "Code & pixels"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
  - { label: "Why an elevator", to: "why-an-elevator" }
short:
  - { lead: "The question.", text: "How do you make an invisible, private, slightly taboo habit visible, without making anyone in the house feel watched?" }
  - { lead: "What I built.", text: "A sleeve inside the roll counts every square. A quiet e-ink screen above the holder turns the total into a climb: 4 ft up, next stop, the Hollywood Sign." }
skills: [Physical computing, Fabrication, Interaction design]
contributions:
  - { skill: "Physical computing", text: "A sleeve with a hall effect sensor that counts every square, on an Arduino" }
  - { skill: "Fabrication", text: "Modeled the sleeve and screen mount in Fusion 360 and printed them on a Prusa" }
  - { skill: "Interaction design", text: "Designed the state machine and screens that turn the count into an elevator climb past landmarks around the world" }
facts:
  - { label: "Project", value: "Personal project" }
  - { label: "Role", value: "Designer and builder, solo" }
  - { label: "Duration", value: "14-day sprint, 2026" }
  - { label: "Stack", value: "Arduino MKR WiFi 1010 · Hall effect sensor · Waveshare 4.2\" e-paper · 3.7V LiPo" }
  - { label: "Tools", value: "Arduino IDE · Fusion 360 · Prusa MK3S" }
---
## A daily habit nobody in the house ever sees

Everyone in a home uses toilet paper every day, and nobody sees how much. I wanted to make that habit visible and a little playful, in the one room where people least want to feel observed.

That set the rules early. The display had to count for the whole household, stay anonymous, and never single anyone out or ask for attention. It also couldn't preach about sustainability, because that would turn a curious object into a lecture.

<div id="why-an-elevator" style="scroll-margin-top:88px"></div>

## Measuring the roll in feet climbed

The first version was a highway: each pull was distance driven from LA City Hall to the Santa Monica Pier. One household moves slowly, though, and a trip measured in miles barely changed from week to week.

Height moves every day, and the world is full of tall things people already know. So the screen climbs from the ground floor past eighteen landmarks, from the Hollywood Sign to the Eiffel Tower to the Burj Khalifa.

<div id="how-it-works" style="scroll-margin-top:88px"></div>

## Magnets in the roll count every square

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
  <figcaption>Each magnet that passes the sensor counts a square, and squares become feet climbed.</figcaption>
</figure>
<script src="/work/tpe-assets/mechanism.js" defer></script>

A sleeve inside the roll holds four magnets, and a Hall effect sensor pulses each time one goes by. An Arduino counts the squares, works out the height, and draws the screen.

<figure class="v3d-fig wide">
  <div class="v3d" data-src="/work/tpe-assets/tpe.glb"><canvas aria-label="3D model of Toilet Paper Elevator. Drag to turn it, and use the slider to pull the parts apart."></canvas><p class="v3d-load">Loading the 3D model…</p><span class="v3d-part" hidden></span></div>
  <div class="v3d-ui">
    <div class="v3d-views" role="group" aria-label="View"><button type="button" data-view="whole" aria-pressed="true">Whole</button><button type="button" data-view="pod">Pod</button><button type="button" data-view="sensor">Sensor</button></div>
    <label class="v3d-slide"><span>Assembled</span><input class="v3d-explode" type="range" min="0" max="100" value="0" aria-label="Pull the parts apart" /><span>Apart</span></label>
  </div>
  <figcaption>Drag to turn the model, pull it apart, and tap any part to name it.</figcaption>
</figure>

<div class="hub" aria-label="Wiring: the Arduino MKR WiFi 1010 connects to a LiPo battery, the e-paper screen, and the Hall effect sensor">
  <div class="hub-part" style="grid-row:1"><b>3.7V LiPo</b><small>Power, so it runs without a cable</small></div>
  <div class="hub-link" style="grid-row:1"><span>Power</span></div>
  <div class="hub-part" style="grid-row:2"><b>Waveshare 4.2" e-paper</b><small>The screen</small></div>
  <div class="hub-link" style="grid-row:2"><span>SPI</span></div>
  <div class="hub-part focal" style="grid-row:3"><b>Hall effect sensor</b><small>Pulses each time a magnet passes</small></div>
  <div class="hub-link focal" style="grid-row:3"><span>Pulse</span></div>
  <div class="hub-board"><b>Arduino MKR WiFi 1010</b><small>Counts squares, works out the height, and draws the screen</small></div>
</div>

The slow e-paper refresh is on purpose. The number never flashes or animates while you're in the room, and it's just different the next time you look.

## Three screens that update while nobody is looking

The screen is a small state machine. It starts on G, climbs while nobody's looking, and shows an arrival screen for one visit when the count passes a landmark.

<div class="flow" role="list" aria-label="Screen states">
  <div class="step"><span class="n">01</span><b>Start</b><small>G, ground floor. First stop, the Hollywood Sign.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Climbing</b><small>Feet up, with the stops behind and ahead.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Arriving</b><small>Passed a landmark. Shown for one visit.</small></div>
</div>
<p class="flow-note">↻ After an arrival, it goes back to climbing toward the next stop.</p>

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

### What changed after testing the screens with people

I tested the first screens with people and iterated. The final version adds the stop you just passed, the squares and start date, and a city and height for each landmark.

Landmarks people already know replaced the world's tallest buildings.

<figure class="ba">
  <div class="ba-col">
    <span class="ba-tag">Before</span>
    <div class="ba-before" aria-label="Early screens on the bare e-paper module">
      <img class="on" src="/work/tpe-assets/screen-early-climb-orange.webp" alt="An early climbing screen in an orange printed frame: 26 ft up, next stop Hollywood Sign, 19 ft to go, 80 squares so far"/>
      <img src="/work/tpe-assets/screen-early-arrive.webp" alt="An early arrival screen: Now arriving, Motherland Monument, 335 ft up, up next Great Pyramid"/>
    </div>
    <p class="ba-note">Early screens on the bare module, before testing with people.</p>
  </div>
  <div class="ba-col">
    <span class="ba-tag">After</span>
    <div class="flip" data-frames='[{"src": "/work/tpe-assets/screens/climb-00.webp", "kind": "climb", "label": "Ground floor"}, {"src": "/work/tpe-assets/screens/climb-01.webp", "kind": "climb", "label": "Climbing to Hollywood Sign"}, {"src": "/work/tpe-assets/screens/arrival-00.webp", "kind": "arrival", "label": "Now arriving: Hollywood Sign"}, {"src": "/work/tpe-assets/screens/climb-02.webp", "kind": "climb", "label": "Climbing to Christ the Redeemer"}, {"src": "/work/tpe-assets/screens/arrival-01.webp", "kind": "arrival", "label": "Now arriving: Christ the Redeemer"}, {"src": "/work/tpe-assets/screens/climb-03.webp", "kind": "climb", "label": "Climbing to Colosseum"}, {"src": "/work/tpe-assets/screens/arrival-02.webp", "kind": "arrival", "label": "Now arriving: Colosseum"}, {"src": "/work/tpe-assets/screens/climb-04.webp", "kind": "climb", "label": "Climbing to Leaning Tower of Pisa"}, {"src": "/work/tpe-assets/screens/arrival-03.webp", "kind": "arrival", "label": "Now arriving: Leaning Tower of Pisa"}, {"src": "/work/tpe-assets/screens/climb-05.webp", "kind": "climb", "label": "Climbing to Taj Mahal"}, {"src": "/work/tpe-assets/screens/arrival-04.webp", "kind": "arrival", "label": "Now arriving: Taj Mahal"}, {"src": "/work/tpe-assets/screens/climb-06.webp", "kind": "climb", "label": "Climbing to Statue of Liberty"}, {"src": "/work/tpe-assets/screens/arrival-05.webp", "kind": "arrival", "label": "Now arriving: Statue of Liberty"}, {"src": "/work/tpe-assets/screens/climb-07.webp", "kind": "climb", "label": "Climbing to Big Ben"}, {"src": "/work/tpe-assets/screens/arrival-06.webp", "kind": "arrival", "label": "Now arriving: Big Ben"}, {"src": "/work/tpe-assets/screens/climb-08.webp", "kind": "climb", "label": "Climbing to Motherland Monument"}, {"src": "/work/tpe-assets/screens/arrival-07.webp", "kind": "arrival", "label": "Now arriving: Motherland Monument"}, {"src": "/work/tpe-assets/screens/climb-09.webp", "kind": "climb", "label": "Climbing to Great Pyramid of Giza"}, {"src": "/work/tpe-assets/screens/arrival-08.webp", "kind": "arrival", "label": "Now arriving: Great Pyramid of Giza"}, {"src": "/work/tpe-assets/screens/climb-10.webp", "kind": "climb", "label": "Climbing to Washington Monument"}, {"src": "/work/tpe-assets/screens/arrival-09.webp", "kind": "arrival", "label": "Now arriving: Washington Monument"}, {"src": "/work/tpe-assets/screens/climb-11.webp", "kind": "climb", "label": "Climbing to Space Needle"}, {"src": "/work/tpe-assets/screens/arrival-10.webp", "kind": "arrival", "label": "Now arriving: Space Needle"}, {"src": "/work/tpe-assets/screens/climb-12.webp", "kind": "climb", "label": "Climbing to Golden Gate Bridge"}, {"src": "/work/tpe-assets/screens/arrival-11.webp", "kind": "arrival", "label": "Now arriving: Golden Gate Bridge"}, {"src": "/work/tpe-assets/screens/climb-13.webp", "kind": "climb", "label": "Climbing to Eiffel Tower"}, {"src": "/work/tpe-assets/screens/arrival-12.webp", "kind": "arrival", "label": "Now arriving: Eiffel Tower"}, {"src": "/work/tpe-assets/screens/climb-14.webp", "kind": "climb", "label": "Climbing to Empire State Building"}, {"src": "/work/tpe-assets/screens/arrival-13.webp", "kind": "arrival", "label": "Now arriving: Empire State Building"}, {"src": "/work/tpe-assets/screens/climb-15.webp", "kind": "climb", "label": "Climbing to One World Trade Center"}, {"src": "/work/tpe-assets/screens/arrival-14.webp", "kind": "arrival", "label": "Now arriving: One World Trade Center"}, {"src": "/work/tpe-assets/screens/climb-16.webp", "kind": "climb", "label": "Climbing to Lotte World Tower"}, {"src": "/work/tpe-assets/screens/arrival-15.webp", "kind": "arrival", "label": "Now arriving: Lotte World Tower"}, {"src": "/work/tpe-assets/screens/climb-17.webp", "kind": "climb", "label": "Climbing to Shanghai Tower"}, {"src": "/work/tpe-assets/screens/arrival-16.webp", "kind": "arrival", "label": "Now arriving: Shanghai Tower"}, {"src": "/work/tpe-assets/screens/climb-18.webp", "kind": "climb", "label": "Climbing to Burj Khalifa"}, {"src": "/work/tpe-assets/screens/arrival-17.webp", "kind": "arrival", "label": "Now arriving: Burj Khalifa"}, {"src": "/work/tpe-assets/screens/climb-19.webp", "kind": "climb", "label": "Climbing to the Moon"}]'>
      <div class="flip-screen"><img src="/work/tpe-assets/screens/climb-00.webp" alt="The final screens, starting at the ground floor" /></div>
      <input class="flip-range" type="range" min="0" value="0" step="1" aria-label="Ride the climb, ground floor to the Burj Khalifa" />
      <p class="flip-read"><b></b><span></span></p>
    </div>
  </div>
</figure>

## Counting a roll that gets thinner as it turns

I measured my own roll: 300 squares of 100 mm, wound from a 64 mm radius down to a 21 mm core. Each magnet is a quarter turn, so the code shrinks the paper per pulse as the roll gets thinner.

Tearing jerks the roll and adds phantom pulses, so each pulse is scaled down to match real pulls. Once a roll has turned past its full length, the code assumes a new one went on.

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
  <div><img src="/work/tpe-assets/measure-tube.webp" alt="Calipers measuring the inside of a cardboard tube at 39 mm"/><p>Measuring the inside of the tube the sleeve fits into.</p></div>
  <div><video src="/work/tpe-assets/sensor-test.mp4" poster="/work/tpe-assets/sensor-test-poster.jpg" autoplay muted loop playsinline aria-label="A green LED blinking each time a magnet in the sleeve passes the sensor"></video><p>First test: an LED blinks each time a magnet passes the sensor.</p></div>
  <div><img src="/work/tpe-assets/parts-early.webp" alt="The e-paper module, breadboard, Arduino, and a tube with an orange printed insert holding magnets"/><p>The first parts on the bench: screen, Arduino, and magnet insert.</p></div>
</figure>

I designed the pod in Fusion and printed everything in gray. The LiPo sits trapped in a closed shell, and the display's own screws and brass standoffs hold it together.

<figure class="pair">
  <img src="/work/tpe-assets/fusion-shell.webp" alt="The pod shell in Fusion 360, shown see-through with the screen opening, screw bosses, and cable openings"/>
  <img src="/work/tpe-assets/fusion-standoff.webp" alt="Close-up of a printed boss with a hex pocket that traps a nut"/>
  <figcaption>The pod shell in Fusion, with a hex pocket that traps each nut.</figcaption>
</figure>

<figure class="pair square">
  <img src="/work/tpe-assets/pod-side-view.webp" alt="The pod from the side, held in a hand: the back plate, the LiPo battery, the printed carrier, and the Arduino stacked between the shell layers"/>
  <img src="/work/tpe-assets/pod-open.webp" alt="The pod opened up: the e-paper screen tilted back, the Arduino on a breadboard on its printed carrier, the shell behind, and the magnet sleeve beside it"/>
  <figcaption>Battery, carrier, and Arduino stack inside the pod, shown from the side and opened.</figcaption>
</figure>

## Five tries to hide the wire in a bathroom

Getting a wire from the holder to the screen with nothing exposed took five tries. Exposed jumpers worked but looked unfinished.

A braided cord hid the wires, with a gray collar on the holder's arm to hold the sensor, but the cord drooped and the collar stuck out. A purple collar and raceway then pinned everything flat to the wall.

In the end, the raceway's own arm could carry the sensor right up to the sleeve, so I dropped the collar. That made it easier to install and calmer to look at.

<figure class="grid5">
  <div><img src="/work/tpe-assets/mock-paper.webp" alt="A paper rectangle taped to the wall with a string running down to the holder"/><p>1. Paper and string to find where the screen goes.</p></div>
  <div><img src="/work/tpe-assets/iter-1-exposed.webp" alt="The first version: the pod on the wall with loose orange and yellow jumper wires running to the holder"/><p>2. Exposed jumpers worked but looked unfinished.</p></div>
  <div><img src="/work/tpe-assets/iter-2-braided.webp" alt="The pod with a black braided cord looping down to a gray collar on the holder"/><p>3. A braided cord and collar, but the cord drooped.</p></div>
  <div><img src="/work/tpe-assets/iter-3-purple-collar.webp" alt="A purple raceway down the wall into a purple collar around the holder's arm"/><p>4. A raceway and purple collar held everything flat.</p></div>
  <div><img src="/work/tpe-assets/iter-4-final.webp" alt="The final version: the gray pod and slim gray raceway, whose arm runs along the holder to the sleeve"/><p>5. The raceway alone carries the sensor to the sleeve.</p></div>
</figure>

<figure class="pair">
  <img src="/work/tpe-assets/arm-tip.webp" alt="Close-up of the raceway's arm along the holder, the sensor wires inside, ending at the sleeve's face where the magnets sit"/>
  <img src="/work/tpe-assets/fusion-tip.webp" alt="The tip of the raceway's arm in Fusion, see-through: the wire slots and the pocket for the A3144 Hall sensor"/>
  <figcaption>The arm's tip holds three wires and the sensor right at the magnets.</figcaption>
</figure>

<figure class="grid3 tallnat">
  <div><img src="/work/tpe-assets/bts-counter.webp" alt="Everything on the counter, wired up: the pod reading 15 ft up, the gray raceway with the sensor wires running down it, and the magnet sleeve in hand"/><p>Every part wired up on the counter before it went on the wall.</p></div>
  <div><img src="/work/tpe-assets/final-wall.webp" alt="The finished version in daylight: the gray pod showing 4 ft up above the holder and sleeve"/><p>Installed, the pod reads 4 ft up above the sleeve.</p></div>
  <div><img src="/work/tpe-assets/wall-full-length.webp" alt="The full length on the wall: the pod at the top, the raceway down to the holder, and a roll of toilet paper on the bar"/><p>The full install: pod, raceway, and a roll on the bar.</p></div>
</figure>

## Visitors got curious and started talking

Visitors who used it got curious about it. It led to talk about how much a household goes through in a year, and whether we should all get bidets.

The first thing I cut was a per-session trip summary. It was interesting data, and exactly the kind that makes someone feel watched.

I also used this sprint to learn Fusion, and most of what I know about tolerances came from this pod.

It's one of a few calm tech prototypes I'm building, along with [room_tone](/work/room-tone/) and [Linee](/work/linee/), where it started.

<figure class="embed"><iframe src="https://www.youtube-nocookie.com/embed/vQzPGvjoA7A?rel=0&modestbranding=1&playsinline=1" title="Toilet Paper Elevator, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
