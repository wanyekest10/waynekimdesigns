---
title: Linee
slug: linee
headline: "A wooden timekeeper for shared homes that keeps housemates in sync with a soft knock instead of an alarm."
context: "CIID, 2025"
order: 6
year: "2025"
featured: true
label: "Physical computing and fabrication"
summary: "A timekeeper for shared homes, with no alarms."
cardVideo: "/work/linee-assets/card-loop.mp4"
hero: "/work/linee-assets/hero.webp"
heroAlt: "Linee on a wall: a long row of wooden hour blocks numbered 1 to 24"
card: "/work/linee-assets/card.webp"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
  - { label: "Skip to the build", to: "making-it-move" }
short:
  - { lead: "The question.", text: "Shared homes run on group chats, alarms, and reminders. Could a household stay in sync by asking for less attention, not more?" }
  - { lead: "What we built.", text: "Linee, a 24-hour timeline of wooden blocks. Press a block to mark an event. A motorized needle crosses the day and gives each marked hour a soft knock as it passes." }
  - { lead: "What I learned.", text: "Calm technology isn't silent: it moves information to the edge of attention, where you can glance at it instead of being interrupted." }
skills: [Physical computing, Prototyping, Interaction design]
contributions:
  - { skill: "Physical computing", text: "Wrote the code for the stepper motor and LEDs" }
  - { skill: "Prototyping", text: "Led the block prototyping" }
  - { skill: "Interaction design", text: "Proposed the magnetic tiles concept" }
  - { skill: "With the team", text: "Concept and the laser-cut build, with Alec Davis and Chokchey Cappai", shared: true }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Role", value: "Stepper motor and LED code · Block prototyping · Magnetic tiles concept" }
  - { label: "Duration", value: "2 weeks, 2025" }
  - { label: "Team", value: "Alec Davis · Chokchey Cappai" }
  - { label: "Faculty", value: "Massimo Banzi · Pierluigi Dalla Rosa · Jose Chavarria" }
  - { label: "Tools", value: "Arduino · Stepper motor · Laser cutter" }
---

## Timekeeping without alarms or notifications

Linee (Italian for "lines") is a tactile clock and a deliberately low-fidelity day planner for shared homes. It shows when something is happening without alarms, screens, or notifications. Instead of precise scheduling, it builds awareness of the day's rhythm, so housemates stay in sync and the home stays calm.

<figure class="frame"><video src="/work/linee-assets/adding-tiles.mp4" poster="/work/linee-assets/adding-tiles-poster.jpg" autoplay muted loop playsinline></video><figcaption>Marking the day on Linee.</figcaption></figure>

## From signals to ambient time

Our brief was to design a product that fosters togetherness in shared spaces. Home is a sanctuary for people with busy schedules, but sharing it still takes quiet coordination. We first imagined Linee as a way for housemates to signal everyday rhythms: who's in the kitchen, who's using the shower, who's on their way home.

Linee became something else: ambient timekeeping, a system that communicates when without asking for attention. Coordination is felt over the course of the day instead of enforced through alerts. It's calm technology in the plainest sense: information that lives at the edge of attention, there when you glance at it and quiet when you don't.

<figure class="frame"><video src="/work/linee-assets/storyboard.mp4" poster="/work/linee-assets/storyboard-poster.jpg" autoplay muted loop playsinline></video><figcaption>Storyboarding how a household would set it up and use it.</figcaption></figure>

## How it works

<div class="flow" role="list" aria-label="How Linee works">
  <div class="step"><span class="n">01</span><b>Press a block</b><small>Push in an hour to mark it.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>The needle travels</b><small>2,200 steps across 24 hours.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>It reaches a marked hour</b><small>A soft knock. No screen, no notification.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">04</span><b>Clear it</b><small>Push the block back out.</small></div>
</div>
<p class="flow-note">↻ Every day, the needle crosses again.</p>

Semi-transparent numerals keep the hours readable without making the wall shout.

<figure class="frame"><video src="/work/linee-assets/needle-pass.mp4" poster="/work/linee-assets/needle-pass-poster.jpg" autoplay muted loop playsinline></video><figcaption>The needle knocks a marked hour as it passes.</figcaption></figure>

## Making it move

I wrote the code for the stepper motor and LEDs. A WiFi-connected Arduino moves the needle 2,200 steps across 24 hours: too slow to watch, but always somewhere new when you look up.

<div class="sys" aria-label="Linee system">
  <div class="col"><span class="k">Inputs</span><span class="part">Time over WiFi<small>The Arduino keeps the clock.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part focal">Arduino<small>Converts the hour into steps.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">Stepper motor and belt<small>Carry the needle.</small></span><span class="part">LED strip<small>Glows above the blocks.</small></span></div>
</div>

There are no sensors on the blocks. A pressed block sticks out, so the needle physically knocks it as it passes.

<figure class="pair even">
  <img src="/work/linee-assets/parts.webp" alt="Laser-cut blocks, electronics, and wiring laid out on a cutting mat"/>
  <img src="/work/linee-assets/mechanism.webp" alt="A teammate holding up the assembled track, showing the Arduino, belt, and motor underneath"/>
</figure>

<figure class="frame"><video src="/work/linee-assets/coding.mp4" poster="/work/linee-assets/coding-poster.jpg" autoplay muted loop playsinline></video><figcaption>Debugging the LED lighting while Alec and Chey assemble.</figcaption></figure>

## Iterating the block

I led the block prototyping. We went through dozens of versions, starting in cardboard. The one that worked had a protruding notch: it made pressing obvious and undoing easy.

<figure class="pair even">
  <video src="/work/linee-assets/cardboard-blocks.mp4" poster="/work/linee-assets/cardboard-blocks-poster.jpg" autoplay muted loop playsinline></video>
  <video src="/work/linee-assets/testing-blocks.mp4" poster="/work/linee-assets/testing-blocks-poster.jpg" autoplay muted loop playsinline></video>
  <figcaption>Testing cardboard blocks with classmates, then pressing the wooden ones on the track.</figcaption>
</figure>

<figure class="frame"><video src="/work/linee-assets/notch.mp4" poster="/work/linee-assets/notch-poster.jpg" autoplay muted loop playsinline></video><figcaption>The notch works!</figcaption></figure>

## A shared language

Later in the project, I proposed magnetic tiles: housemates write a note or stick a symbol on the timeline, like taking out the trash, being on a call, or having friends over. The day stops being a schedule handed down and becomes something the house can negotiate.

<figure class="frame"><img src="/work/linee-assets/tile-writing.webp" alt="Writing CIID Open House on a white tile stuck to the 17:00 block, next to a red tile marked Demo"/></figure>

## Just put it in the box

At some point Massimo told us to stop sanding small pieces of wood and put it in the box. He was right. Fit, strength, and tolerance problems only showed up once the whole system was assembled close to final. No single part revealed them.

<figure class="frame"><img src="/work/linee-assets/put-it-in-the-box.webp" alt="Massimo Banzi pointing and laughing as the team works at a crowded workshop table"/></figure>

## On display

<figure class="frame"><video src="/work/linee-assets/open-house.mp4" poster="/work/linee-assets/open-house-poster.jpg" autoplay muted loop playsinline></video><figcaption>Visitors trying Linee at the exhibition.</figcaption></figure>

<figure class="frame"><img src="/work/linee-assets/final.webp" alt="Two teammates smiling beside the wall: the first cardboard prototype mounted above the finished Linee"/><figcaption>From the first prototype, above, to the final form.</figcaption></figure>

<figure class="embed"><iframe src="https://player.vimeo.com/video/1068790351?dnt=1&title=0&byline=0&portrait=0" title="Linee, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>

**Where it started.** Linee, a team project at CIID, is where my calm tech exploration started: everyday objects that sit at the edge of attention instead of asking for it. See also [Toilet Paper Elevator](/work/toilet-paper-elevator/) and [room_tone](/work/room-tone/).
