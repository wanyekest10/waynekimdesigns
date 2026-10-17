---
title: Disco Never Died
slug: disco-never-died
headline: "A disco ball made of code that pulses with the sound in the room, inspired by Soul Train and built in Processing."
context: "CIID, 2024"
order: 12
featured: false
listIn: experiments
label: "Creative coding and sound"
summary: "A code-made disco ball that pulses with sound."
hero: "/work/disco-assets/early-color.webp"
heroAlt: "An early version on a laptop: rows of red, green, and blue squares, with a hand reaching toward the screen"
hideHero: true
short:
  - { lead: "The question.", text: "Can you watch sound? I wanted to turn the noise in a room into something you could see and move around in, with the look of Soul Train-era disco." }
  - { lead: "What I built.", text: "A microphone listens to how loud the room is. A disco ball made of small squares, and a grid of colorful shapes, grow and brighten with it. Drag, and you can orbit around the whole thing in 3D." }
  - { lead: "What I learned.", text: "One simple input, loudness, was enough to make it feel alive. The work was in how it mapped to size, brightness, and color." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Course", value: "Introduction to Programming" }
  - { label: "Year", value: "2024" }
  - { label: "Team", value: "Solo" }
  - { label: "Tools", value: "Processing · PeasyCam · Microphone" }
---

## The idea

Two references: the look of Soul Train, and the way a disco ball turns one beam of light into a whole room of it. I wanted something similar for sound. Sound, light, and movement in one piece, where the room's noise is what makes it go.

## How it works

<div class="flow" role="list" aria-label="How sound becomes visuals">
  <div class="step"><span class="n">01</span><b>Listen</b><small>A microphone picks up the sound in the room.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Measure</b><small>Processing measures how loud it is, moment to moment.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Pulse</b><small>The disco ball and the grid grow and brighten with the volume.</small></div>
</div>
<p class="flow-note">↻ Drag to orbit around it in 3D.</p>

There are two layers. A sphere of shimmering squares, the disco ball, swells and brightens as it gets louder. Behind it, a grid of rectangles and circles in Soul Train colors reacts to the same sound.

## Early versions

It started as a grid of plain white squares, then got color: red, green, and blue squares that shifted with the sound.

<figure class="pair tall">
  <img src="/work/disco-assets/early-white.webp" alt="The first version: a grid of small white squares on a dark screen"/>
  <img src="/work/disco-assets/early-color.webp" alt="A later version on a laptop: rows of red, green, and blue squares, with a hand reaching toward the screen"/>
  <figcaption>First white squares, then color.</figcaption>
</figure>

<figure class="embed"><iframe src="https://player.vimeo.com/video/1041186030?dnt=1&title=0&byline=0&portrait=0" title="Disco Never Died, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>

## What came next

I love music, and this project is what opened up VJing for me: making visuals live, in the room, with the sound. From Processing I moved to TouchDesigner. VJing will get its own experiment.

<figure class="pair tall">
  <img src="/work/disco-assets/vj-live.webp" alt="Wayne at a laptop on a stand, playing visuals at a live event while people sit on the floor in front"/>
  <img src="/work/disco-assets/touchdesigner.webp" alt="A TouchDesigner project on a laptop: a node network and an audio waveform beside blue, glitchy square patterns"/>
  <figcaption>Playing visuals live, and building them in TouchDesigner.</figcaption>
</figure>
