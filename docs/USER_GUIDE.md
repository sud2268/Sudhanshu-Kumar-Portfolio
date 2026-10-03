# User guide

This guide is for updating the portfolio without changing the layout. Run every command from the `portfolio` folder, the one that contains `package.json`.

The site text lives in `src/data/profile.ts`. Save the file, and the local site refreshes while `npm run dev` is running.

## Running the website

Install dependencies once, or again after the project dependencies change:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

The terminal prints a local address. It is usually:

```text
http://localhost:5173
```

Open that address in a browser. Leave the terminal running while you edit. Stop it with Ctrl+C.

## Updating profile information

Open `src/data/profile.ts`. The object named `profile` is what the pages read.

| What you want to change | Field in `profile` |
| --- | --- |
| Name | `name` |
| Professional title | `title` |
| Line under the title | `specialties` |
| Short introduction in the hero | `summary` |
| City | `location` |
| About paragraphs | `about` (a list of paragraphs) |
| About side panel | `highlights` |
| Hero numbers | `impacts` |
| Focus list beside the portrait | `focusAreas` |
| Skills | `skills` |
| Experience | `experience` |
| Projects | `projects` |
| Education | `education` |
| Certifications | `certifications` |
| Achievement cards | `achievements` |
| Email | `email` |
| Phone | `phone` |
| LinkedIn | `linkedin` |
| GitHub | `github` |

Section introductions are the fields ending in `Intro`, such as `skillsIntro` and `experienceIntro`.

Navigation labels are separate. They are in `src/data/navigation.ts`. Change a label there only when you want the menu text to change. The `id` values must match the section ids already used in the page.

`usingSampleContent` is `false`. Set it to `true` only if you want the sample-content banner back.

Do not put passwords, API keys, or cloud credentials in `profile.ts`. Email, phone, and public profile links are meant to be visible on the site.

## Adding a project

1. Open `src/data/profile.ts`.
2. Find the `projects` list.
3. Copy one existing project object.
4. Paste it after the last project, with a comma between objects.
5. Replace the fields. `id` must be unique.

```ts
{
  id: 'new-project-id',
  name: 'Project name',
  description: 'What the project is.',
  problem: 'What was difficult before the work.',
  outcome: 'What changed because of the work.',
  technologies: ['Terraform', 'Azure'],
  responsibilities: [
    'First thing you did.',
    'Second thing you did.',
  ],
  github: 'https://github.com/your-username/your-repo',
  demo: 'https://example.com',
},
```

`github` and `demo` are optional. Delete those lines when there is no public repository or live site. The card hides those links when the fields are absent.

## Adding certifications

1. Open `src/data/profile.ts`.
2. Find the `certifications` list.
3. Add an object. `id` must be unique.

```ts
{
  id: 'az-104',
  name: 'Certification name',
  issuer: 'Issuing organization',
  year: '2024',
  credentialId: 'ABC-123',
  credentialUrl: 'https://www.credly.com/badges/your-badge',
},
```

`year`, `credentialId`, and `credentialUrl` are optional. Leave them out when you do not have them. Do not invent a credential id.

## Updating the resume

The download buttons use `resumePath` in `src/data/profile.ts`:

```ts
resumePath: '/resume/resume.pdf',
```

That path points at this file:

```text
public/resume/resume.pdf
```

To replace the resume:

1. Export the new resume as a PDF.
2. Save it as `public/resume/resume.pdf`, replacing the current file.
3. Keep the same filename, and you do not need to edit `resumePath`.

The button saves the file using your name, such as `Sudhanshu-Kumar-Resume.pdf`. That download name is built from `name` in `profile.ts`.

A copy of the source PDF may also sit at the repository root (`Sudhanshu_Kumar_Resume-8july_3413.pdf`). The website does not serve that root file. The site serves `public/resume/resume.pdf` only.

The short sentence above the download button is `resumeIntro` in `profile.ts`.

## Updating the profile image

The portrait is set here:

```ts
image: {
  src: '/images/profile.svg',
  alt: 'Describe the picture.',
},
```

`src` is a file under `public/`. The current file is:

```text
public/images/profile.svg
```

To use a photo:

1. Put the image in `public/images/`, for example `public/images/portrait.jpg`.
2. Change `image.src` to `/images/portrait.jpg`.
3. Change `image.alt` to a short description of the photo.

Use a JPG, PNG, or SVG. Keep the file reasonably small so the page stays fast.

## Changing theme and design

Colors and fonts are in `src/index.css`.

- Light colors are under `:root`.
- Dark colors are under `.dark`.
- Font stacks are under `@theme inline` (`--font-sans`, `--font-display`, `--font-mono`).

The names used in components are `canvas`, `ink`, `muted`, `accent`, `brass`, and similar tokens defined in that file. Change the values there to recolor the site.

Two other places must stay in step with the background colors:

- `src/lib/theme.ts` — `themeColors.light` and `themeColors.dark`
- the small script in `index.html` that sets the theme before the page paints

Those values are `#f3f0e8` (light) and `#0c1218` (dark).

The header control switches theme. The choice is saved in the browser under the name `theme`. The first visit follows the operating system.

Layout spacing and section structure are in `src/sections/` and `src/components/`. A content change does not require those files. A visual redesign does.

## Building the website

Create the production files:

```bash
npm run build
```

This checks TypeScript, then writes the site to `dist/`. Do not edit files inside `dist/`. The next build replaces them. `dist/` is listed in `.gitignore`.

## Previewing the production build

After a successful build:

```bash
npm run preview
```

Open the address Vite prints, usually `http://localhost:4173`. This is the built site, not the dev server. Use it to check the resume download and the page before you share a build.

More commands are in [DEVELOPMENT.md](DEVELOPMENT.md). Hosting is in [DEPLOYMENT.md](DEPLOYMENT.md).
