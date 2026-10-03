import { Activity, Cloud, Gauge, GitBranch, Shield, Workflow } from 'lucide-react'
import type { AchievementIconName } from '../types/profile.ts'
import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

const icons = {
  automation: Workflow,
  migration: Cloud,
  delivery: GitBranch,
  cost: Gauge,
  security: Shield,
  reliability: Activity,
} satisfies Record<AchievementIconName, typeof Cloud>

export function Achievements() {
  return (
    <Section
      id="achievements"
      titleId="achievements-title"
      index="07"
      title="Achievements"
      intro={profile.achievementsIntro}
    >
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.achievements.map((achievement) => {
          const Icon = icons[achievement.icon]
          return (
            <li key={achievement.id}>
              <article className="card h-full rounded-3xl border border-line bg-elevated p-5 backdrop-blur-md">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-line text-brass">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{achievement.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{achievement.summary}</p>
              </article>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
