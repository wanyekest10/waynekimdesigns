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
hero: "/work/tpe-assets/demo-3x2-poster.jpg"
heroAlt: "The finished device on a bathroom wall: a gray e-ink screen reading 4 ft up, connected by a slim raceway to the toilet paper holder"
card: "/work/tpe-assets/card-wall.webp"
cardAlt: "The gray e-ink pod on a bathroom wall, a slim raceway running down to the toilet paper holder"
heroVideo: "/work/tpe-assets/demo-3x2.mp4"
heroPoster: "/work/tpe-assets/demo-3x2-poster.jpg"
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

The screen has two states. Most of the time it's climbing: one big number, feet up, and the landmarks behind and ahead. When the count passes a landmark, it switches to an arrival screen, with the name set large, where it is, and how tall it is. Seventeen landmarks in all, from the Hollywood Sign to the Burj Khalifa, and then the Moon.

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

<figure class="explode">
  <svg class="exploded" viewBox="-217 -308 416 444" role="img" aria-label="Exploded view of the pod: shell, e-paper screen, brass standoffs, Arduino on a printed plate, LiPo battery, and the raceway"><polygon class="x-batt l" points="-26.0,85.0 34.6,120.0 34.6,110.0 -26.0,75.0"/><polygon class="x-batt r" points="73.6,97.5 34.6,120.0 34.6,110.0 73.6,87.5"/><polygon class="x-batt t" points="13.0,52.5 73.6,87.5 34.6,110.0 -26.0,75.0"/><polygon class="x-plate l" points="-112.6,-5.0 43.3,85.0 43.3,80.0 -112.6,-10.0"/><polygon class="x-plate r" points="155.9,20.0 43.3,85.0 43.3,80.0 155.9,15.0"/><polygon class="x-plate t" points="0.0,-75.0 155.9,15.0 43.3,80.0 -112.6,-10.0"/><polygon class="x-bb l" points="-47.6,-27.5 30.3,17.5 30.3,9.5 -47.6,-35.5"/><polygon class="x-bb r" points="77.9,-10.0 30.3,17.5 30.3,9.5 77.9,-18.0"/><polygon class="x-bb t" points="0.0,-63.0 77.9,-18.0 30.3,9.5 -47.6,-35.5"/><polygon class="x-mkr l" points="16.5,25.5 66.7,54.5 66.7,51.5 16.5,22.5"/><polygon class="x-mkr r" points="89.2,41.5 66.7,54.5 66.7,51.5 89.2,38.5"/><polygon class="x-mkr t" points="39.0,9.5 89.2,38.5 66.7,51.5 16.5,22.5"/><line class="x-stand" x1="0.0" y1="-71.0" x2="0.0" y2="-151.0"/><line class="x-stand" x1="149.0" y1="15.0" x2="149.0" y2="-65.0"/><line class="x-stand" x1="-105.7" y1="-10.0" x2="-105.7" y2="-90.0"/><line class="x-stand" x1="43.3" y1="76.0" x2="43.3" y2="-4.0"/><polygon class="x-pcb l" points="-129.9,-90.0 43.3,10.0 43.3,6.0 -129.9,-94.0"/><polygon class="x-pcb r" points="173.2,-65.0 43.3,10.0 43.3,6.0 173.2,-69.0"/><polygon class="x-pcb t" points="0.0,-169.0 173.2,-69.0 43.3,6.0 -129.9,-94.0"/><polygon class="x-disp" points="3.5,-153.5 145.5,-71.5 43.3,-12.5 -98.7,-94.5"/><polygon class="x-race l" points="-200.9,-30.0 -190.5,-24.0 -190.5,-32.0 -200.9,-38.0"/><polygon class="x-race r" points="-43.3,-109.0 -190.5,-24.0 -190.5,-32.0 -43.3,-117.0"/><polygon class="x-race t" points="-53.7,-123.0 -43.3,-117.0 -190.5,-32.0 -200.9,-38.0"/><polygon class="x-shell l" points="-140.3,-165.0 43.3,-59.0 43.3,-105.0 -140.3,-211.0"/><polygon class="x-shell r" points="183.6,-140.0 43.3,-59.0 43.3,-105.0 183.6,-186.0"/><polygon class="x-shell t" points="0.0,-292.0 183.6,-186.0 43.3,-105.0 -140.3,-211.0"/><polygon class="x-win" points="1.7,-273.2 150.7,-187.2 43.3,-125.2 -105.7,-211.2"/><g class="x-num"><circle cx="70.6" cy="103.5" r="11"/><text x="70.6" y="107.5">5</text></g><g class="x-num"><circle cx="115.6" cy="50.5" r="11"/><text x="115.6" y="54.5">4</text></g><g class="x-num"><circle cx="165.0" cy="-25.0" r="11"/><text x="165.0" y="-21.0">3</text></g><g class="x-num"><circle cx="124.3" cy="-29.5" r="11"/><text x="124.3" y="-25.5">2</text></g><g class="x-num"><circle cx="129.4" cy="-122.5" r="11"/><text x="129.4" y="-118.5">1</text></g><g class="x-num"><circle cx="-152.0" cy="-41.0" r="11"/><text x="-152.0" y="-37.0">6</text></g></svg>
  <ol class="explode-key">
    <li>Shell, with the screen window</li>
    <li>4.2" e-paper screen</li>
    <li>Brass standoffs</li>
    <li>Arduino on a printed plate</li>
    <li>3.7V LiPo</li>
    <li>Raceway, down to the holder</li>
  </ol>
  <figcaption>The pod, pulled apart.</figcaption>
</figure>

<figure class="grid3">
  <div><img src="/work/tpe-assets/fusion-shell.webp" alt="The pod shell in Fusion 360, shown see-through with the screen opening, screw bosses, and cable openings"/><p>The shell, see-through.</p></div>
  <div><img src="/work/tpe-assets/fusion-wire.webp" alt="Wireframe view of the pod shell showing the internal standoffs and the board outline"/><p>Standoffs and cutouts.</p></div>
  <div><img src="/work/tpe-assets/fusion-standoff.webp" alt="Close-up of a printed boss with a hex pocket that traps a nut"/><p>A hex pocket traps each nut.</p></div>
</figure>

<figure class="frame"><img src="/work/tpe-assets/electronics.webp" alt="An earlier build before assembly: the gray shell, the e-paper screen showing the ground floor, the Arduino on a breadboard on its printed plate, the magnet sleeve, a collar, and a braided cable"/><figcaption>An earlier build, with a collar and a braided cord.</figcaption></figure>

The collar and the cord didn't last. Iterating on the wall showed me the raceway's arm could carry the sensor right up to the sleeve, so the collar wasn't needed. A printed raceway is also easier to hold in place, and calmer to look at than a black cord sticking out.

<figure class="pair natural">
  <img src="/work/tpe-assets/raceway-purple.webp" alt="The purple prototype raceway taped to the wall, running from a paper stand-in screen down to the holder, with the gray sleeve on the bar"/>
  <img src="/work/tpe-assets/final-wall.webp" alt="The finished version: the gray pod showing 4 ft up, a slim gray raceway down to the holder, and the sleeve with its magnets on the bar"/>
  <figcaption>The purple prototype, and the final raceway in gray.</figcaption>
</figure>

<figure class="frame"><img src="/work/tpe-assets/raceway-arm.webp" alt="Close-up of the raceway's arm along the holder, sensor wires inside, ending at the sleeve's face where four magnets sit"/><figcaption>The arm brings the sensor to the sleeve's four magnets.</figcaption></figure>

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
