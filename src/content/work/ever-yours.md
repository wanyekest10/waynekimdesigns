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
  - { lead: "The question.", text: "How did Van Gogh see the world? In his letters to his brother Theo, he described the sky, his room, and his paintings all the time." }
  - { lead: "What I built.", text: "A typing piece. You copy out a passage from his letters, and the painting he was writing about is laid down tile by tile, then gives way to the painting itself." }
skills: [Creative coding, Interaction design, Prototyping]
contributions:
  - { skill: "Creative coding", text: "Built the mosaic in the browser: each painting sampled into tiles that are laid down in patches as you type" }
  - { skill: "Interaction design", text: "Turned reading into copying: every correct letter places tiles, and each colour word is set into the part of the painting it names" }
  - { skill: "Prototyping", text: "Built it to run in the browser, so anyone can try it with a keyboard" }
facts:
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Year", value: "2026" }
  - { label: "Tools", value: "JavaScript · Canvas" }
  - { label: "Text", value: "Letters of Vincent van Gogh, 1888 to 1890" }
---

## The idea

I started reading *Ever Yours*, the collected letters of Vincent van Gogh, while watching the sunset most evenings. In his letters to his brother Theo, he described the sky all the time, and I kept wondering how he saw the world.

Most of his work was only valued after he died. He kept painting anyway, with passion and almost no recognition in his lifetime. I'm at a point in my own life where I'm exploring what's worth doing, and that stayed with me.

They say copy the greats. Copying his words out is a way to slow down and read them closely. Here, as you type, the painting he was writing about is laid down tile by tile.

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

## Sources

Letters to Theo in Johanna van Gogh-Bonger's translation, and the letter to his sister Wil, as published on [WebExhibits](https://www.webexhibits.org/vangogh/). Paintings are public domain, via [Wikimedia Commons](https://commons.wikimedia.org/).
