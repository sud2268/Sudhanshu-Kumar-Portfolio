import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { applyTheme, currentTheme, type Theme } from '../lib/theme.ts'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => currentTheme())
  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'

  function toggleTheme() {
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brass hover:text-brass"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <Sun className="size-[18px]" aria-hidden="true" /> : <Moon className="size-[18px]" aria-hidden="true" />}
    </button>
  )
}
