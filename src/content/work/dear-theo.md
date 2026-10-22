---
title: "Dear Theo, Ever Yours"
slug: dear-theo
headline: "Copy out Van Gogh's letters to his brother to see the world the way he did. A painting builds up as you go."
context: "Personal project, 2026"
order: 13
year: "2026"
featured: false
listIn: experiments
label: "Creative coding and interaction design"
summary: "Copy out Van Gogh's letters to see the world the way he did."
hero: "/work/dear-theo-assets/card.webp"
heroAlt: "A passage from Van Gogh's letter is typed out under a blank tile board, and The Starry Night is laid down tile by tile until the real painting fades in"
heroVideo: "/work/dear-theo-assets/typing.mp4"
heroPoster: "/work/dear-theo-assets/typing-poster.jpg"
og: "/work/dear-theo-assets/og.jpg"
ogAlt: "The Starry Night by Van Gogh as a mosaic of small square tiles"
short:
  - { lead: "The question.", text: "How did Van Gogh see the world? In his letters to his brother Theo, he described the sky, his room, and his paintings all the time." }
  - { lead: "What I built.", text: "A typing piece. You copy out a passage from his letters to Theo, and one of his paintings is laid down tile by tile, then gives way to the painting itself." }
skills: [Creative coding, Interaction design, Prototyping]
contributions:
  - { skill: "Creative coding", text: "Built the mosaic in the browser: each painting sampled into tiles that are laid down in patches as you type" }
  - { skill: "Interaction design", text: "Turned reading into copying: every correct letter places tiles, and each colour word is set into the part of the painting it names" }
  - { skill: "Prototyping", text: "Built it to run in the browser, so anyone can try it with a keyboard" }
facts:
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Year", value: "2026 · One evening" }
  - { label: "Tools", value: "JavaScript · Canvas" }
  - { label: "Text", value: "Letters of Vincent van Gogh, 1888 to 1890" }
---

## Try it

<figure class="embed live ever"><iframe src="/play/dear-theo-live/" title="Dear Theo, Ever Yours, live: type Van Gogh's words and the painting is laid down as a mosaic" loading="lazy"></iframe><figcaption>Click or tap the picture and start typing. Pick any painting from the row underneath.</figcaption></figure>

<script>
// Phones: the piece says when the keyboard is up, and the page pins it to the part of the screen still visible.
(() => {
  const frame = document.querySelector('figure.ever iframe'); if (!frame) return;
  const fig = frame.closest('figure'), vv = window.visualViewport;
  let on = false, keepY = 0;
  const fit = () => { if (!on) return; frame.style.top = (vv ? vv.offsetTop : 0) + 'px'; frame.style.height = (vv ? vv.height : innerHeight) + 'px'; };
  const set = v => {
    if (v === on) return; on = v;
    if (v) { keepY = scrollY; fig.style.minHeight = fig.offsetHeight + 'px'; frame.classList.add('typing'); document.documentElement.classList.add('dt-typing'); fit(); }
    else { frame.classList.remove('typing'); frame.style.top = frame.style.height = ''; document.documentElement.classList.remove('dt-typing'); fig.style.minHeight = ''; scrollTo(0, keepY); }
  };
  addEventListener('message', e => { if (e.source === frame.contentWindow && e.data && e.data.dt === 'typing') set(!!e.data.on); });
  if (vv) { vv.addEventListener('resize', fit); vv.addEventListener('scroll', fit); }
})();
</script>

## The idea

I started reading *Ever Yours*, Van Gogh's letters to his brother Theo. He described the sky all the time, and I kept wondering how he saw the world.

They say copy the greats. Van Gogh did. In Paris he painted copies of Hiroshige's woodblock prints, and at the asylum in Saint-Rémy he made twenty-one paintings after Millet. He told Theo it was "not purely and simply copying." He was translating them into colour.

Copying was how he learned to see. So here, you copy him. As you type out his words, his way of seeing is laid down tile by tile, each colour word set into the part of the painting it names, until the painting itself appears.

He was prolific. He cared about his craft. He battled his demons and kept going anyway. And through all of it, he noticed things.

## How it works

<div class="flow" role="list" aria-label="How typing becomes a painting">
  <div class="step"><span class="n">01</span><b>Type</b><small>Copy out a passage from one of his letters.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Lay</b><small>Every correct letter lays down more tiles. Colour words are set into the part they name.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Reveal</b><small>At "Ever yours, Vincent," the mosaic gives way to the painting.</small></div>
</div>

Five paintings, each paired with a passage from his letters to Theo. Pick any of them from the row under the picture.

## A letter I keep coming back to

My favorite passage isn't about a painting at all. It's from a letter in August 1876, years before he started painting.

<blockquote class="letter">
<p>My dear Theo,</p>
<p>Yesterday, I went to see Gladwell, who is home for a few days. A terrible blow has struck them, his young sister, so full of life, with dark eyes and hair, had fallen from a horse at Blackheath; they found her unconscious and she died five hours later, without regaining consciousness. She was seventeen years old…</p>
<p>They had all just come back from the funeral; the whole household was in mourning.</p>
<p>…So then, <em>we walked up and down the platform of the station, an ordinary world, but we were animated by thoughts that were not ordinary.</em> Such moments do not last long, and soon we had to part.</p>
<p>Your loving brother,<br>Vincent</p>
<p class="cite">Vincent to Theo, Isleworth, 18 August 1876. He was 23.</p>
</blockquote>

This was before he was a painter, when he still hoped to become a preacher. In the middle of all of it, he could still notice.

## Sources

Letters to Theo in Johanna van Gogh-Bonger's translation, as published on [WebExhibits](https://www.webexhibits.org/vangogh/), including the [letter from Isleworth, 18 August 1876](https://www.webexhibits.org/vangogh/letter/4/073.htm) and his [letter on copying Millet, January 1890](https://www.webexhibits.org/vangogh/letter/20/623.htm). On his copies after Hiroshige, the [Van Gogh Museum](https://www.vangoghmuseum.nl/en/japanese-prints/person/33202); after Millet, [The Met](https://www.metmuseum.org/art/collection/search/436526). Paintings are public domain, via [Wikimedia Commons](https://commons.wikimedia.org/).
