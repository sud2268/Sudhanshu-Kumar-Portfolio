# Development

Technical notes for people changing the portfolio code. Content edits are in [USER_GUIDE.md](USER_GUIDE.md).

Run commands from the `portfolio` folder.

## Prerequisites

| Tool | What this project expects |
| --- | --- |
| Node.js | `package.json` does not set an `engines` field. Use Node.js 20 or newer. This repository was checked with Node.js v24.19.0. |
| npm | Comes with Node.js. This repository was checked with npm 11.17.0. |
| Git | Used for local history. The branch is `main`. No remote is configured. |

A code editor that understands TypeScript is enough. No global install of Vite or TypeScript is required. `npm install` puts them in `node_modules`.

## Installation

```bash
npm install
```

That reads `package.json` and `package-lock.json` and installs React, Vite, Tailwind CSS, TypeScript, Lucide React, and Oxlint.

## Development

```bash
npm run dev
```

This runs `vite`. The terminal prints a local URL, usually `http://localhost:5173`. Saving a file refreshes the browser.

## Build

```bash
npm run build
```

This runs `tsc -b && vite build`.

1. TypeScript checks `src/` and `vite.config.ts` using `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.
2. Vite writes the static site to `dist/`.

The build fails if a type error is present. Fix the error and run the command again. Do not commit `dist/`.

## Preview

```bash
npm run preview
```

This runs `vite preview` and serves `dist/`. Run `npm run build` first. The URL is usually `http://localhost:4173`.

## Linting

```bash
npm run lint
```

This runs Oxlint with `.oxlintrc.json`. The enabled React rules are the hooks rule and `react/only-export-components`.

ESLint is not currently configured. There is no `eslint.config.js` and no `npm` script named `eslint`.

## Formatting

Not currently configured. Prettier is not installed, and there is no format script.

## Testing

Not currently configured. `package.json` has no `test` script, and there is no test runner in the dependencies.

Check a change by running `npm run lint` and `npm run build`, then looking at the page with `npm run dev` or `npm run preview`.

## Useful project facts

- Path aliases are not configured. Imports use relative paths and include the `.ts` or `.tsx` extension, which this TypeScript setup requires.
- Tailwind is loaded by `@tailwindcss/vite` in `vite.config.ts` and `@import 'tailwindcss'` in `src/index.css`. There is no `tailwind.config.js`.
- The only optional environment variable is `VITE_CONTACT_ENDPOINT`, declared in `src/env.d.ts` and read in `src/lib/contact.ts`. Copy `.env.example` to `.env` if you set it. `.env` is gitignored.
- `vite.config.ts` does not set `base`, `server`, or `build` options.
