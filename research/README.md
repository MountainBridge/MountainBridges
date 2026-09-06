# Research & Evidence Layer

This directory supports the engineering casebook with a curated evidence base.

The goal is traceability:

**source → principle → pattern → architecture → implementation → measurement → feedback**

```mermaid
flowchart LR
    A[Research] --> B[Evidence]
    B --> C[Principle]
    C --> D[Pattern]
    D --> E[Architecture]
    E --> F[Implementation]
    F --> G[Measurement]
    G --> H[Feedback]
    H --> B
```

## Start here

- [Evidence Base + Bibliography](evidence-base.md)
- [Engineering Casebook](../case-studies/README.md)
- [Quick-Grasp Diagrams](../diagrams/casebook-model.md)

## What makes a source useful

A source belongs here when it changes a design, implementation, documentation, measurement or adoption decision.

Prefer primary research, systematic or multivocal reviews, original engineering reports, official technical documentation and mature practitioner patterns. For fast-moving areas such as AI-assisted engineering and LLM evaluation, prefer recent surveys together with strong first-party or primary sources.

The repository deliberately avoids link dumps. Each source records the problem it helps explain, the mechanism worth borrowing, and where that evidence appears in the casebook.

## Research threads

- Developer flow, friction, cognitive load and productivity
- Onboarding and knowledge transfer
- Reusable patterns, contribution and maintenance
- Architecture decisions and distributed alignment
- Golden paths, platform engineering and self-service
- AI-assisted engineering and organizational capability
- LLM / RAG evaluation, reliability and safety
