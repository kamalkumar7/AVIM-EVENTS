# AGENTS.md

This file gives coding agents (Claude, Codex, Cursor, etc.) the context needed to work correctly in **avim-events**.

## Project Overview

A Next.js 16 (App Router, Turbopack) web app using React 19 and Tailwind CSS v4. JavaScript project — no TypeScript.

## Setup

```bash
npm install
```

Requires Node.js compatible with Next.js 16.3.1 (Node 20.9+ or later LTS recommended). Verify with:

```bash
node --version
```

## Dev / Build / Run

```bash
npm run dev      # start dev server (Turbopack) on http://localhost:3000
npm run build    # production build
npm run start    # run production build
npm run lint     # ESLint (flat config, eslint-config-next)
```

## Before Committing / Finishing a Task

Agents must run and pass:

```bash
npm run lint
```

If the change affects runtime behavior (not just static/text content), also run:

```bash
npm run build
```

to catch server/client boundary errors, since Next.js build catches issues `dev` mode may not surface.

## Code Style Rules

- **Server Components by default.** Only add `"use client"` at the top of a file when it needs state, effects, refs, browser APIs, or event handlers. Keep the client boundary as small as possible (push it to leaf components, not whole pages).
- **File types:** `.jsx` for anything containing JSX, `.js` for plain logic/utilities. Do not add `.ts`/`.tsx` unless explicitly instructed to migrate the project to TypeScript.
- **Imports:** use the `@/` path alias instead of relative paths like `../../../`.
- **Styling:** Tailwind utility classes only; avoid new CSS files unless a utility genuinely cannot express the style.
- **React Compiler is enabled** (`babel-plugin-react-compiler`). Do not manually add `useMemo`, `useCallback`, or `React.memo` as a default habit — write plain component code and let the compiler optimize. Avoid patterns that defeat static analysis (mutating props/state directly, module-level mutable caches).
- **Naming:** `PascalCase` components, `camelCase` variables/functions, `kebab-case` route folders and file names.
- **No dead code:** remove unused imports/vars/commented-out blocks rather than leaving them for lint to flag.

## Directory Conventions

- `src/app/` — routes (App Router). Keep `page.jsx` thin; delegate to components.
- `src/components/` — shared UI components.
- `src/lib/` — non-UI utilities/helpers.
- `public/` — static assets.

Follow this structure when creating new files; don't invent parallel conventions (e.g., a `src/views/` folder) without discussion.

## Dependency Policy

- Prefer built-in Next.js/React/Tailwind capabilities before adding a new package.
- Match existing version-pinning style in `package.json` (exact versions for core framework deps: `next`, `react`, `react-dom`; `^` ranges for devDependencies).
- After adding a dependency, run `npm install` and commit the updated `package-lock.json`.

## Testing

No test framework is currently configured. If a task requires tests, ask before scaffolding a new framework — the likely default is Vitest + React Testing Library, but confirm first rather than assuming.

## Git Conventions

- Small, focused commits.
- Commit messages in imperative mood: `Add event card component`, not `Added` / `Adds`.
- Never commit `.next/`, `node_modules/`, or `.env*` files.
- Update `README.md` when introducing new scripts, environment variables, or setup steps.

## Agent-Specific Notes

- Do not run `npm run dev` and leave it running as a blocking step when validating changes — prefer `npm run build` (or `npm run lint`) for verification, since `dev` starts a long-lived server process.
- If a task involves environment/PATH issues (e.g., `node` not found in an integrated terminal), do not attempt to modify system PATH automatically — surface the issue and suggested fix instead of guessing.
- When unsure whether a component should be Server or Client, default to Server and only escalate to Client if a build/runtime error confirms the need (e.g., use of `useState`, `onClick`, `window`).