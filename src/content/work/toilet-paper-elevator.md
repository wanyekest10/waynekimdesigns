---
title: Toilet Paper Elevator
slug: toilet-paper-elevator
headline: "A small e-ink screen above the toilet paper holder that turns a household's toilet paper into an elevator ride past the world's landmarks."
context: "Personal project, 2026"
order: 7
featured: false
label: "Physical computing and fabrication"
summary: "Toilet paper, measured in landmarks."
hero: "/work/tpe-assets/demo-3x2-poster.jpg"
heroAlt: "The finished device on a bathroom wall: a gray e-ink screen reading 4 ft up, connected by a slim raceway to the toilet paper holder"
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
  - { label: "Tools", value: "Arduino MKR WiFi 1010 · Hall effect sensor · 4.2\" e-paper · Fusion 360 · Prusa MK3S" }
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

## How it works

<div class="flow" role="list" aria-label="How Toilet Paper Elevator counts">
  <div class="step"><span class="n">01</span><b>Pull the paper</b><small>The roll spins on a printed sleeve.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Magnets pass a sensor</b><small>Four magnets in the sleeve, one Hall sensor on the holder.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">03</span><b>Squares become feet</b><small>Each 100 mm square adds to one running climb.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">04</span><b>The screen catches up</b><small>Slowly, the way e-ink does.</small></div>
</div>
<p class="flow-note">↻ The climb never resets. Every roll in the house adds to the same ride.</p>

<div class="sys" aria-label="Toilet Paper Elevator system">
  <div class="col"><span class="k">Inputs</span><span class="part">Printed sleeve<small>Four magnets sealed inside the print.</small></span><span class="part">Hall effect sensor<small>On a collar at the holder's elbow.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part focal">Arduino MKR WiFi 1010<small>Counts rotations and converts them to feet.</small></span><span class="part">3.7V LiPo<small>Charged through the board.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">4.2" e-paper screen<small>Height, square count, next stop.</small></span></div>
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

I designed the pod in Fusion, along with the three wire-route pieces: a raceway down from the shell, a quarter-turn around the holder's wall plate, and the collar. Everything prints in gray. The LiPo sits trapped in a closed shell, and the display's own screws and brass standoffs hold it together.

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

<figure class="frame"><img style="object-position: center 35%" src="/work/tpe-assets/installed.webp" alt="The finished device on the wall: 4 ft up, 12 squares since Sept 30, previous stop Ground floor, next stop Hollywood Sign"/></figure>

## Reflection

**Leave things out.** The per-session trip summary was the first thing I cut. It was interesting data, and exactly the kind that makes someone feel watched.

**Calm by default.** E-ink only changes when it needs to, and never lights up. In a bathroom, that matters more than any feature.

**Building to learn CAD.** I used this sprint to learn Fusion. Most of what I know about tolerances came from this pod.

<figure class="embed"><iframe src="https://www.youtube-nocookie.com/embed/vQzPGvjoA7A?rel=0&modestbranding=1&playsinline=1" title="Toilet Paper Elevator, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
