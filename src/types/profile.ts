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
  | 'shield'

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
  familiar?: string[]
}

export interface ImpactStat {
  value: string
  label: string
}

export interface ExperienceRole {
  id: string
  title: string
  company: string
  location: string
  scope: string
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
  outcome: string
  technologies: string[]
  responsibilities: string[]
  github?: string
  demo?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  year?: string
  credentialId?: string
  credentialUrl?: string
}

export interface Achievement {
  id: string
  title: string
  summary: string
  icon: AchievementIconName
}

export interface EducationItem {
  id: string
  credential: string
  school: string
  location: string
  date: string
  detail: string
}

export interface ProfileHighlight {
  label: string
  value: string
}

export interface Profile {
  usingSampleContent: boolean
  name: string
  title: string
  specialties: string
  summary: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  resumePath: string
  image: {
    src: string
    alt: string
  }
  focusAreas: string[]
  impacts: ImpactStat[]
  about: string[]
  highlights: ProfileHighlight[]
  skillsIntro: string
  experienceIntro: string
  projectsIntro: string
  educationIntro: string
  certificationsIntro: string
  achievementsIntro: string
  resumeIntro: string
  contactIntro: string
  skills: SkillCategory[]
  experience: ExperienceRole[]
  projects: Project[]
  education: EducationItem[]
  certifications: Certification[]
  achievements: Achievement[]
}
