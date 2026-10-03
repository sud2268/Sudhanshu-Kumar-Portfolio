import { Footer } from './components/Footer.tsx'
import { Navbar } from './components/Navbar.tsx'
import { SampleBanner } from './components/SampleBanner.tsx'
import { About } from './sections/About.tsx'
import { Achievements } from './sections/Achievements.tsx'
import { Certifications } from './sections/Certifications.tsx'
import { Contact } from './sections/Contact.tsx'
import { Education } from './sections/Education.tsx'
import { Experience } from './sections/Experience.tsx'
import { Hero } from './sections/Hero.tsx'
import { Projects } from './sections/Projects.tsx'
import { Resume } from './sections/Resume.tsx'
import { Skills } from './sections/Skills.tsx'

export default function App() {
  return (
    <>
      <div className="site-bg" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <main id="content">
          <SampleBanner />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
