# 01 — Agentic Regression Investigator

## The problem

Traditional regression answers **did a test pass?**

This project asks a harder question:

> **What changed, which developer or user journey can it affect, what evidence do we have, and what should a human investigate next?**

The implementation is a public, synthetic reference pattern inspired by enterprise regression engineering. It must not contain employer source code, credentials, customer data or proprietary workflows.

## Pattern

```text
Source Repositories
      ↓
Grounded Context
      ↓
Knowledge Model
      ↓
Business + Technical Scenarios
      ↓
Executable Tests
      ├── Functional
      ├── Negative / Null
      └── Stress / Boundary
      ↓
Change + Drift Detection
      ↓
Agentic Investigator
      ↓
Evidence Pack
      ↓
Human Decision / CI Gate
```

## Context engineering layer

The system does not treat an LLM prompt as the product. Context is engineered around explicit rules:

1. Read the designated source of truth.
2. Preserve repository paths, symbols and versions exactly.
3. Ground claims in retrieved evidence.
4. Separate observed facts from inference.
5. Flag missing evidence instead of inventing it.
6. Refresh the context when the source changes.

The resulting context feeds both documentation and testing.

## Regression model

Each scenario carries:

- persona
- user journey
- business intent
- preconditions
- input/test data
- expected output
- source evidence
- API/UI boundary
- downstream dependencies
- failure modes
- blast-radius tags

The test suite can therefore move from **test case → evidence → user impact**, rather than stopping at pass/fail.

## Agentic investigator

Agents are used for bounded investigation tasks, not unrestricted autonomous decision-making.

Example tools:

- repository search
- diff inspection
- test-result inspection
- dependency lookup
- log/alert retrieval
- scenario lookup
- evidence collection

The agent produces an investigation record containing:

**change → affected component → evidence → candidate impact → tests run → uncertainty → recommended human review**

## Reliability experiments

The reference implementation should include:

- happy-path regression
- null/missing-field testing
- boundary testing
- contract/schema drift
- downstream compatibility
- controlled stress testing
- flaky-test detection
- production-alert correlation

## CI/CD

A future pipeline can run the investigator after a change and expose evidence as a quality signal alongside conventional test results.

Harness-style deployment gates can be represented as the CI/CD integration boundary; the project should not imply that Harness is required.

## DevRel surface

This project is deliberately built as developer education:

- architecture diagram
- 30-second concept explanation
- 2-minute technical explanation
- runnable lab
- tutorial
- troubleshooting guide
- workshop
- failure-mode case studies
- contribution guide

## Success criteria

A developer should be able to clone the project, run a small synthetic application, introduce a controlled change, execute the regression workflow and understand **why the investigator flagged the change**.

That is the core DevRel test: the engineering is inspectable and the learning path is reproducible.
