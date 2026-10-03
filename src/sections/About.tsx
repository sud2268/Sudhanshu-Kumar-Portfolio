import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

export function About() {
  return (
    <Section
      id="about"
      titleId="about-title"
      index="01"
      title="About"
      intro={profile.about[0] ?? ''}
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.7fr)] lg:items-start">
        <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {profile.about.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="space-y-4 rounded-3xl border border-line bg-elevated p-6 backdrop-blur-md">
          {profile.highlights.map((item) => (
            <div key={item.label} className="border-b border-line pb-4 last:border-b-0 last:pb-0">
              <dt className="font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                {item.label}
              </dt>
              <dd className="mt-1 text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
