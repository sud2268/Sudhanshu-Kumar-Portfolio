import { Award } from 'lucide-react'
import { profile } from '../data/profile.ts'
import { Section } from '../components/Section.tsx'

export function Certifications() {
  return (
    <Section
      id="certifications"
      titleId="certifications-title"
      index="05"
      title="Certifications"
      intro={profile.certificationsIntro}
    >
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {profile.certifications.map((certification) => (
          <li key={certification.id}>
            <article className="card flex h-full gap-4 rounded-3xl border border-line bg-elevated p-5 backdrop-blur-md sm:p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-line text-brass">
                <Award className="size-[18px]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg leading-snug font-semibold text-ink">{certification.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {certification.issuer}
                  <span aria-hidden="true"> · </span>
                  {certification.year}
                </p>
                {certification.credentialId ? (
                  <p className="mt-3 font-mono text-xs text-muted">ID {certification.credentialId}</p>
                ) : null}
                {certification.credentialUrl ? (
                  <a
                    href={certification.credentialUrl}
                    className="mt-3 inline-flex text-sm font-semibold text-ink hover:text-brass"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View credential
                  </a>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
