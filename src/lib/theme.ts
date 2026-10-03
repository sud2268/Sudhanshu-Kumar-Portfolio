export type Theme = 'light' | 'dark'

/** Keep these aligned with the no-flash script in index.html. */
export const themeColors: Record<Theme, string> = {
  light: '#f3f0e8',
  dark: '#0c1218',
}

export function currentTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme])
  localStorage.setItem('theme', theme)
}
