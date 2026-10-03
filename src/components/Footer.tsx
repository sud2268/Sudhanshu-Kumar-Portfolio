import { profile } from '../data/profile.ts'
import { Container } from './Container.tsx'
import { SocialLinks } from './SocialLinks.tsx'

const year = new Date().getFullYear()

export function Footer() {

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  )
}
