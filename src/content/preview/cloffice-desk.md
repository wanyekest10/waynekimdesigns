---
title: Cloffice Desk
slug: cloffice-desk
headline: "A built-in desk for my closet office, designed and documented in SolidWorks and built in a week."
context: "Personal project, LACI Product Design Fellowship, 2026"
year: "2026"
label: "CAD and fabrication"
summary: "A closet office, modeled in SolidWorks and built in a week."
hero: "/preview/cloffice-desk/render-hero.webp"
heroVideo: "/preview/cloffice-desk/build-loop.mp4"
heroPoster: "/preview/cloffice-desk/build-loop-poster.jpg"
heroAlt: "The SolidWorks assembly of the desk pulling apart into its top, aprons, legs, and 16 steel corner braces, then coming back together"
jumps:
  - { label: "Skip to SolidWorks", to: "one-master-part-one-assembly" }
  - { label: "Skip to the build", to: "the-build" }
short:
  - { lead: "The question.", text: "I needed a real office in my closet, and I was learning SolidWorks as a product design fellow at LACI. Could one project do both: a desk I'd use every day, designed and documented the way a product team would?" }
  - { lead: "What I built.", text: "A panel-leg desk cut from one sheet of birch plywood, built in a week. In SolidWorks: a multibody master part, an assembly with mates and patterned hardware, and the closet's real stud layout." }
skills: [CAD, Fabrication, Planning]
contributions:
  - { skill: "CAD", text: "Modeled the desk in SolidWorks: multibody master part, Save Bodies to an assembly, mates, mirrored and patterned hardware, materials" }
  - { skill: "Fabrication", text: "Planned a seven-cut sheet layout, glued and finished the parts, and installed the desk level into the wall studs" }
  - { skill: "Planning", text: "Designed around the store's cut rules, a one-stud-wall closet, and a 31 inch working height" }
facts:
  - { label: "Project", value: "Personal project · LACI Product Design Fellowship" }
  - { label: "Role", value: "Designer and builder, solo" }
  - { label: "Duration", value: "1 week, Nov 2026" }
  - { label: "Tools", value: "SolidWorks · Drill/driver · 2\" hole saw · Clamps · 4 ft level" }
  - { label: "SolidWorks", value: "Multibody parts · Save Bodies · Mates · Mirror · Linear pattern · Hole Wizard · Reference planes" }
  - { label: "Materials", value: "3/4\" birch plywood · 1x4 and 1x3 pine · 16 stainless corner braces" }
---

<aside style="border:1px dashed #002BBA;border-radius:6px;padding:12px 16px;margin:0 0 32px;font-size:14px;color:#6E6E6B">Draft for review. Not linked anywhere. Dashed boxes are notes for Wayne.</aside>

## A closet, a fellowship, and one week

I'm a product design fellow at LACI, learning SolidWorks ahead of the certification exam in December. At the same time, I needed a real place to work: my den closet was 67 inches wide and empty. So I made the desk my SolidWorks project. Classes give you practice parts. This gave me a real object with real constraints, and I had to live with the result.

<figure class="pair natural">
  <img src="/preview/cloffice-desk/closet-office.webp" alt="The finished closet office: birch desk with a laptop, monitor showing the SolidWorks model of the desk, and wire drawers underneath"/>
  <img src="/preview/cloffice-desk/model-on-desk.webp" alt="Close-up of the monitor on the finished desk, showing the SolidWorks assembly of the same desk"/>
  <figcaption>The closet office a week later, with the desk's own model on screen.</figcaption>
</figure>

<figure class="pair natural">
  <img src="/preview/cloffice-desk/before.webp" alt="The empty closet before the build, with a hanging rod and a 3D printer on the floor"/>
  <img src="/preview/cloffice-desk/in-use.webp" alt="The finished desk in the closet with a monitor, chair, and wire drawers"/>
  <figcaption>Before and after.</figcaption>
</figure>

<div class="cols3">
  <div><h4>No saw</h4><p>Every cut happens at the store's panel saw: nothing under 12 inches, accurate to about ⅛ inch.</p></div>
  <div><h4>One stud wall</h4><p>Only the back wall has studs. The side walls can't carry weight.</p></div>
  <div><h4>Tight fit</h4><p>67 inches wall to wall, so the top tilts in with ¼ inch to spare on each side.</p></div>
</div>

<div id="one-master-part-one-assembly" style="scroll-margin-top:88px"></div>

## One master part, one assembly

I set the model up the way I'd want to hand it to someone else. The wood lives in one multibody master part, so a change to the closet width or desk height flows to every piece. Save Bodies turns those into linked parts and an assembly, where the hardware goes in with mates.

<div class="flow" role="list" aria-label="SolidWorks workflow">
  <div class="step"><span class="n">01</span><b>Master part</b><small>Top, aprons, and legs as separate bodies, sketched from one underside plane.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Assembly</b><small>Save Bodies into linked parts. Edit the master, the assembly updates.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">03</span><b>Hardware</b><small>The real brace, modeled from its package specs, placed with mates.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">04</span><b>The wall</b><small>Stud holes and braces patterned along the back, mirrored to the front.</small></div>
</div>

### Modeling the real hardware

The braces are Everbilt 1½ inch stainless corner braces, the ones I actually used. I modeled one from the package specs as a thin-feature extrude with countersunk #6 holes from the Hole Wizard, then mirrored the holes across a 45° plane so both arms match. The first version had the countersinks on the wrong face, which I only caught by comparing it to the brace under my desk.

<figure class="frame"><img src="/preview/cloffice-desk/render-brace.webp" alt="Close-up of two corner braces where a leg meets the back apron and the underside of the top"/><figcaption>Where a leg meets the back apron: one brace to the top, one to the apron.</figcaption></figure>

### Built to the wall

The desk hangs on the back wall, so the wall is in the model too. The back apron has its screw holes linear-patterned at the closet's stud spacing, with braces placed beside each stud the way I installed them, then mirrored to the front apron about a mid plane. The leg braces were mirrored across a center plane between the legs.

<figure class="wide"><img src="/preview/cloffice-desk/render-underside.webp" alt="View from directly below the desk: braces along the back and front aprons and at each leg, plus the cable hole"/><figcaption>From below: braces on both aprons and at each leg, and the 2 inch cable hole.</figcaption></figure>

<figure class="wide"><a href="/preview/cloffice-desk/drawing-views.webp"><img src="/preview/cloffice-desk/drawing-views.webp" alt="Drawing sheet CD-001: top, front, and right views with dimensions, an isometric view, notes, and a title block"/></a><figcaption>Drawing from the SolidWorks model: third-angle views, overall dimensions, and the cable hole location.</figcaption></figure>

<figure class="wide"><a href="/preview/cloffice-desk/assembly-drawing.webp"><img src="/preview/cloffice-desk/assembly-drawing.webp" alt="Assembly drawing: exploded isometric view with numbered balloons, front and right views with overall dimensions, a parts list, and a title block"/></a><figcaption>Assembly drawing from the SolidWorks model: exploded view, parts list, and overall dimensions.</figcaption></figure>

<aside style="border:1px dashed #002BBA;border-radius:6px;padding:12px 16px;margin:0 0 32px;font-size:14px;color:#6E6E6B">Wayne: add 2 or 3 real SolidWorks screenshots here (Win+Shift+S): the workbench feature tree showing Save Bodies and the patterns, the assembly with the Mates folder open, and the brace part with the Hole Wizard. They prove the tool; the renders show the design. A 2D drawing with a BOM would be the strongest addition.</aside>

## Choosing the structure

I started with wall brackets and side cleats. Brackets need studs at exactly the right spots, and cleats need studs in the side walls, which this closet didn't have. So I switched to plywood panel legs at each end, with the back of the desk screwed into the studs.

<div class="compare">
  <div class="crow head"><span></span><span class="k">FIRST IDEA</span><span></span><span class="k">WHAT I BUILT</span></div>
  <div class="crow"><span class="k">Support</span><span class="was">Brackets or side cleats</span><span class="to">→</span><span class="is">Panel legs at each end<small>No side studs needed.</small></span></div>
  <div class="crow"><span class="k">Back edge</span><span class="was">Floating</span><span class="to">→</span><span class="is">1x4 apron into 4 studs<small>Two 3 inch screws per stud.</small></span></div>
  <div class="crow focal"><span class="k">Front edge</span><span class="was">Bare ¾ inch plywood</span><span class="to">→</span><span class="is">1x3 apron, on edge<small>Glued under the front so 64 inches doesn't sag.</small></span></div>
</div>

### One sheet, seven cuts

The store gives 10 free cuts. I planned the top and both legs out of one 4x8 sheet in five cuts, plus one cut on each pine board. Both legs come off the same strip with the saw left at the same setting, so they match even if the cut is a hair off.

<figure class="wide" aria-label="Cut plan for one 48 by 96 inch sheet: rip at 20 inches for the top, rip at 19 and a quarter inches for two legs">
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
<figcaption>One 48 × 96 sheet. Cuts 1 and 2 are rips, 3 to 5 crosscuts; cuts 6 and 7 trim the pine aprons. Every piece is over the store's 12 inch minimum.</figcaption>
</figure>

<div class="stats">
  <div class="focal"><span class="k">Time</span><b>1 week</b><p>from empty closet to working desk</p></div>
  <div><span class="k">Cuts</span><b>7</b><p>store cuts from one sheet and two boards</p></div>
  <div><span class="k">Hardware</span><b>16</b><p>corner braces, plus 8 screws into 4 studs</p></div>
  <div><span class="k">Height</span><b>31 in</b><p>working height, with 27¾ inches of knee room</p></div>
</div>

<div id="the-build" style="scroll-margin-top:88px"></div>

## The build

<figure class="pair natural">
  <img src="/preview/cloffice-desk/panel-saw.webp" alt="A Home Depot associate ripping the birch plywood sheet on the vertical panel saw"/>
  <img src="/preview/cloffice-desk/hatchback.webp" alt="The cut plywood pieces and pine boards loaded into the back of a hatchback"/>
  <figcaption>Cuts at the panel saw, then everything rode home in a hatchback.</figcaption>
</figure>

The order mattered more than any single step. Glue won't stick to polyurethane, so the front apron went on first: glued, clamped flush with the front edge, and left overnight. Then I sanded, rounded the front edge where wrists rest, and finished. The back apron went into the studs on a level line at 30¼ inches, the legs stood against it, and the top dropped in back edge first.

<figure class="pair natural">
  <img src="/preview/cloffice-desk/glue-up.webp" alt="The 1x3 front apron glued and clamped along the front edge of the face-down plywood top"/>
  <img src="/preview/cloffice-desk/bubble-front.webp" alt="Close-up of the level's bubble centered on the desktop, with the plywood layers and pine apron below"/>
  <figcaption>Gluing the front apron, and the level check after install: centered side to side and front to back.</figcaption>
</figure>

## The model and the real thing

<figure class="pair natural">
  <img src="/preview/cloffice-desk/render-hero.webp" alt="Render of the SolidWorks model of the desk"/>
  <img src="/preview/cloffice-desk/installed.webp" alt="The installed desk in the closet with a 4 foot level on top"/>
  <figcaption>The SolidWorks model and the installed desk.</figcaption>
</figure>

Modeling alongside the build taught me what the numbers really mean: ¾ inch plywood is 23/32, store cuts drift by ⅛, and a leg can come out a hair tall. Next is a monitor riser from the offcuts, CAD first this time: model it, check it against the monitor stand, then build it.
