---
title: Lume
slug: lume
headline: "A blind-spot alert for motorcycle helmets that puts a quiet cue in the rider's line of sight, prototyped as a VR ride."
context: "CIID, 2025"
order: 8
year: "2025"
featured: false
listIn: experiments
label: "Spatial computing and prototyping"
summary: "Blind-spot alerts inside a motorcycle helmet."
hero: "/work/lume-assets/hero.webp"
heroAlt: "A tester in a VR headset gripping a wooden handlebar wired to an Arduino, with the ride on a laptop screen"
heroVideo: "/work/lume-assets/rider-view.mp4"
heroPoster: "/work/lume-assets/rider-view-poster.jpg"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
short:
  - { lead: "The question.", text: "Riders can't see their blind spots, and turning your head at speed is its own risk. What if the helmet could tell you, without pulling your eyes off the road?" }
  - { lead: "What we built.", text: "Lume, a VR simulation of an AR helmet. A red light flags a vehicle in your blind spot, and speed and fuel sit at the edge of view. A physical handlebar steers the ride." }
  - { lead: "What I learned.", text: "Riders didn't want a dashboard in their visor. The best cue was the one you barely notice until you need it." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Responsibility", value: "Helmet camera POV" }
  - { label: "Duration", value: "5 days, 2025" }
  - { label: "Team and faculty", value: "Felix Lorsignol · Hun Han · Sahil Islam · David Rose · Ricardo Acosta" }
  - { label: "Tools", value: "Unity · Arduino · Meta Quest 3" }
---

## Subtle over prominent

Our first idea was to turn the helmet's visor into a display: speed, navigation, alerts, all in front of your eyes. We also read research on subtle cueing in augmented reality, which tests softer cues as an alternative to explicit ones. Then we interviewed three motorcyclists. None of them wanted more to look at. Their attention belongs on the road, and anything that competes with it is a hazard of its own.

So we went the other way: subtle cues that sit at the edge of vision and only ask for attention when it matters.

<figure class="wide"><img src="/work/lume-assets/subtle-cueing.webp" alt="A research paper titled Subtle Cueing: An alternative to using explicit cues to facilitate visual search, with a head-mounted display study and results charts"/><figcaption>Research on subtle cueing in augmented reality.</figcaption></figure>

<figure class="frame"><img src="/work/lume-assets/bike-rig.webp" alt="An early rig: a rider in a helmet on a stationary bicycle in front of a projected road"/><figcaption>Testing the ride on a bike rig.</figcaption></figure>

## How it works

<div class="flow" role="list" aria-label="How Lume alerts a rider">
  <div class="step"><span class="n">01</span><b>A car enters your blind spot</b><small>Behind you, out of sight.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">02</span><b>A red light appears</b><small>At the edge of view, on that side.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">03</span><b>You check, or wait</b><small>Your eyes stay on the road.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">04</span><b>The car passes</b><small>The light fades on its own.</small></div>
</div>
<p class="flow-note">↻ Speed and fuel sit low at the edge of view the whole time, out of the way until you look.</p>

<figure class="pair">
  <video src="/work/lume-assets/alert-blindspot.mp4" poster="/work/lume-assets/alert-blindspot-poster.jpg" autoplay muted loop playsinline></video>
  <video src="/work/lume-assets/alert-fuel.mp4" poster="/work/lume-assets/alert-fuel-poster.jpg" autoplay muted loop playsinline></video>
  <figcaption>A car slips into the blind spot and the red cue appears on that side. A glance down shows the fuel range.</figcaption>
</figure>

## Making it rideable

We built the ride in Unity and ran it on a Meta Quest 3. To make it feel like riding instead of watching, we added a physical handlebar: an Arduino reads a potentiometer, so turning and twisting the bar steers and sets the speed.

<div class="sys" aria-label="Lume system">
  <div class="col"><span class="k">Inputs</span><span class="part">Handlebar<small>A potentiometer reads steering and speed.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part">Arduino<small>Sends the handlebar to Unity.</small></span><span class="part focal">Unity<small>Runs the ride and the alerts.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">Meta Quest 3<small>The rider's helmet view.</small></span></div>
</div>

<figure class="grid3 tall">
  <div><video src="/work/lume-assets/unity-helmet.mp4" poster="/work/lume-assets/unity-helmet-poster.jpg" autoplay muted loop playsinline></video><p>Building the helmet view in Unity.</p></div>
  <div><video src="/work/lume-assets/potentiometer.mp4" poster="/work/lume-assets/potentiometer-poster.jpg" autoplay muted loop playsinline></video><p>Wiring the potentiometer to the ride.</p></div>
  <div><video src="/work/lume-assets/handlebar-build.mp4" poster="/work/lume-assets/handlebar-build-poster.jpg" autoplay muted loop playsinline></video><p>Testing the handlebar with the headset.</p></div>
</figure>

## Live demo

<figure class="pair">
  <img src="/work/lume-assets/testing.webp" alt="A tester in a headset and hoodie steering with the wooden handlebar at a workshop table"/>
  <img src="/work/lume-assets/demo-pair.webp" alt="Two people at the demo, one riding in the headset"/>
</figure>

<figure class="frame"><img src="/work/lume-assets/demo-room.webp" alt="The demo in a large hall, with the rider's view projected on a big screen"/></figure>

<figure class="embed"><iframe src="https://player.vimeo.com/video/1068857422?dnt=1&title=0&byline=0&portrait=0" title="Lume, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
