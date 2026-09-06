# Engineering Projects: Technology, Decisions, and Why

This section records the implementation evidence behind the casebook.

The goal is not to list frameworks. For each project, capture:

**problem → constraints → technology → why that technology → architecture → trade-offs → what it teaches**

Some older repositories have incomplete or generic READMEs. In those cases, the technology table is intentionally conservative and marks what is verified from repository files versus what still needs reconstruction.

## 01 — Angular Kickstart

**Repository:** [MountainBridge/Angular-kickstart](https://github.com/MountainBridge/Angular-kickstart)

**Problem / role in the portfolio:** a structured Angular application with an end-to-end development setup. It is useful as evidence of frontend architecture, routing, forms, build/test discipline and the evolution of an Angular application.

**Verified stack**

| Technology | Evidence | Why it was used |
|---|---|---|
| Angular 7.2 | `package.json` | Component architecture, dependency injection, forms and routing for a structured SPA |
| TypeScript 3.2 | `package.json` | Static typing and safer application-scale refactoring |
| RxJS 6.3 | `package.json` | Asynchronous/event-driven UI and service flows |
| Angular Router | `package.json` | URL-driven navigation and route boundaries |
| Express 4.16 | `package.json` | Lightweight Node server around the frontend application |
| Grunt + Sass | `package.json` | Frontend asset/style processing in the project's historical toolchain |
| Jasmine / Karma / Protractor | `package.json` | Unit and end-to-end verification |

**Why it belongs in the casebook:** use this project as an implementation anchor for the article on turning an ambiguous product journey into a concrete technical slice, rather than presenting it as a framework demo.

**Related patterns:** journey-first design, reference implementations, validation.

---

## 02 — Angular SSE

**Repository:** [MountainBridge/Angular-sse](https://github.com/MountainBridge/Angular-sse)

**Problem / role in the portfolio:** explore server-sent events from an Angular client, including event-stream semantics and client handling.

**Verified stack**

| Technology | Evidence | Why it was used |
|---|---|---|
| Angular 10.0 | `package.json` | Browser application framework |
| TypeScript 3.9 | `package.json` | Static typing |
| RxJS 6.5 | `package.json` | Reactive stream composition |
| Angular Material / CDK | `package.json` | UI primitives and interaction patterns |
| Angular Flex Layout | `package.json` | Layout composition |
| Jasmine / Karma / Protractor | `package.json` | Test coverage |

**Key engineering question:** when should a client use a streaming channel instead of polling or request/response?

**Casebook treatment:** turn this into a real-time architecture case: connection lifetime, reconnect behaviour, event ordering, backpressure expectations, stale clients, observability and failure recovery.

**Related patterns:** real-time delivery, resilience, observable behaviour, failure-first design.

---

## 03 — Micro-Frontend from Scratch

**Repository:** [MountainBridge/Basic-MFE](https://github.com/MountainBridge/Basic-MFE)

**Problem / role in the portfolio:** experiment with independently composed frontend modules.

**Verified stack**

| Technology | Evidence | Why it was used |
|---|---|---|
| Angular 11.2 | `package.json` | Host/application framework |
| Angular Architects Module Federation 1.2.3 | `package.json` | Runtime composition of independently built frontend modules |
| Webpack 5 | `package.json` resolution | Module sharing and federation mechanism |
| RxJS 6.6 | `package.json` | Reactive application flows |
| Jasmine / Karma / Protractor | `package.json` | Automated verification |

**Key engineering question:** how do teams split a frontend without turning independent delivery into integration chaos?

**Architecture questions to document:** shared dependencies, version drift, ownership boundaries, routing, runtime failure, deployment independence and communication contracts.

**Related patterns:** boundary design, contract thinking, golden paths, platform consistency.

---

## 04 — Other public implementation repositories

The account also contains public repositories for React, Node.js, authentication, shopping flows, parking, games, data structures and other learning/implementation exercises.

These should not be presented as equal-weight portfolio projects. Their value is as **implementation evidence** and as raw material for extracting stronger engineering cases.

| Repository | Current treatment | What to extract |
|---|---|---|
| `react-spa-standalone` | Supporting implementation evidence | React SPA structure, routing/state/component decisions |
| `angular-node-authentication` | Supporting implementation evidence | identity boundary, auth flow, frontend/backend contracts |
| `shopping-cart` | Supporting implementation evidence | state, API interaction, workflow validation, failure handling |
| `find-parking` | Candidate case | search/matching, location or availability constraints if present in code |
| `bible-service` / `bible-ui` | Supporting evidence; currently private | frontend/backend split, API boundary, data flow |
| `angular12-nodejs` | Supporting evidence; repository currently empty | retain as history, do not invent technical details |
| `contentstack-nodejs` | Supporting evidence; repository currently empty | retain as history, do not invent technical details |
| `DSA` | De-emphasize for senior portfolio | algorithmic fundamentals rather than senior systems narrative |
| `tic-tac-toe` / `rock-paper-scissor` | De-emphasize | early implementation practice |
| `trainYourself1.1` | De-emphasize | learning history |
| `rule.js` | Candidate supporting project | inspect implementation before promoting |
| `Luna` | Candidate deep technical project | Unity-style project structure is visible; inspect gameplay architecture and tooling before claiming specifics |
| `portfolio` | Strategic site candidate | old JavaScript portfolio; decide whether to repurpose as visual front-end |

## How projects become case studies

Do not write “Built with Angular.” Write the engineering question:

```text
Business / user problem
        ↓
Constraints
        ↓
Architecture options
        ↓
Technology choice
        ↓
Why this choice?
        ↓
Failure modes
        ↓
Verification
        ↓
What changed / what was learned
```

That makes the implementation repository evidence for the reasoning in the casebook.

## Evidence discipline

Only claim a technology, ownership statement, metric, or outcome when it is supported by the repository or by the original project record. When information is missing, mark it as **to reconstruct** rather than filling the gap with assumptions.
