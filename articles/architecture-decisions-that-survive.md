# Architecture Decisions That Survive the Original Team

Most systems outlive the conversations that created them.

The risk is that the code survives while the reasoning disappears.

## Capture the decision, not every discussion

A useful decision record is small:

```text
Context
Decision
Alternatives
Trade-offs
Evidence
Consequences
```

The goal is to let someone who was not in the room understand why the system looks the way it does.

## Example

**Context**  
A workflow depends on a slow external service and users do not need the result synchronously.

**Decision**  
Move the external call behind an asynchronous job boundary.

**Alternatives**  
Keep synchronous processing; introduce a cache; replicate the dependency.

**Trade-off**  
We accept eventual completion and additional state in exchange for isolation from dependency latency.

**Evidence**  
Observed latency, timeout frequency, and the user journey show that immediate completion is unnecessary.

**Consequence**  
The workflow needs status tracking, retry policy, idempotency, and an operator-visible failure state.

The record is useful because it connects architecture to behaviour.

## Good decisions are scoped

Avoid statements such as "microservices are better" or "AI is more scalable."

Instead:

> Under these constraints, for this workload and ownership model, this boundary gives us the best balance of isolation, operational cost, and change velocity.

A decision becomes testable when its assumptions are explicit.

## Revisit assumptions, not opinions

A decision record should answer:

- What assumption made this design reasonable?
- Which signal would tell us the assumption is no longer true?
- What would we change then?

This makes architecture adaptable without turning every change into a redesign exercise.

## Why this scales

Decision records help with:

- onboarding
- design review
- incident analysis
- system evolution
- technical documentation
- explaining trade-offs to non-authors

The highest-value documentation is often the smallest artifact that preserves reasoning.

> Code tells the next engineer what the system does. Decision records help explain why.
