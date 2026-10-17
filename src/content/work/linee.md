---
title: Linee
slug: linee
headline: "A wooden day planner for shared homes that keeps housemates in sync with a soft knock instead of an alarm."
context: "CIID, 2025"
order: 6
label: "Physical computing and fabrication"
summary: "A planner that knocks instead of buzzing."
hero: "/work/linee-assets/hero.webp"
heroAlt: "Linee on a wall: a long row of wooden hour blocks numbered 1 to 24"
card: "/work/linee-assets/card.webp"
jumps:
  - { label: "Skip to how it works", to: "how-it-works" }
  - { label: "Skip to the build", to: "making-it-move" }
short:
  - { lead: "The question.", text: "Shared homes run on group chats, alarms, and reminders. Could a household stay in sync by asking for less attention, not more?" }
  - { lead: "What we built.", text: "Linee, a 24-hour timeline of wooden blocks. Press a block to mark an event. A motorized needle crosses the day and gives each marked hour a soft knock as it passes." }
  - { lead: "What I learned.", text: "Timing can be felt instead of announced. And a build isn't real until it's in the box." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Role", value: "Stepper motor and LED code · Block prototyping · Magnetic tiles concept" }
  - { label: "Duration", value: "2 weeks, 2025" }
  - { label: "Team", value: "Alec Davis · Chokchey Cappai" }
  - { label: "Faculty", value: "Massimo Banzi · Pierluigi Dalla Rosa · Jose Chavarria" }
  - { label: "Tools", value: "Arduino · Stepper motor · Laser cutter" }
---

## Less attention, not more

Living with other people takes coordination: who's cooking, when the guests arrive, when the place needs to be quiet. Most tools for that compete for attention with pings, badges, and alarms. We asked what togetherness would look like if the tool asked for less.

<figure class="frame"><video src="/work/linee-assets/press-block.mp4" poster="/work/linee-assets/press-block-poster.jpg" autoplay muted loop playsinline></video><figcaption>Press an hour to mark it.</figcaption></figure>

## From signals to ambient time

We started with signals between housemates: a way to say "I'm home" or "dinner at 8." The more we explored, the more the project moved toward ambient timekeeping. Instead of a message you have to read, the day itself moves across the wall, and you feel where it is from across the room.

<figure class="frame"><video src="/work/linee-assets/storyboard.mp4" poster="/work/linee-assets/storyboard-poster.jpg" autoplay muted loop playsinline></video><figcaption>Storyboarding how a household would set it up and use it.</figcaption></figure>

## A shared language

Later in the project, I proposed magnetic tiles: housemates write a note or stick a symbol on the timeline, like a demo, an open house, or a dinner. The day stops being a schedule handed down and becomes something the house can negotiate.

<figure class="pair even">
  <img src="/work/linee-assets/tile-writing.webp" alt="Writing CIID Open House on a white tile stuck to the 17:00 block, next to a red tile marked Demo"/>
  <video src="/work/linee-assets/adding-tiles.mp4" poster="/work/linee-assets/adding-tiles-poster.jpg" autoplay muted loop playsinline></video>
</figure>

## How it works

<div class="cols3">
  <div><h4>Press</h4><p>Push an hour block to mark an event. Push it back to clear it.</p></div>
  <div><h4>Pass</h4><p>A needle crosses all 24 hours once a day.</p></div>
  <div><h4>Knock</h4><p>When it reaches a marked block, it gives a soft knock. No screen, no notification.</p></div>
</div>

Semi-transparent numerals keep the hours readable without making the wall shout.

<figure class="frame"><video src="/work/linee-assets/needle-pass.mp4" poster="/work/linee-assets/needle-pass-poster.jpg" autoplay muted loop playsinline></video><figcaption>The needle knocks a marked hour as it passes.</figcaption></figure>

## Making it move

A WiFi-connected Arduino drives a stepper motor and belt that carry the needle along the track. One crossing takes 2,200 steps, spread across 24 hours, so the needle moves too slowly to watch but is always somewhere new when you look up. I wrote the stepper motor and LED code.

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

<figure class="frame"><video style="object-position: center 70%" src="/work/linee-assets/notch.mp4" poster="/work/linee-assets/notch-poster.jpg" autoplay muted loop playsinline></video><figcaption>The notch, up close.</figcaption></figure>

## Just put it in the box

At some point Massimo Banzi told us to stop sanding small pieces of wood and put it in the box. He was right. Fit, strength, and tolerance problems only showed up once the whole system was assembled close to final. No single part revealed them.

<figure class="frame"><img src="/work/linee-assets/put-it-in-the-box.webp" alt="Massimo Banzi pointing and laughing as the team works at a crowded workshop table"/></figure>

## On display

<figure class="frame"><video src="/work/linee-assets/open-house.mp4" poster="/work/linee-assets/open-house-poster.jpg" autoplay muted loop playsinline></video><figcaption>Visitors trying Linee at the exhibition.</figcaption></figure>

<figure class="frame"><img style="aspect-ratio: auto" src="/work/linee-assets/final.webp" alt="Two teammates smiling beside the wall: the first cardboard prototype mounted above the finished Linee"/><figcaption>From the first prototype, above, to the final form.</figcaption></figure>
