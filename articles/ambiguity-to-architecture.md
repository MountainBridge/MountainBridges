# From Ambiguity to Architecture: The Code Wasn't the Hard Part

> **30-second read:** The fastest way to build the wrong system is to start coding before understanding the problem. Good engineering starts with the person, the journey and the constraints — then turns that understanding into architecture and evidence.

A request can sound simple:

> “Make this scalable.”

Or:

> “Add this capability.”

The temptation is to start with the technology.

But before the first design decision, there are usually better questions.

**Who is trying to accomplish what?**

What does their journey look like today? Where does it break? Which business rules are hidden? Which system actually owns the data? What happens when a dependency is slow, unavailable or wrong?

That is often where the real engineering problem appears.

## Start with the person, not the component

```text
Persona → Goal → Journey → Friction → Outcome
```

The endpoint alone is rarely enough. A technically successful response can still create a poor experience if it is slow, ambiguous, inconsistent or impossible to recover from.

Before choosing a framework or service, make the journey visible.

Ask:

- Who is affected?
- What are they trying to accomplish?
- What makes the current path difficult?
- What does success look like?
- What happens if we do nothing?

## Turn the journey into an engineering problem

Once the journey is clear, expose the constraints:

```text
Journey → Requirements → Constraints → Dependencies → State → Failure modes
```

This is where design thinking becomes engineering work.

We are not designing screens in isolation. We are understanding the person using the system and translating that experience into technical decisions.

## Design the system around the problem

Only now should architecture enter the conversation.

Look for:

- responsibility boundaries
- contracts
- state ownership
- trust boundaries
- independent failure domains
- operational ownership

A component diagram without these decisions is just a collection of boxes.

The important question is not “Which technology should we use?”

It is **“Which design makes the important behavior understandable, reliable and changeable?”**

## Make the trade-offs visible

| Decision | Alternative | Why it matters | Cost / risk |
|---|---|---|---|
| Sync vs async | Queue | Decouple slow work | More state to manage |
| Shared vs isolated | Separate boundary | Reduce blast radius | More operational overhead |
| Cache vs source of truth | Direct read | Lower latency | Staleness / invalidation |

The decision is only half the artifact.

The reasoning matters because the next engineer may inherit the system without inheriting the original conversation.

## Break the happy path

Before calling the design complete, ask what reality will do to it.

```text
Dependency unavailable?
       ↓
Timeout?
       ↓
Duplicate request?
       ↓
Stale data?
       ↓
Partial failure?
       ↓
What does the person experience?
```

Failure behavior is part of the user experience, not an afterthought.

## Build to learn, not just to ship

The first implementation should prove the assumptions that matter most.

```text
Problem → Journey → Design → Vertical slice → Failure injection → Evidence
```

A design is a hypothesis until evidence supports it.

Ask:

> **What assumption would have to be wrong for this design to fail?**

Then test that assumption.

## Where AI fits

AI can make implementation, exploration and iteration dramatically faster.

That makes the earlier work more important, not less.

If the problem is poorly framed, AI can simply help us build the wrong thing faster.

The useful role for AI is inside the engineering loop:

**understand → explore → implement → test → challenge → learn → iterate.**

## The pattern

**Start with the person. Discover the problem. Design the system. Break the system. Learn from the evidence.**

The technology will change.

The reasoning should travel.

## Research & further reading

- [Architecture Decision Record — Martin Fowler](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html)
- [Scaling the Practice of Architecture, Conversationally — Martin Fowler](https://martinfowler.com/articles/scaling-architecture-conversationally.html)
- [Building Infrastructure Platforms — Martin Fowler](https://www.martinfowler.com/articles/building-infrastructure-platform.html)
- [Code Digital Twin: A Knowledge Infrastructure for AI-Assisted Complex Software Development — alphaXiv](https://www.alphaxiv.org/abs/2503.07967)
- [A Survey of Context Engineering for Large Language Models — alphaXiv](https://www.alphaxiv.org/abs/2507.13334)
