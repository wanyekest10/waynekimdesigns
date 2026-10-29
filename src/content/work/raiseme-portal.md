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
tocLabels:
  "The rebuilt portal helped keep 90%+ of revenue through COVID": "The impact"
  "Colleges were losing trust in a weekly export": "The problem"
  "Survey and contract data showed revenue at risk": "The evidence"
  "Leadership committed to rebuilding the portal": "The decision"
hero: "/work/raiseme-assets/hero-before-after.webp"
cardFit: contain
heroAlt: "Before: the old portal showing a red error banner and empty saved groups. After: an Available downloads list with weekly reports that generate themselves."
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

## The rebuilt portal helped keep 90%+ of revenue through COVID

My research turned a quiet support problem into a leadership commitment, weeks before COVID hit higher ed budgets. The rebuilt portal replaced a broken export with automated weekly downloads.

<div class="stats">
  <div class="focal"><span class="k">For the business</span><b>90%+</b><p>of projected annual revenue kept</p></div>
  <div><span class="k">For the business</span><b>150 → 65</b><p>partners filing usability tickets, out of 330+</p></div>
  <div><span class="k">For partners</span><b>95% → 99%</b><p>portal reliability</p></div>
  <div><span class="k">For partners</span><b>15 → 2 min</b><p>for a weekly export task (estimated)</p></div>
</div>

<figure class="pair">
  <img src="/work/raiseme-assets/before-portal-error.webp" alt="Before: the portal showing a red error banner and empty saved groups"/>
  <img src="/work/raiseme-assets/after-scheduled-downloads.webp" alt="After: an Available downloads list with automatically generated weekly follower reports"/>
  <figcaption>Before, the basic export failed with errors. After, weekly reports generate themselves and wait.</figcaption>
</figure>

The rebuilt portal was part of how RaiseMe held on while colleges froze budgets and cut vendors. It stayed in use after CampusLogic acquired RaiseMe in July 2020.

> "Wayne drove real change in our product roadmap and client success trajectory by tying client needs directly to ROI."
>
> VP of Partner Success

## Colleges were losing trust in a weekly export

Colleges paid RaiseMe to reach students early. To use that data, someone at each college exported it from the portal, cleaned it, and loaded it into their CRM every week, under enrollment deadlines. When the portal failed, their week stalled.

> "The report has been showing as pending for about 20 minutes, which is much longer than usual. I can't find a way to cancel the request."
>
> Data operator, by email

Each issue looked small. Together they wore down trust, and the people renewing the contracts would eventually hear about it.

Before moving into research, I worked in Partner Success with these colleges. I could see the gap between what partners struggled with and what was on the roadmap.

## Hack Week: the assumption broke

I used RaiseMe's first Hack Week to study how colleges moved our data into their CRMs. With three engineers and three people from Sales and Partner Success, we ran five interviews, five surveys, and three usability tests with data operators in four days.

We went in believing API integrations would solve it. The first two partners loved the idea and the engineers wanted to start building, so I asked them to wait a day. The next three interviews changed the answer.

<div class="compare">
  <div class="crow head"><span></span><span class="k">WHAT WE ASSUMED</span><span></span><span class="k">WHAT INTERVIEWS SHOWED</span></div>
  <div class="crow"><span class="k">The problem</span><span class="was">Partners need API integrations</span><span class="to">→</span><span class="is">Partners already use middleware<small>Another integration would mean more work for them.</small></span></div>
  <div class="crow"><span class="k">Where it breaks</span><span class="was">Getting data into RaiseMe</span><span class="to">→</span><span class="is">Getting clean data out<small>Partners cleaned every export again by hand.</small></span></div>
  <div class="crow focal"><span class="k">What to build</span><span class="was">More integrations</span><span class="to">→</span><span class="is">Predictable, CRM-ready exports<small>This idea became Scheduled Templates.</small></span></div>
</div>

Underneath it was trust: why plug in an API from a vendor whose downloads kept failing? So we prototyped Scheduled Templates, standard weekly exports that fit the workflows partners already had.

<figure class="textw"><img src="/work/raiseme-assets/prototype-scheduled-templates.webp" alt="The Scheduled Templates prototype: a Download settings dialog that auto-generates a weekly CSV of high school followers every Monday"/><figcaption>Set it once, and a clean export is waiting every Monday. Student details blurred.</figcaption></figure>

> "This would save me 15 minutes per week to 2 minutes, and I would see no more error bars."
>
> Data operator, reacting to the prototype

Across 330+ partners, that projected to 3,500+ hours a year. The project was runner-up for both Judges' Choice and People's Choice, but it didn't make the roadmap yet.

## Survey and contract data showed revenue at risk

After Hack Week, the barrier was prioritization. Our only sentiment measure was NPS, answered by 3% of partners, so I planned interviews, a partner survey, and workshops with Sales and Partner Success.

> "We had issues even getting follower information at the deadline. This caused award letters to be held up for the entire class."
>
> Data operations lead

12 of 14 partners said portal reliability fell below their expectations. No other part of the experience came close.

<div class="bars">
  <div class="brow focal"><span class="bl">College Portal reliability</span><div class="track"><div class="fill" style="width:85.71%"></div></div><span class="bv">12 of 14</span></div>
  <div class="brow"><span class="bl">Resolving bugs</span><div class="track"><div class="fill" style="width:50%"></div></div><span class="bv">7 of 14</span></div>
  <div class="brow"><span class="bl">Building and editing programs</span><div class="track"><div class="fill" style="width:42.86%"></div></div><span class="bv">6 of 14</span></div>
  <div class="brow"><span class="bl">Accuracy of RaiseMe data</span><div class="track"><div class="fill" style="width:35.71%"></div></div><span class="bv">5 of 14</span></div>
  <div class="brow"><span class="bl">Ease of use</span><div class="track"><div class="fill" style="width:21.43%"></div></div><span class="bv">3 of 14</span></div>
  <div class="note">Areas partners rated below expectations. Reliability led by far. 14 of 23 partners responded.</div>
</div>

Then I lined up the words partners used for the portal against what each one paid. Some of our largest accounts were the ones calling it slow and stressful.

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

The workshops showed the portal was also slowing deals and making renewals harder to defend.

> "Most of my team won't demo any product live. I do, but I'm always holding my breath during the Portal part."
>
> Sales leader

## Leadership committed to rebuilding the portal

With our Product Manager, I framed it as a business decision: would the company be okay choosing not to fix this?

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

We agreed on a phased roadmap: reliability first, then interface fixes, then Scheduled Templates. I brought the case to the CEO and senior leadership, and they committed to rebuilding the College Partner Portal in early 2020.

COVID forced trade-offs, so custom download fields were cut. The automated weekly downloads and a first Partner Dashboard shipped.

## What I learned: users and buyers are different people

The leaders who renewed never touched the export, and the operators who did had no say in the contract. Research had to carry one group's experience to the other.

Next time, I'd find a senior sponsor in the first few weeks and bring partner stories to the team sooner.
