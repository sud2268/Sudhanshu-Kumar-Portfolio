# Security

This is a static portfolio. It does not collect passwords, and it does not ship cloud credentials. The risks are accidental commits and the optional contact endpoint.

## Never commit

Do not add any of these to Git:

```text
.env
.env.*
*.pem
*.key
credentials
API keys
AWS access keys
Azure secrets
private SSH keys
tokens
passwords
```

`.gitignore` already ignores:

- `.env` and `.env.*`, with an exception for `.env.example`
- `*.pem` and `*.key`
- `credentials.json` and `secrets.json`
- `node_modules` and `dist`

That ignore list is not a substitute for reading `git status`. A forced add (`git add -f`) can still stage an ignored file. Do not force-add secrets.

Public contact details in `src/data/profile.ts` (name, email, phone, LinkedIn, GitHub) are meant to appear on the website. They are not a place for passwords or access keys.

## Environment variables

The site builds and runs with no environment variables.

One variable is optional:

| Name | Required | Purpose |
| --- | --- | --- |
| `VITE_CONTACT_ENDPOINT` | No | URL that receives the contact form as JSON `{ name, email, message }` |

Not currently configured. `.env` is not part of the repository. `.env.example` shows the name with the value commented out.

If you set it:

1. Copy `.env.example` to `.env`.
2. Set the URL in `.env`.
3. Restart `npm run dev`, or run `npm run build` again before a deploy.

Vite inlines `VITE_` variables into the JavaScript bundle at build time. Anything in that variable is visible to people who read the built site. Only put a public form endpoint there, never a secret token.

`src/lib/contact.ts` reads the variable. If it is missing, the form tells the visitor that the message was not sent. A hidden company field is ignored so a filled-in bot submission is not delivered.

## Git security

Before every commit:

```bash
git status
git diff --cached
```

`git status` shows what will be included. `git diff --cached` shows the staged content. If a key, token, or `.env` appears, unstage it:

```bash
git restore --staged path/to/the-file
```

Confirm the file is ignored, or add a pattern to `.gitignore`, before you commit.

The repository is on GitHub. Do not push secrets. Pushing is documented in [GITHUB_SETUP.md](GITHUB_SETUP.md).

## Secret accidentally committed

If a secret lands in a commit:

1. Stop using it. Rotate or revoke it at the service that issued it (cloud console, GitHub token settings, or the API provider). A deleted file in a later commit does not make the old value safe.
2. Remove it from the working tree and from Git's current index. Delete the file or replace it with a placeholder, and commit that removal only after the secret itself is gone from the new commit.
3. Remove it from Git history when the bad commit must not be published or is already on a remote. That means rewriting history. On a repository that was never pushed, you can do this locally before the first push. On a repository that was pushed, a history rewrite also needs a force push, which can disrupt anyone else using the branch. Prefer a maintained tool such as `git filter-repo` over editing history by hand.
4. Update the affected service: confirm the old key is dead, create a new one if you still need access, and store the new one outside Git.

Do not paste the secret into a commit message, an issue, or these docs while you clean up.

`git filter-repo` is not currently configured or installed by this project.
