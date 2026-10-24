---
title: "Dear Theo, Ever Yours"
slug: dear-theo
headline: "Step into Van Gogh's shoes for a letter. Write out his letters to his brother, and one of his paintings comes in as you go."
context: "Personal project, 2026"
order: 13
year: "2026"
featured: false
listIn: experiments
label: "Creative coding and interaction design"
summary: "A Van Gogh painting that appears as you write out his letters."
hero: "/work/dear-theo-assets/card.webp"
heroAlt: "A passage from Van Gogh's letter is typed out under a blank tile board, and The Starry Night is laid down tile by tile until the real painting fades in"
heroVideo: "/work/dear-theo-assets/typing.mp4"
heroPoster: "/work/dear-theo-assets/typing-poster.jpg"
og: "/work/dear-theo-assets/og.jpg"
ogAlt: "The Starry Night by Van Gogh as a mosaic of small square tiles"
short:
  - { lead: "The question.", text: "How did Van Gogh see the world? In his letters to his brother Theo, he described the sky, his room, and his paintings all the time." }
  - { lead: "What I built.", text: "A typing piece that puts you in his shoes for a while. You write out a passage from his letters to Theo, and a painting he made around the same time comes in tile by tile, each color word filling in the part it names." }
tryIt: '<figure class="embed live ever"><iframe src="/play/dear-theo-live/" title="Dear Theo, Ever Yours, live: type Van Gogh''s words and the painting is laid down as a mosaic" loading="lazy"></iframe><figcaption>Click or tap the picture and start typing. Pick any painting from the row underneath.</figcaption></figure>'
skills: [Creative coding, Interaction design, Prototyping]
contributions:
  - { skill: "Creative coding", text: "Built the mosaic in the browser: each painting sampled into tiles that are laid down in patches as you type, and each color word matched to the part of the painting closest to it" }
  - { skill: "Interaction design", text: "Turned reading his letters into writing them: every correct letter places tiles, and each color word fills in the part of the painting it names" }
  - { skill: "Prototyping", text: "Built it to run in the browser, on a laptop or a phone" }
facts:
  - { label: "Role", value: "Designer and developer, solo" }
  - { label: "Year", value: "2026 · One evening" }
  - { label: "Tools", value: "JavaScript · Canvas" }
  - { label: "Text", value: "Letters of Vincent van Gogh, 1888 to 1890" }
---

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
  // Desktop: when you click in to type, bring the whole piece into view (painting and the line you're typing)
  addEventListener('message', e => {
    if (e.source !== frame.contentWindow || !e.data || e.data.dt !== 'focus') return;
    const r = frame.getBoundingClientRect();
    if (r.top < 70 || r.bottom > innerHeight) window.scrollBy({ top: r.top - Math.max(70, (innerHeight - r.height) / 2), behavior: 'smooth' });
  });
  if (vv) { vv.addEventListener('resize', fit); vv.addEventListener('scroll', fit); }
})();
</script>

## The idea

I started reading <a class="vs vs-link" href="https://yalebooks.yale.edu/book/9780300209471/ever-yours/" target="_blank" rel="noopener" aria-expanded="false"><em>Ever Yours</em><span class="vs-pop" role="tooltip"><span class="vs-img"><img src="/work/dear-theo-assets/ever-yours-cover.webp" alt="Cover of Ever Yours: The Essential Letters, with a Van Gogh drawing of a man sowing a field under a page of his handwriting" loading="lazy"><span class="cap">Yale University Press, 2014 ↗</span></span></span></a>, Van Gogh's letters to his brother Theo. He described everything he saw, and I kept wondering how he saw the world.

They say copy the greats. Van Gogh did. In Paris he painted copies of <span class="vs" tabindex="0" role="button" aria-expanded="false">Hiroshige's woodblock prints<span class="vs-pop" role="tooltip"><span class="vs-img"><img src="/work/dear-theo-assets/copy-hiroshige.webp" alt="Hiroshige's woodblock print of a plum tree in a garden" loading="lazy"><span class="cap">Hiroshige, 1857</span></span><span class="to" aria-hidden="true">→</span><span class="vs-img"><img src="/work/dear-theo-assets/copy-vangogh-plum.webp" alt="Van Gogh's painted copy of the same plum tree, with a calligraphy border" loading="lazy"><span class="cap">Van Gogh, 1887</span></span></span></span><sup class="fn"><a href="#src-1" id="ref-1" aria-label="Source 1">1</a></sup>, and at the asylum in Saint-Rémy he made <span class="vs" tabindex="0" role="button" aria-expanded="false">twenty-one paintings after Millet<span class="vs-pop" role="tooltip"><span class="vs-img"><img src="/work/dear-theo-assets/copy-millet.webp" alt="Millet's drawing of a child taking her first steps toward her father" loading="lazy"><span class="cap">Millet, c. 1859–66</span></span><span class="to" aria-hidden="true">→</span><span class="vs-img"><img src="/work/dear-theo-assets/copy-vangogh-steps.webp" alt="Van Gogh's painting of the same scene, in color" loading="lazy"><span class="cap">Van Gogh, 1890</span></span></span></span>.<sup class="fn"><a href="#src-2" id="ref-2" aria-label="Source 2">2</a></sup> He told Theo it was "not purely and simply copying."<sup class="fn"><a href="#src-3" id="ref-3" aria-label="Source 3">3</a></sup> He was translating them into color.

The [immersive Van Gogh shows](https://lareviewofbooks.org/article/van-gogh-experiences-immersive-art-in-the-covid-era/) wrap you in his paintings. I wanted something slower, something you do yourself. Here, you write out his letters, and one of his paintings comes in as you go, each color word filling in the part it names. For a few minutes, you're paying attention to what he paid attention to.

## How it works

<figure class="frame"><video style="aspect-ratio: auto" src="/work/dear-theo-assets/typing.mp4" poster="/work/dear-theo-assets/typing-poster.jpg" autoplay muted loop playsinline aria-label="The Starry Night passage being written out, color words filling in their part of the painting, until the real painting appears"></video><figcaption>Writing out his June 1889 letter: "countryside," "window" and "star" fill in their part of The Starry Night, then the painting appears.</figcaption></figure>

<div class="flow" role="list" aria-label="How typing becomes a painting">
  <div class="step"><span class="n">01</span><b>Type</b><small>Write out a passage from one of his letters.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Lay</b><small>Every correct letter lays down more tiles. Color words fill in the part of the painting they name.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">03</span><b>Reveal</b><small>When you finish the passage, the mosaic sharpens into the painting.</small></div>
</div>

Five paintings, each paired with a passage from his letters to Theo. Pick any of them from the row under the picture. You only type the letters: spaces and punctuation fill themselves in, and a slip onto a neighboring key still counts. The attention stays on his words, not on typing them perfectly.

## Sources

<ol class="refs">
<li id="src-1">On his copies after Hiroshige: the <a href="https://www.vangoghmuseum.nl/en/japanese-prints/person/33202">Van Gogh Museum</a>. <a href="#ref-1" aria-label="Back to the text">↩</a></li>
<li id="src-2">On his twenty-one copies after Millet at Saint-Rémy: <a href="https://www.metmuseum.org/art/collection/search/436526">The Met</a>. <a href="#ref-2" aria-label="Back to the text">↩</a></li>
<li id="src-3">His <a href="https://www.webexhibits.org/vangogh/letter/20/623.htm">letter to Theo on copying Millet, January 1890</a>. <a href="#ref-3" aria-label="Back to the text">↩</a></li>
</ol>

Letters to Theo in Johanna van Gogh-Bonger's translation, as published on [WebExhibits](https://www.webexhibits.org/vangogh/), including the [letter from Isleworth, 18 August 1876](https://www.webexhibits.org/vangogh/letter/4/073.htm). Paintings and prints are public domain, via [Wikimedia Commons](https://commons.wikimedia.org/); the comparisons above are from the [Van Gogh Museum](https://www.vangoghmuseum.nl/en/collection/s0115V1962), the [Cleveland Museum of Art](https://www.clevelandart.org/art/1962.407) and [The Met](https://www.metmuseum.org/art/collection/search/436526).

## P.S. A letter I keep coming back to

My favorite passage isn't about a painting at all. It's from a letter in August 1876, years before he started painting.

<details class="fold-section">
<summary>Read the letter</summary>

<blockquote class="letter">
<p>My dear Theo,</p>
<p>Yesterday, I went to see Gladwell, who is home for a few days. A terrible blow has struck them, his young sister, so full of life, with dark eyes and hair, had fallen from a horse at Blackheath; they found her unconscious and she died five hours later, without regaining consciousness. She was seventeen years old…</p>
<p>They had all just come back from the funeral; the whole household was in mourning.</p>
<p>…So then, <em>we walked up and down the platform of the station, an ordinary world, but we were animated by thoughts that were not ordinary.</em> Such moments do not last long, and soon we had to part.</p>
<p>Your loving brother,<br>Vincent</p>
<p class="cite">Vincent to Theo, Isleworth, 18 August 1876. He was 23.</p>
</blockquote>

This was before he was a painter, when he still hoped to become a preacher. But the habit was already there: paying close attention, then finding a way to say it. Later, he said it in paint.

As I'm figuring out a lot in my own life right now, reading about his journey reminds me to continue to slow down and notice more as I find my own way to "paint."

</details>

<script>
// Hover (or tap) a phrase to see the original beside Van Gogh's copy. Kept on screen: above the phrase, or below if there's no room.
(() => {
  // place each pop on screen: above the phrase if there's room, otherwise below; tap toggles on touch
  const place = (vs) => {
    const pop = vs.querySelector('.vs-pop'), r = vs.getBoundingClientRect(), pr = pop.getBoundingClientRect(), m = 16;
    let left = r.left + r.width / 2 - pr.width / 2; left = Math.max(m, Math.min(left, innerWidth - pr.width - m));
    let top = r.top - pr.height - 10; if (top < m) top = r.bottom + 10;
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  };
  const show = (vs, on) => { const pop = vs.querySelector('.vs-pop'); if (on) place(vs); pop.classList.toggle('on', on); vs.classList.toggle('open', on); vs.setAttribute('aria-expanded', on); };
  const all = [...document.querySelectorAll('.vs')];
  all.forEach((vs) => {
    vs.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && show(vs, true));
    vs.addEventListener('pointerleave', (e) => e.pointerType === 'mouse' && show(vs, false));
    vs.addEventListener('focus', () => { vs._f = Date.now(); show(vs, true); });
    vs.addEventListener('blur', () => show(vs, false));
    document.addEventListener('pointerdown', (e) => { if (!vs.contains(e.target)) show(vs, false); });
    vs.addEventListener('pointerdown', (e) => { vs._pt = e.pointerType; });
    vs.addEventListener('click', (e) => { if (vs.tagName === 'A' && (vs._pt === 'mouse' || (vs.classList.contains('open') && Date.now() - (vs._f || 0) >= 400))) return; e.preventDefault(); const on = Date.now() - (vs._f || 0) < 400 ? true : !vs.classList.contains('open'); all.forEach((o) => o !== vs && show(o, false)); show(vs, on); });
    vs.addEventListener('keydown', (e) => { if (e.key === 'Escape') { show(vs, false); vs.blur(); } });
    vs.querySelectorAll('img').forEach((im) => im.addEventListener('load', () => vs.classList.contains('open') && place(vs)));
  });
  addEventListener('scroll', () => all.forEach((vs) => vs.classList.contains('open') && place(vs)), { passive: true });
})();
</script>
