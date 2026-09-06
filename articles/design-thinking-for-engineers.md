# Design Thinking for Engineers: Start With the Journey, Not the Technology

> **30-second read:** Start with what a real person needs to accomplish, trace the friction through the journey, then choose technology. The best technical solution often emerges after the problem is framed correctly.

> **2-minute read:** Replace “what can we build?” with “what outcome are we trying to improve?” Define the person, goal, journey and friction. Separate the symptom from the underlying problem, then bring constraints—contracts, security, reliability, ownership, latency, cost and migration—into the design. A good solution has an implementation and a way to observe whether the journey actually improved. Research on developer productivity and flow supports measuring human experience and friction alongside technical outcomes rather than relying on activity counts alone.

Engineering and design thinking are often treated as separate disciplines. In practice, the strongest technical solutions use both.

The common failure mode is starting with a technology: “Can we use AI?” “Should we build an API?” “Can we automate this?”

A better starting point is the journey a real person is trying to complete.

## 1. Start with the person

Define the persona, goal, environment, and moment that matters.

```text
Persona
  ↓
Goal
  ↓
Journey
  ↓
Friction
  ↓
Root cause
  ↓
Technical opportunity
```

The solution becomes easier to evaluate when the problem is anchored to a real outcome.

## 2. Separate symptoms from the problem

Users often describe the implementation they imagine:

> “I need a dashboard.”

The underlying need may actually be:

> “I need confidence that something important is healthy without manually checking five places.”

The second statement changes the design space. A dashboard might be one answer; an alerting model, aggregation service, or workflow could be better.

## 3. Identify friction before choosing tools

For a technical journey, inspect the full path:

```text
Discover
  ↓
Understand
  ↓
Try
  ↓
Integrate
  ↓
Debug
  ↓
Operate
  ↓
Expand
```

Friction at any stage can prevent success even when the underlying technology is strong.

Research from Google describes developer productivity as a human-centered, sociotechnical problem and separately studies flow and friction as useful lenses for understanding developer experience. citeturn492971search2turn492971search1

## 4. Treat constraints as design inputs

Constraints shape the solution:

- existing contracts and APIs
- security and privacy boundaries
- reliability expectations
- operational ownership
- developer learning curve
- cost and latency
- migration effort
- backward compatibility

A prototype can ignore some of these. A production system cannot.

## 5. Turn insights into technical decisions

For each important decision, record:

**Context → decision → alternatives → trade-offs → evidence → consequences.**

This makes the design explainable to engineers, product partners, operators, and the next person who inherits the system.

## 6. Design the example, not just the explanation

When a concept is difficult, a small executable example often teaches more than several paragraphs.

A strong technical example should show:

```text
Problem
  ↓
Minimal setup
  ↓
Representative implementation
  ↓
Observed output
  ↓
Failure / edge case
  ↓
Production considerations
```

The example should be small enough to run and realistic enough to transfer.

## 7. Close the loop

Good technical work does not end when the implementation ships.

Observe:

- where users still hesitate
- which errors recur
- where documentation is unclear
- which integrations fail
- what workarounds users invent

Then feed those observations back into the product, system, and learning material.

## Reference case: from “API” to usable journey

Google Cloud's guidance on reducing developer burden treats APIs and platforms as products and emphasizes outside-in thinking, consistent experiences and supported paths. The useful lesson is that an interface should be designed around the work a person needs to complete, not around the internal organization of the backend.

Source: https://cloud.google.com/building-better-apis-by-reducing-developer-burden

## The principle

**Build for the journey. Make the system explainable. Make the trade-offs visible.**

That combination produces technology that people can not only use, but understand and trust.

## Research & further reading

- [Developer Productivity for Humans: A Human-Centered Approach to Developer Productivity — Google Research](https://research.google/pubs/developer-productivity-for-humans-a-human-centered-approach-to-developer-productivity/)
- [Measuring Flow and Friction for Developers — Google Research](https://research.google/pubs/measuring-flow-and-friction-for-developers-part-6-measuring-flow-and-friction-for-developers/)
- [What Improves Developer Productivity at Google? Code Quality — Google Research](https://research.google/pubs/what-improves-developer-productivity-at-google-code-quality/)
- [Measuring Developer Goals — Google Research](https://research.google/pubs/measuring-developer-goals/)
