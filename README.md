# Personal portfolio

A local, single-page portfolio for Sudhanshu. It presents a professional introduction, experience, skills, projects, certifications, achievements, a resume download, and contact details.

All personal content lives in one file, `src/data/profile.ts`. The page you see on first run is **sample content**. Names in square brackets, and links containing `your-username` or `example.com`, are placeholders.

## Technology stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React for interface icons
- System fonts, so the site does not depend on a font CDN

## Prerequisites

- Node.js 20 or newer
- npm

## Local setup

From this folder:

```bash
npm install
```

## Development

```bash
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`. The page reloads as you edit files.

## Production build

```bash
npm run build
```

This typechecks the project and writes the static site to `dist/`. Do not commit `dist/`.

## Preview the production build

```bash
npm run preview
```

## Update profile information

Edit `src/data/profile.ts`.

You can change:

- Name, title, summary, and location
- About paragraphs and the highlight panel
- Email, LinkedIn, and GitHub
- Skills, experience, projects, certifications, and achievements
- The portrait path and its alt text
- The resume path

When the copy is yours, set `usingSampleContent` to `false`. That removes the sample banner.

Do not put passwords, API keys, or tokens in this file or anywhere else in the repository.

## Add a project

In `profile.projects`, copy an existing object and replace the fields:

- `name`, `description`, and `problem`
- `technologies` and `responsibilities`
- `github` with your repository URL
- `demo` with a live URL, or delete `demo` if there is no public site

## Add a certification

In `profile.certifications`, add an object with:

- `name`
- `issuer`
- `year`
- `credentialId` and `credentialUrl` when you have them

Delete any example you have not earned.

## Add your resume

1. Export your resume as a PDF.
2. Save it as `public/resume/resume.pdf`, replacing the placeholder file.
3. The hero and resume sections already link to `/resume/resume.pdf`.

The download still works if you change the file later, as long as the path in `profile.resumePath` matches the file.

## Portrait

Replace `public/images/profile.svg` with your photo, or point `profile.image.src` at a new file under `public/images/` and update `profile.image.alt`.

## Contact form

The form validates name, email, and message in the browser. It does not send email until you connect it.

1. Copy `.env.example` to `.env`. `.env` is gitignored.
2. Set `VITE_CONTACT_ENDPOINT` to a URL that accepts `POST` JSON:

```json
{ "name": "...", "email": "...", "message": "..." }
```

3. Restart the dev server.

`src/lib/contact.ts` is the only place that performs that request. A hidden company field is ignored so simple bots are not delivered. Until the endpoint is set, submitting the form tells the visitor that nothing was sent.

## Theme

The header has a light/dark control. The choice is stored in `localStorage` under `theme`. The first visit follows the operating system preference. Motion is turned off when the visitor has requested reduced motion.

## Deploy

`npm run build` creates `dist/`. Upload that folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, or similar).

For a GitHub Pages **project** site, set the Vite base path to the repository name:

```ts
export default defineConfig({
  base: '/your-repository-name/',
  plugins: [react(), tailwindcss()],
})
```

A user or organization site served from `/` can keep the default base.

After you have a public URL, you can add `og:url` and an `og:image` in `index.html`.

## Push this repository to GitHub

Create an empty repository on GitHub, then from this folder:

```bash
git remote add origin https://github.com/your-username/your-repository-name.git
git branch -M main
git push -u origin main
```

The remote URL above is a placeholder. Use the URL GitHub shows for your repository.

## Project layout

```text
portfolio/
├── public/
│   ├── images/          Portrait and other public images
│   └── resume/          Resume PDF
├── src/
│   ├── components/      Shared UI
│   ├── sections/        Page sections
│   ├── data/            Profile content and navigation
│   ├── assets/          Files imported by components, if you add any
│   ├── lib/             Theme and contact helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Typecheck and build `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |
