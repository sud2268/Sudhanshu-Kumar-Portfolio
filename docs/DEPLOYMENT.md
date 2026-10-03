# Deployment

The site is hosted on GitHub Pages at [https://sud2268.github.io/Sudhanshu-Kumar-Portfolio/](https://sud2268.github.io/Sudhanshu-Kumar-Portfolio/). A GitHub Actions workflow in `.github/workflows/deploy.yml` builds `dist/` and publishes it on every push to `main`.

When you are ready, build a static copy and upload that copy. From the `portfolio` folder:

```bash
npm run build
```

Vite writes the site to `dist/`. That folder is the whole website: `index.html`, CSS, JavaScript, and copies of files from `public/` (the portrait, favicon, and resume). Do not deploy the source folder or `node_modules`.

The app is one page. Section links use hashes such as `#experience`. There is no client-side router, so visitors do not need a rewrite from every path back to `index.html` for navigation to work. A host 404 page for missing files is still worth having. Not currently configured.

On GitHub Actions, `vite.config.ts` sets `base` to `/Sudhanshu-Kumar-Portfolio/` so assets resolve on the project Pages URL. Local `npm run dev` still uses `/`. Public files such as the resume and portrait go through `publicAsset()` in `src/lib/assets.ts`.

The contact form does not send email until `VITE_CONTACT_ENDPOINT` is set at build time. See [SECURITY.md](SECURITY.md).

## Option 1 — GitHub Pages

Configured. Pages source is **GitHub Actions**. The workflow file is `.github/workflows/deploy.yml`.

Requirements:

- The Git repository is on GitHub. See [GITHUB_SETUP.md](GITHUB_SETUP.md).
- `npm run build` succeeds.
- GitHub Pages is turned on for the repository, with GitHub Actions as the source.

**User or organization site** (`https://<username>.github.io`):

1. Build with the default `base` of `/`.
2. Publish the contents of `dist/`.
3. In the repository **Settings → Pages**, choose the source you decide on (a GitHub Actions workflow is the current GitHub-recommended source).

**Project site** (`https://<username>.github.io/<repository>/`):

Set the Vite base to the repository name, then build again:

```ts
export default defineConfig({
  base: '/your-repository-name/',
  plugins: [react(), tailwindcss()],
})
```

Without that, asset and resume URLs point at the domain root and the project site will not find them.

Custom domain: in **Settings → Pages**, set the domain GitHub asks for, and add the DNS records GitHub shows. Then confirm HTTPS is enabled in that same settings page. Not currently configured.

Because this app does not use path routing, a single `index.html` is enough for the sections. You do not need a SPA fallback for `#about` and the other section links.

## Option 2 — Vercel

Not currently configured.

1. Push the repository to GitHub when you are ready.
2. In Vercel, import that repository.
3. Vercel detects Vite. Confirm these settings if it asks:

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

Environment variables: add `VITE_CONTACT_ENDPOINT` only if the contact form should deliver mail. Leave it unset to keep the current behavior, where the form tells the visitor that nothing was sent.

Vite reads `VITE_` variables at **build** time. After you change one, redeploy so the new value is baked into the JavaScript.

Custom domain: add it in the Vercel project domain settings and follow the DNS instructions there. Not currently configured.

## Option 3 — Netlify

Not currently configured.

1. Push the repository to GitHub when you are ready.
2. In Netlify, import that repository.
3. Use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |

There is no `netlify.toml` in this repository.

Environment variables: same rule as Vercel. Set `VITE_CONTACT_ENDPOINT` in the site's environment settings only when you want the form to POST, then trigger a new build.

Custom domain: add it in Netlify domain management and update DNS as Netlify instructs. Not currently configured.

## Option 4 — AWS S3 + CloudFront

Not currently configured. No bucket, distribution, domain, or AWS account details belong in this repository.

This is a static site. A typical layout is:

```text
User
 ↓
CloudFront
 ↓
S3 Static Website/Origin
```

People request the site from CloudFront over HTTPS. CloudFront fetches objects from a private S3 bucket. The bucket is not open to the public internet.

Use placeholders such as `<bucket-name>` and `<distribution-id>`. Do not commit real account IDs, access keys, or bucket names that you consider private.

### S3 bucket

1. Create an S3 bucket in the region you want for the origin.
2. Leave public access blocked.
3. Do not store the resume or the site in a bucket policy that grants `Principal: "*"`.

Upload the build after `npm run build`:

```bash
aws s3 sync dist/ s3://<bucket-name>/ --delete
```

`--delete` removes objects in the bucket that are no longer in `dist/`. Read the command before you run it so you do not point it at the wrong bucket.

The AWS CLI profile you use must already be allowed to upload. Configure that on your machine with `aws configure`, not in this repository.

### CloudFront and Origin Access Control

1. Create a CloudFront distribution.
2. Set the origin to the S3 bucket REST endpoint, not a public website endpoint.
3. Create an Origin Access Control (OAC) and attach it to that origin.
4. Update the bucket policy so only that CloudFront distribution can read objects. The AWS console can insert this policy when you enable OAC. Review it before you save.
5. Set the default root object to `index.html`.
6. Turn on **Redirect HTTP to HTTPS**.
7. Use the default CloudFront certificate until you have a domain, then attach an AWS Certificate Manager certificate in `us-east-1` for that domain.

### Custom domain and Route 53

1. Request a public certificate in AWS Certificate Manager in `us-east-1`.
2. Add the certificate's domain as an alternate domain name on the distribution.
3. In Route 53, create an alias record from the domain to the CloudFront distribution.

Not currently configured. If the domain's DNS is not in Route 53, create the same kind of record at the DNS host you already use.

### Cache invalidation

After a new upload, CloudFront can keep old HTML and assets until the cache expires. Invalidate the distribution:

```bash
aws cloudfront create-invalidation --distribution-id <distribution-id> --paths "/*"
```

Filenames inside `dist/assets/` change when the build changes, which limits stale CSS and JavaScript. `index.html` and `resume.pdf` can still be cached, so an invalidation after each release is the reliable step.

## Deployment checklist

- [ ] `npm run build` finishes without errors
- [ ] No secrets in the commit (`git status`, `git diff --cached`)
- [ ] Resume link downloads `public/resume/resume.pdf`
- [ ] Project, mail, LinkedIn, and GitHub links open the right places
- [ ] Light and dark theme both readable
- [ ] Layout checked on a phone-width window and a desktop window
- [ ] HTTPS enabled on the host
- [ ] Custom domain configured, if you are using one
- [ ] Missing-file error page configured on the host
- [ ] Analytics added only if you decide you want it (not currently configured)
- [ ] Page title and description in `index.html` still match the profile
