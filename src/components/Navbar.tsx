import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation.ts'
import { profile } from '../data/profile.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { ThemeToggle } from './ThemeToggle.tsx'

export function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const mark = profile.name.slice(0, 1).toUpperCase()

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 text-ink">
          <span className="inline-flex size-8 items-center justify-center rounded-lg border border-brass font-display text-lg leading-none text-brass">
            {mark}
          </span>
          <span className="font-display text-xl tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`rounded-full px-2 py-2 text-[0.8125rem] transition-colors ${
                    active === item.id ? 'text-brass' : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-[18px]" aria-hidden="true" /> : <Menu className="size-[18px]" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line xl:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-3 py-3 sm:px-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`block rounded-xl px-3 py-3 text-base ${
                    active === item.id ? 'bg-chip text-brass' : 'text-ink'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
