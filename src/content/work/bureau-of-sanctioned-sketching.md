---
title: Bureau of Sanctioned Sketching
slug: bureau-of-sanctioned-sketching
headline: "A card game that gives adults official permission to draw again, found by prototyping my way through six things that didn't work."
context: "CIID, 2025"
order: 4
year: "2025"
featured: true
label: "Prototyping and play design"
summary: "A card game that gets adults drawing again."
tocLabels:
  "Three cards, one minute, one shared sheet of paper": "How it plays"
  "Official-looking cards that tell you to draw": "The cards"
  "Most adults stop drawing between 9 and 13": "The problem"
  "Six prototypes before the cards worked": "Six prototypes"
  "Players forgot the cards and kept drawing": "Playtests"
  "Getting people to start works, and coming back is untested": "What's next"
hero: "/work/bss-assets/deck.webp"
heroAlt: "The Bureau of Sanctioned Sketching deck: a navy box with an octopus seal and three card stacks labeled Draw, Using, and While"
card: "/work/bss-assets/card-still.webp"
cardVideo: "/work/bss-assets/card-loop.mp4"
cardAlt: "Hands opening the Bureau of Sanctioned Sketching deck at a table"
heroVideo: "/work/bss-assets/playtest.mp4"
heroPoster: "/work/bss-assets/playtest-poster.jpg"
jumps:
  - { label: "Skip to the prototypes", to: "prototyping-my-way-there" }
short:
  - { lead: "The question.", text: "Most adults stop drawing somewhere between 9 and 13, when they decide they aren't allowed to be bad at it. Can permission be designed?" }
  - { lead: "What I built.", text: "Six prototypes in eight weeks, from a co-op rainstick game to hand-tracking software. The one that worked was a deck of cards." }
skills: [Design research, Prototyping, Interaction design, Facilitation]
contributions:
  - { skill: "Design research", text: "Explored why adults stop drawing as they grow up" }
  - { skill: "Prototyping", text: "Six prototypes in eight weeks, from a co-op rainstick game to hand-tracking software" }
  - { skill: "Interaction design", text: "A deck of cards that uses constraints to give adults permission to draw" }
  - { skill: "Facilitation", text: "Ran playtests and a workshop to test it with people" }
facts:
  - { label: "School", value: "Copenhagen Institute of Interaction Design" }
  - { label: "Role", value: "Designer and builder, solo" }
  - { label: "Duration", value: "8 weeks, 2025, final project" }
  - { label: "Advisors", value: "Rina Shumylo · Chris Downs · Jose Chavarria" }
  - { label: "Tools", value: "Card stock, Arduino, p5.js, motion tracking" }
---

## Three cards, one minute, one shared sheet of paper

Each round, players pull three cards and everyone draws together for one minute.

<figure class="frame"><video src="/work/bss-assets/cards-loop.mp4" poster="/work/bss-assets/cards-loop-poster.jpg" autoplay muted loop playsinline aria-label="Hands open the deck, pull a card, then draw and point at the cards on a shared sheet"></video></figure>

<div class="flow" role="list" aria-label="How a round of BSS plays">
  <div class="step"><span class="n">01</span><b>Pull one card from each stack</b><small>Draw, Using, While.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Read them together</b><small>"The place you're in, eyes closed, having a conversation."</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Draw for one minute</b><small>Everyone at once, on one shared sheet.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">04</span><b>Look, laugh, pass</b><small>Then pull new cards.</small></div>
</div>
<p class="flow-note">↻ Repeat until someone writes their own card.</p>

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

## Official-looking cards that tell you to draw

Playful drawing fades in the places that run on forms: school, then work. Real bureaucracy gets compliance through fear.

The Bureau keeps the structure of official cards, stamps, and procedure, and drops the fear. People already follow official instructions without thinking, and here those instructions say to draw.

<figure class="pair">
  <img src="/work/bss-assets/box-dieline.webp" alt="The flattened BSS box: 'Official permission to draw freely', a quick start of pull files, create directive, draw, play, repeat, and a warning that it may result in joy and creative wonder"/>
  <img src="/work/bss-assets/bureau-card.webp" alt="A hand holding a card titled Official BSS position"/>
  <figcaption>The flattened box lays out a five-step quick start, written as official procedure.</figcaption>
</figure>

## Most adults stop drawing between 9 and 13

Adults still want to play. They stop believing they're allowed to, and drawing is often the first kind of play to go.

I started with desk research. Erving Goffman's idea of <a href="https://en.wikipedia.org/wiki/The_Presentation_of_Self_in_Everyday_Life" target="_blank" rel="noopener">performed selves</a> explains why adults guard how they look in front of others, and Johan Huizinga's <a href="https://en.wikipedia.org/wiki/Magic_circle_(games)" target="_blank" rel="noopener">magic circle</a> describes the agreed-upon space where play is allowed. Together they pointed me at what comes before play: permission.

Then I asked people about it directly. The block was rarely about skill.

<div class="stats">
  <div><span class="k">Interviews</span><b>14</b><p>adults aged 23 to 40, play designers, and therapists</p></div>
  <div><span class="k">Survey</span><b>47</b><p>people on when and why they stopped drawing</p></div>
</div>

**The block has a start date.** People could point to when drawing stopped being play, usually between 9 and 13. Viktor Lowenfeld called this the <a href="https://education.stateuniversity.com/pages/2195/Lowenfeld-Viktor-1903-1960.html" target="_blank" rel="noopener">"period of decision,"</a> when children who aren't encouraged stop drawing and carry "I can't draw" into adulthood.

**Total freedom made people anxious.** Without boundaries, participants invented their own small rules to get started. Those rules became the core of the final card stacks.

> "Not lifting the pen while drawing, eyes closed, left hand instead of my stronger right hand, going with the flow."
>
> Interview participant

**Drawing in a group lowers the stakes.** More than half of survey respondents named embarrassment or fear of judgment as the block.

> "Group drawing would help, if everyone was doing the same thing. No need to be great, just produce something."
>
> Interview participant

<div class="principles4">
  <div><h4>Permission to begin</h4><p>Lower the barrier to starting.</p></div>
  <div><h4>Playful constraints</h4><p>Swap endless choice for strict, silly rules.</p></div>
  <div><h4>Flow, don't overthink</h4><p>Momentum over perfection.</p></div>
  <div><h4>Contagiously fun</h4><p>Joy that spreads on its own.</p></div>
</div>

<p class="hmw">How might we help adults rediscover the joy of drawing in everyday life, without pressure, and without needing to call it art?</p>

<div id="prototyping-my-way-there" style="scroll-margin-top:88px"></div>

## Six prototypes before the cards worked

I didn't know what the answer would look like, so I built to find out. Each prototype tested a different way to get someone to start.

<figure class="grid3">
  <div><video src="/work/bss-assets/proto-timed-prompts.mp4" poster="/work/bss-assets/proto-timed-prompts-poster.jpg" autoplay muted loop playsinline></video><p><strong>Off hand.</strong> Drawing with your non-dominant hand against a clock.</p></div>
  <div><video src="/work/bss-assets/proto-see-through-canvas.mp4" poster="/work/bss-assets/proto-see-through-canvas-poster.jpg" autoplay muted loop playsinline></video><p><strong>See-through canvas.</strong> Players draw from both sides and build on each other's lines.</p></div>
  <div><video src="/work/bss-assets/proto-standing-game.mp4" poster="/work/bss-assets/proto-standing-game-poster.jpg" autoplay muted loop playsinline></video><p><strong>Rotating prompts.</strong> Players call out prompts mid-drawing, then rotate to the next sheet.</p></div>
  <div><video style="object-position: center top" src="/work/bss-assets/proto-kaleidoscope.mp4" poster="/work/bss-assets/proto-kaleidoscope-poster.jpg" autoplay muted loop playsinline></video><p><strong>Rotating canvas.</strong> The canvas keeps turning while you draw.</p></div>
  <div><video src="/work/bss-assets/proto-rainstick.mp4" poster="/work/bss-assets/proto-rainstick-poster.jpg" autoplay muted loop playsinline></video><p><strong>Rain and oil, part 1.</strong> Tilting an Arduino rainstick makes it rain on a shared canvas.</p></div>
  <div><video src="/work/bss-assets/proto-motion-tracking.mp4" poster="/work/bss-assets/proto-motion-tracking-poster.jpg" autoplay muted loop playsinline></video><p><strong>Rain and oil, part 2.</strong> The partner's oil paint spreads based on how wet the canvas is.</p></div>
</figure>

I folded the best parts into Happy Accidents Studio, hand-tracked drawing software with solo and co-op modes.

<figure class="pair keep">
  <img src="/work/bss-assets/hands-kaleidoscope.webp" alt="Happy Accidents Studio: a hand-tracked kaleidoscope drawing on screen, with a player waving at the camera"/>
  <img src="/work/bss-assets/hands-sketch.webp" alt="A hand-tracking sketch in the p5.js editor, drawing lines from a webcam view of a hand"/>
  <figcaption>Happy Accidents Studio combined the prototypes into hand-tracked drawing software.</figcaption>
</figure>

In playtests, it didn't work. People paid attention to the technology, and some couldn't get past setting it up.

So I went back through each prototype and asked what it had taught me. Each lesson became part of the deck.

<table>
  <thead><tr><th>What I saw</th><th>The lesson</th><th>Became</th></tr></thead>
  <tbody>
    <tr><td>Off hand, with a clock</td><td class="feel">A set prompt and a timer give outside permission to start</td><td>Draw</td></tr>
    <tr><td>Off hand, rotating canvas</td><td class="feel">When perfect is impossible, people relax</td><td>Using</td></tr>
    <tr><td>See-through canvas, rotating prompts</td><td class="feel">Seeing, prompting, and building on each other makes it social</td><td>While</td></tr>
    <tr><td>Happy Accidents Studio</td><td class="feel">Technology gets in the way of starting</td><td>Cards</td></tr>
  </tbody>
</table>

## Players forgot the cards and kept drawing

Players often forgot they were using cards at all. They were drawing and talking.

> "I forgot about cards and only drawing until someone changed them."
>
> Playtester

> "Fun engaging with someone else, shared space, little fights like bumper cars."
>
> Playtester

<figure class="frame">
  <img src="/work/bss-assets/playtest-cards.webp" alt="Players reaching across the table, pulling cards from the Draw, Using, and While stacks beside an hourglass while others draw"/>
</figure>

The While cards made drawing feel like improv. In improv, "yes, and" means you accept what your partner offers and add to it, and at the table each player built on the last player's mark.

<figure class="yesand" role="img" aria-label="Four panels: player one draws a circle, player two adds ears, player one adds a face, player two adds whiskers and a tail, ending in one shared drawing of a cat">
  <div class="yes-panel"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="p1" d="M50 28 C66 27 74 40 72 52 C70 66 58 72 47 71 C34 70 27 59 29 47 C31 36 39 29 50 28"/></svg><span class="k"><i class="dot p1"></i>P1</span><b>Makes a mark</b></div>
  <div class="yes-panel"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="p1 old" d="M50 28 C66 27 74 40 72 52 C70 66 58 72 47 71 C34 70 27 59 29 47 C31 36 39 29 50 28"/><path class="p2" d="M35 37 L32 18 L46 29"/><path class="p2" d="M57 29 L70 18 L69 38"/></svg><span class="k"><i class="dot p2"></i>P2</span><b>Yes, and</b></div>
  <div class="yes-panel"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="p1 old" d="M50 28 C66 27 74 40 72 52 C70 66 58 72 47 71 C34 70 27 59 29 47 C31 36 39 29 50 28"/><path class="p2 old" d="M35 37 L32 18 L46 29"/><path class="p2 old" d="M57 29 L70 18 L69 38"/><path class="p1" d="M42 46 L42 50"/><path class="p1" d="M58 46 L58 50"/><path class="p1" d="M46 57 Q50 61 54 57"/></svg><span class="k"><i class="dot p1"></i>P1</span><b>Yes, and</b></div>
  <div class="yes-panel last"><svg viewBox="0 0 100 100" aria-hidden="true"><path class="p1 old" d="M50 28 C66 27 74 40 72 52 C70 66 58 72 47 71 C34 70 27 59 29 47 C31 36 39 29 50 28"/><path class="p1 old" d="M42 46 L42 50"/><path class="p1 old" d="M58 46 L58 50"/><path class="p1 old" d="M46 57 Q50 61 54 57"/><path class="p2 old" d="M35 37 L32 18 L46 29"/><path class="p2 old" d="M57 29 L70 18 L69 38"/><path class="p2" d="M31 54 L16 51"/><path class="p2" d="M31 59 L16 62"/><path class="p2" d="M70 54 L85 51"/><path class="p2" d="M70 59 L85 62"/><path class="p2" d="M64 70 C72 80 84 82 88 72"/></svg><span class="k"><i class="dot both"></i>Both</span><b>One drawing</b></div>
  <figcaption><span><i class="dot p1"></i>Player 1</span><span><i class="dot p2"></i>Player 2</span>Each mark is an offer, so nobody owns the drawing or gets judged for it.</figcaption>
</figure>

Some players got going and started writing their own prompts on scrap paper. Those became the blank wildcards, which I added after watching players take ownership of the game.

<figure class="frame"><img src="/work/bss-assets/group-play.webp" alt="Several people drawing at once around a table covered in BSS cards"/></figure>

## Getting people to start works, and coming back is untested

Once one person drew badly in front of others, the whole table followed.

Interviews told me what the block was. The prototypes showed me what would get past it, and the failed ones taught me the most.

BSS gets people to start drawing. Whether they come back is the next question, and I haven't tested it yet.

<figure class="frame"><img src="/work/bss-assets/drawing-wall-3x2.webp" alt="A wall of playtest drawings pinned up in a grid"/><figcaption>Every drawing players made during playtests, pinned up together.</figcaption></figure>

<figure class="embed" id="film"><iframe src="https://player.vimeo.com/video/1101261294?dnt=1&title=0&byline=0&portrait=0" title="Bureau of Sanctioned Sketching, full video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><figcaption>The full video.</figcaption></figure>
