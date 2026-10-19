---
title: Disco Never Died
slug: disco-never-died
headline: "A disco ball made of code that pulses with the sound in the room, inspired by Soul Train and built in Processing."
context: "CIID, 2024"
order: 12
year: "2024"
featured: false
listIn: experiments
label: "Creative coding and sound"
summary: "A code-made disco ball that pulses with sound."
hero: "/work/disco-assets/card.webp"
heroAlt: "A silver disco ball floating over layered red, yellow, and blue grids of tiny squares"
hideHero: true
short:
  - { lead: "The question.", text: "Can I help bring back a little Soul Train, turning a room's sound into something you can see and dance inside? And how do you code a disco ball?" }
  - { lead: "What I built.", text: "A disco ball and a grid of colorful shapes that grow and glow with the room's volume. Try it on this page: it starts flat, then opens up into 3D." }
  - { lead: "What I learned.", text: "Making something 2D, then evolving it into 3D and back, is fun. And three simple squares, red, green, and blue, can go a long way." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Course", value: "Introduction to Programming" }
  - { label: "Faculty", value: "Dennis Paul · Jacob Remin" }
  - { label: "Year", value: "2024" }
  - { label: "Team", value: "Solo" }
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

The disco ball is squares and a bit of math. I started with a flat grid of squares, 70 by 70. Then I gave each square two angles: how far around the ball it sits, and how far from the top to the bottom. Sine and cosine turn those two angles into a point on a sphere, so each row of the grid wraps into a ring. When the room gets louder, every square gets bigger, and the ball shimmers.

<figure class="wide"><picture><source media="(max-width: 640px)" srcset="/work/disco-assets/how-the-ball-is-built-stacked.svg"/><img src="/work/disco-assets/how-the-ball-is-built.svg" alt="Three steps: a flat grid of squares; each square gets two angles, one around the ball and one from top to bottom, turned into a point with x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ; and the result, a ball of squares where one highlighted row of the grid has become one ring."/></picture><figcaption>Same squares, new positions. The blue row in the grid is the blue ring on the ball.</figcaption></figure>

## Early versions

It started as a grid of plain white squares. Then each square split into red, green, and blue, pulling apart and coming back together with the sound.

<figure class="pillar has-sound"><div class="vs-wrap"><video src="/work/disco-assets/early-laptop.mp4" poster="/work/disco-assets/early-laptop-poster.jpg" autoplay muted loop playsinline aria-label="The early version on a laptop: a grid of white dots splits into red, green, and blue as the volume goes up and fingers snap near the mic"></video><button class="vl-sound" type="button" aria-pressed="false">Sound off</button></div><figcaption>White squares that split into red, green, and blue with the sound.</figcaption></figure>


## What came next

I love music, and learning to code this disco ball is what opened up VJing for me: making visuals live, in the room, with the sound.

<figure class="grid3 tall vj">
  <img src="/work/disco-assets/vj-impactminds-booth.webp" alt="Wayne at the laptop and mixer, lit up by warm orange speckled visuals projected across the wall and over him"/>
  <video src="/work/disco-assets/vj-impactminds-tunnel.mp4" poster="/work/disco-assets/vj-impactminds-tunnel-poster.jpg" autoplay muted loop playsinline aria-label="A crowd dancing under a vaulted ceiling while swirling blue-white visuals fill the arch behind the DJ"></video>
  <video src="/work/disco-assets/vj-impactminds-crowd.mp4" poster="/work/disco-assets/vj-impactminds-crowd-poster.jpg" autoplay muted loop playsinline aria-label="Silhouettes of people dancing in front of an arch filled with red, green, and blue geometric visuals"></video>
  <figcaption>VJing at CIID ImpactMinds, March 2026.</figcaption>
</figure>

Special thanks to [Jose Chavarría](https://www.ciid.dk/community/jose-chavarria) for mentoring me on VJing in Resolume and live setup.
