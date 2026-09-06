# Reference Implementations: From Demo to Usable System

A demo proves that technology can work. A reference implementation should help someone else make it work.

That difference changes how I build examples.

## Start with a real task

Avoid building a feature because the API makes it easy to demonstrate. Start with a representative developer problem:

```text
Real task
  ↓
Constraints
  ↓
Minimal architecture
  ↓
Working implementation
  ↓
Failure paths
  ↓
Operational notes
```

The example should resemble the decisions a developer will actually face.

## Keep the architecture small, but honest

A useful reference implementation usually needs enough structure to demonstrate:

- boundaries and interfaces
- configuration and secrets handling
- data flow
- error handling
- observability
- tests

It does not need production-scale infrastructure. It does need production-minded decisions.

## Make the code teach

Project structure should make the mental model obvious:

```text
src/
├── api/          # boundary
├── domain/       # core behaviour
├── integrations/ # external systems
├── evaluation/   # checks and evidence
└── tests/        # expected behaviour
```

Names, interfaces, and comments should explain intent rather than narrate syntax.

## Include the edge case

A demo that only shows the happy path teaches the least important part.

At minimum, show one meaningful failure:

```text
valid request ──→ expected result
      │
      └── invalid / missing dependency
                    ↓
             explicit failure
                    ↓
             useful recovery
```

This is where developers learn whether the architecture actually has a coherent model.

## Explain what changes in production

Every reference implementation should state what was simplified.

For example:

| Demo choice | Production concern |
|---|---|
| Local storage | durability / concurrency |
| Mock identity | real auth / authorization |
| Single process | scaling / isolation |
| Static config | secret management |
| Basic logs | metrics / tracing / alerting |

This prevents a sample from being copied as if it were a production blueprint.

## The quality bar

A developer should be able to answer these questions after reading the repository:

1. What problem am I solving?
2. Why is the system shaped this way?
3. Can I run the smallest version quickly?
4. What happens when something goes wrong?
5. What would I change before production?

> A good reference implementation is not a prettier demo. It is a transferable engineering decision.
