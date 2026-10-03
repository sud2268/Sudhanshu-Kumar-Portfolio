export type SkillIconName =
  | 'cloud'
  | 'workflow'
  | 'boxes'
  | 'branch'
  | 'container'
  | 'activity'
  | 'code'
  | 'database'
  | 'commit'

export type AchievementIconName =
  | 'automation'
  | 'migration'
  | 'delivery'
  | 'cost'
  | 'security'
  | 'reliability'

export interface SkillCategory {
  id: string
  title: string
  icon: SkillIconName
  skills: string[]
}

export interface ExperienceRole {
  id: string
  title: string
  company: string
  location: string
  start: string
  end: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  problem: string
  technologies: string[]
  responsibilities: string[]
  github?: string
  demo?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  credentialId?: string
  credentialUrl?: string
}

export interface Achievement {
  id: string
  title: string
  summary: string
  icon: AchievementIconName
}

export interface ProfileHighlight {
  label: string
  value: string
}

export interface Profile {
  usingSampleContent: boolean
  name: string
  title: string
  summary: string
  location: string
  email: string
  linkedin: string
  github: string
  resumePath: string
  image: {
    src: string
    alt: string
  }
  focusAreas: string[]
  about: string[]
  highlights: ProfileHighlight[]
  skillsIntro: string
  experienceIntro: string
  projectsIntro: string
  certificationsIntro: string
  achievementsIntro: string
  resumeIntro: string
  contactIntro: string
  skills: SkillCategory[]
  experience: ExperienceRole[]
  projects: Project[]
  certifications: Certification[]
  achievements: Achievement[]
}
