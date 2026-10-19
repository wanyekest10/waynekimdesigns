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
order: 1
year: "2025"
featured: true
label: "AI and prototyping"
summary: "A radio host that notices you scrolling."
hero: "/work/living-assets/hero-liv.webp"
heroVideo: "/work/living-assets/device-loop.mp4"
heroPoster: "/work/living-assets/hero-liv.webp"
heroAlt: "Liv, a small wooden speaker with a camera eye and a soft blue light, on a side table in front of a wood-paneled wall"
jumps:
  - { label: "Skip to the build", to: "building-liv" }
short:
  - { lead: "The question.", text: "Technology built to hold attention reinforces habits like doomscrolling. Could a little self-awareness, at the right moment, work as gentle friction?" }
  - { lead: "What I built.", text: "Liv, a wooden speaker with a camera that recognizes four activities and comments like a late-night radio host. I trained the vision model, wrote her personality, and built a live testing interface." }
  - { lead: "What I learned.", text: "In an ambient system, the interpretation is the product. Liv only works when she knows when to stay quiet." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design (CIID)" }
  - { label: "Responsibility", value: "Training the vision model · Writing Liv's personality · Building the testing interface" }
  - { label: "Duration", value: "4 days, 2025" }
  - { label: "Team", value: "Juan Ignacio Garro, Alec Davis" }
  - { label: "Faculty", value: "Bjorn Karmann, Matteo Loglio" }
  - { label: "Tools", value: "Teachable Machine, Cursor, ElevenLabs, ESP32 camera" }
---


## Why a narrator

We wanted to be more intentional about our free time at home. The habits we wanted to change, like reaching for the phone the moment we sat down, aren't failures of willpower. They're reinforced by products designed to hold attention. We wondered whether AI could do the opposite: a presence in the room that simply noticed, out loud.

<figure class="frame"><img src="/work/living-assets/hero-couch.webp" alt="Someone scrolling on the couch while Liv sits on the side table"/><figcaption>The moment Liv was built for: sitting down, and reaching for the phone.</figcaption></figure>

## Building Liv

Liv is a small wooden enclosure holding an ESP32 camera, a Bluetooth speaker, and a 5V battery. The camera watches the room, a model classifies what you're doing, and Liv answers through the speaker.

<div class="sys" aria-label="Living.fm system">
  <div class="col"><span class="k">Inputs</span><span class="part">ESP32 camera<small>Watches the room.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part">Teachable Machine<small>Classifies the activity.</small></span><span class="part focal">Liv's prompt<small>Decides whether to speak, and what to say.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">ElevenLabs<small>Gives Liv her voice.</small></span><span class="part">Bluetooth speaker<small>In the wooden frame.</small></span></div>
</div>

I trained the model in Teachable Machine on our own sample movements. Recognition was inconsistent across activities, and an unreliable narrator is worse than none, so we narrowed to four scenarios we could recognize well: idle, doomscrolling, yoga, and dancing.

<figure class="pair">
  <img src="/work/living-assets/hardware.webp" alt="Liv's hardware: ESP32 camera, Bluetooth speaker, 5V battery, and a step-up converter inside a wooden frame"/>
  <img src="/work/living-assets/teachable-machine.webp" alt="Training the activity model in Teachable Machine"/>
  <figcaption>Liv's hardware, and training the model in Teachable Machine.</figcaption>
</figure>

## Giving Liv a voice

I wrote Liv's personality in Cursor and gave her a voice with ElevenLabs. The prompt sets the rules: she's a late-night radio narrator, her default state is silence, and she speaks only when a trigger is confirmed. When she does speak, it's one or two sentences: narrate what she notices, invite reflection, never lecture or diagnose.

<div class="flow" role="list" aria-label="How Liv decides to speak">
  <div class="step"><span class="n">01</span><b>The camera watches</b><small>An ESP32 camera on the side table.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>The model classifies</b><small>Idle, doomscrolling, yoga, or dancing.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">03</span><b>Confident enough?</b><div class="opt"><small><b>Yes:</b> Liv says one or two lines, or plays music.</small></div><div class="opt focal"><small><b>No:</b> Liv stays silent.</small></div></div>
</div>
<p class="flow-note">↻ Silence is the default. Liv only speaks when a trigger is confirmed.</p>

<figure class="pair">
  <img src="/work/living-assets/prompt.webp" alt="Liv's prompt: default state is silence, speak only when a trigger is confirmed"/>
  <img src="/work/living-assets/responses.webp" alt="Sample triggers, confidence scores, and Liv's lines"/>
  <figcaption>Liv's prompt, and the lines she says for each trigger.</figcaption>
</figure>

A few of her lines:

<blockquote><p>"Your thumb's been doing laps tonight; time gets slippery like that."</p><p>Doomscrolling, 92% confidence</p></blockquote>

<blockquote><p>"You're moving slow enough for the room to catch up; that's a rare kind of quiet."</p><p>Yoga, 87% confidence</p></blockquote>

## Seeing what the system sees

Before we could trust Liv's responses, we needed to see her reasoning. I built a live testing interface that showed the system's real-time classification for each scenario next to what Liv would say. Without it, a wrong comment just felt like a bad line. With it, we could see the misread that caused it, fix it, and decide how much to trust the system before putting it in front of people.

<figure class="medium"><img src="/work/living-assets/testing-interface.webp" alt="The testing interface: live classification percentages for each activity, with Liv's response below"/></figure>

## Bodystorming: timing beats content

Before building anything, we acted it out. We collapsed on the couch, stretched between tasks, scrolled, and shared space, while one of us narrated the other in real time.

The surprise was that the words mattered less than the timing. Commentary that arrived too early felt like being watched. Too late, and it was pointless. That became the core design problem: deciding when Liv should speak, and when she should hold back.

<figure class="pair">
  <video src="/work/living-assets/bodystorm-1.mp4" poster="/work/living-assets/bodystorm-1-poster.jpg" autoplay muted loop playsinline></video>
  <video src="/work/living-assets/bodystorm-2.mp4" poster="/work/living-assets/bodystorm-2-poster.jpg" autoplay muted loop playsinline></video>
  <figcaption>Bodystorming: narrating each other's everyday moments to feel out timing and tone.</figcaption>
</figure>

## When care becomes nagging

Our early prototypes focused on interrupting doomscrolling. User testing showed it just felt like nagging.

> "It's like an alarm. I just want to turn it off."
>
> Tester

In Korean, 잔소리 (jansori) describes exactly this: nagging that overwhelms care through repetition. So we expanded Liv's role beyond interruption to positive reinforcement and ambient music. She encourages you when you cook or stretch, plays something fitting, and only sometimes teases you for scrolling. In a future version, people would get more control over when and how she speaks.

<figure class="pair">
  <video src="/work/living-assets/liv-in-action-1.mp4" poster="/work/living-assets/liv-in-action-1-poster.jpg" autoplay muted loop playsinline></video>
  <video src="/work/living-assets/liv-in-action-2.mp4" poster="/work/living-assets/liv-in-action-2-poster.jpg" autoplay muted loop playsinline></video>
  <figcaption>Liv in action.</figcaption>
</figure>

## A speculative exploration

Living.fm is a provocation, not a product. Through it, we explored how AI, sound, and physical design might come together to make home life more mindful, one small interaction at a time.

The biggest lesson: in an ambient system, the interpretation is the product. Liv's voice, music, and lines only work if her read of the room is right, and if people can trust it. Most of the design work with AI happened outside the model, in deciding what she recognized, when she spoke, and when she stayed quiet.

<figure class="embed"><iframe src="https://player.vimeo.com/video/1041133010?dnt=1&title=0&byline=0&portrait=0" title="Living.fm, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
