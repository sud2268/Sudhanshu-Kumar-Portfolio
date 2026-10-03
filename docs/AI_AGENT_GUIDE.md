# AI agent guide

Read this before changing the portfolio. Then inspect the repository. Do not trust this file if it disagrees with the code.

## Project purpose

This is a personal professional portfolio for Sudhanshu Kumar. It is a single-page React site. Profile text is centralized in `src/data/profile.ts`.

## Current state

- The repository is on GitHub: `https://github.com/sud2268/Sudhanshu-Kumar-Portfolio`.
- GitHub Pages is deployed from `.github/workflows/deploy.yml`.
- Inspect `git remote -v` and the files in the repo before assuming any other host is configured.

## AI agent rules

1. Inspect the existing project before modifying files.
2. Understand the existing architecture.
3. Reuse existing components in `src/components/` and sections in `src/sections/`.
4. Avoid unnecessary dependencies. Prefer the React, TypeScript, Vite, Tailwind, and Lucide packages already in `package.json`.
5. Avoid rewriting working components unnecessarily.
6. Keep the UI consistent with `src/index.css` tokens and the current section layout.
7. Keep personal data in `src/data/profile.ts`. Do not hardcode a name, email, phone, or URL inside a component when the profile object already has a field.
8. Never expose secrets in source, docs, commits, or chat output.
9. Never commit credentials.
10. Run the validation that matches the change. A content or UI change needs `npm run build`. A logic change also needs `npm run lint`.

## Git safety

Unless the user explicitly instructs you to talk to a remote:

Do not run:

```bash
git push
git pull
git fetch
git remote add
git remote set-url
```

Do not create remote repositories. Do not deploy the site.

Local Git operations are allowed when the user asks for a commit, or when you need to inspect state:

```bash
git status
git diff
git log
git add
git commit
```

Do not commit unless the user asks. Do not skip hooks. Do not force-push. Do not update Git config.

## Before making changes

Read enough of the tree to see the current shape:

```text
package.json
README.md
src/
public/
docs/
```

In particular:

- `src/data/profile.ts` for content fields
- `src/types/profile.ts` for the types those fields must match
- `src/App.tsx` for section order
- `src/data/navigation.ts` for menu items
- `package.json` scripts before suggesting a command

## Before finishing

1. Check which files changed.
2. Review the diff.
3. Run the application build (`npm run build`). Use `npm run dev` or `npm run preview` when the change is visible in the browser.
4. Fix errors you introduced.
5. Confirm no secrets were added. Look for `.env`, keys, tokens, and cloud credentials.
6. Report what changed.
7. Report the validation you actually ran.

## Change management

For every significant change, say:

- What changed
- Why it changed
- Files changed
- Validation performed
- Any remaining issues

## Do not overwrite user data

Do not replace existing profile information, experience, projects, certifications, education, achievements, the resume, or images unless the user explicitly asks.

That includes:

- `src/data/profile.ts`
- `public/resume/resume.pdf`
- `public/images/`
- the source resume PDF at the repository root, if it is still there

A request to change layout, tooling, or documentation is not a request to rewrite the biography.
