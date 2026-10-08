# Part 2: Tool

> The model does not directly touch your project. It requests a tool; your application executes it.

## The idea

Part 1 showed a model that could identify a likely fix but could not apply it. Part 2 introduces **tools**.

A tool is a capability exposed through a definition:

```js
{
  name: "read_file",
  description: "Read a file from the project and return its contents.",
  input_schema: { ... }
}
```

The model returns a structured request. Your application receives it, validates it, executes the implementation, and sends the result back.

**Model decides. Application executes.**

## Run it

Node.js 18+:

```bash
npm run mock
```

For a real Anthropic call, supply both the API key and a current model ID:

```bash
export ANTHROPIC_API_KEY=your_key
export MODEL=your_anthropic_model_id
npm start
```

The model ID is intentionally not hard-coded because model availability changes.

## What happens

1. The model requests `read_file("checkout.js")`.
2. Your application executes `read_file`.
3. The result goes back to the model.
4. The model requests `edit_file(...)`.
5. **We stop.**

There is deliberately no loop yet. That missing loop is **Part 3: Agent**.

## The boundary

```
MODEL
  │ structured request
  ▼
APPLICATION / ORCHESTRATOR
  │ validate + execute
  ▼
TOOL
  │
  ▼
PROJECT / SYSTEM
  │ result
  └──────────────► MODEL
```

The tool is not the agent. The model is not the agent. The **orchestrator that keeps the cycle moving** is what turns these pieces into an agentic system.

## Security

Tools are an application-controlled boundary. This example restricts file access to the project directory. Production systems should also add authorization, input validation, logging, timeouts, resource limits and auditability.

## Where this appears

Coding agents commonly use this architecture: a model proposes an action through a structured tool call while the surrounding application owns execution and permissions.

The same pattern generalizes to files, shell commands, databases, browsers, APIs, GitHub, Jira, Slack and internal systems.

**Next:** Part 3 — the loop.
