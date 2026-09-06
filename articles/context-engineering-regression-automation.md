# Context Engineering for Regression Automation

Regression work often fails for a reason that has little to do with the test framework: the context required to make a good testing decision is distributed across source code, configurations, contracts, historical knowledge, and people's memory.

A change lands. A test suite runs. The team still has to answer a harder question: **what behaviour should we be worried about, and why?**

The useful shift is to make that reasoning explicit enough for people and machines to reuse.

## The problem

Traditional regression automation is usually optimized around executable checks:

```text
change → run tests → pass/fail
```

That works for deterministic behaviour. It becomes weaker when correctness depends on business journeys, dependencies, data shape, side effects, or interactions between services.

The missing layer is context.

## The model

Treat the repository and its observable contracts as the source of truth, then turn scattered engineering knowledge into structured artifacts that downstream validation can consume.

```text
Source code / configs / contracts
              ↓
       Context extraction
              ↓
   Structured knowledge artifacts
              ↓
        Scenario mapping
              ↓
   Test generation / selection
              ↓
Deterministic checks + semantic evaluation
              ↓
      Evidence + review
```

The point is not to generate more tests. It is to improve the quality of the decision about **which tests matter**.

## What context should survive a code change?

For every important journey, capture enough information to reconstruct the reasoning:

| Dimension | Example questions |
|---|---|
| Persona | Who is affected? |
| Journey | What is the user trying to accomplish? |
| Contract | What inputs/outputs are expected? |
| Dependencies | Which services, data, tools or rules are involved? |
| Change surface | What changed and what consumes it? |
| Failure modes | What could degrade silently? |
| Evidence | What observation proves the behaviour is still correct? |

This turns implicit tribal knowledge into an inspectable engineering artifact.

## Implementation pattern

A practical implementation can separate the system into four stages.

### 1. Extract

Parse source and configuration for routes, schemas, dependencies, business rules, feature flags, events, and other signals that describe system behaviour.

### 2. Normalize

Convert those signals into small, human-readable documents rather than one giant generated summary.

For example:

```text
knowledge/
├── personas/
├── journeys/
├── contracts/
├── dependencies/
├── failure-modes/
└── change-history/
```

Small artifacts are easier to review, diff, retrieve, and invalidate.

### 3. Reason

Use the knowledge artifacts to identify impacted scenarios and generate candidate regressions. This is where an LLM can help with semantic mapping across distributed context.

### 4. Validate

Keep deterministic assertions deterministic. Use model-based evaluation only where semantic judgement adds value, and retain the evidence used to make that judgement.

## Blast radius is the real regression question

A useful change-impact analysis asks:

```text
Changed component
      ↓
Direct consumers
      ↓
Shared contracts / state
      ↓
Dependent journeys
      ↓
User-visible behaviour
```

A small source-code change can still have a wide behavioural blast radius. Conversely, a large refactor may have a narrow one when contracts remain stable.

## Where LLMs help

LLMs are useful for tasks such as:

- mapping a code change to affected concepts
- finding relationships across documents and modules
- generating candidate scenarios
- comparing an output against a nuanced rubric
- summarizing evidence for a human reviewer

They should not silently replace deterministic checks or become the final authority without evidence.

## A bounded LLM-as-a-judge design

```text
Candidate output
      ↓
Context + rubric + evidence
      ↓
Semantic evaluator
      ↓
Score + rationale + confidence
      ↓
Threshold
  ↙       ↓       ↘
pass   review    fail
```

The evaluator should know what it is judging, what evidence is allowed, and when the result is insufficient for automation.

## What good looks like

A strong regression system should make these questions easy to answer:

1. What changed?
2. Which journeys could be affected?
3. Why were these scenarios selected?
4. What evidence was observed?
5. What remains uncertain?

That is a much more useful outcome than a green test report with no explanation.

> Good regression automation checks behaviour. Good context engineering preserves the reasoning behind the check.
