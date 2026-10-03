import { profile } from '../data/profile.ts'

export function SampleBanner() {
  if (!profile.usingSampleContent) return null

  return (
    <div className="border-b border-line bg-chip" role="status">
      <p className="mx-auto max-w-6xl px-5 py-2.5 text-center text-sm leading-relaxed text-muted sm:px-8">
        Sample profile. Values in brackets, and links with your-username or example.com, are
        placeholders. Edit <span className="font-mono text-xs text-ink">src/data/profile.ts</span>,
        then set usingSampleContent to false.
      </p>
    </div>
  )
}
