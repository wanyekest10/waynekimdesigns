---
title: Living.fm
slug: living-fm
headline: "An AI radio host for your home that notices when you're scrolling instead of living, and learned when to stay quiet."
context: "CIID, 2025"
role: Interaction designer
timeline: 4 days, 2025
team:
  - name: Juan Ignacio Garro
  - name: Alec Davis
instructors: [Bjorn Karmann, Matteo Loglio]
tools: [Teachable Machine, Cursor, ElevenLabs, ESP32 camera]
tags: [Designing with AI, Computer vision, Physical computing]
reading_time: About 1 minute
order: 3
label: "AI and prototyping"
summary: "A radio host that notices you scrolling."
hero: "/work/living-assets/hero-couch.webp"
heroAlt: "Someone scrolling on the couch while Liv, a small wooden speaker with a camera, sits on the side table"
intro:
  - "Habits like doomscrolling are reinforced by technology built to hold attention. In a 4-day CIID sprint on designing with AI, we asked whether a little self-awareness, at the right moment, could work as gentle friction."
  - "I trained the vision model, wrote Liv's personality and gave her a voice, and built a live interface to see what the system saw."
  - "Liv became a wooden speaker that recognizes four activities and speaks only when she's sure. Living.fm is a provocation, not a product."
facts:
  - { label: "Role", value: "Interaction designer" }
  - { label: "Timeline", value: "4 days, 2025, CIID" }
  - { label: "Team", value: "Juan Ignacio Garro, Alec Davis" }
  - { label: "Tools", value: "Teachable Machine, Cursor, ElevenLabs, ESP32 camera" }
jumps:
  - { label: "Skip to the process", to: "bodystorming-timing-beats-content" }
  - { label: "Skip to the build", to: "building-liv" }
  - { label: "Watch Liv", to: "giving-liv-a-voice" }
---


## Why a narrator

We wanted to be more intentional about our free time at home. The habits we wanted to change, like reaching for the phone the moment we sat down, aren't failures of willpower. They're reinforced by products designed to hold attention. We wondered whether AI could do the opposite: a presence in the room that simply noticed, out loud.

<video src="/work/living-assets/device-loop.mp4" poster="/work/living-assets/device-loop-poster.jpg" autoplay muted loop playsinline></video>

## Bodystorming: timing beats content

Before building anything, we acted it out. We collapsed on the couch, stretched between tasks, scrolled, and shared space, while one of us narrated the other in real time.

The surprise was that the words mattered less than the timing. Commentary that arrived too early felt like being watched. Too late, and it was pointless. That became the core design problem: deciding when Liv should speak, and when she should hold back.

<figure class="pair">
  <video src="/work/living-assets/bodystorm-1.mp4" poster="/work/living-assets/bodystorm-1-poster.jpg" autoplay muted loop playsinline></video>
  <video src="/work/living-assets/bodystorm-2.mp4" poster="/work/living-assets/bodystorm-2-poster.jpg" autoplay muted loop playsinline></video>
  <figcaption>Bodystorming: narrating each other's everyday moments to feel out timing and tone.</figcaption>
</figure>

## Building Liv

Liv is a small wooden enclosure holding an ESP32 camera, a Bluetooth speaker, and a 5V battery. The camera watches the room, a model classifies what you're doing, and Liv answers through the speaker.

![Liv's hardware: ESP32 camera, Bluetooth speaker, 5V battery, and a step-up converter inside a wooden frame](/work/living-assets/hardware.webp)

I trained the model in Teachable Machine on our own sample movements. Recognition was inconsistent across activities, and an unreliable narrator is worse than none, so we narrowed to four scenarios we could recognize well: idle, doomscrolling, yoga, and dancing.

![Training the activity model in Teachable Machine](/work/living-assets/teachable-machine.webp)

## Giving Liv a voice

I wrote Liv's personality in Cursor and gave her a voice with ElevenLabs. The prompt sets the rules: she's a late-night radio narrator, her default state is silence, and she speaks only when a trigger is confirmed. When she does speak, it's one or two sentences: narrate what she notices, invite reflection, never lecture or diagnose.

<figure class="pair">
  <img src="/work/living-assets/prompt.webp" alt="Liv's prompt: default state is silence, speak only when a trigger is confirmed"/>
  <img src="/work/living-assets/responses.webp" alt="Sample triggers, confidence scores, and Liv's lines"/>
  <figcaption>Liv's prompt, and the lines she says for each trigger.</figcaption>
</figure>

A few of her lines:

<blockquote><p>"Your thumb's been doing laps tonight; time gets slippery like that."</p><p>Doomscrolling, 92% confidence</p></blockquote>

<blockquote><p>"You're moving slow enough for the room to catch up; that's a rare kind of quiet."</p><p>Yoga, 87% confidence</p></blockquote>

<div class="vid"><video src="/work/living-assets/liv-in-action-1.mp4" poster="/work/living-assets/liv-in-action-1-poster.jpg" autoplay muted loop playsinline></video><button class="snd" type="button" aria-pressed="false">Sound on</button></div>

## Seeing what the system sees

Before we could trust Liv's responses, we needed to see her reasoning. I built a live testing interface that showed the system's real-time classification for each scenario next to what Liv would say. Without it, a wrong comment just felt like a bad line. With it, we could see the misread that caused it, fix it, and decide how much to trust the system before putting it in front of people.

<figure class="medium"><img src="/work/living-assets/testing-interface.webp" alt="The testing interface: live classification percentages for each activity, with Liv's response below"/></figure>

## When care becomes nagging

Our early prototypes focused on interrupting doomscrolling. User testing showed it just felt like nagging.

> "It's like an alarm. I just want to turn it off."
>
> Tester

In Korean, 잔소리 (jansori) describes exactly this: nagging that overwhelms care through repetition. So we expanded Liv's role beyond interruption to positive reinforcement and ambient music. She encourages you when you cook or stretch, plays something fitting, and only sometimes teases you for scrolling. In a future version, people would get more control over when and how she speaks.

<div class="vid"><video src="/work/living-assets/liv-in-action-2.mp4" poster="/work/living-assets/liv-in-action-2-poster.jpg" autoplay muted loop playsinline></video><button class="snd" type="button" aria-pressed="false">Sound on</button></div>

## A speculative exploration

Living.fm is a provocation, not a product. Through it, we explored how AI, sound, and physical design might come together to make home life more mindful, one small interaction at a time.

The biggest lesson: in an ambient system, the interpretation is the product. Liv's voice, music, and lines only work if her read of the room is right, and if people can trust it. Most of the design work with AI happened outside the model, in deciding what she recognized, when she spoke, and when she stayed quiet.
