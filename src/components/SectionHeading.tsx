import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function SectionHeading({ id, index, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[0.72rem] tracking-[0.22em] text-brass uppercase">{index}</p>
      <h2 id={id} className="mt-3 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{children}</p>
    </div>
  )
}
