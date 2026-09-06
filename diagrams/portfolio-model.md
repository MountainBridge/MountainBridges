# Portfolio Model — One-Page Mental Model

The portfolio is organized around a repeatable engineering loop.

```mermaid
flowchart LR
    A[Real-world problem] --> B[Users & journeys]
    B --> C[Context & constraints]
    C --> D[Architecture & boundaries]
    D --> E[Implementation]
    E --> F[Validation & failure modes]
    F --> G[Technical explanation]
    G --> H[Feedback]
    H --> I[Reusable knowledge]
    I --> J[Adoption at scale]
    J --> H
```

## What each stage produces

| Stage | Output | Question |
|---|---|---|
| Problem | Problem statement | What are we actually solving? |
| Users | Personas + journeys | For whom, and at which moment? |
| Context | Requirements + constraints | What makes this problem non-trivial? |
| Architecture | Boundaries + decisions | Why is the system shaped this way? |
| Implementation | Runnable slice | Can someone build or use it? |
| Validation | Tests + evidence | How do we know it works? |
| Explanation | Diagram + guide | Can another engineer understand it quickly? |
| Feedback | Observations + issues | Where does the design break down? |
| Reuse | Patterns + templates | What should not be rediscovered? |
| Scale | Self-service + contribution paths | Can the system work beyond the original author? |

## The scaling loop

```mermaid
flowchart TD
    K[One solved problem] --> L[Document the mental model]
    L --> M[Create example / reference implementation]
    M --> N[Make entry point easy to discover]
    N --> O[Enable contribution or extension]
    O --> P[Collect questions, failures and usage signals]
    P --> Q[Improve docs, examples and defaults]
    Q --> M
```

The goal is not to maximize content. The goal is to make useful technical knowledge increasingly **discoverable, usable, teachable, and reusable**.

## AI system loop

```mermaid
flowchart LR
    S[Source code / specs / evidence] --> X[Context extraction]
    X --> K[Knowledge artifacts]
    K --> T[Scenarios]
    T --> V[Deterministic validation]
    T --> J[Semantic evaluation]
    V --> E[Evidence]
    J --> E
    E --> H[Human review when needed]
    H --> F[Feedback / updated context]
    F --> X
```

This makes the repository itself part of the engineering system: decisions, examples, evidence and explanations remain inspectable and reusable.
