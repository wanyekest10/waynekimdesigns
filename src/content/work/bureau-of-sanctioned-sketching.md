---
title: Bureau of Sanctioned Sketching
slug: bureau-of-sanctioned-sketching
headline: "A card game that gives adults official permission to draw again, found by prototyping my way through six things that didn't work."
context: "CIID, 2025"
order: 4
label: "Prototyping and play design"
summary: "A card game that gives adults permission to draw."
hero: "/work/bss-assets/deck.webp"
heroAlt: "The Bureau of Sanctioned Sketching deck: a navy box with an octopus seal and three card stacks labeled Draw, Using, and While"
heroVideo: "/work/bss-assets/playtest.mp4"
heroPoster: "/work/bss-assets/playtest-poster.jpg"
jumps:
  - { label: "Skip to the prototypes", to: "prototyping-my-way-there" }
  - { label: "Skip to the game", to: "how-it-plays" }
  - { label: "Skip to playtesting", to: "playtesting" }
short:
  - { lead: "The question.", text: "Most adults stop drawing not for lack of skill, but because somewhere around 9 to 13 they decided they weren't allowed to be bad at it. Can permission be designed?" }
  - { lead: "What I built.", text: "Six prototypes in eight weeks, from an Arduino rainstick to motion-tracking software. The one that worked was a deck of cards." }
  - { lead: "What I learned.", text: "Constraints, not freedom, get adults drawing. And permission spreads once someone goes first." }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design" }
  - { label: "Role", value: "Designer and researcher, solo" }
  - { label: "Duration", value: "8 weeks, 2025, final project" }
  - { label: "Advisors", value: "Rina Shumylo · Chris Downs · Jose Chavarria" }
  - { label: "Tools", value: "Card stock, Arduino, p5.js, motion tracking" }
---

## Permission, not skill

Adults still want to play. They just stop believing they're allowed to, and drawing is often the first kind of play to go.

I talked to 14 people: adults aged 23 to 40, play designers, and therapists. I also ran a drawing survey with 47 people. The block was rarely about skill. It was about not knowing where to begin.

> "I wouldn't really know where to start."
>
> Interview participant

Three things shaped everything after:

- **The block has a start date.** Most people stopped drawing for fun between 9 and 13, the age when kids start judging their work against realism.
- **Freedom is just another blank page.** Left alone, people invented their own small rules, like drawing without lifting the pen.
- **Shared exposure lowers the stakes.** More than half of survey respondents named embarrassment or fear of judgment. Being bad together is easier than being bad alone.

## Prototyping my way there

I didn't know what the answer would look like, so I built to find out. Each prototype tested a different way to get someone to start.

<figure class="grid3">
  <div><video src="/work/bss-assets/proto-timed-prompts.mp4" poster="/work/bss-assets/proto-timed-prompts-poster.jpg" autoplay muted loop playsinline></video><p><strong>Timed prompts.</strong> A subject and a clock.</p></div>
  <div><video src="/work/bss-assets/proto-spinning-canvas.mp4" poster="/work/bss-assets/proto-spinning-canvas-poster.jpg" autoplay muted loop playsinline></video><p><strong>Spinning canvas.</strong> A surface that won't sit still.</p></div>
  <div><video src="/work/bss-assets/proto-standing-game.mp4" poster="/work/bss-assets/proto-standing-game-poster.jpg" autoplay muted loop playsinline></video><p><strong>Standing game.</strong> Drawing together, on your feet.</p></div>
  <div><video src="/work/bss-assets/proto-rainstick.mp4" poster="/work/bss-assets/proto-rainstick-poster.jpg" autoplay muted loop playsinline></video><p><strong>Arduino rainstick.</strong> Tilt it to paint with someone else.</p></div>
  <div><video src="/work/bss-assets/proto-kaleidoscope.mp4" poster="/work/bss-assets/proto-kaleidoscope-poster.jpg" autoplay muted loop playsinline></video><p><strong>Kaleidoscope.</strong> Every stroke mirrored into something pretty.</p></div>
  <div><video src="/work/bss-assets/proto-motion-tracking.mp4" poster="/work/bss-assets/proto-motion-tracking-poster.jpg" autoplay muted loop playsinline></video><p><strong>Motion tracking.</strong> Drawing in the air.</p></div>
</figure>

I combined the best parts into one piece of software, Happy Accidents Studio. In playtests, it didn't work. The technology became the thing people paid attention to, and some people couldn't get past setting it up. So I went back through each prototype and asked what it had actually taught me.

## What each prototype taught

<table>
  <thead><tr><th>What I saw</th><th>The lesson</th><th>Became</th></tr></thead>
  <tbody>
    <tr><td>Timed prompts</td><td class="feel">A prompt with outside authority gets people started</td><td>Draw</td></tr>
    <tr><td>Rainstick, non-dominant hands</td><td class="feel">When perfect is impossible, people relax</td><td>Using</td></tr>
    <tr><td>Standing game</td><td class="feel">Shared, improvised rules make it social</td><td>While</td></tr>
    <tr><td>Happy Accidents Studio</td><td class="feel">Technology gets in the way of starting</td><td>Cards</td></tr>
  </tbody>
</table>

## How it plays

Three card stacks, one minute, one shared sheet of paper.

<figure class="medium"><video src="/work/bss-assets/how-it-plays.mp4" poster="/work/bss-assets/how-it-plays-poster.jpg" autoplay muted loop playsinline></video></figure>

- **Draw** sets the subject: "the place you're in."
- **Using** sets a physical limit: "your non-dominant hand," "eyes closed."
- **While** sets a rule for the group: "having a conversation," "guide your neighbor's hand."

The same deck works at three levels of closeness:

<div class="cols3">
  <div><h4>Strangers</h4><p>A low-stakes alternative to small talk.</p></div>
  <div><h4>Colleagues</h4><p>Outside permission to be silly at work.</p></div>
  <div><h4>Old friends</h4><p>The main event of the night.</p></div>
</div>

<figure class="pair">
  <img src="/work/bss-assets/in-play.webp" alt="Cards for Draw, Using, and While on the table as someone draws with two fingers"/>
  <img src="/work/bss-assets/deck-and-drawing.webp" alt="A player drawing next to the deck and loose cards"/>
</figure>

## Playtesting

Players often forgot they were using cards at all. They were drawing and talking. And some started writing their own prompts on scrap paper.

That became the blank wildcards. They weren't in the plan. They came from watching players take ownership of the game.

<figure class="medium"><img src="/work/bss-assets/group-play.webp" alt="Several people drawing at once around a table covered in BSS cards"/></figure>

## Why a bureau

Playful drawing fades in the places that run on forms: school, then work. Real bureaucracy gets compliance through fear. The Bureau keeps the structure, official cards and stamps and procedure, and drops the fear. People already follow official instructions without thinking. Here, those instructions say to draw.

<figure class="medium"><img src="/work/bss-assets/bureau-card.webp" alt="A hand holding a card titled Official BSS position"/></figure>

## Reflection

**Permission is contagious.** Once one person draws badly in front of others, the whole table follows.

**Building was the research.** Interviews told me what the block was. Only the prototypes told me what would get past it, and the failed ones taught the most.

**The result is real but narrow.** BSS gets people to start. Whether they come back is the next question, and I haven't tested it yet.

<figure class="narrow"><img src="/work/bss-assets/drawing-wall.webp" alt="A wall of playtest drawings pinned up in a grid"/><figcaption>Everything players drew during playtests.</figcaption></figure>
