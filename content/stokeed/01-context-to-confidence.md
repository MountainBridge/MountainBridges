# STOK.EED — Context → Confidence

## Post 01: Regression was a context problem

**Hook**

Regression testing is usually treated as a testing problem.

In complex systems, the harder problem comes first:

> Do we still understand what this change can affect?

**The 30-second lesson**

A useful AI-assisted engineering loop is:

**Context → Knowledge → Scenarios → Regression → Evidence**

Context comes from the system itself: repositories, contracts, configuration, tests, domain journeys and operational signals.

That context becomes living documentation.

Documentation becomes executable scenarios.

Scenarios become regression checks.

Regression produces evidence.

An agent can then investigate the evidence and explain likely impact — while a human remains accountable for the final decision.

**Why it matters**

A green build is useful.

An evidence-backed answer to **what changed, who could be affected, and what should we investigate next** is more useful.

**Explore the engineering case study:**

`projects/01-agentic-regression-investigator.md`

**Read the deeper article:**

`articles/01-regression-was-a-context-problem.md`

## STOK.EED learning path

1. Understand the problem
2. Read the architecture
3. Run the synthetic example
4. Break it deliberately
5. Inspect the evidence
6. Rebuild the pattern yourself

### Engineering foundations behind the series

The content should repeatedly connect AI engineering back to:

- design thinking and problem framing
- system design and architecture
- distributed systems
- data structures and algorithms
- failure-mode analysis
- real-world trade-offs
- developer experience

The objective is not to teach tools in isolation. It is to teach **how engineers reason about real systems**.
