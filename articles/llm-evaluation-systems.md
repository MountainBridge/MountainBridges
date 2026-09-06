# LLM Evaluation Is a Systems Problem, Not Just a Prompt Problem

When teams start testing LLM-powered systems, it is tempting to evaluate the prompt and the final answer.

That misses most of the system.

A useful evaluation model follows the complete journey:

```text
Persona / intent
      ↓
Input + retrieved context
      ↓
Instructions / prompt
      ↓
Model + tools
      ↓
Output / action
      ↓
Evaluation evidence
      ↓
Decision + feedback
```

A plausible answer can still be a failed system outcome.

## Test the journey, not just the response

For an important scenario, capture the contract around the response:

| Dimension | What to define |
|---|---|
| Persona | Who is using the system? |
| Intent | What are they trying to accomplish? |
| Context | What information is the model allowed to use? |
| Behaviour | What should the system do? |
| Output | What form and properties should the result have? |
| Failure | What must never happen? |
| Evidence | What observations support the verdict? |

This makes evaluation explainable and reproducible.

## Evaluation layers

I think about AI regression as progressively broader checks.

**L1 — execution**  
Does the workflow run and return a structurally valid result?

**L2 — scenario correctness**  
Does it satisfy representative user journeys?

**L3 — edge and failure behaviour**  
How does it behave with missing, conflicting, adversarial, or malformed inputs?

**L4 — system impact**  
What changed upstream or downstream, and which behaviours could have shifted as a consequence?

The higher the layer, the more important system context becomes.

## Model evaluation as evidence, not intuition

For semantic evaluation, a model-based judge can be useful. But a score without evidence is difficult to trust.

A stronger evaluator receives:

- a clear rubric
- the scenario and expected behaviour
- permitted evidence
- calibration examples
- explicit failure conditions
- scoring rules
- a confidence or review threshold

```text
Output
  ↓
Context + rubric + evidence
  ↓
Semantic evaluator
  ↓
Score + rationale
  ↓
Policy threshold
 ↙      ↓       ↘
pass   review   fail
```

Deterministic properties should stay deterministic. Semantic properties can use semantic evaluation.

## Context is often the hidden variable

Consider two evaluators judging the same response.

One sees only the prompt and answer.

The other also sees:

```text
Persona
Journey
Input contract
Expected behaviour
Relevant dependencies
Known failure modes
Change history
```

The second evaluator has a much better chance of identifying a real regression rather than merely generating a plausible opinion.

This is why evaluation quality is tightly coupled to context quality.

## Practical architecture

```text
Repository / specifications
           ↓
     Context extraction
           ↓
  Knowledge artifacts
     ↙        ↓        ↘
journeys   contracts  dependencies
     \        |        /
       Scenario selection
              ↓
     Candidate test cases
              ↓
  Deterministic + semantic checks
              ↓
       Evidence store
              ↓
       Human review / release gate
```

The important engineering property is traceability: a reviewer should be able to move from a verdict back to the scenario, context, evidence, and rule that produced it.

## Failure modes worth testing explicitly

AI systems introduce classes of failure that ordinary API tests can underrepresent:

- correct-looking but unsupported answers
- stale or irrelevant retrieved context
- instruction conflicts
- tool calls that are syntactically valid but semantically wrong
- inconsistent output across equivalent inputs
- evaluation drift after model or prompt changes
- regressions caused by a dependency rather than the changed component

A good test strategy makes these failure modes visible before they become production surprises.

## The bigger idea

The goal is not to make a model sound more confident.

The goal is to make the **system's behaviour measurable, explainable, and safe to change**.

> Better AI evaluation comes from better context, clearer contracts, stronger evidence, and bounded judgement — not simply from a better prompt.
