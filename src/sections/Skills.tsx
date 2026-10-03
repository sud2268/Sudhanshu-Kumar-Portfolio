import {
  Activity,
  Boxes,
  Cloud,
  Code,
  Container,
  Database,
  GitBranch,
  Shield,
  GitCommitHorizontal,
  Workflow,
} from 'lucide-react'
import type { SkillIconName } from '../types/profile.ts'
import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

const icons = {
  cloud: Cloud,
  workflow: Workflow,
  boxes: Boxes,
  branch: GitBranch,
  container: Container,
  activity: Activity,
  code: Code,
  database: Database,
  commit: GitCommitHorizontal,
  shield: Shield,
} satisfies Record<SkillIconName, typeof Cloud>

export function Skills() {
  return (
    <Section
      id="skills"
      titleId="skills-title"
      index="03"
      title="Skills"
      intro={profile.skillsIntro}
    >
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {profile.skills.map((category) => {
          const Icon = icons[category.icon]
          return (
            <li
              key={category.id}
              className="card flex h-full flex-col rounded-3xl border border-line bg-elevated p-5 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-line text-brass">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-ink">{category.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line bg-chip px-3 py-1 text-sm text-ink"
                  >
                    {skill}
                  </li>
                ))}
                {category.familiar?.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-dashed border-line px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                    <span className="sr-only">, familiar</span>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
