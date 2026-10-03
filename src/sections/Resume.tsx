import { Download } from 'lucide-react'
import { profile } from '../data/profile.ts'
import { ButtonLink } from '../components/ButtonLink.tsx'
import { Container } from '../components/Container.tsx'

export function Resume() {
  const resumeName = `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`

  return (
    <section id="resume" aria-labelledby="resume-title" className="reveal scroll-mt-24 border-y border-line">
      <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center sm:py-14">
        <div className="max-w-xl">
          <p className="font-mono text-[0.72rem] tracking-[0.22em] text-brass uppercase">08</p>
          <h2 id="resume-title" className="mt-3 font-display text-4xl text-ink">
            Resume
          </h2>
          <p className="mt-3 text-muted">{profile.resumeIntro}</p>
        </div>
        <ButtonLink href={profile.resumePath} download={resumeName}>
          <Download className="size-4" aria-hidden="true" />
          Download Resume
        </ButtonLink>
      </Container>
    </section>
  )
}
