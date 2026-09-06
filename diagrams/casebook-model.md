# Casebook Diagrams

These diagrams are the quick-grasp layer. Read the picture first; open the linked case for the detailed reasoning.

## 1. From problem to system

```mermaid
flowchart LR
    A[Problem] --> B[Users + journeys]
    B --> C[Context]
    C --> D[Constraints]
    D --> E[Boundaries]
    E --> F[Options]
    F --> G[Trade-offs]
    G --> H[Architecture]
    H --> I[Implementation]
    I --> J[Validation]
    J --> K[Explanation]
    K --> L[Feedback]
    L --> C
```

**Read it as:** do not jump from request to technology. The architecture is the result of framing and constraints.

## 2. Knowledge that scales

```mermaid
flowchart TD
    A[Expert knowledge] --> B[Pattern]
    B --> C[Reference implementation]
    C --> D[Task-based guide]
    D --> E[Engineer tries]
    E --> F[Friction / question]
    F --> G[Feedback]
    G --> B
```

**Read it as:** the reusable asset is not documentation alone. It is a feedback loop connecting explanation, implementation and real use.

## 3. A golden path

```mermaid
flowchart LR
    A[Intent] --> B[Discover]
    B --> C[Template]
    C --> D[Code + tests]
    D --> E[CI/CD]
    E --> F[Security + policy]
    F --> G[Observability]
    G --> H[Production]
    H --> I[Usage + friction]
    I --> B
```

**Read it as:** standardization works when the supported path covers the complete journey and remains transparent and adaptable.

## 4. AI evaluation

```mermaid
flowchart TD
    A[User intent] --> B[Context / retrieval]
    B --> C[Prompt + tools]
    C --> D[Model]
    D --> E[Output]
    E --> F[Deterministic checks]
    E --> G[Semantic judge]
    F --> H[Evidence]
    G --> H
    H --> I[Decision]
    I --> J[Regression + feedback]
    J --> B
```

**Read it as:** evaluate the chain, not only the generated text.

## 5. Contribution without chaos

```mermaid
flowchart LR
    A[Principles] --> B[Patterns]
    B --> C[Reusable components]
    C --> D[Automation]
    D --> E[Independent contribution]
    E --> F[Consistent result]
    F --> G[Feedback]
    G --> A
```

**Read it as:** encode the repeated decisions once so contributors can spend their time on the differentiated problem.
