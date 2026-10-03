import type { ReactNode } from 'react'
import { Container } from './Container.tsx'
import { SectionHeading } from './SectionHeading.tsx'

interface SectionProps {
  id: string
  titleId: string
  index: string
  title: string
  intro: string
  children: ReactNode
}

export function Section({ id, titleId, index, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={titleId} className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading id={titleId} index={index} title={title}>
          {intro}
        </SectionHeading>
        {children}
      </Container>
    </section>
  )
}
