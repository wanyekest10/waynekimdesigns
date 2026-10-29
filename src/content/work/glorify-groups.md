---
title: Glorify Groups
slug: glorify-groups
headline: "Research that turned leadership's doubts into a testable hypothesis, and gave them the confidence to bet on community."
context: "Glorify, 2023"
role: Senior Design Researcher
timeline: 6 weeks, March to May 2023
team:
  - name: Paul Pow
    role: VP of Product
  - name: Matt Regan
    role: Lead Designer
methods: [Prototype diary study, Interviews]
tags: [UX research, Strategy, Community]
reading_time: About 2 minutes
order: 6
year: "2023"
featured: true
cardFit: contain
label: "Research through prototyping"
summary: "Small faith groups, now 1.8M+ users."
hero: "/work/glorify-assets/shipped-screens-flat.webp"
heroAlt: "Glorify Groups as it launched: a group's feed, recording a video reply, and a sermon discussion"
jumps:
  - { label: "Skip to the impact", to: "what-changed" }
  - { label: "Skip to the evidence", to: "how-we-found-out" }
short:
  - { lead: "The question.", text: "After its Series B, Glorify's leadership was weighing community as the next bet for its 2.5M+ users, and doubted it would work. Should Groups exist at all?" }
  - { lead: "What I did.", text: "Turned their doubts into one testable hypothesis, then ran a 2-week prototype diary study with 82 people in their real small groups." }
  - { lead: "What happened.", text: "Leadership launched Glorify Groups." }
skills: [Design research, Strategy, Synthesis, Facilitation]
contributions:
  - { skill: "Strategy", text: "Turned leadership's doubts about community into one testable hypothesis, through several leadership workshops" }
  - { skill: "Design research", text: "Designed and ran a 2-week prototype diary study, recruiting 82 people in their real small groups and keeping them going, then ran follow-up interviews" }
  - { skill: "Synthesis", text: "Turned the findings into design principles" }
  - { skill: "Facilitation", text: "Presented the findings with Paul Pow, VP of Product, at the leadership offsite" }
  - { skill: "Not mine", text: "The prototype itself was designed and built by the product team", shared: true }
  - { skill: "Impact", text: "3 of 4 product pods committed to Groups. By 2025: 1.8M+ users, 20% of daily actives", impact: true }
facts:
  - { label: "Company", value: "Glorify" }
  - { label: "Role", value: "Senior Design Researcher" }
  - { label: "Timeline", value: "6 weeks, Mar to May 2023" }
  - { label: "Team", value: "Paul Pow, VP of Product · Matt Regan, Lead Designer" }
  - { label: "Methods", value: "Prototype diary study, interviews, survey" }
---

## Should Groups exist at all?

Glorify had 2.5M+ users praying and reading on their own. After the Series B, leadership needed a next growth bet, and community was the obvious one. Building it meant committing product pods, so the first question was whether Groups should exist at all.

## How we found out

### What we knew going in

Earlier interviews with 40+ pastors and group leaders said small groups are the heart of a church, and churches invest in their leaders. Groups were already meeting online, just in the wrong place: group chats, where faith got lost among everything else.

<figure class="quad">
  <p class="q-axis q-y">Together</p>
  <div class="q-grid">
    <div class="q"><span class="q-k">Together, any conversation</span><div class="q-chips"><span>Group texts</span><span>WhatsApp</span><span>KakaoTalk</span><span>GroupMe</span><span>Messenger</span><span>Snapchat</span><span>Zoom</span><span>Instagram Live</span></div></div>
    <div class="q q-focal"><span class="q-k">Together, built for faith</span><b>Glorify Groups</b><p>The gap no tool filled.</p></div>
    <div class="q q-empty"><span class="q-k">On your own, any conversation</span></div>
    <div class="q"><span class="q-k">On your own, built for faith</span><div class="q-chips"><span>YouVersion</span><span>Glorify, before Groups</span></div></div>
  </div>
  <p class="q-axis q-x"><span>Any conversation</span><span>Built for faith practice</span></p>
  <figcaption>Groups were really competing with the group chat. Tools in the top left are the ones participants said their groups already used. Placement is my read of the interviews.</figcaption>
</figure>

### Three doubts, one hypothesis

Leadership had three doubts: would people engage, would sharing faith in an app feel authentic, and would it last past the novelty? I combined them into one hypothesis to test: value to each person rolls up into value for the group, and makes meeting in person more meaningful.

<figure class="wide"><img src="/work/glorify-diagrams/flywheel.svg" alt="The Flywheel Framework, two wheels: value to users (group leads and members drive each other) turns value to the small group (better engagement, more meaningful time in person, supported discipleship). Leadership's three doubts sit on the parts they test."/><figcaption>Each of leadership's doubts, placed on the part of the flywheel it tests.</figcaption></figure>

### Watching what people actually did

Ask people if they'd use a community feature and most say yes. So instead, 82 people used a working prototype inside their real small groups for two weeks, with six check-ins each and follow-up interviews.

<figure class="trio">
  <div><img src="/work/glorify-assets/testflight-share.webp" alt="Group chat and shared scripture in the prototype"/><p><strong>Share life together.</strong> Group chat and shared scripture.</p></div>
  <div><img src="/work/glorify-assets/testflight-enjoy.webp" alt="A group quiz and a group event in the prototype"/><p><strong>Enjoy life together.</strong> A quiz, or a group event.</p></div>
  <div><img src="/work/glorify-assets/testflight-grow.webp" alt="Group devotionals and life questions in the prototype"/><p><strong>Grow together.</strong> Devotionals and life questions.</p></div>
  <figcaption>What the TestFlight prototype let groups do.</figcaption>
</figure>

65% were still checking in at the end of week two, and several groups asked to keep the prototype. People don't ask to keep a beta they don't use.

![Share of participants completing each of the six check-ins across the two-week pilot](/work/glorify-diagrams/study-timeline.svg)

To keep 82 people going, the reminders ran on their own.

<div class="flow" role="list" aria-label="How check-in reminders were automated">
  <div class="step"><span class="n">01</span><b>Prototype app</b><small>Records each participant's activity.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">02</span><b>Server</b><small>Passes it along.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step"><span class="n">03</span><b>Google Sheet</b><small>Tracks who's checked in.</small></div>
  <span class="to" aria-hidden="true">→</span>
  <div class="step focal"><span class="n">04</span><b>Email and text</b><small>Nudges go out on their own.</small></div>
</div>

### What we found

<div class="finds">
  <div><span class="n">01</span><h4>Lowering the barrier</h4><p>Low-pressure sharing in the app made it easier for quieter members to take part, alongside meeting in person, not instead of it.</p><p class="q">"We've seen people get excited that they have the same favorite scripture as someone else, as well as being able to hear why it's their favorite scripture."<span>Small group leader</span></p></div>
  <div><span class="n">02</span><h4>Carrying meaning across the week</h4><p>Shared context between gatherings meant members arrived grounded, and conversations went deeper.</p><p class="q">"I feel we have learned more about each other through the app than we have in real life."<span>Small group member</span></p></div>
  <div><span class="n">03</span><h4>A space set apart</h4><p>It didn't feel like another chat app. People described a dedicated space for faith, separate from everyday conversation.</p><p class="q">"It felt like a 'holier' space separated from other social conversations."<span>Small group leader</span></p></div>
</div>

The end-of-study survey agreed.

<div class="agree" role="img" aria-label="37 of 38 respondents agreed Glorify Groups could enhance their small group: 21 strongly agreed, 16 agreed, 1 was neutral. 44 of 48 said they were likely to use it if it were developed further: 34 very likely, 10 likely, 4 neutral.">
  <div><b>37 of 38</b><p>agreed Groups could enhance their small group experience</p><div class="bar"><i class="strong" style="width:55.3%"></i><i class="agree-i" style="width:42.1%"></i><i class="neutral" style="width:2.6%"></i></div><small><em class="sw strong"></em>Strongly agree 21 <em class="sw agree-i"></em>Agree 16 <em class="sw neutral"></em>Neutral 1</small></div>
  <div><b>44 of 48</b><p>said they were likely to use it if it were developed further</p><div class="bar"><i class="strong" style="width:70.8%"></i><i class="agree-i" style="width:20.8%"></i><i class="neutral" style="width:8.4%"></i></div><small><em class="sw strong"></em>Very likely 34 <em class="sw agree-i"></em>Likely 10 <em class="sw neutral"></em>Neutral 4</small></div>
</div>

Each finding answered one of leadership's doubts.

## What shaped the product

With our lead designer, I turned the findings into three principles the teams could build from.

<figure class="trio principles">
  <div><img src="/work/glorify-assets/principle-intentional-space.webp" alt="Illustration of a woman resting her arms on a ledge"/><p><strong>Intentional Space</strong><br/>Create a dedicated environment that signals purpose and psychological safety for reflection and sharing.</p><p class="shipped"><strong>In the app:</strong> Groups is its own space, separate from everyday chat.</p></div>
  <div><img src="/work/glorify-assets/principle-mirroring.webp" alt="Illustration of a child looking up at an adult"/><p><strong>Mirroring</strong><br/>Seeing others participate encourages engagement and normalizes faith-related practices within the group.</p><p class="shipped"><strong>In the app:</strong> a group feed where members see each other post and reply by video.</p></div>
  <div><img src="/work/glorify-assets/principle-warm-waters.webp" alt="Illustration of a woman stepping into the water"/><p><strong>Warm Waters</strong><br/>Gentle structure and permission help people feel safe expressing their beliefs.</p><p class="shipped"><strong>In the app:</strong> sermon discussion prompts that give gentle structure.</p></div>
  <figcaption>The principles, and where each one shows up in the shipped app.</figcaption>
</figure>

Two features came straight from participants: prayer requests, now one of the app's most important features, and shared devotionals between meetings.

## What changed

Paul Pow, our VP of Product, and I presented at the leadership offsite. Leadership launched Glorify Groups and put three of four pods on it.


<div class="stats three">
  <div class="focal"><span class="k">Reach</span><b>1.8M+</b><p>users in Glorify Groups by 2025</p></div>
  <div><span class="k">Engagement</span><b>20%</b><p>of daily active users use Groups, by 2025</p></div>
  <div><span class="k">Commitment</span><b>3 of 4</b><p>product, design, and engineering pods</p></div>
</div>

<figure class="narrow"><img src="/work/glorify-assets/offsite.webp" alt="Presenting findings to the product, design, and engineering team around a conference table"/><figcaption>Presenting at the product, design, and engineering offsite.</figcaption></figure>

## What didn't work yet

Some called it "just a chat room for Christians," and groups of strangers struggled to get talking. Those became the next questions: how to design for strangers, and what Groups offers that a chat app can't.

## Reflection

**Trust isn't built at the readout.** It came from sharing early signals with leadership along the way.

**What I'd change today.** I'd hand recruiting and reminders to an AI agent, and spend the time on the parts that need judgment.
