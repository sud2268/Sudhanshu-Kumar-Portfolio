/** Prefix a file in `public/` with Vite's base URL (needed on GitHub Pages). */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
