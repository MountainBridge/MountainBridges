# Architecture Decisions That Survive the Original Team

> **30-second read:** Code survives people. The reasoning behind architectural choices often does not. A small decision record preserves context, alternatives, trade-offs, evidence, consequences, and the signal that should trigger a revisit.

> **2-minute read:** Treat architecture decisions as testable hypotheses, not permanent opinions. Capture the problem, constraints, alternatives, why one option won, and what would make the decision wrong later. This reduces rediscovery, makes review easier, and gives future engineers a way to evolve the system without reverse-engineering history from code.

## The real problem

Most systems outlive the conversations that created them.

The risk is that the code survives while the reasoning disappears.

A useful decision record is small:

```text
Context → Decision → Alternatives → Trade-offs → Evidence → Consequences
```

The goal is to let someone who was not in the room understand why the system looks the way it does.

## Example: asynchronous boundary

**Context**  
A workflow depends on a slow external service and users do not need the result synchronously.

**Decision**  
Move the external call behind an asynchronous job boundary.

**Alternatives**  
Keep synchronous processing; introduce a cache; replicate the dependency.

**Trade-off**  
Accept eventual completion and additional state in exchange for isolation from dependency latency.

**Evidence**  
Observed latency, timeout frequency, and the user journey show that immediate completion is unnecessary.

**Consequence**  
The workflow needs status tracking, retry policy, idempotency, and an operator-visible failure state.

The record is useful because it connects architecture to behaviour.

## Make decisions scoped and reversible

Avoid statements such as “microservices are better” or “AI is more scalable.”

Instead:

> Under these constraints, for this workload and ownership model, this boundary gives us the best balance of isolation, operational cost, and change velocity.

A decision becomes testable when its assumptions are explicit.

For each important decision, record a **revisit trigger**:

```text
Decision
   ↓
Assumption
   ↓
Observable signal
   ↓
Trigger
   ↓
Re-evaluate
```

## Why this matters beyond documentation

Good decision records help with onboarding, design review, incident analysis, system evolution, and explaining trade-offs to people who did not author the system.

The artifact should be short enough to read and precise enough to disagree with.

## Real-world reference case

Martin Fowler's current Architecture Decision Record guidance describes ADRs as concise records of one decision, its context, and its ramifications, with alternatives and consequences preserved as part of the reasoning. The key idea is that accepted decisions remain explicit and can be superseded rather than silently rewritten.

Source: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html

## Papers and further reading

- [Scaling the Practice of Architecture, Conversationally — Martin Fowler](https://martinfowler.com/articles/scaling-architecture-conversationally.html)
- [Architecture Knowledge Management: A Literature Review](https://www.alphaxiv.org/abs/1403.6173)
- [How are Software Repositories Mined? — alphaXiv](https://www.alphaxiv.org/abs/2204.08108)

## The principle

> **Code tells the next engineer what the system does. Decision records help explain why.**
