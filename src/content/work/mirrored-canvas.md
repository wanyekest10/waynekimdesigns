---
title: Mirrored Canvas
slug: mirrored-canvas
headline: "An installation that turns silly faces into projected visuals, so people can perform an emotion together instead of having it read."
context: "CIID, 2024"
order: 7
year: "2024"
featured: false
listIn: experiments
label: "Computer vision and play design"
summary: "A mirror that rewards silly faces."
hero: "/work/mirrored-canvas-assets/hero.webp"
heroAlt: "A crowd laughing as someone stands in front of a glowing translucent screen"
heroVideo: "/work/mirrored-canvas-assets/reactive-visuals.mp4"
heroPoster: "/work/mirrored-canvas-assets/reactive-visuals-poster.jpg"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
short:
  - { lead: "The question.", text: "How do you design an experience that gets people to make silly faces, in public, in front of other people?" }
  - { lead: "What we built.", text: "A translucent canvas that works as both mirror and stage. Face tracking and a microphone turn expressions and voice into live projected visuals." }
  - { lead: "What I learned.", text: "Creative coding let us prototype play fast, and absurdity turned out to be contagious: ridiculous prototypes gave the whole room permission to play." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Responsibility", value: "Creative coding" }
  - { label: "Duration", value: "4 days, 2024" }
  - { label: "Team", value: "Yase Dusu" }
  - { label: "Faculty", value: "Jacob Remin · Dennis Paul" }
  - { label: "Tools", value: "FaceOSC · Processing · Webcam · Projector" }
---

## A mirror and a stage

Mirrored Canvas projects onto a sheet of translucent acrylic. You see yourself in it, and everyone behind you sees what your face is doing to it. Your expression and your voice become the picture.

<figure class="frame"><img src="/work/mirrored-canvas-assets/hero.webp" alt="A crowd laughing as someone stands beside the glowing canvas while a classmate takes a photo"/></figure>

## How it works

FaceOSC tracks points on your face through a webcam, and a microphone listens for sound. Processing turns both into visuals projected onto the acrylic.

<div class="sys" aria-label="Mirrored Canvas system">
  <div class="col"><span class="k">Inputs</span><span class="part">Webcam<small>Watches your face.</small></span><span class="part">Microphone<small>Listens for sound.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part">FaceOSC<small>Tracks points on your face.</small></span><span class="part">Processing<small>Turns face and sound into visuals.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">Projector<small>From behind the canvas.</small></span><span class="part focal">Acrylic canvas<small>Mirror and stage at once.</small></span></div>
</div>

<div class="cols3">
  <div><h4>Smile</h4><p>Brings up a joyful photo, like pulling out a good memory.</p></div>
  <div><h4>Look shocked</h4><p>Sets off abstract visuals that bloom and react.</p></div>
  <div><h4>Use your voice</h4><p>Sound feeds the visuals alongside your face.</p></div>
</div>

<figure class="pair even">
  <video src="/work/mirrored-canvas-assets/smile-trigger.mp4" poster="/work/mirrored-canvas-assets/smile-trigger-poster.jpg" autoplay muted loop playsinline></video>
  <video src="/work/mirrored-canvas-assets/collage.mp4" poster="/work/mirrored-canvas-assets/collage-poster.jpg" autoplay muted loop playsinline></video>
  <figcaption>Face tracking asks for your best smile, and the photos pile up.</figcaption>
</figure>

## Absurdity is contagious

We bodystormed before we built. The pattern showed up fast: when a prototype felt serious, people froze and watched. When it was absurd, they laughed, leaned in, and took a turn. Once one person made a ridiculous face, everyone else had permission to.

<figure class="pair even">
  <video src="/work/mirrored-canvas-assets/bodystorm.mp4" poster="/work/mirrored-canvas-assets/bodystorm-poster.jpg" autoplay muted loop playsinline></video>
  <img src="/work/mirrored-canvas-assets/shocked.webp" alt="Two people making shocked faces beside the glowing canvas while a crowd laughs behind them"/>
</figure>

## Reflection

**Play over precision.** We built for laughter, not accuracy. The installation only had to respond enough to keep people trying faces.

**Performed, not captured.** Most emotion tech tries to read and classify your face. Here the emotion was performed and shared with the room, not captured or classified.

<figure class="frame"><img src="/work/mirrored-canvas-assets/with-yase.webp" alt="Black and white photo of Wayne and Yase smiling at a table with the laptop and webcam setup"/><figcaption>Making faces with Yase.</figcaption></figure>

<figure class="embed"><iframe src="https://player.vimeo.com/video/1041048796?dnt=1&title=0&byline=0&portrait=0" title="Mirrored Canvas, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
