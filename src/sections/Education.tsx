import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

export function Education() {
  return (
    <Section
      id="education"
      titleId="education-title"
      index="05"
      title="Education"
      intro={profile.educationIntro}
    >
      <ul className="mt-12 grid gap-4">
        {profile.education.map((item) => (
          <li key={item.id}>
            <article className="card rounded-3xl border border-line bg-elevated p-6 backdrop-blur-md sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-line text-brass">
                    <GraduationCap className="size-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{item.credential}</h3>
                    <p className="mt-1 text-muted">{item.school}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink sm:text-base">{item.detail}</p>
                  </div>
                </div>
                <p className="font-mono text-xs tracking-wide text-brass uppercase sm:text-right">
                  {item.date}
                  <span className="mt-1 block normal-case tracking-normal text-muted">{item.location}</span>
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
