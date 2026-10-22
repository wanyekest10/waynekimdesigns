---
title: Ever Yours
slug: ever-yours
headline: "Type out what Van Gogh wrote about his paintings, and each painting is laid down as a mosaic, tile by tile."
context: "Personal project, 2026"
order: 13
year: "2026"
featured: false
listIn: experiments
label: "Creative coding and interaction design"
summary: "Type Van Gogh's letters, and his paintings appear tile by tile."
hero: "/work/ever-yours-assets/card.webp"
heroAlt: "The Bedroom by Van Gogh as a mosaic of small square tiles, with the words violet, yellow, butter and tiles set into the parts they name"
hideHero: true
short:
  - { lead: "The question.", text: "How did Van Gogh see the world? He described the sky, his room, and his paintings to his brother Theo all the time." }
  - { lead: "What I built.", text: "A typing piece. You copy out a passage from his letters, and the painting he was writing about is laid down tile by tile, then gives way to the painting itself." }
  - { lead: "What I learned.", text: "A good-looking mosaic wasn't enough. The words had to do something, and the visitor needed something to do. Copying gave them both." }
skills: [Creative coding, Interaction design, Prototyping]
contributions:
  - { skill: "Creative coding", text: "Built the mosaic in the browser: each painting sampled into tiles that are laid down in patches as you type" }
  - { skill: "Interaction design", text: "Turned reading into copying: every correct letter places tiles, and each colour word is set into the part of the painting it names" }
  - { skill: "Prototyping", text: "Went through five versions, from text mosaics to a live sky, before landing on typing" }
facts:
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Year", value: "2026" }
  - { label: "Tools", value: "JavaScript · Canvas" }
  - { label: "Text", value: "Letters of Vincent van Gogh, 1888 to 1890" }
---

## The idea

They say copy the greats. But first I wondered how they saw the world. In his letters to his brother Theo, Vincent described the sky all the time. Copying his words out is a way to slow down and read them closely, and here, as you type, the painting he was writing about is laid down tile by tile.

## Try it

<figure class="embed live ever"><iframe src="/play/ever-yours-live/" title="Ever Yours, live: type Van Gogh's words and the painting is laid down as a mosaic" loading="lazy"></iframe><figcaption>Click the picture and start typing. Pick any painting from the row underneath. Works best with a keyboard.</figcaption></figure>

## How it works

<div class="flow" role="list" aria-label="How typing becomes a painting">
  <div class="step"><span class="n">01</span><b>Type</b><small>Copy out a passage from one of his letters.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Lay</b><small>Every correct letter lays down more tiles. Colour words are set into the part they name.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Reveal</b><small>At "Ever yours, Vincent," the mosaic gives way to the painting.</small></div>
</div>

Each painting starts as a faint grey ghost. The tiles are laid down in patches, the way a mosaic goes down a section at a time, and the colour builds as you go. When you finish a word like "violet," "butter," or "corn," it is set into the mosaic on the spot that matches that colour. At the end, your copy holds for a moment, then the real painting fades in over it, so you see how close the copy got and how much more is in his brushwork.

Six paintings, each with what he wrote about it: The Bedroom, The Starry Night, Wheatfield with Crows, Sunflowers, Café Terrace at Night, and Starry Night Over the Rhône.

## How I got here

It started with a style. I saw posters made of words, where the text forms an image, and wanted to try it with Van Gogh's letters. The first versions looked right but didn't say much.

<figure class="grid3 three">
  <img src="/work/ever-yours-assets/early-1.webp" alt="The swirl from The Starry Night as bands of word tiles in navy, black and grey on white"/>
  <img src="/work/ever-yours-assets/early-2.webp" alt="A night sky mosaic with a full moon, stars, a cypress and a lit-up skyline, made of tiny letter tiles"/>
  <img src="/work/ever-yours-assets/early-3.webp" alt="A teal night sky mosaic with the words aquamarine, sky and water set into it in large tiles"/>
  <figcaption>Earlier versions: the swirl as word tiles, the real sky over Los Angeles, then the sky over Saint-Rémy coloured in as he names each colour.</figcaption>
</figure>

The swirl made a nice poster, but the words were just texture. The live sky was more interesting: it followed the real sun, moon and Venus, and picked a passage from his letters to match. But you only watched it. The best moment came when the sky stayed grey until he said "aquamarine." The words finally did something.

What it still needed was something for the visitor to do. Typing his words out gave the piece a verb, and copying is how you learn from the greats anyway.

## Sources

Letters to Theo in Johanna van Gogh-Bonger's translation, and the letter to his sister Wil, as published on [WebExhibits](https://www.webexhibits.org/vangogh/). Paintings are public domain, via [Wikimedia Commons](https://commons.wikimedia.org/).
