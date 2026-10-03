# Project structure

The repository root is the `portfolio` folder. This is the layout that is actually in the project.

```text
portfolio/
├── docs/
│   ├── AI_AGENT_GUIDE.md
│   ├── DEPLOYMENT.md
│   ├── DEVELOPMENT.md
│   ├── GITHUB_SETUP.md
│   ├── PROJECT_STRUCTURE.md
│   ├── SECURITY.md
│   └── USER_GUIDE.md
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   └── profile.svg
│   └── resume/
│       └── resume.pdf
├── src/
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   ├── data/
│   │   ├── navigation.ts
│   │   └── profile.ts
│   ├── hooks/
│   │   └── useActiveSection.ts
│   ├── lib/
│   │   ├── contact.ts
│   │   └── theme.ts
│   ├── sections/
│   ├── types/
│   │   └── profile.ts
│   ├── App.tsx
│   ├── env.d.ts
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

A source resume PDF may also sit at the repository root (`Sudhanshu_Kumar_Resume-8july_3413.pdf`). The running site does not read that path. It reads `public/resume/resume.pdf`.

`node_modules/` and `dist/` appear after install and build. Both are gitignored.

## Where UI components live

`src/components/` holds pieces reused across sections:

| File | Role |
| --- | --- |
| `Navbar.tsx` | Sticky header, desktop links, mobile menu |
| `Footer.tsx` | Name, copyright, social links |
| `Section.tsx` | Shared section wrapper |
| `SectionHeading.tsx` | Number, title, and introduction |
| `Container.tsx` | Page width and horizontal padding |
| `ButtonLink.tsx` | Hero and resume buttons |
| `SocialLinks.tsx` | GitHub, LinkedIn, email, and phone icons |
| `ThemeToggle.tsx` | Light/dark control |
| `SampleBanner.tsx` | Banner shown only when `usingSampleContent` is true |

## Where sections live

`src/sections/` holds one file per block of the page. `src/App.tsx` places them in this order:

1. Hero
2. About
3. Experience
4. Skills
5. Projects
6. Education
7. Certifications
8. Achievements
9. Resume
10. Contact

Achievements and Resume are on the page. They are not items in `src/data/navigation.ts`.

## Where profile data lives

`src/data/profile.ts` is the content file: name, title, about, skills, experience, projects, education, certifications, achievements, and contact links.

`src/types/profile.ts` is the TypeScript shape of that object. A new field on the data must match the type, or `npm run build` fails.

`src/data/navigation.ts` is the menu. Each `id` matches a section `id` in the section components.

## Where assets live

| Kind | Location | How the site refers to it |
| --- | --- | --- |
| Portrait | `public/images/profile.svg` | `profile.image.src` (`/images/profile.svg`) |
| Favicon | `public/favicon.svg` | `index.html` |
| Resume | `public/resume/resume.pdf` | `profile.resumePath` (`/resume/resume.pdf`) |
| Imported source assets | `src/assets/` | Empty except `.gitkeep`. Use this folder only for files a component imports. Files that need a stable URL belong in `public/`. |

Files in `public/` are copied to the site root. A file at `public/resume/resume.pdf` is requested as `/resume/resume.pdf`.

## Where configuration lives

| File | Role |
| --- | --- |
| `package.json` | Dependencies and scripts: `dev`, `build`, `lint`, `preview` |
| `package-lock.json` | Locked dependency versions |
| `vite.config.ts` | Vite plus the React and Tailwind plugins. `base` is not set. |
| `tsconfig.json` | Project references to the app and node configs |
| `tsconfig.app.json` | TypeScript settings for `src/` |
| `tsconfig.node.json` | TypeScript settings for `vite.config.ts` |
| `index.html` | Page title, description, Open Graph tags, favicon, theme script |
| `src/index.css` | Tailwind import, color tokens, fonts, motion |
| `src/lib/theme.ts` | Applies the theme class and stores the choice |
| `src/lib/contact.ts` | Contact form validation and optional POST |
| `src/env.d.ts` | Types for `VITE_CONTACT_ENDPOINT` |
| `.env.example` | Commented example of that variable |
| `.gitignore` | Ignores dependencies, build output, and secret files |
| `.oxlintrc.json` | Oxlint rules |

`src/main.tsx` mounts `App` into `index.html`. `src/hooks/useActiveSection.ts` marks the menu item for the section in view.
