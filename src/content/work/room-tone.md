---
title: room_tone
slug: room-tone
headline: "A room that notices when I've been working too long and offers a way out, with light, motion, and music instead of an alarm."
context: "Personal project, 2026"
order: 3
year: "2026"
featured: true
label: "Physical computing and prototyping"
summary: "A room that offers a break, not an alarm."
hero: "/work/room-tone-assets/hero.webp"
heroAlt: "Working at a desk at dusk while a lamp glows on the wall and a disco ball scatters light across the room"
card: "/work/room-tone-assets/card.webp"
cardAlt: "Wayne at his desk looking up at a spinning disco ball, light glowing around the window, a terminal reading room_tone: 90 minutes, activating"
heroVideo: "/work/room-tone-assets/showcase.mp4"
heroPoster: "/work/room-tone-assets/showcase-poster.jpg"
jumps:
  - { label: "Skip to how it runs", to: "how-it-runs" }
short:
  - { lead: "The question.", text: "Working alone, hours disappeared and the day felt flat. Every break tool I tried was an alarm underneath. Could the room ask, the way a person would, with no guilt either way?" }
  - { lead: "What I built.", text: "A Python state machine that notices 90 minutes of steady work, then brings in a light, a spinning disco ball, and music, one layer at a time." }
  - { lead: "What I learned.", text: "I thought I wanted a reward. I didn't. I wanted permission." }
facts:
  - { label: "Project", value: "Personal project" }
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Duration", value: "4 weeks, 2026" }
  - { label: "Tools", value: "Python · pynput · Spotify Web API · Shelly smart plugs · Disco ball motor" }
---

## Time felt flat

At CIID, the day had a rhythm. Crits, shared lunches, someone leaning over to ask if you wanted coffee. When I came back to working alone in Los Angeles, that rhythm was gone. Hours disappeared. Time felt flat. Nothing in my room changed between 9am and 5pm except how stiff I was.

<figure class="days" role="img" aria-label="Two lines from 9am to 5pm. The first is flat. The second rises and falls like a wave.">
  <div class="day">
    <span class="k">A flat day</span>
    <svg viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M4 30 H396" vector-effect="non-scaling-stroke"/></svg>
  </div>
  <div class="day focal">
    <span class="k">A day with shape</span>
    <svg viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M4 40 C 30 18, 60 6, 90 14 S 140 54, 190 50 S 250 10, 290 8 S 350 50, 396 26" vector-effect="non-scaling-stroke"/></svg>
  </div>
  <div class="times"><span>9am</span><span>5pm</span></div>
  <figcaption>Two ways to spend a workday. One flat, one with shape.</figcaption>
</figure>

I tried the usual tools: a Pomodoro timer, phone alarms, even the Time Timer on my desk. Underneath, they all work the same way. A fixed deadline goes off whether or not I'm in the middle of a thought, so I either silence it or resent it. The Flowtime method goes the other way and leaves stopping up to me, which is exactly the part I'm bad at.

I wanted something in between. The room notices, then asks.

<p class="hmw">What if the room could ask "coffee?" the way a person would, with no guilt either way?</p>

## The first version rewarded me

My first idea was a reward. I'd write a checklist for the day, and when I finished it, the disco ball would turn on. A small party for getting things done.

It backfired. The checklist added pressure instead of taking it away, and on days the list didn't get finished, the dark disco ball felt like a verdict. I had built a nicer-looking alarm.

> I thought I wanted a reward. I didn't. I wanted permission.

So I took out the tasks, the score, and the judgment. The second version doesn't care what I got done. It only notices how long I've been at it.

<div class="compare">
  <div class="crow head"><span></span><span class="k">CHECKLIST VERSION</span><span></span><span class="k">ROOM_TONE</span></div>
  <div class="crow"><span class="k">Trigger</span><span class="was">Finishing my tasks</span><span class="to">→</span><span class="is">90 minutes of steady work<small>Time at the desk, not output.</small></span></div>
  <div class="crow"><span class="k">Signal</span><span class="was">A reward</span><span class="to">→</span><span class="is">An offer<small>Light first, then motion, then a question.</small></span></div>
  <div class="crow"><span class="k">A bad day</span><span class="was">An unfinished list</span><span class="to">→</span><span class="is">Nothing to fail<small>There's no score to miss.</small></span></div>
  <div class="crow focal"><span class="k">My response</span><span class="was">Check the box</span><span class="to">→</span><span class="is">Pause, or don't<small>Keep typing and the room lets it go.</small></span></div>
</div>

## A friend, not an alarm

Before rebuilding, I wrote down how it should feel, using Bill Verplank's questions for interaction design.

<div class="principles4">
  <div><h4>Error</h4><p>Losing two hours without noticing until my back hurts.</p></div>
  <div><h4>Metaphor</h4><p>A friend who respects your space and still gives you a heads up.</p></div>
  <div><h4>Model</h4><p>A dimmer slowly turning up, not an alarm going off.</p></div>
  <div><h4>Control</h4><p>No button. Typing starts it, and typing ends it.</p></div>
</div>

## How it runs

Each layer arrives on its own, then leaves in reverse. At any point, I can keep working and let it pass.

<div class="layers" role="table" aria-label="Which layers are on at each stage">
  <div class="lrow head" role="row"><span role="columnheader">Stage and terminal</span><span role="columnheader">Light</span><span role="columnheader">Motion</span><span role="columnheader">Music</span></div>
  <div class="lrow" role="row"><span role="cell">Noticing<small>Counting steady keyboard and mouse use</small><code class="term">✦ room_tone — noticing&#10;⏱ work threshold: 90 minutes</code></span><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow" role="row"><span role="cell">90 minutes<small>The lamp turns on</small><code class="term">▸ 90 minutes — activating&#10;● light on</code></span><i class="on" role="cell" aria-label="on"></i><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow" role="row"><span role="cell">The ball turns<small>"Will you take a moment to pause?"</small><code class="term">◐ ball moving&#10;… will you take a moment to pause?</code></span><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow focal" role="row"><span role="cell">I pause<small>Five seconds without input, music fades in</small><code class="term">✔ pause detected — music starting&#10;♪ music on</code></span><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i></div>
  <div class="lrow" role="row"><span role="cell">I come back<small>Typing again fades the music out</small><code class="term">♩ returning</code></span><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow" role="row"><span role="cell">The room settles<small>Then asks whether to notice again</small><code class="term">· room settles&#10;✧ notice again? (y/n)</code></span><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i></div>
</div>

<figure class="seq">
  <div><video src="/work/room-tone-assets/step-1-launch.mp4" poster="/work/room-tone-assets/step-1-launch-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">01</span><strong>Launch.</strong> I start room_tone from the terminal and get back to work. It starts noticing.</p></div>
  <div><video src="/work/room-tone-assets/step-2-activation.mp4" poster="/work/room-tone-assets/step-2-activation-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">02</span><strong>Activation.</strong> After 90 minutes, the lamp comes on, then the disco ball starts to turn.</p></div>
  <div><video src="/work/room-tone-assets/step-3-ask.mp4" poster="/work/room-tone-assets/step-3-ask-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">03</span><strong>The ask.</strong> It asks if I'll take a moment. I get up, and the music starts.</p></div>
  <div><video src="/work/room-tone-assets/step-4-exit.mp4" poster="/work/room-tone-assets/step-4-exit-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">04</span><strong>Exit.</strong> When I start typing again, the music, the ball, and the light wind down in turn.</p></div>
</figure>

## The build

A Python script on my laptop uses pynput to track keyboard and mouse activity and decide when I've been working without a break. Two Shelly smart plugs switch the lamp and the disco ball motor, and the Spotify Web API handles the music. Activity tracking stays on the laptop.

<div class="sys" aria-label="room_tone system">
  <div class="col"><span class="k">Inputs</span><span class="part">Keyboard and mouse<small>pynput counts steady work, on the laptop.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part focal">Python state machine<small>Noticing, activating, asking, playing, returning.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">Shelly plug: lamp<small>The first layer.</small></span><span class="part">Shelly plug: disco ball motor<small>The second.</small></span><span class="part">Spotify Web API<small>The music.</small></span></div>
</div>

The whole thing is a small state machine: noticing, activating, asking, playing, returning, settled. I gave each state a symbol in the terminal, so I could glance over and see exactly what the system thought was happening. Most of my tuning happened there: how long to wait before the ball, how many seconds of stillness count as a pause, how slowly each layer should fade.

### Why a disco ball

It's personal. Disco balls were at the creative coding nights and CIID parties where work felt most like play. It also has three layers built in: light hits it, it turns, and music belongs with it. Those three layers became the stages of the system.

## Reflection

**Permission, not reward.** The checklist made the break something I had to earn. Taking the judgment out is what made it something I actually took.

**Slow is the point.** Each layer gives me time to finish a thought before the next one arrives. An alarm interrupts. A dimmer lets you notice.

**The same channel in and out.** Typing is what starts it and typing is what ends it, so there's nothing to dismiss and nothing to feel guilty about ignoring.

**What's next.** I started on a tabletop version, a single object with a dial to set the threshold, so it could live on any desk without smart plugs and a ceiling hook. It's on hold for now, but the state machine is ready for it.

<figure class="embed"><iframe src="https://www.youtube-nocookie.com/embed/VhLl8r5Z-h4?rel=0&modestbranding=1&playsinline=1" title="room_tone, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
