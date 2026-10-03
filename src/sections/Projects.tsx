import { ExternalLink } from 'lucide-react'
import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      titleId="projects-title"
      index="04"
      title="Projects"
      intro={profile.projectsIntro}
    >
      <ul className="mt-12 grid gap-5 lg:grid-cols-2">
        {profile.projects.map((project) => (
          <li key={project.id} className="h-full">
            <article className="card flex h-full flex-col rounded-3xl border border-line bg-elevated p-6 shadow-[var(--shadow)] backdrop-blur-md sm:p-8">
              <h3 className="font-display text-3xl leading-none text-ink">{project.name}</h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Problem
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">{project.problem}</p>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Responsibilities
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink sm:text-base">
                {project.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Outcome
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">{project.outcome}</p>

              <h4 className="mt-6 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                Technologies
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-line bg-chip px-3 py-1 text-sm text-ink"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              {project.github || project.demo ? (
              <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-5 text-sm font-semibold">
                {project.github ? (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-ink hover:text-brass"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GitHubMark />
                    GitHub
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-ink hover:text-brass"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live demo
                  </a>
                ) : null}
              </div>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
