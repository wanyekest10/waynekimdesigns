---
title: RaiseMe Portal
slug: raiseme-portal
headline: "Research that made a quiet B2B problem impossible to ignore, and got the partner portal rebuilt weeks before COVID."
context: "RaiseMe, 2019 to 2020"
role: UX Researcher
timeline: October 2019 to June 2020
team:
  - name: Katie Zellner
    role: VP of Customer Success
  - name: Dan Carew
    role: Director of Product
  - name: Laura Reisert
    role: AVP of Sales
  - name: Rajesh Agarwal
    role: Engineering Manager
methods: [Interviews, Workflow observation, Survey, Journey mapping, Workshops]
tags: [UX research, Service design, B2B]
order: 2
label: "Research and service design"
summary: "Research that saved B2B revenue."
hero: "/work/raiseme-assets/hero-download-settings.webp"
heroAlt: "The redesigned Download settings screen: a weekly follower report that generates itself every Monday"
jumps:
  - { label: "Skip to the research", to: "hack-week-the-assumption-broke" }
  - { label: "Skip to the findings", to: "building-the-case" }
  - { label: "Skip to the impact", to: "the-decision" }
short:
  - { lead: "The problem.", text: "RaiseMe's college portal kept failing the people who used it every week, and contract renewals were coming." }
  - { lead: "What I did.", text: "Took partner frustration from support tickets to the CEO: Hack Week research, a partner survey, and a case tying reliability to revenue." }
  - { lead: "What happened.", text: "Leadership committed to rebuilding the portal weeks before COVID. RaiseMe kept 90%+ of projected revenue through the pandemic." }
facts:
  - { label: "Company", value: "RaiseMe" }
  - { label: "Role", value: "UX Researcher" }
  - { label: "Timeline", value: "Oct 2019 to Jun 2020" }
  - { label: "Team", value: "Customer Success, Product, Sales, Engineering" }
  - { label: "Methods", value: "Interviews, usability tests, survey, journey mapping" }
  - { label: "Outcome", value: "Partners: exports 15 → 2 min · Business: 90%+ revenue kept" }
---

## Growth without reliability

Colleges paid RaiseMe to reach students early. To use that data, someone at each college had to export it from the portal, clean it, and import it into their own CRM, every week, under enrollment deadlines. When the portal failed, their week stalled. Our support inbox read like this:

> "I am getting all weekly files to load and finding a snag with my high school followers. I have no filters set except to give me all the high schoolers, and am getting nothing."
>
> Data operator, by email

> "The report has been showing as pending for about 20 minutes, which is much longer than usual. I can't find a way to cancel the request."
>
> Data operator, by email

Each issue looked small. Together they were eroding trust, and the people renewing the contracts would eventually hear about it.

## Why I saw it first

Before research, I worked in Customer Success with these partners. I knew the operational reality behind churn conversations, and the gap between what partners struggled with and what was on the roadmap. That position let me connect partner experience to decisions leadership couldn't ignore.

## Hack Week: the assumption broke

I used RaiseMe's first Hack Week to dig into a long-standing friction point: how colleges moved RaiseMe data into their CRMs. My team was three engineers and three people from Sales and Partner Success. In four days we ran five interviews, five surveys, and three moderated usability tests with college data operators.

We went in believing direct API integrations would solve it. The first two partners loved the idea, and the engineers wanted to start building. I asked them to wait a day. Two partners weren't a sample, and we hadn't heard from our tougher accounts yet. The next three changed the answer.

<div class="compare">
  <div class="crow head"><span></span><span class="k">WHAT WE ASSUMED</span><span></span><span class="k">WHAT INTERVIEWS SHOWED</span></div>
  <div class="crow"><span class="k">The problem</span><span class="was">Partners need API integrations</span><span class="to">→</span><span class="is">Partners already use middleware<small>One more integration adds work, not less.</small></span></div>
  <div class="crow"><span class="k">Where it breaks</span><span class="was">Getting data into RaiseMe</span><span class="to">→</span><span class="is">Getting clean data out<small>Every export was cleaned again by hand.</small></span></div>
  <div class="crow focal"><span class="k">What to build</span><span class="was">More integrations</span><span class="to">→</span><span class="is">Predictable, CRM-ready exports<small>Which became Scheduled Templates.</small></span></div>
</div>

Trust was the deeper problem. Why would partners plug in an API from a vendor whose downloads kept failing? The engineers watched error messages appear in four of five sessions. And none of the five partners were downloading the fields their RaiseMe program needed. Their director had asked them to, but no one had explained why.

The real job was getting RaiseMe data into a CRM-ready state. We prototyped Scheduled Templates: standardized, recurring exports that fit the workflows partners already had.

> "This would save me 15 minutes per week to 2 minutes, and I would see no more error bars."
>
> Data operator, reacting to the prototype

Across 330+ partners, that's 3,500+ hours a year: 13 minutes saved, 50 weeks, 330 partners. The project was runner-up for both Judges' Choice and People's Choice.

The feature didn't make the roadmap right away. The insight stuck: the issue wasn't access to data. It was trust in its reliability.

## Building the case

After Hack Week, feasibility wasn't the barrier. Prioritization was. So I shifted the conversation from features to consequences.

In December I took a step back and asked what we actually measured about partner sentiment. The answer was NPS, answered by 3% of 300 partners. In competitive higher ed, "would you recommend us to a colleague" was the wrong question anyway. So I built a research plan: interviews with our designer, a partner survey, and a workshop with Business Development and Partner Success.

The interviews put the pain in partners' own words.

> "It's surprising how often the error message pops up or how often we can't filter or download. It causes staff to become frustrated and makes me not want to recommend using the portal to my staff outside of just downloading."
>
> Director of Admissions

> "It's surprising it is not more reliable at the very least. We had issues even getting follower information at the deadline. This caused award letters to be held up for the entire class."
>
> Data operations lead

### Asking partners

I surveyed partners about the portal. 12 of 14 said its reliability fell below their expectations, far more than any other part of the experience.

<div class="bars">
  <div class="brow focal"><span class="bl">College Portal reliability</span><div class="track"><div class="fill" style="width:85.71%"></div></div><span class="bv">12 of 14</span></div>
  <div class="brow"><span class="bl">Resolving bugs</span><div class="track"><div class="fill" style="width:50%"></div></div><span class="bv">7 of 14</span></div>
  <div class="brow"><span class="bl">Building and editing programs</span><div class="track"><div class="fill" style="width:42.86%"></div></div><span class="bv">6 of 14</span></div>
  <div class="brow"><span class="bl">Accuracy of RaiseMe data</span><div class="track"><div class="fill" style="width:35.71%"></div></div><span class="bv">5 of 14</span></div>
  <div class="brow"><span class="bl">Ease of use</span><div class="track"><div class="fill" style="width:21.43%"></div></div><span class="bv">3 of 14</span></div>
  <div class="note">Partners who said each area fell below expectations. Survey of college partners, 14 of 23 responded.</div>
</div>

### Revenue at risk

I asked partners to pick words for their experience, and lined those words up against what each partner paid. The partners calling the portal slow and stressful were some of our largest accounts.

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

I ran workshops with Sales and Partner Success to hear how the portal showed up in their work. It was slowing deals and making renewals harder to defend.

> "Most of my team won't demo any product live. I do, but I'm always holding my breath during the Portal part."
>
> Sales leader

> "New features are meaningless if we can't deliver basic functionality like sorting and downloading student records."
>
> Partner Success manager

### The full journey

With a designer, I mapped the data operator's full journey, from first hearing about RaiseMe to deciding whether it was worth keeping. It showed where the ideal workflow and the real one split apart, and where Scheduled Templates fit.

<figure class="wide"><a class="zoom" href="/work/raiseme-assets/journey-map.webp" target="_blank" rel="noopener"><img src="/work/raiseme-assets/journey-map.webp" alt="Partner journey map for data operators across awareness, understanding, engagement, and loyalty, with channels, actions, thoughts, wants, and opportunities"/></a><figcaption>The data operator journey. Click to open full size.</figcaption></figure>

## The decision

With our Product Manager, I framed the work as a business decision, not a UX improvement. Would the company be comfortable choosing not to fix this?

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

We aligned on a phased roadmap: reliability first, then low-lift interface fixes, then Scheduled Templates. With no Head of Product at the time, I brought the case directly to the CEO and senior leadership. It secured a commitment to invest in the College Partner Portal in early 2020.

## What shipped

<figure class="pair">
  <img src="/work/raiseme-assets/before-portal-error.webp" alt="Before: the portal showing a red error banner and empty saved groups"/>
  <img src="/work/raiseme-assets/after-scheduled-downloads.webp" alt="After: an Available downloads list with automatically generated weekly follower reports"/>
  <figcaption>Before: errors on the most basic task. After: weekly exports that generate themselves and wait in a downloads list.</figcaption>
</figure>

COVID forced trade-offs. The company shifted design time toward helping educators through the pandemic, and we cut one thing partners had asked for: choosing their own download fields. We kept the automated weekly downloads, with a notification and a CSV file, and we kept a commitment to show partners their return.

![Partner Dashboard V1: quick stats on signups, last download date, students likely to apply, and senior application status](/work/raiseme-assets/partner-dashboard.webp)

Partner Dashboard V1 showed colleges what their RaiseMe program was producing, with prompts to act throughout the enrollment cycle. Partners saw us respond to what they'd told us, and became more willing to join interviews, surveys, and focus groups.

## Results

The commitment came weeks before COVID disrupted higher ed budgets. That timing mattered. While institutions froze budgets and cut vendors, RaiseMe:

<div class="stats">
  <div class="focal"><span class="k">For the business</span><b>90%+</b><p>of projected annual revenue kept</p></div>
  <div><span class="k">For the business</span><b>150 → 65</b><p>partners filing usability tickets, out of 300</p></div>
  <div><span class="k">For partners</span><b>95% → 99%</b><p>portal reliability</p></div>
  <div><span class="k">For partners</span><b>15 → 2 min</b><p>for a weekly export task</p></div>
</div>

The updated portal stayed in use after RaiseMe was acquired by CampusLogic in July 2020.

> "Wayne drove real change in our product roadmap and client success trajectory by tying client needs directly to ROI."
>
> VP of Partner Success

> "Wayne's research didn't just surface insights, it reshaped our roadmap and influenced a strategic pivot to address systemic gaps in partner value."
>
> User Research Manager

## Reflection

**In B2B, the user and the buyer are different people.** The leaders who renewed never touched the export. The operators who did had no say in the contract. Research had to carry one group's experience to the other.

**Speak each stakeholder's language.** The same evidence became a revenue risk for leadership, a demo risk for Sales, and a weekly time cost for operators.

**Research can be infrastructure.** The most damaging failures here were quiet. Small reliability gaps added up to strategic risk long before the metrics showed it. Making that cost visible is what changed the roadmap.

**What I'd do sooner.** Find a senior sponsor in the first weeks, not the third month. Start cross-functional coffee chats earlier, and use storyboards to bring partner stories to the team. With more time, I'd have run a card sort on the portal's navigation, unchanged since 2012, and A/B tested the dashboards.
