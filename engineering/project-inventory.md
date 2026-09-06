# Project Inventory: What Exists, What It Demonstrates, What Needs Reconstruction

This inventory distinguishes **verified repository evidence** from portfolio interpretation. Technologies are only listed as verified when they are visible in repository metadata, package manifests, or readable source/README files.

## Public / accessible projects

| Repository | Verified technology / evidence | Strongest portfolio angle | Status |
|---|---|---|---|
| `Angular-kickstart` | Angular 7.2, TypeScript 3.2, RxJS 6.3, Angular Router, Express, Grunt/Sass, Jasmine/Karma/Protractor | enterprise frontend foundation, build/test tooling, developer setup | verified |
| `Basic-MFE` | Angular 11, TypeScript 4.1, Angular Architects Module Federation, Webpack 5, RxJS, Jasmine/Karma/Protractor | micro-frontends, module boundaries, independent delivery | verified |
| `Angular-sse` | Angular 10, RxJS 6.5, Angular Material/CDK, Flex Layout, Jasmine/Karma/Protractor | real-time UI / server-sent events / reactive client state | verified from manifest + README; architecture needs source audit |
| `shopping-cart` | Angular CLI 11.2.2; starter README currently exposes Angular app setup/testing | retail UX, state management, checkout journey | stack partially verified; source audit required |
| `devconnector` | Node.js, Express 4.18, MongoDB via Mongoose 6.8, JWT, bcryptjs, express-validator | API design, authentication, developer community domain model | verified |
| `Luna` | Unity project structure (`Assets`, `Library`, `Packages`, `ProjectSettings`, build outputs) | client application / game-like system, asset/runtime organization | verified structure; deeper code audit required |
| `portfolio` | public repository exists; codebase present | portfolio delivery / web presentation | architecture and stack audit required |
| `find-parking` | repository exists; source currently needs reconstruction for a trustworthy stack description | geolocation/search/optimization product | audit required |
| `contentstack-nodejs` | public repository exists but currently exposes little readable implementation metadata | content/API integration | audit required |
| `angular-node-authentication` | public repository exists but current default contents are empty/inaccessible | full-stack auth pattern | audit required; do not infer stack from name |
| `angular12-nodejs` | public repository exists but current default contents are empty/inaccessible | Angular + Node integration | audit required; do not infer stack from name |
| `DSA` | public repository exists | algorithms / coding foundation | audit required |
| `rule.js` | public repository exists | JavaScript experimentation | audit required |
| `rock-paper-scissor` | public repository exists | basic JS/browser application | not a flagship case |
| `tic-tac-toe` | public repository exists | basic JS/browser application | not a flagship case |
| `trainYourself1.1` | public repository exists | learning / experimentation | audit required |
| `LandingPage_Prestige` | public repository exists but current contents are minimal | frontend presentation | not a flagship case unless expanded |
| `MountainBridges` | Markdown casebook, research, diagrams, platform case studies | senior engineering reasoning + technical storytelling | flagship |

## Private / not suitable as public evidence without user-provided authorization

| Repository | Notes |
|---|---|
| `react-spa-standalone` | private |
| `feedback` | private |
| `UtkarshSingh` | private |
| `bible-service` | private |
| `bible-ui` | private |

These should not be presented as public portfolio evidence unless they are intentionally published or replaced with sanitized reconstructions.

## How each old project should evolve

Do not rewrite historical repositories to pretend they were designed with today's architecture standards.

Instead, create a companion case study when the repository contains a useful engineering problem:

```text
Historical project
      ↓
What problem did it actually solve?
      ↓
What constraints existed then?
      ↓
What design did the code choose?
      ↓
What would break at 10x scale?
      ↓
What would I change today?
      ↓
What reusable pattern does it teach?
```

That turns older code into evidence of engineering growth rather than making it look artificially modern.

## Technology rationale standard

For every flagship project, the case study must answer:

1. **What do we use?**
2. **What responsibility does it own?**
3. **Why this technology?**
4. **What alternative could have worked?**
5. **What failure mode does it address?**
6. **What does it cost operationally?**
7. **What changes before production?**

## Flagship app build set

The new casebook should eventually have runnable reference implementations for:

- assessment / coding platform
- banking platform: payments + lending
- retail commerce platform
- operations / dispatch platform
- music recommendation platform
- medical / FHIR workflow platform
- media / event-streaming platform
- engineering platform / golden paths

The portfolio case studies describe the architecture now; implementation repositories should be added progressively and truthfully rather than fabricated as “completed” systems.
