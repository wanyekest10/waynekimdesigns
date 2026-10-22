---
title: Disco Never Died
slug: disco-never-died
headline: "A disco ball made of code that pulses with the sound in the room, inspired by Soul Train and built in Processing."
context: "CIID, 2024"
order: 2
year: "2024"
featured: true
label: "Creative coding and VJing"
summary: "A code-made disco ball that pulses with sound."
card: "/work/disco-assets/card-still.webp"
cardVideo: "/work/disco-assets/card-loop.mp4"
hero: "/work/disco-assets/card.webp"
heroAlt: "A silver disco ball floating over layered red, yellow, and blue grids of tiny squares"
hideHero: true
short:
  - { lead: "The question.", text: "How can I help bring back disco? And how do you code a disco ball?" }
  - { lead: "What I built.", text: "A disco ball and a grid of colorful shapes that grow and glow with the room's volume. Try it on this page: it starts flat, then opens up into 3D." }
  - { lead: "What I learned.", text: "Making something 2D, then evolving it into 3D and back, is fun. Three simple squares can go a long way: they got me into VJing." }
skills: [Creative coding, Interaction design, Prototyping]
contributions:
  - { skill: "Creative coding", text: "Built the dance floor grid, then the disco ball from squares and sine and cosine, in Processing" }
  - { skill: "Interaction design", text: "Made the room's sound drive everything: louder room, bigger squares" }
  - { skill: "Prototyping", text: "Ported it to the browser so anyone can try it with a beat or their mic" }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Course", value: "Introduction to Programming" }
  - { label: "Faculty", value: "Dennis Paul · Jacob Remin" }
  - { label: "Year", value: "2024" }
  - { label: "Tools", value: "Processing · PeasyCam · Microphone" }
---

## The idea

<figure class="embed vimeo-live vl-wide"><div class="vl-wrap"><iframe src="https://player.vimeo.com/video/1041186030?background=1&autoplay=1&loop=1&muted=1&dnt=1" title="Disco Never Died, video" allow="autoplay; fullscreen; picture-in-picture"></iframe><button class="vl-sound" type="button" aria-pressed="false">Sound off</button></div><figcaption>Turn the sound on: it's what drives the visuals.</figcaption></figure>

Two references: the look of Soul Train, and the way a disco ball turns one beam of light into a whole room of it. I wanted something similar for sound. Sound, light, and movement in one piece, where the room's noise is what makes it go.

## Try it

<figure class="embed live"><iframe src="/play/disco-live/" title="Disco Never Died, live: play a beat or turn on your mic, and drag to orbit" loading="lazy" allow="microphone; autoplay"></iframe><figcaption>The same sketch, ported to run in your browser. Play a beat, or turn on your mic and make some noise. Your mic's sound stays in your browser.</figcaption></figure>

## How it works

<div class="flow" role="list" aria-label="How sound becomes visuals">
  <div class="step"><span class="n">01</span><b>Listen</b><small>A microphone picks up the sound in the room.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Measure</b><small>Processing measures how loud it is, moment to moment.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Pulse</b><small>The disco ball and the grid grow and brighten with the volume.</small></div>
</div>
<p class="flow-note">↻ Drag to orbit around it in 3D.</p>

There are two layers. A sphere of shimmering squares, the disco ball, swells and brightens as it gets louder. Below it, layered grids in Soul Train colors react to the same sound.

<figure class="wide"><img src="/work/disco-assets/renders.webp" alt="Three views of the piece: a silver disco ball over layered red, yellow, and blue grids of tiny squares, seen from different angles"/><figcaption>The disco ball over layered grids, from three angles.</figcaption></figure>

<figure class="wide"><img src="/work/disco-assets/projected.webp" alt="The visuals projected large on a courtyard wall at night while people gather around a table of equipment"/></figure>

### Building the ball

The disco ball is squares and a bit of math. The squares came first: my first build was a flat grid of them, the dance floor. Then I pushed myself to figure out the ball, and realized I didn't need new shapes, just math. I took the same kind of grid, 70 by 70, and gave each square two angles: how far around the ball it sits, and how far from the top to the bottom. Sine and cosine turn those two angles into a point on a sphere, so each row of the grid wraps into a ring. When the room gets louder, every square gets bigger, and the ball shimmers.

<figure class="wide"><img class="zoom" src="/work/disco-assets/how-the-ball-is-built.svg" alt="Three steps: a flat grid of squares; each square gets two angles, one around the ball and one from top to bottom, turned into a point with x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ; and the result, a ball of squares where one highlighted row of the grid has become one ring."/><figcaption>Same squares, new positions. The blue row in the grid is the blue ring on the ball.<span class="zoom-hint"> Tap to enlarge.</span></figcaption></figure>

## Early versions

It started as a grid of plain white squares. Then each square split into red, green, and blue, pulling apart and coming back together with the sound.

<figure class="pillar has-sound"><div class="vs-wrap"><video src="/work/disco-assets/early-laptop.mp4" poster="/work/disco-assets/early-laptop-poster.jpg" autoplay muted loop playsinline aria-label="The early version on a laptop: a grid of white dots splits into red, green, and blue as the volume goes up and fingers snap near the mic"></video><button class="vl-sound" type="button" aria-pressed="false">Sound off</button></div><figcaption>White squares that split into red, green, and blue with the sound.</figcaption></figure>


## What came next

I love music, and learning to code this disco ball is what opened up VJing for me: making visuals live with the sound, to tell a story and create an atmosphere in the room.

<figure class="grid3 tall vj">
  <img src="/work/disco-assets/vj-impactminds-booth.webp" alt="Wayne at the laptop and mixer, lit up by warm orange speckled visuals projected across the wall and over him"/>
  <video src="/work/disco-assets/vj-impactminds-tunnel.mp4" poster="/work/disco-assets/vj-impactminds-tunnel-poster.jpg" autoplay muted loop playsinline aria-label="A crowd dancing under a vaulted ceiling while swirling blue-white visuals fill the arch behind the DJ"></video>
  <video src="/work/disco-assets/vj-impactminds-crowd.mp4" poster="/work/disco-assets/vj-impactminds-crowd-poster.jpg" autoplay muted loop playsinline aria-label="Silhouettes of people dancing in front of an arch filled with red, green, and blue geometric visuals"></video>
  <figcaption>VJing at CIID ImpactMinds, March 2026.</figcaption>
</figure>

Special thanks to [Jose Chavarría](https://www.ciid.dk/community/jose-chavarria) for mentoring me on VJing in Resolume and live setup.

<figure class="pair-fit" style="grid-template-columns: 0.562fr 0.75fr 1.328fr">
  <img src="/work/disco-assets/jose-mount.webp" alt="Jose reaching up to fix a wooden projector mount to the beam under the stone vaulted ceiling"/>
  <img src="/work/disco-assets/jose-projector.webp" alt="Jose on a ladder under a stone vaulted ceiling, mounting a projector and throwing up a rock-on hand sign"/>
  <img src="/work/disco-assets/jose-mapping.webp" alt="A glowing blue grid projection-mapped onto the curved stone wall of the vaulted room, with a person standing inside it"/>
  <figcaption>Setting up with Jose: building the mount, hanging the projector, then mapping a grid to the curved stone walls in the basement of the <a href="https://monasterodiastino.it/" target="_blank" rel="noopener">Monastero di Astino</a>.</figcaption>
</figure>
