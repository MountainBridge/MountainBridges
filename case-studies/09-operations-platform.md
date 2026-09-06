# Operations Platform: Dispatch, Queues, Workforce, and Exceptions

> **30-second read:** Operations platforms turn a constantly changing stream of work, people, capacity and constraints into executable decisions. The hard part is not picking a scheduler; it is making decisions resilient to late information, partial failure and changing priorities.

> **2-minute read:** Imagine a platform dispatching field technicians, delivery agents, or service workers. Jobs arrive continuously, workers have locations and skills, customers have time windows, and the system must react when someone cancels, traffic changes, or capacity disappears. Treat the planner as a decision engine surrounded by state, rules, events, simulation and human override. Optimize for useful decisions under uncertainty, not a mathematically perfect plan that becomes stale before execution.

## Product to build

A multi-tenant operations control plane:

```text
Work intake
   ↓
Normalize jobs
   ↓
Constraint evaluation
   ↓
Candidate assignment
   ↓
Optimization / dispatch
   ↓
Worker app / execution
   ↓
Live events
   ↓
Re-plan when reality changes
   ↓
Operations console
```

## Example domain

Use field service as the reference app, but keep the model generic enough for logistics, delivery, repair, inspections and other operations-heavy businesses.

A job may include:

- skill requirements
- geographic location
- priority
- promised time window
- estimated duration
- dependencies
- customer SLA
- safety or compliance constraints

A worker may include:

- location
- availability
- skills
- capacity
- working hours
- current route
- eligibility constraints

## Architecture

```text
                 ┌───────────────┐
                 │ Operations UI │
                 └───────┬───────┘
                         ↓
                   Control API
                         ↓
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
     Work DB         Worker DB       Rules / policy
        │                │                │
        └────────────────┼────────────────┘
                         ↓
                     Event bus
                         ↓
               Dispatch decision engine
                    ↙          ↘
             optimizer       heuristics
                    \          /
                     ↓        ↓
                       Assignment
                           ↓
                    Worker application
                           ↓
                     Event feedback
                           ↓
                       Re-planning
```

## Technology choices

| Concern | Technology | Why |
|---|---|---|
| Operations console | React + TypeScript | Dense, stateful operational interfaces |
| APIs | Node.js + TypeScript | Fast service development and shared domain contracts |
| State | PostgreSQL | Strong transactional model for jobs, assignments and lifecycle states |
| Geospatial | PostGIS | Spatial queries for proximity, coverage and operational regions |
| Hot state | Redis | Locks, short-lived dispatch state and low-latency worker availability |
| Events | Kafka | Continuous updates for jobs, workers and assignments |
| Optimization | Python | Mature optimization/scientific stack and experimentation workflow |
| Search | OpenSearch | Operational investigation across jobs, customers and exceptions |
| Runtime | Docker + Kubernetes | Independent scaling for APIs, event consumers and optimization jobs |
| Observability | OpenTelemetry | Trace decisions across intake, dispatch and execution |

## Why not one giant optimizer?

Optimization runs against a snapshot. Operations changes continuously.

A practical system uses a layered approach:

```text
Hard constraints
     ↓
Eligible assignments
     ↓
Fast heuristic / scoring
     ↓
Optional optimization
     ↓
Policy checks
     ↓
Dispatch
```

The system should be able to produce a good fallback decision when the expensive optimizer is unavailable or the world changes mid-computation.

## Research reference

Work on real-world workforce scheduling and routing shows how these problems combine time windows, travel costs, multiple transport modes and multiple objectives. One practical research approach focuses on producing a diverse set of useful solutions rather than one opaque “optimal” answer.

Reference: [Optimisation and Illumination of a Real-world Workforce Scheduling and Routing Application via Map-Elites — alphaXiv](https://www.alphaxiv.org/overview/1805.11555)

For two-sided operations such as marketplaces or ride-hailing, matching itself can be dynamic. Recent research studies temporally extended feedback and changing preferences rather than assuming a static market.

Reference: [Learn to Match: Two-Sided Matching with Temporally Extended Feedback — alphaXiv](https://www.alphaxiv.org/abs/2606.06744)

## Failure modes

- worker disappears after assignment
- job arrives after planning snapshot
- optimizer returns stale assignment
- route is impossible because traffic changed
- duplicate dispatch event
- cancellation races with assignment
- worker loses connectivity
- urgent job invalidates the current plan
- optimizer unavailable during peak load

## Patterns

- event-driven state propagation
- optimistic concurrency
- durable state machine
- idempotent commands
- constraint filtering before optimization
- graceful degradation
- re-planning
- human override
- audit trail for consequential decisions
- simulation before policy rollout

## Build target

Start with:

**create job → match worker → accept → start → complete → location event → exception → re-plan**

Then introduce a planner that can compare a heuristic solution with an optimization-backed solution and explain why assignments changed.
