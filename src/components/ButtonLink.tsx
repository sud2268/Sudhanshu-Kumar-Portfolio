import type { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  download?: string
  external?: boolean
  className?: string
}

const variants = {
  primary: 'bg-accent text-accent-ink hover:brightness-110',
  secondary: 'border border-line bg-elevated text-ink hover:border-brass',
} as const

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  download,
  external = false,
  className = '',
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition motion-reduce:transition-none sm:w-auto ${variants[variant]} ${className}`}
      {...(download ? { download } : {})}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
    </a>
  )
}
