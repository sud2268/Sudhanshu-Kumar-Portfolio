# Portfolio

Personal portfolio website for Sudhanshu Kumar, a Senior Cloud Engineer. It presents experience, skills, projects, education, certifications, achievements, a resume download, and contact details.

Live site: [https://sud2268.github.io/Sudhanshu-Kumar-Portfolio/](https://sud2268.github.io/Sudhanshu-Kumar-Portfolio/)

Repository: [https://github.com/sud2268/Sudhanshu-Kumar-Portfolio](https://github.com/sud2268/Sudhanshu-Kumar-Portfolio)

## Purpose

The site is a single-page professional profile. Visitors can read the background, open the resume, and use the contact links. Content is edited in one data file so the layout does not have to change for routine updates.

## Technology stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Lucide React for interface icons
- Oxlint for linting

System fonts are used. There is no font CDN. There is no client-side router.

## Main features

- Sticky navigation with a mobile menu, and smooth scrolling to each section
- Light and dark theme, stored in the browser
- Profile, experience, skills, projects, education, certifications, and achievements driven by `src/data/profile.ts`
- Resume download from `public/resume/resume.pdf`
- Contact form that stays on the page until an optional email endpoint is configured

## Local development

From this folder:

```bash
npm install
npm run dev
```

Vite prints a local address, usually `http://localhost:5173`. Open that address in a browser.

```bash
npm run build
npm run preview
```

`npm run build` typechecks the project and writes the static site to `dist/`. `npm run preview` serves that folder locally, usually at `http://localhost:4173`.

Day-to-day editing is described in [docs/USER_GUIDE.md](docs/USER_GUIDE.md). Commands, linting, and what is not set up yet are in [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Documentation

- [User guide](docs/USER_GUIDE.md) — update the profile, resume, and image
- [GitHub setup](docs/GITHUB_SETUP.md) — remote, identity, and push
- [Deployment](docs/DEPLOYMENT.md) — GitHub Pages and other hosts
- [Development](docs/DEVELOPMENT.md) — install, scripts, and tooling
- [AI agent guide](docs/AI_AGENT_GUIDE.md) — rules for future coding agents
- [Project structure](docs/PROJECT_STRUCTURE.md) — where files live
- [Security](docs/SECURITY.md) — secrets, environment variables, and Git

## Git workflow

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Read `git status` before `git add .`. Do not stage `.env` or credential files.

Check `git status` and `git diff --cached` before every commit. Do not commit `.env`, keys, or cloud credentials. See [docs/SECURITY.md](docs/SECURITY.md).

## Other hosting options

GitHub Pages is live. A production build is still a static `dist/` folder if you later want Vercel, Netlify, or Amazon S3 with CloudFront. Details are in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).
