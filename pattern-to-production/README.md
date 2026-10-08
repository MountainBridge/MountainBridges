# Pattern → Production

Engineering patterns mapped to where they actually run in production.

## AI Systems, Explained: build an agent from zero

An agent is an orchestrated control loop:

**ask → act → observe → decide → repeat**

The model supplies reasoning and action selection. The surrounding application owns execution, permissions and stopping conditions.

| Part | Topic | Status |
|---|---|---|
| 1 | [Model](agent-from-zero/part-1-model) — text in, text out | Done |
| 2 | [Tool](agent-from-zero/part-2-tool) — the model requests; your code executes | Done |
| 3 | Agent — the loop | Planned |
| 4 | MCP — the connection standard | Planned |
| 5 | Skills — reusable know-how | Planned |
| 6 | SDK — packaged orchestration | Planned |

## Patterns → production

| Pattern | Where it runs | Status |
|---|---|---|
| Hashing | Duplicate-payment detection, idempotency keys | Planned |
| Sliding window | API rate limiting | Planned |
| Stack | Undo history | Planned |

Short video versions: [@stok.eed](https://www.instagram.com/stok.eed/).
