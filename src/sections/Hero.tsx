import { Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile.ts'
import { ButtonLink } from '../components/ButtonLink.tsx'
import { Container } from '../components/Container.tsx'
import { SocialLinks } from '../components/SocialLinks.tsx'

export function Hero() {
  const resumeName = `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`

  return (
    <section id="home" aria-labelledby="home-title" className="reveal scroll-mt-24">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:py-28">
        <div className="hero-copy">
          <p className="font-mono text-[0.72rem] tracking-[0.22em] text-brass uppercase">
            Cloud · Delivery · Reliability
          </p>
          <h1
            id="home-title"
            className="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-ink sm:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin className="size-4 text-brass" aria-hidden="true" />
            <span>{profile.location}</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects">View My Work</ButtonLink>
            <ButtonLink href={profile.resumePath} download={resumeName} variant="secondary">
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </ButtonLink>
          </div>
          <SocialLinks className="mt-8" />
        </div>

        <aside className="hero-panel rounded-3xl border border-line bg-elevated p-4 shadow-[var(--shadow)] backdrop-blur-md sm:p-5">
          <img
            src={profile.image.src}
            alt={profile.image.alt}
            width={640}
            height={800}
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <div className="px-1 pt-5 pb-2">
            <p className="font-mono text-[0.72rem] tracking-[0.18em] text-brass uppercase">Focus</p>
            <ul className="mt-3 space-y-2">
              {profile.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm text-ink">
                  <span className="size-1.5 rounded-full bg-brass" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </section>
  )
}
