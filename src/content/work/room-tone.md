---
title: room_tone
slug: room-tone
headline: "A room that notices when I've worked too long, and suggests a break with light, motion, and music."
context: "Personal project, 2026"
order: 3
year: "2026"
featured: true
label: "Physical computing and prototyping"
summary: "A room that nudges me to take a break."
tocLabels:
  "Working alone, the hours disappeared": "The problem"
  "Asking like a friend would": "The idea"
  "A Python script, two smart plugs, and Spotify": "The build"
  "The first version rewarded me, and it backfired": "First version"
  "What I learned and what's next": "What I learned"
cardVideo: "/work/room-tone-assets/card-loop.mp4"
hero: "/work/room-tone-assets/hero.webp"
heroAlt: "Working at a desk at dusk while a lamp glows on the wall and a disco ball scatters light across the room"
card: "/work/room-tone-assets/card-still.webp"
cardAlt: "Wayne at his desk looking up at a spinning disco ball, light glowing around the window, a terminal reading room_tone: 90 minutes, activating"
heroVideo: "/work/room-tone-assets/showcase.mp4"
heroPoster: "/work/room-tone-assets/showcase-poster.jpg"
jumps:
  - { label: "Skip to how it runs", to: "how-it-runs" }
short:
  - { lead: "The question.", text: "Working alone, hours disappeared, and every break tool I tried was an alarm underneath. Could the room ask, the way a person would, with no guilt either way?" }
  - { lead: "What I built.", text: "A Python state machine that notices 90 minutes of steady work, then brings in a light, a spinning disco ball, and music, one layer at a time." }
skills: [Creative coding, Physical computing, Interaction design]
contributions:
  - { skill: "Creative coding", text: "A Python state machine that notices 90 minutes of steady work" }
  - { skill: "Physical computing", text: "Wired smart plugs, a light, a disco ball motor, and Spotify into one sequence" }
  - { skill: "Interaction design", text: "Cues that arrive one layer at a time and ask, rather than alarm" }
facts:
  - { label: "Project", value: "Personal project" }
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Duration", value: "4 weeks, 2026" }
  - { label: "Tools", value: "Python · pynput · Spotify Web API · Shelly smart plugs · Disco ball motor" }
---

<figure class="seq">
  <div><video src="/work/room-tone-assets/step-1-launch.mp4" poster="/work/room-tone-assets/step-1-launch-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">01</span><strong>Launch.</strong> I start room_tone in the terminal and go back to work.</p></div>
  <div><video src="/work/room-tone-assets/step-2-activation.mp4" poster="/work/room-tone-assets/step-2-activation-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">02</span><strong>Activation.</strong> After 90 minutes, the lamp comes on, then the disco ball turns.</p></div>
  <div><video src="/work/room-tone-assets/step-3-ask.mp4" poster="/work/room-tone-assets/step-3-ask-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">03</span><strong>The ask.</strong> It asks if I'll take a moment. I get up, and music starts.</p></div>
  <div><video src="/work/room-tone-assets/step-4-exit.mp4" poster="/work/room-tone-assets/step-4-exit-poster.jpg" autoplay muted loop playsinline></video><p><span class="n">04</span><strong>Exit.</strong> When I type again, the music, ball, and light wind down in turn.</p></div>
</figure>

## Working alone, the hours disappeared

At CIID, the day had a rhythm: crits, shared lunches, someone leaning over to ask if you wanted coffee. Back working alone in Los Angeles, that rhythm was gone. Nothing in my room changed between 9am and 5pm except how stiff I was.

<figure class="wide"><video src="/work/room-tone-assets/lab-table.mp4" poster="/work/room-tone-assets/lab-table-poster.jpg" autoplay muted loop playsinline></video><figcaption>At CIID, people built, tested, and checked in on each other all afternoon.</figcaption></figure>

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
  <figcaption>Working alone, my days went flat. At CIID, they had shape.</figcaption>
</figure>

I tried a Pomodoro timer, phone alarms, and the Time Timer on my desk. Each one goes off at a fixed time, even in the middle of a thought, so I either silenced it or resented it.

The Flowtime method leaves stopping up to me, which is the part I'm bad at. I wanted something in between: the room notices, then asks.

<p class="hmw">What if the room could ask "coffee?" the way a person would, with no guilt either way?</p>

## Asking like a friend would

Before building it, I wrote down how it should feel, using Bill Verplank's questions for interaction design.

<div class="principles4">
  <div><h4>Error</h4><p>Losing two hours without noticing until my back hurts.</p></div>
  <div><h4>Metaphor</h4><p>A friend who respects your space and still gives you a heads up.</p></div>
  <div><h4>Model</h4><p>Like a dimmer slowly turning up.</p></div>
  <div><h4>Control</h4><p>No button. Typing starts it, and typing ends it.</p></div>
</div>

## How it runs

Each layer arrives on its own, then leaves in reverse. At any point, I can keep working and let it pass.

<div class="layers" role="table" aria-label="Which layers are on at each stage">
  <div class="lrow head" role="row"><span role="columnheader">Stage</span><span role="columnheader" class="th-term">Terminal</span><span role="columnheader">Light</span><span role="columnheader">Motion</span><span role="columnheader">Music</span></div>
  <div class="lrow" role="row"><span role="cell">Noticing<small>Counting steady keyboard and mouse use</small></span><code class="term" role="cell">✦ room_tone: noticing&#10;⏱ work threshold: 90 minutes</code><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow" role="row"><span role="cell">90 minutes<small>The lamp turns on</small></span><code class="term" role="cell">▸ 90 minutes: activating&#10;● light on</code><i class="on" role="cell" aria-label="on"></i><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow" role="row"><span role="cell">The ball turns<small>"Will you take a moment to pause?"</small></span><code class="term" role="cell">◐ ball moving&#10;… will you take a moment to pause?</code><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow focal" role="row"><span role="cell">I pause<small>Five seconds without input, music fades in</small></span><code class="term" role="cell">✔ pause detected: music starting&#10;♪ music on</code><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i></div>
  <div class="lrow" role="row"><span role="cell">I come back<small>Typing again fades the music out</small></span><code class="term" role="cell">♩ returning</code><i class="on" role="cell" aria-label="on"></i><i class="on" role="cell" aria-label="on"></i><i role="cell" aria-label="off"></i></div>
  <div class="lrow" role="row"><span role="cell">The room settles<small>Then asks whether to notice again</small></span><code class="term" role="cell">· room settles&#10;✧ notice again? (y/n)</code><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i><i role="cell" aria-label="off"></i></div>
</div>

## A Python script, two smart plugs, and Spotify

A Python script on my laptop uses pynput to track keyboard and mouse activity and decide when I've worked without a break. Two Shelly smart plugs switch the lamp and the disco ball motor, and the Spotify Web API plays the music.

<div class="sys" aria-label="room_tone system">
  <div class="col"><span class="k">Inputs</span><span class="part">Keyboard and mouse<small>pynput counts steady work, on the laptop.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Brain</span><span class="part focal">Python state machine<small>Noticing, activating, asking, playing, returning.</small></span></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="col"><span class="k">Outputs</span><span class="part">Shelly plug: lamp<small>The first layer.</small></span><span class="part">Shelly plug: disco ball motor<small>The second.</small></span><span class="part">Spotify Web API<small>The music.</small></span></div>
</div>

The script is a small state machine: noticing, activating, asking, playing, returning, settled. Each state has its own symbol in the terminal, so I can glance over and see what the system thinks is happening.

Most of my tuning happened there. I adjusted how long to wait before the ball, how many seconds of stillness count as a pause, and how slowly each layer fades.

I picked a disco ball because they were at the creative coding nights and CIID parties where work felt most like play. It also has three layers built in: light hits it, it turns, and music goes with it. Those became the stages of the system.

## The first version rewarded me, and it backfired

My first idea was a reward. I'd write a checklist for the day, and when I finished it, the disco ball would turn on.

The checklist added pressure instead of taking it away. On days the list didn't get finished, the dark disco ball felt like a verdict. It had turned into another alarm.

> I expected to want a reward. What I wanted was permission to stop.

So I took out the tasks, the score, and the judgment. The second version only notices how long I've been at it.

<div class="compare">
  <div class="crow head"><span></span><span class="k">CHECKLIST VERSION</span><span></span><span class="k">ROOM_TONE</span></div>
  <div class="crow"><span class="k">Trigger</span><span class="was">Finishing my tasks</span><span class="to">→</span><span class="is">90 minutes of steady work<small>Time at the desk.</small></span></div>
  <div class="crow"><span class="k">Signal</span><span class="was">A reward</span><span class="to">→</span><span class="is">An offer<small>Light first, then motion, then a question.</small></span></div>
  <div class="crow"><span class="k">A bad day</span><span class="was">An unfinished list</span><span class="to">→</span><span class="is">Nothing to fail<small>There's no score to miss.</small></span></div>
  <div class="crow focal"><span class="k">My response</span><span class="was">Check the box</span><span class="to">→</span><span class="is">Pause, or don't<small>Keep typing and the room lets it go.</small></span></div>
</div>

## What I learned and what's next

**Without the judgment, I took the breaks.** The checklist made a break something I had to earn. Once that was gone, I actually stopped.

**Slow layers leave time to finish a thought.** Each layer waits a while before the next one arrives, so I can wrap up what I'm doing.

**Typing starts it and typing ends it.** There's nothing to dismiss, so there's nothing to feel guilty about ignoring.

**What's next.** I started a tabletop version: one object with a dial to set the threshold, so it could live on any desk without smart plugs and a ceiling hook. It's on hold for now, and the state machine is ready for it.

room_tone is one of a few calm tech prototypes, along with [Toilet Paper Elevator](/work/toilet-paper-elevator/) and [Linee](/work/linee/), where it started.

<figure class="embed"><iframe src="https://www.youtube-nocookie.com/embed/VhLl8r5Z-h4?rel=0&modestbranding=1&playsinline=1" title="room_tone, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full room_tone video.</figcaption></figure>
