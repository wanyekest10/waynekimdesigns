---
title: Cloffice Desk
slug: cloffice-desk
headline: "My first solo woodworking project: a built-in desk for a 67 inch closet, cut from one sheet of birch plywood, then modeled in SolidWorks alongside my training at LACI."
context: "Personal project, alongside SolidWorks training at LACI, 2026"
year: "2026"
label: "Fabrication and CAD"
summary: "One sheet of plywood, seven cuts, a closet turned into an office."
hero: "/preview/cloffice-desk/hero.webp"
heroAlt: "The finished closet desk in use: birch top, monitor, desk chair, and wire drawers underneath"
jumps:
  - { label: "Skip to the cut plan", to: "one-sheet-seven-cuts" }
  - { label: "Skip to SolidWorks", to: "rebuilding-it-in-solidworks" }
short:
  - { lead: "The question.", text: "Could I turn an empty closet into a solid, level desk on my first solo woodworking project, with no saw of my own and studs on only one wall? And could a real object give my SolidWorks practice something to work on?" }
  - { lead: "What I built.", text: "A panel-leg desk cut from a single 4x8 sheet of birch plywood in seven store cuts. Then I rebuilt it in SolidWorks as a multibody part, split it into an assembly, and documented it with materials and drawings." }
skills: [Fabrication, CAD, Planning]
contributions:
  - { skill: "Fabrication", text: "Planned the cut list, glued and clamped the apron, sanded and finished every piece, and installed it level" }
  - { skill: "CAD", text: "Modeled the desk in SolidWorks as a multibody part, mirrored about a mid plane, saved the bodies to an assembly, and assigned materials" }
  - { skill: "Planning", text: "Designed around the store's cut rules, the closet's studs, and a 31 inch working height" }
facts:
  - { label: "Project", value: "Personal project · Side project to SolidWorks training at LACI" }
  - { label: "Role", value: "Designer and builder, solo" }
  - { label: "Duration", value: "About a week of evenings, Nov 2026" }
  - { label: "Materials", value: "3/4\" birch plywood · 1x4 and 1x3 pine · Steel corner braces · Wipe-on poly" }
  - { label: "Tools", value: "SolidWorks · Drill/driver · 2\" hole saw · Clamps · 4 ft level" }
---

<aside style="border:1px dashed #002BBA;border-radius:6px;padding:12px 16px;margin:0 0 32px;font-size:14px;color:#6E6E6B">Draft for review. Notes in boxes like this are placeholders or questions for Wayne. Not linked anywhere.</aside>

## An empty closet and a first build

My den closet was 67 inches wide and full of nothing useful. I wanted a desk in it with room for a tinker bench, and I wanted to build it myself. It was my first solo woodworking project, I didn't own a saw, and the side walls had no studs where a desk would need them.

I was also learning SolidWorks at LACI at the same time. Classes give you practice parts. This gave me a real object, with real constraints, to model alongside them.

<figure class="pair natural">
  <img src="/preview/cloffice-desk/before.webp" alt="The empty closet before the build, with a hanging rod and a 3D printer on the floor"/>
  <img src="/preview/cloffice-desk/in-use.webp" alt="The finished desk in the closet with a monitor, chair, and wire drawers"/>
  <figcaption>Before and after.</figcaption>
</figure>

Those limits set the design:

<div class="cols3">
  <div><h4>No saw</h4><p>Every cut happens at the store's panel saw, which won't cut under 12 inches and is accurate to about ⅛ inch.</p></div>
  <div><h4>One stud wall</h4><p>Only the back wall has studs, at 6½, 24, 38, and 55 inches. The sides can't carry weight.</p></div>
  <div><h4>Tight fit</h4><p>67 inches wall to wall, so the top has to tilt in with ¼ inch to spare on each side.</p></div>
</div>

## Choosing the structure

I started with wall brackets and side cleats. Brackets cost more and need studs at exactly the right spots. Cleats need studs in the side walls, which this closet didn't have. So I switched to plywood panel legs at each end, with the back of the desk screwed into the studs.

<div class="compare">
  <div class="crow head"><span></span><span class="k">FIRST IDEA</span><span></span><span class="k">WHAT I BUILT</span></div>
  <div class="crow"><span class="k">Support</span><span class="was">Brackets or side cleats</span><span class="to">→</span><span class="is">Panel legs at each end<small>No side studs needed.</small></span></div>
  <div class="crow"><span class="k">Back edge</span><span class="was">Floating</span><span class="to">→</span><span class="is">1x4 apron into 4 studs<small>Two 3 inch screws per stud.</small></span></div>
  <div class="crow focal"><span class="k">Front edge</span><span class="was">Bare ¾ inch plywood</span><span class="to">→</span><span class="is">1x3 apron, on edge<small>Glued under the front, so 64 inches doesn't sag.</small></span></div>
</div>

The front apron was the one detail that mattered most. Laid flat, a 1x3 adds almost nothing. Stood on its 2½ inch edge and glued under the top, it turns the front into a T-shaped beam. The trade was 2½ inches of knee room, so I sat in my chair and measured before I committed.

<div id="one-sheet-seven-cuts" style="scroll-margin-top:88px"></div>

## One sheet, seven cuts

The store gives 10 free cuts. I planned the whole desk to come out of one 4x8 sheet in five, plus one cut on each pine board. Both legs come off the same strip with the saw left at the same setting, so they match even if the cut is a hair off.

<figure class="wide" aria-label="Cut plan for one 48 by 96 inch sheet: rip at 20 inches for the top, rip at 19 and a quarter inches for two 30 and an eighth inch legs, with offcuts left over">
<svg viewBox="0 0 980 500" role="img" aria-hidden="true" style="width:100%;height:auto;font-family:Instrument Sans, sans-serif">
  <rect x="10" y="10" width="960" height="480" fill="#F4F4F2" stroke="#141414" stroke-width="2"/>
  <rect x="10" y="10" width="665" height="200" fill="#fff" stroke="#002BBA" stroke-width="2.5"/>
  <text x="342" y="105" text-anchor="middle" font-size="22" fill="#002BBA" font-weight="500">Top</text>
  <text x="342" y="133" text-anchor="middle" font-size="16" fill="#6E6E6B">66½ × 20</text>
  <rect x="10" y="210" width="301" height="192" fill="#fff" stroke="#141414" stroke-width="1.5"/>
  <rect x="311" y="210" width="301" height="192" fill="#fff" stroke="#141414" stroke-width="1.5"/>
  <text x="160" y="300" text-anchor="middle" font-size="20" fill="#141414" font-weight="500">Leg</text>
  <text x="160" y="326" text-anchor="middle" font-size="15" fill="#6E6E6B">30⅛ × 19¼</text>
  <text x="461" y="300" text-anchor="middle" font-size="20" fill="#141414" font-weight="500">Leg</text>
  <text x="461" y="326" text-anchor="middle" font-size="15" fill="#6E6E6B">30⅛ × 19¼</text>
  <text x="822" y="115" text-anchor="middle" font-size="15" fill="#6E6E6B">offcut</text>
  <text x="790" y="312" text-anchor="middle" font-size="15" fill="#6E6E6B">offcut</text>
  <text x="490" y="452" text-anchor="middle" font-size="15" fill="#6E6E6B">offcut strip, about 8½ wide</text>
  <g font-size="14" fill="#fff" font-weight="500" text-anchor="middle">
    <circle cx="950" cy="210" r="13" fill="#141414"/><text x="950" y="215">1</text>
    <circle cx="950" cy="402" r="13" fill="#141414"/><text x="950" y="407">2</text>
    <circle cx="675" cy="30" r="13" fill="#141414"/><text x="675" y="35">3</text>
    <circle cx="311" cy="230" r="13" fill="#141414"/><text x="311" y="235">4</text>
    <circle cx="612" cy="230" r="13" fill="#141414"/><text x="612" y="235">5</text>
  </g>
</svg>
<figcaption>One 48 × 96 sheet. Cuts 1 and 2 are rips, 3 to 5 crosscuts, and cuts 6 and 7 trim the pine aprons to 66½ and 64. Every piece is over the store's 12 inch minimum.</figcaption>
</figure>

<div class="stats">
  <div class="focal"><span class="k">Sheet</span><b>1</b><p>sheet of birch plywood for the top and both legs</p></div>
  <div><span class="k">Cuts</span><b>7</b><p>store cuts, out of 10 free</p></div>
  <div><span class="k">Size</span><b>66½ × 20</b><p>inch top, ¼ inch clear of each wall</p></div>
  <div><span class="k">Height</span><b>31 in</b><p>working height, with 27¾ inches of knee room</p></div>
</div>

<aside style="border:1px dashed #002BBA;border-radius:6px;padding:12px 16px;margin:0 0 32px;font-size:14px;color:#6E6E6B">Wayne: add total cost and hours if you have them. Plywood was $86.44; a receipt total would make a good fifth number.</aside>

## The build

<figure class="pair natural">
  <img src="/preview/cloffice-desk/panel-saw.webp" alt="A Home Depot associate ripping the birch plywood sheet on the vertical panel saw"/>
  <img src="/preview/cloffice-desk/hatchback.webp" alt="The cut plywood pieces and pine boards loaded into the back of a Honda Civic hatchback"/>
  <figcaption>Cuts at the panel saw, then everything rode home in a hatchback.</figcaption>
</figure>

### Glue before finish

The order of operations mattered more than any single step. Glue won't stick to polyurethane, so the front apron went on first: glued, clamped flush with the front edge, and left overnight. Only then did I sand and finish. I rounded the front edge with 120 and 220 grit, since that's where wrists rest, and drilled the 2 inch cable hole from both sides so the face wouldn't splinter.

<figure class="pair natural">
  <img src="/preview/cloffice-desk/glue-up.webp" alt="The 1x3 front apron glued and clamped along the front edge of the face-down plywood top"/>
  <img src="/preview/cloffice-desk/dry-fit.webp" alt="The plywood top dry fit on the legs in the closet before the aprons went in"/>
  <figcaption>Gluing the front apron, and a dry fit to check height and clearance before anything was fastened.</figcaption>
</figure>

### Install, back to front

The back apron went into the studs first, on a level pencil line at 30¼ inches. That edge set the height for everything else. The legs stood on felt pads against it and were braced in, then the top went in back edge first so the front apron could drop between the legs.

One leg came out about 1/16 inch taller than the other. Rather than sanding plywood end grain, I set the level across the top and let the felt pads take up the difference.

<figure class="frame"><img src="/preview/cloffice-desk/level.webp" alt="The installed desk with a 4 foot level on the top, bubble centered"/><figcaption>Level, side to side and front to back.</figcaption></figure>

<div id="rebuilding-it-in-solidworks" style="scroll-margin-top:88px"></div>

## Rebuilding it in SolidWorks

I built this next to my SolidWorks training at LACI, and the two fed each other. The build taught me what the dimensions actually meant: ¾ inch plywood is really 23/32, store cuts drift by ⅛, and a leg can come out a hair tall. After the build, I modeled the desk from my as-built measurements, using the workflow from class on something I'd built with my own hands, and documented it the way a fabricator would want it.

<div class="flow" role="list" aria-label="SolidWorks workflow">
  <div class="step"><span class="n">01</span><b>Multibody part</b><small>Top, aprons, and one leg as separate bodies, sketched from the underside plane.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Mirror</b><small>Second leg mirrored as a body about a plane at the desk's center.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">03</span><b>Save Bodies</b><small>Each body saved as its own part, with an assembly built from them.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">04</span><b>Materials</b><small>Maple for the plywood, pine for the aprons, set per body.</small></div>
</div>

<figure class="frame"><img src="/preview/cloffice-desk/render-placeholder.webp" alt="The SolidWorks model with wood materials applied: top, two panel legs, and the front apron"/><figcaption>The assembly with materials applied.</figcaption></figure>

<aside style="border:1px dashed #002BBA;border-radius:6px;padding:12px 16px;margin:0 0 32px;font-size:14px;color:#6E6E6B">Placeholders: these are phone photos of the monitor. Replace with clean exports (in SolidWorks: File, Save As, .png, or a PhotoView render). Still to add once built: corner brace and grommet parts with mates, an exploded view (GIF of the assembly order), and the 2D drawing with dimensions and a BOM. The drawing is the strongest single image for this section.</aside>

<figure class="frame"><img src="/preview/cloffice-desk/cad-mirror-placeholder.webp" alt="SolidWorks view of the desk frame with the center mirror plane shown"/><figcaption>The second leg mirrored about a plane at the center of the top.</figcaption></figure>

Most of what I learned was about setting up a model so it stays easy to change. My first leg sketch fought me because it was tied to the wrong edges, so I redrew it from the top's corner and dimensioned it fully. Mirroring as a feature merged everything into one solid, so I switched to mirroring bodies. Small things, but they're the habits that keep a model from breaking later.

## What's next

The monitor arm I bought stuck out too far for a 20 inch deep desk, so I returned it. Next I'm designing a riser shelf from the offcuts, CAD first this time: model it, check it against the monitor stand, make a drawing, then build it.

<aside style="border:1px dashed #002BBA;border-radius:6px;padding:12px 16px;margin:0 0 32px;font-size:14px;color:#6E6E6B">Wayne: a daylight reshoot of the final desk, cleared off, at the same angle as a SolidWorks render, would make a strong side-by-side here. Consider a SimulationXpress check of the top's sag, too.</aside>
