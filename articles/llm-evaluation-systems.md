# LLM Evaluation Is a Systems Problem, Not Just a Prompt Problem

When teams start testing LLM-powered systems, it is tempting to evaluate only the prompt and the final answer.

That misses most of the system.

A useful evaluation model considers the entire chain:

```text
Persona / intent
      ↓
Input context
      ↓
Prompt / instructions
      ↓
Model + tools
      ↓
Output
      ↓
Evaluation rubric
      ↓
Decision / feedback
```

## Test the journey, not just the response

A response can look plausible and still fail the user's actual goal.

For every important scenario, capture:

- Persona
- User journey
- Intent
- Input data
- Expected behaviour
- Output data
- Failure conditions
- Evaluation criteria

This makes test cases explainable and reproducible.

## Why L4 testing matters

For higher-risk AI workflows, regression should move beyond happy-path correctness.

Think in layers:

**L1 — basic functional checks**  
Does the workflow execute?

**L2 — scenario checks**  
Does it behave correctly for representative inputs?

**L3 — edge and failure checks**  
How does it behave under ambiguity, missing information, or malformed input?

**L4 — system-level impact**  
What is the blast radius of a change, and which downstream behaviours may have shifted?

L4 is where context, dependency mapping, evaluation data, and architectural understanding become critical.

## LLM-as-a-judge: useful, but bounded

An LLM can act as a judge when the evaluation criterion is clearly defined and the task benefits from semantic assessment.

But the judge should not become an unbounded source of truth.

A stronger evaluation design specifies:

- A rubric
- Evidence requirements
- Scoring criteria
- Known failure modes
- Calibration examples
- Thresholds for human review

Use deterministic checks where deterministic checks are sufficient. Use model-based judgement where semantic judgement is actually needed.

## The bigger idea: evaluation as context engineering

The highest-leverage part of an evaluation system is often the context supplied to the evaluator.

If the evaluator knows the persona, journey, expected behaviour, input/output contract, relevant dependencies, and change history, it can reason about correctness much more meaningfully.

That leads to an important shift:

> The goal is not to make an LLM judge smarter in isolation. The goal is to give the judge the right context and evidence.

## A practical architecture

```text
Repository / specifications
          ↓
Context extraction
          ↓
Knowledge artifacts
          ↓
Test scenarios
          ↓
Deterministic assertions + LLM evaluation
          ↓
Regression evidence
          ↓
Human review where needed
```

This is the direction I find compelling in AI engineering: combining software engineering discipline with the new reasoning capabilities of LLMs.
