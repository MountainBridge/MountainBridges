# Scaling Technical Knowledge

A technical solution becomes more valuable when the next person can use it without needing the original expert in the room.

## The problem

As systems and teams grow, the limiting factor is often not access to information but the cost of reconstructing context:

- Where do I start?
- Which path is supported?
- What decisions have already been made?
- What can I safely change?
- Who has solved this before?
- How do I know whether my change is correct?

The failure mode is familiar: the team scales, but the knowledge model does not.

## A reusable pattern

```text
Expert knowledge
      ↓
Explicit mental model
      ↓
Reference example
      ↓
Golden path / default route
      ↓
Self-service entry point
      ↓
Contribution + feedback
      ↓
Measured improvement
      ↓
Reusable pattern
```

## Design the knowledge system, not just the document

A durable technical asset should answer five things quickly:

1. **Why** — the problem and intended outcome
2. **How** — the smallest working path
3. **Why this way** — important decisions and trade-offs
4. **What can go wrong** — failure modes and boundaries
5. **What next** — extension points, related patterns and feedback path

A long document with no runnable path is a reference. A reference implementation with no explanation is a demo. The strongest asset connects the two.

## Contribution should be a product feature

When knowledge is expected to scale, contribution cannot depend on knowing the author personally.

Useful mechanisms include:

- a clear contribution path
- examples of acceptable changes
- lightweight review rules
- templates for recurring artefacts
- explicit ownership or maintenance expectations
- visible feedback and change history

The objective is to lower the cost of the first useful contribution without lowering the quality bar.

## Feedback is part of the architecture

Do not measure only readership.

Look for signals such as:

- where users abandon an onboarding path
- which questions recur
- which examples are copied or adapted
- where support requests cluster
- which versions or interfaces cause confusion
- which contribution paths actually produce useful changes

These signals turn usage into design input.

## Avoid the central-expert bottleneck

A system that requires one expert to explain every architecture decision, demo every workflow and approve every small change does not scale.

Better defaults move knowledge outward:

**document → demonstrate → standardize → enable → observe → improve**

This is the same reasoning behind golden paths, self-service platforms, reusable patterns and well-maintained contributor workflows.

## Practical checklist

Before publishing a technical asset, ask:

- Can a new engineer understand the goal in two minutes?
- Is there a shortest successful path?
- Is the architecture visible?
- Are important trade-offs explicit?
- Are failure modes shown?
- Can someone try the example without hidden context?
- Is there a clear way to report confusion or improve the asset?
- Can the asset evolve without relying on the original author?

## Evidence behind the pattern

This pattern is informed by research and practitioner work on developer experience, onboarding, platform engineering, and InnerSource. See [`research/evidence-base.md`](../research/evidence-base.md).

In particular, InnerSource Patterns formalize reusable practices using problem, context, forces, solution and resulting context; research on onboarding highlights documentation, mentorship and task-based learning; recent platform-engineering literature emphasizes self-service and golden paths as mechanisms for reducing developer friction and scaling common workflows.
