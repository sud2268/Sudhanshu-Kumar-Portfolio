import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

export function Experience() {
  return (
    <Section
      id="experience"
      titleId="experience-title"
      index="02"
      title="Experience"
      intro={profile.experienceIntro}
    >
      <ol className="relative mt-12 space-y-6 border-l border-line">
        {profile.experience.map((role) => (
          <li key={role.id} className="relative pl-6 sm:pl-8">
            <span
              className="absolute top-7 -left-[5px] size-2.5 rounded-full bg-brass ring-4 ring-canvas"
              aria-hidden="true"
            />
            <article className="card rounded-3xl border border-line bg-elevated p-6 shadow-[var(--shadow)] backdrop-blur-md sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-3xl leading-none text-ink">{role.title}</h3>
                <p className="font-mono text-xs tracking-wide text-brass uppercase">
                  {role.start} — {role.end}
                </p>
              </div>
              <p className="mt-2 text-muted">
                {role.company}
                <span aria-hidden="true"> · </span>
                <span className="sr-only">, </span>
                {role.location}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink sm:text-base">{role.scope}</p>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Responsibilities
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink sm:text-base">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Key achievements
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink sm:text-base">
                {role.achievements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Technologies
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {role.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-line bg-chip px-3 py-1 text-sm text-ink"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
