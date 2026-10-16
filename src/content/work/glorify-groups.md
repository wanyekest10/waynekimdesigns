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
order: 1
cardFit: contain
label: "Research and strategy"
summary: "The research behind a bet on community."
hero: "/work/glorify-assets/shipped-screens.webp"
heroAlt: "Glorify Groups as it launched: a group's feed, recording a video reply, and a sermon discussion"
intro:
  - "Glorify had 2.5M+ users praying and meditating on their own. With a post-Series B board meeting ahead, leadership was weighing community as the next bet, and doubted it would work."
  - "I turned their doubts into one testable hypothesis, then put a TestFlight prototype into 82 people's real small groups for a 2-week diary study."
  - "Leadership launched Glorify Groups and dedicated three of the four product, design, and engineering pods to it. Today 1.8M+ people use it."
facts:
  - { label: "Role", value: "Senior Design Researcher" }
  - { label: "Timeline", value: "6 weeks, Mar to May 2023" }
  - { label: "Team", value: "VP of Product, Lead Designer" }
  - { label: "Methods", value: "Prototype diary study, interviews, survey" }
stats:
  - { value: "1.8M+", label: "users in Glorify Groups" }
  - { value: "20%", label: "of daily active users use Groups" }
  - { value: "3 of 4", label: "product pods committed to Groups" }
jumps:
  - { label: "Skip to the research", to: "studying-real-behavior-not-stated-interest" }
  - { label: "Skip to the findings", to: "what-we-found" }
  - { label: "Skip to the impact", to: "the-decision" }
---


## Should Groups exist at all?

Glorify had grown to 2.5M+ users on solo practice: prayer, meditation, daily devotionals. With a board meeting coming after the Series B, the company needed to show where further revenue and growth would come from. Community was on the table. Building it meant committing product pods. Not building it meant passing on the most obvious growth story the company had.

The real question wasn't how to design Groups. It was whether Groups should exist at all.

## What I already knew

My own time in Christian small groups, and interviews with other small group leaders and members, pointed the same way. <!-- TODO: confirm whether the earlier 40+ interviews with pastors and small group leaders (13 churches and ministries, 8 states, 6 denominations) were yours. If so, name them here. -->

- **Small groups are the lifeblood of the church.** They drive accountability, connection, and meaning for members.
- **Volunteer leaders drive growth.** The "unofficial leaders" of small groups are who grow discipleship in a church.
- **Pastors invest in those leaders.** Churches put their effort and money into supporting group leaders, which made Groups a potential B2B2C business, not just a feature.
- **Groups were already online, in the wrong place.** They gathered in KakaoTalk, WhatsApp, GroupMe, and group texts, where faith conversations got lost among everything else.

## What leadership needed to know

Leadership doubted it would work. Their questions came from different angles: would people actually engage with each other, would sharing faith in an app feel authentic, and would any of it last past the novelty?

Rather than answer each question separately, I synthesized them into one hypothesis: value to individual users rolls up into value for the small group, and ultimately makes in-person gatherings more meaningful. We mapped it as a Flywheel Framework, and it shaped the whole research approach.

![The Flywheel Framework: individual value rolls up into group value and more meaningful in-person gatherings](/work/glorify-diagrams/flywheel.svg)

## Studying real behavior, not stated interest

Ask people if they'd use a community feature and most say yes. That tells you very little. So I designed and ran a 2-week prototype diary study with 82 participants, using a TestFlight beta inside their real small groups.

- **Two waves:** groups not tied to a specific church, then groups from specific churches. Participants included church planters, young parents, marriage groups, dads' groups, and Bible study groups.
- **Diary study:** six survey check-ins per participant across two weeks.
- **Follow-up interviews:** with group leaders and members, to explore the moments of value behind the data.

<figure class="trio">
  <div><img src="/work/glorify-assets/testflight-share.webp" alt="Group chat and shared scripture in the prototype"/><p><strong>Share life together.</strong> Group chat and shared scripture.</p></div>
  <div><img src="/work/glorify-assets/testflight-enjoy.webp" alt="A group quiz and a group event in the prototype"/><p><strong>Enjoy life together.</strong> A quiz, or a group event.</p></div>
  <div><img src="/work/glorify-assets/testflight-grow.webp" alt="Group devotionals and life questions in the prototype"/><p><strong>Grow together.</strong> Devotionals and life questions.</p></div>
  <figcaption>What the TestFlight prototype let groups do.</figcaption>
</figure>

Participation held. 65% of participants were still checking in at the end of week two, and many asked us to keep the prototype open. People don't ask to keep a beta they don't use.

![Share of participants completing each of the six check-ins across the two-week pilot](/work/glorify-diagrams/study-timeline.svg)

## What we found

**1. Lowering the barrier to participation**
Low-pressure digital sharing reduced social friction, especially for quieter members. The app complemented in-person community instead of replacing it.

> "When people realize they share the same favorite scripture, the conversation opens naturally. Hearing why it matters to someone else brings that connection straight into the room."
>
> Small Group Leader

**2. Carrying meaning across moments**
Shared context between weekly gatherings created continuity. Members arrived grounded, and conversations went deeper.

> "Seeing people engage on the app beforehand helped them come into the meeting more confident. They weren't starting from social anxiety; they already had something to share. Someone could say, 'Hey, that was cool what you wrote,' and the conversation would take off."
>
> Small Group Member

**3. A space set apart**
Groups didn't feel like another chat app. Participants described it as a dedicated space for faith, separate from everyday conversation.

> "We could use our regular Kakao chat, but it was different to use this app. It felt like a 'holier' space, separated from other social conversations."
>
> Small Group Lead

The numbers backed it up. 37 of 38 respondents agreed that Glorify Groups could enhance their small group experience, and 44 of 48 said they were likely to use it if it were developed further.

![37 of 38 agreed Groups could enhance their small group; 44 of 48 likely to use it](/work/glorify-diagrams/survey-results.svg)

Each finding answered one of leadership's doubts: people did engage, the sharing felt authentic, and the value carried from one week into the next. The flywheel held.

## What didn't work yet

Not everyone was convinced, and that mattered as much as the praise. Some participants called it "just a chat room for Christians" and said it would need to beat WhatsApp to earn a place on their phone. Groups that didn't already know each other struggled to get conversations started.

Those critiques became the next questions: how to design for groups of strangers, and what Groups could offer that a chat app couldn't, like prayer requests and church-provided content.

## Turning findings into principles

With Matt Regan, I turned the findings into three design principles, so they could guide future iterations across teams instead of living in a readout deck.

<figure class="trio principles">
  <div><img src="/work/glorify-assets/principle-intentional-space.webp" alt="Illustration of a woman resting her arms on a ledge"/><p><strong>Intentional Space</strong><br/>Create a dedicated environment that signals purpose and psychological safety for reflection and sharing.</p></div>
  <div><img src="/work/glorify-assets/principle-mirroring.webp" alt="Illustration of a child looking up at an adult"/><p><strong>Mirroring</strong><br/>Seeing others participate encourages engagement and normalizes faith-related practices within the group.</p></div>
  <div><img src="/work/glorify-assets/principle-warm-waters.webp" alt="Illustration of a woman stepping into the water"/><p><strong>Warm Waters</strong><br/>Gentle structure and permission help people feel safe expressing their beliefs.</p></div>
  <figcaption>The principles that became product guardrails.</figcaption>
</figure>

## The decision

I presented the findings at the product, design, and engineering leadership offsite. The research gave leadership the confidence to launch Glorify Groups, and they dedicated three of the four product, design, and engineering pods to it. Leadership, PMs, designers, and engineers built on this research as the foundation.

<figure class="inline"><img src="/work/glorify-assets/offsite.webp" alt="Presenting findings to the product, design, and engineering team around a conference table"/><figcaption>Presenting at the product, design, and engineering offsite.</figcaption></figure>

- **1.8M+** users in Glorify Groups
- **20%** of daily active users use Groups

## Reflection

**Community is built on trust, not features.** By revealing the dynamics behind participation, research turned uncertainty into confidence. My background in sociology shapes how I approach this: explore the unknown first, and set boundaries before scale.

**Trust isn't built at the readout either.** It was built through check-ins along the way: sharing early signals and answering questions from leadership and cross-functional teams as they came up.

**What I'd change today.** Recruitment and panel health were manual. I'd automate both with an AI agent and spend the time saved on the parts that need human judgment.
