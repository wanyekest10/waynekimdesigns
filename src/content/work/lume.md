---
title: Lume
slug: lume
headline: "A blind-spot alert for motorcycle helmets that puts a quiet cue in the rider's line of sight, prototyped as a VR ride."
context: "CIID, 2025"
order: 8
featured: false
label: "Spatial computing and prototyping"
summary: "Blind-spot alerts inside a motorcycle helmet."
hero: "/work/lume-assets/hero.webp"
heroAlt: "A tester in a VR headset gripping a wooden handlebar wired to an Arduino, with the ride on a laptop screen"
heroVideo: "/work/lume-assets/rider-view.mp4"
heroPoster: "/work/lume-assets/rider-view-poster.jpg"
jumps:
  - { label: "Skip to the interaction", to: "how-it-works" }
  - { label: "Skip to the build", to: "making-it-rideable" }
short:
  - { lead: "The question.", text: "Riders can't see their blind spots, and turning your head at speed is its own risk. What if the helmet could tell you, without pulling your eyes off the road?" }
  - { lead: "What we built.", text: "Lume, a VR simulation of an AR helmet. A red light flags a vehicle in your blind spot, and speed and fuel sit at the edge of view. A physical handlebar steers the ride." }
  - { lead: "What I learned.", text: "Riders didn't want a dashboard in their visor. The best cue was the one you barely notice until you need it." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Duration", value: "5 days, 2025" }
  - { label: "Team and faculty", value: "Felix Lorsignol · Hun Han · Sahil Islam · David Rose · Ricardo Acosta" }
  - { label: "Tools", value: "Unity · Arduino · Meta Quest 3" }
---

## Subtle over prominent

Our first idea was to turn the helmet's visor into a display: speed, navigation, alerts, all in front of your eyes. Then we interviewed three motorcyclists. None of them wanted more to look at. Their attention belongs on the road, and anything that competes with it is a hazard of its own.

So we went the other way: subtle cues that sit at the edge of vision and only ask for attention when it matters.

<figure class="medium"><img src="/work/lume-assets/bike-rig.webp" alt="An early rig: a rider in a helmet on a stationary bicycle in front of a projected road"/><figcaption>Testing the ride on a bike rig.</figcaption></figure>

## How it works

<div class="cols3">
  <div><h4>Blind spot</h4><p>A red light appears on the side where a vehicle is hiding. Noticeable, not alarming.</p></div>
  <div><h4>Speed</h4><p>Sits low at the edge of view.</p></div>
  <div><h4>Fuel</h4><p>Also at the edge, out of the way until you look for it.</p></div>
</div>

## Making it rideable

We built the ride in Unity and ran it on a Meta Quest 3. To make it feel like riding instead of watching, we added a physical handlebar: an Arduino reads a potentiometer, so turning and twisting the bar steers and sets the speed.

<figure class="grid3">
  <div><video src="/work/lume-assets/unity-helmet.mp4" poster="/work/lume-assets/unity-helmet-poster.jpg" autoplay muted loop playsinline></video><p>Building the helmet view in Unity.</p></div>
  <div><video src="/work/lume-assets/potentiometer.mp4" poster="/work/lume-assets/potentiometer-poster.jpg" autoplay muted loop playsinline></video><p>Wiring the potentiometer to the ride.</p></div>
  <div><video src="/work/lume-assets/handlebar-build.mp4" poster="/work/lume-assets/handlebar-build-poster.jpg" autoplay muted loop playsinline></video><p>Testing the handlebar with the headset.</p></div>
</figure>

## Live demo

<figure class="pair">
  <img src="/work/lume-assets/testing.webp" alt="A tester in a headset and hoodie steering with the wooden handlebar at a workshop table"/>
  <img src="/work/lume-assets/demo-pair.webp" alt="Two people at the demo, one riding in the headset"/>
</figure>

<figure class="wide"><img src="/work/lume-assets/demo-room.webp" alt="The demo in a large hall, with the rider's view projected on a big screen"/></figure>
