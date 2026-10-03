# GitHub setup

The project remote is `https://github.com/sud2268/Sudhanshu-Kumar-Portfolio.git`. Use this guide if you need to recreate that remote or push from a new machine.

## Step 1 — Verify the local Git repository

From the `portfolio` folder:

```bash
git status
git log --oneline
```

`git status` should show the branch `main`. `git log --oneline` lists local commits. If Git says this is not a repository, stop and check that you are in the `portfolio` folder.

Review the status list. It should not include `.env`, key files, or `node_modules`. `dist/` is ignored and should not appear as a file to commit.

## Step 2 — Create a GitHub repository

1. Sign in at [https://github.com](https://github.com).
2. Choose **New repository**.
3. Pick a name, for example `portfolio`.
4. Leave the repository **empty**.

Do not add a README, a `.gitignore`, or a license on GitHub.

Those files already exist locally. If GitHub also creates them, the first push can stop with a history that has to be merged. An empty repository accepts the local history as it is.

You can add a license later in a normal commit if you want one. Not currently configured.

## Step 3 — Configure Git identity

Git records a name and email on each commit. Skip this step if `git log` already shows the name and email you want.

For this repository only:

```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

For every repository on this computer:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Use the repository-only commands when this portfolio should use a different name or email than your other projects. `--global` changes the default for all repositories for this user account.

Check the values Git will use here:

```bash
git config user.name
git config user.email
```

## Step 4 — Add the GitHub remote

Replace `<USERNAME>` and `<REPOSITORY>` with the GitHub account and repository name.

```bash
git remote add origin https://github.com/<USERNAME>/<REPOSITORY>.git
```

Verify:

```bash
git remote -v
```

You should see `origin` twice, once for fetch and once for push, both pointing at that GitHub URL.

If `origin` already exists and the URL is wrong, do not add it again. Inspect it with `git remote -v` and change it only when you mean to:

```bash
git remote set-url origin https://github.com/<USERNAME>/<REPOSITORY>.git
```

## Step 5 — Push the repository

The local branch is already named `main`. This command keeps that name and publishes it:

```bash
git branch -M main
git push -u origin main
```

`-u` remembers `origin` as the upstream, so later `git push` and `git pull` know where to go.

GitHub will ask you to sign in. For HTTPS, use a personal access token when Git asks for a password. GitHub no longer accepts an account password for Git operations.

## Step 6 — Future changes

After the first push, the usual loop is:

```bash
git status
git add .
git commit -m "Update portfolio"
git push
```

Read `git status` before `git add .`. Do not stage `.env` or credential files. `git add .` stages everything that is not ignored.

## SSH option

HTTPS uses `https://github.com/...`. SSH uses a key on your computer:

```bash
git@github.com:<USERNAME>/<REPOSITORY>.git
```

Add that form as the remote instead of the HTTPS URL:

```bash
git remote add origin git@github.com:<USERNAME>/<REPOSITORY>.git
```

If `origin` already points at HTTPS and you want SSH:

```bash
git remote set-url origin git@github.com:<USERNAME>/<REPOSITORY>.git
```

| | HTTPS | SSH |
| --- | --- | --- |
| Remote shape | `https://github.com/<USERNAME>/<REPOSITORY>.git` | `git@github.com:<USERNAME>/<REPOSITORY>.git` |
| Sign-in | GitHub account plus a personal access token | An SSH key registered on your GitHub account |
| When it fits | Simple setup, or a machine where you do not want an SSH key | A machine you use often, after the key is added to GitHub |

Creating the SSH key and adding it under GitHub **Settings → SSH and GPG keys** is a GitHub account step, not something this repository configures. Not currently configured.

Test the key before the first push:

```bash
ssh -T git@github.com
```

## Security

Never commit:

- passwords
- API keys
- cloud credentials
- AWS access keys
- Azure secrets
- private keys
- `.env` files that contain secrets

`.gitignore` already ignores `.env`, `.env.*` (except `.env.example`), `*.pem`, `*.key`, `credentials.json`, `secrets.json`, `node_modules`, and `dist`. Ignored files stay out of `git add .` unless you force them in. Do not use `git add -f` on those files.

`.env.example` is safe to commit because it only shows the variable name, with the value commented out.

Before the first push, run:

```bash
git status
git diff --cached
```

More detail is in [SECURITY.md](SECURITY.md).
