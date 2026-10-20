---
title: RaiseMe Portal
slug: raiseme-portal
headline: "Research that made a quiet B2B problem impossible to ignore, and got the partner portal rebuilt weeks before COVID."
context: "RaiseMe, 2019 to 2020"
role: UX Strategist
timeline: October 2019 to June 2020
team:
  - name: Katie Zellner
    role: VP of Partner Success
  - name: Dan Carew
    role: Director of Product
  - name: Laura Reisert
    role: AVP of Sales
  - name: Rajesh Agarwal
    role: Engineering Manager
methods: [Interviews, Workflow observation, Survey, Journey mapping, Workshops]
tags: [UX research, Service design, B2B]
order: 7
year: "2019–20"
featured: false
label: "Research and service design"
summary: "Why colleges stopped trusting their portal."
hero: "/work/raiseme-assets/hero-download-settings.webp"
hideHero: true
heroAlt: "The redesigned Download settings screen: a weekly follower report that generates itself every Monday"
jumps:
  - { label: "Skip to breaking assumptions", to: "hack-week-the-assumption-broke" }
short:
  - { lead: "The question.", text: "RaiseMe's college portal kept failing its weekly users, with renewals coming up. Why were colleges losing trust, and what would make them renew?" }
  - { lead: "What I did.", text: "Took partner frustration from support tickets to the CEO: Hack Week research, a partner survey, and a case tying reliability to revenue." }
  - { lead: "What happened.", text: "Leadership committed to rebuilding the portal, weeks before COVID." }
skills: [Design research, Strategy, Facilitation]
contributions:
  - { skill: "Design research", text: "Ran Hack Week research with data operators, then partner interviews and a survey" }
  - { skill: "Strategy", text: "Matched what partners said about the portal to what each one paid, built the case with our Product Manager, and brought it to the CEO and senior leadership" }
  - { skill: "Facilitation", text: "Ran workshops with Sales and Partner Success" }
  - { skill: "Impact", text: "The rebuilt portal helped RaiseMe keep 90%+ of projected revenue through the pandemic. Reliability went from 95% to 99%", impact: true }
facts:
  - { label: "Company", value: "RaiseMe" }
  - { label: "Role", value: "UX Strategist" }
  - { label: "Timeline", value: "Oct 2019 to Jun 2020" }
  - { label: "Team", value: "Partner Success, Product, Sales, Engineering" }
  - { label: "Methods", value: "Interviews, usability tests, survey, journey mapping" }
---

## The impact

Research turned a quiet support problem into a leadership commitment, weeks before COVID hit higher ed budgets. The rebuilt portal shipped automated weekly downloads in place of a broken export, and it was part of how RaiseMe held on while colleges froze budgets and cut vendors.

<div class="stats">
  <div class="focal"><span class="k">For the business</span><b>90%+</b><p>of projected annual revenue kept</p></div>
  <div><span class="k">For the business</span><b>150 → 65</b><p>partners filing usability tickets, out of 300</p></div>
  <div><span class="k">For partners</span><b>95% → 99%</b><p>portal reliability</p></div>
  <div><span class="k">For partners</span><b>15 → 2 min</b><p>for a weekly export task (estimated)</p></div>
</div>

<figure class="pair">
  <img src="/work/raiseme-assets/before-portal-error.webp" alt="Before: the portal showing a red error banner and empty saved groups"/>
  <img src="/work/raiseme-assets/after-scheduled-downloads.webp" alt="After: an Available downloads list with automatically generated weekly follower reports"/>
  <figcaption>Before: errors on the most basic task. After: weekly exports that generate themselves and wait in a downloads list.</figcaption>
</figure>

The updated portal stayed in use after RaiseMe was acquired by CampusLogic in July 2020.

> "Wayne drove real change in our product roadmap and client success trajectory by tying client needs directly to ROI."
>
> VP of Partner Success

## Growth without reliability

Colleges paid RaiseMe to reach students early. To use that data, someone at each college had to export it from the portal, clean it, and load it into their own CRM, every week, under enrollment deadlines. When the portal failed, their week stalled.

> "The report has been showing as pending for about 20 minutes, which is much longer than usual. I can't find a way to cancel the request."
>
> Data operator, by email

Each issue looked small. Together they were eroding trust, and the people renewing the contracts would eventually hear about it. Before research, I worked in Partner Success with these colleges, so I saw the gap between what partners struggled with and what was on the roadmap.

## Hack Week: the assumption broke

I used RaiseMe's first Hack Week to dig into how colleges moved our data into their CRMs. With three engineers and three people from Sales and Partner Success, we ran five interviews, five surveys, and three usability tests with data operators in four days.

We went in believing API integrations would solve it. The first two partners loved the idea, and the engineers wanted to start building. I asked them to wait a day. The next three changed the answer.

<div class="compare">
  <div class="crow head"><span></span><span class="k">WHAT WE ASSUMED</span><span></span><span class="k">WHAT INTERVIEWS SHOWED</span></div>
  <div class="crow"><span class="k">The problem</span><span class="was">Partners need API integrations</span><span class="to">→</span><span class="is">Partners already use middleware<small>One more integration adds work, not less.</small></span></div>
  <div class="crow"><span class="k">Where it breaks</span><span class="was">Getting data into RaiseMe</span><span class="to">→</span><span class="is">Getting clean data out<small>Every export was cleaned again by hand.</small></span></div>
  <div class="crow focal"><span class="k">What to build</span><span class="was">More integrations</span><span class="to">→</span><span class="is">Predictable, CRM-ready exports<small>Which became Scheduled Templates.</small></span></div>
</div>

Underneath it was trust: why plug in an API from a vendor whose downloads kept failing? We prototyped Scheduled Templates, standardized weekly exports that fit the workflows partners already had.

<figure class="textw"><img src="/work/raiseme-assets/prototype-scheduled-templates.webp" alt="The Scheduled Templates prototype: a Download settings dialog that auto-generates a weekly CSV of high school followers every Monday"/><figcaption>The Scheduled Templates prototype: set it once, and a clean weekly export is waiting every Monday. Student details blurred.</figcaption></figure>

> "This would save me 15 minutes per week to 2 minutes, and I would see no more error bars."
>
> Data operator, reacting to the prototype

Across 330+ partners, that projected to 3,500+ hours a year. The project was runner-up for both Judges' Choice and People's Choice, but it didn't make the roadmap yet.

## Building the case

After Hack Week, feasibility wasn't the barrier. Prioritization was. Our only sentiment measure was NPS, answered by 3% of partners, so I built a research plan: interviews, a partner survey, and workshops with Sales and Partner Success.

> "We had issues even getting follower information at the deadline. This caused award letters to be held up for the entire class."
>
> Data operations lead

### Asking partners

12 of 14 partners said portal reliability fell below their expectations, far more than any other part of the experience.

<div class="bars">
  <div class="brow focal"><span class="bl">College Portal reliability</span><div class="track"><div class="fill" style="width:85.71%"></div></div><span class="bv">12 of 14</span></div>
  <div class="brow"><span class="bl">Resolving bugs</span><div class="track"><div class="fill" style="width:50%"></div></div><span class="bv">7 of 14</span></div>
  <div class="brow"><span class="bl">Building and editing programs</span><div class="track"><div class="fill" style="width:42.86%"></div></div><span class="bv">6 of 14</span></div>
  <div class="brow"><span class="bl">Accuracy of RaiseMe data</span><div class="track"><div class="fill" style="width:35.71%"></div></div><span class="bv">5 of 14</span></div>
  <div class="brow"><span class="bl">Ease of use</span><div class="track"><div class="fill" style="width:21.43%"></div></div><span class="bv">3 of 14</span></div>
  <div class="note">Partners who said each area fell below expectations. Survey of college partners, 14 of 23 responded.</div>
</div>

### Revenue at risk

I lined up the words partners used for the portal against what each one paid. The partners calling it slow and stressful were some of our largest accounts.

<table>
  <thead><tr><th>Partner</th><th>Described the portal as</th><th>Annual contract</th></tr></thead>
  <tbody>
    <tr><td>Large private university</td><td class="feel">Slow, stressful, time-consuming</td><td>$36k</td></tr>
    <tr><td>Regional public university</td><td class="feel">Unapproachable, tedious</td><td>$30k</td></tr>
    <tr><td>Mid-sized private university</td><td class="feel">Slow, time-consuming</td><td>$18k</td></tr>
    <tr><td>Liberal arts college</td><td class="feel">Stressful, uncontrollable</td><td>$15k</td></tr>
    <tr><td>Regional private university</td><td class="feel">Tedious, time-consuming</td><td>$14k</td></tr>
  </tbody>
</table>

### Inside the company

The workshops showed the portal was slowing deals and making renewals harder to defend.

> "Most of my team won't demo any product live. I do, but I'm always holding my breath during the Portal part."
>
> Sales leader

## The decision

With our Product Manager, I framed it as a business decision, not a UX improvement: would the company be comfortable choosing not to fix this?

<div class="cols">
  <div>
    <h4>If we invest</h4>
    <ul>
      <li>Partners reliably finish the task in front of them.</li>
      <li>Financial aid directors find RaiseMe students before award letters go out.</li>
      <li>RaiseMe stays an approachable, meaningful tool in higher ed.</li>
    </ul>
  </div>
  <div>
    <h4>If we don't</h4>
    <ul>
      <li>Partners wait on emails and fixes while deadlines pass.</li>
      <li>Our reputation suffers, and partners churn.</li>
      <li>New institutions get harder to sign. RaiseMe had won back only one churned partner in its history.</li>
    </ul>
  </div>
</div>

We aligned on a phased roadmap, reliability first, then interface fixes, then Scheduled Templates. I brought the case to the CEO and senior leadership, and it secured a commitment to rebuild the College Partner Portal in early 2020. COVID forced trade-offs, so custom download fields were cut, but the automated weekly downloads and a first Partner Dashboard shipped.

## Reflection

**In B2B, the user and the buyer are different people.** The leaders who renewed never touched the export, and the operators who did had no say in the contract. Research had to carry one group's experience to the other.

**What I'd do sooner.** Find a senior sponsor in the first weeks, not the third month, and bring partner stories to the team earlier.
