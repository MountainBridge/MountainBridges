# AI Systems, Explained: build an agent from zero

Six parts. One new piece at a time. Every part is designed to be runnable and understandable on its own.

1. [Part 1 — Model](part-1-model) — text in, text out: knows the fix, cannot apply it
2. [Part 2 — Tool](part-2-tool) — the model requests an action; your application executes it
3. Part 3 — Agent — the loop: ask, act, observe, repeat
4. Part 4 — MCP — a standard interface for connecting tools
5. Part 5 — Skills — reusable know-how loaded when needed
6. Part 6 — SDK — frameworks that package the loop

## The mental model

**Model ≠ Tool ≠ Agent**

- **Model:** reasons and chooses the next action.
- **Tool:** exposes a capability the application can execute.
- **Agent:** an orchestrated control loop that repeatedly reasons, acts, observes and decides whether to continue.

The goal is to make the architecture visible rather than treating an "agent" as a black box.
