import type { Profile } from '../types/profile.ts'

/**
 * Edit this file to update the website. Components read from here
 * so you should not need to hardcode personal details in the UI.
 *
 * Sample content is marked in two ways:
 * - `usingSampleContent` shows a banner until you set it to false.
 * - Square brackets, "your-username", and "example.com" are placeholders.
 *
 * The first name is taken from this machine's user folder. Confirm it,
 * and replace the title if you describe your work differently.
 * Do not put passwords, API keys, or tokens in this file.
 */
export const profile = {
  usingSampleContent: true,
  name: 'Sudhanshu',
  title: 'DevOps & Cloud Engineer',
  summary:
    'I work on cloud infrastructure that teams can review, automate, and operate. I care about clear delivery paths and systems that stay understandable as they grow.',
  location: '[City, Country]',
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  resumePath: '/resume/resume.pdf',
  image: {
    src: '/images/profile.svg',
    alt: 'Monogram placeholder for Sudhanshu. Replace this file with your portrait.',
  },
  focusAreas: [
    'Cloud platforms',
    'Infrastructure as code',
    'Delivery pipelines',
    'Observability',
  ],
  about: [
    'I am a DevOps and cloud engineer who likes infrastructure to be written down, reviewed, and easy to change. Most of my interest sits where cloud platforms, automation, and day-to-day operations meet.',
    'I am drawn to work that removes repeated manual steps: environment setup, release checks, and the signals a team needs when something in production shifts. I would rather leave a system that the next person can understand.',
    'Outside the tools themselves, I care about Linux, practical reliability, and platform work that stays small enough to reason about. Replace these paragraphs with your own background before you publish.',
  ],
  highlights: [
    { label: 'Focus', value: 'Cloud infrastructure and delivery' },
    { label: 'Working style', value: 'Reviewed changes, less manual setup' },
    { label: 'Interests', value: 'Platform engineering, Linux, reliability' },
  ],
  skillsIntro:
    'Tools and platforms I have worked with. This is not a ranking, and familiarity differs by area. Remove anything you have not used.',
  experienceIntro:
    'Example roles for the layout. Replace the company, location, dates, and bullets with positions you have actually held.',
  projectsIntro:
    'Example projects so the cards have a shape. Swap in work you want to show, and delete the rest.',
  certificationsIntro:
    'Example credentials only. Keep a certification here if you have earned it, and add the real year and credential link.',
  achievementsIntro:
    'Example highlights for the layout. Replace each card with an outcome from your own work, and drop any theme that does not fit.',
  resumeIntro: 'A PDF copy of my background. Replace the file when your resume is ready.',
  contactIntro:
    'Email is the direct route. The form below is wired for a future email service and does not send a message until you connect one.',
  skills: [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: 'cloud',
      skills: ['AWS', 'Azure', 'Linux'],
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: 'workflow',
      skills: ['Linux'],
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code',
      icon: 'boxes',
      skills: ['Terraform', 'Terraform Cloud'],
    },
    {
      id: 'cicd',
      title: 'CI/CD',
      icon: 'branch',
      skills: ['GitHub Actions'],
    },
    {
      id: 'containers',
      title: 'Containers',
      icon: 'container',
      skills: ['Docker', 'Kubernetes'],
    },
    {
      id: 'observability',
      title: 'Monitoring & Observability',
      icon: 'activity',
      skills: ['CloudWatch', 'Azure Monitor', 'SonarCloud'],
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: 'code',
      skills: ['Python', 'Java', '.NET'],
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: 'database',
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      id: 'vcs',
      title: 'Version Control',
      icon: 'commit',
      skills: ['Git', 'GitHub'],
    },
  ],
  experience: [
    {
      id: 'role-current',
      title: 'DevOps Engineer',
      company: '[Company Name]',
      location: '[City]',
      start: '[YYYY]',
      end: 'Present',
      responsibilities: [
        'Looked after cloud environments and the automation used to change them.',
        'Kept delivery pipelines reviewable, with checks that ran before a release.',
        'Worked with application teams on how services were built, deployed, and observed.',
      ],
      achievements: [
        'Replaced a manual setup checklist with a repeatable infrastructure change.',
        'Made pipeline results easier to trace when a build failed.',
      ],
      technologies: ['AWS', 'Terraform', 'GitHub Actions', 'Docker', 'Linux'],
    },
    {
      id: 'role-previous',
      title: 'Cloud Engineer',
      company: '[Previous Company]',
      location: '[City]',
      start: '[YYYY]',
      end: '[YYYY]',
      responsibilities: [
        'Helped move workload configuration into versioned infrastructure code.',
        'Supported day-to-day operation of Linux hosts and cloud services.',
        'Wrote notes other engineers could follow when recreating an environment.',
      ],
      achievements: [
        'Reduced one-off console changes by describing the baseline in Terraform.',
        'Clarified ownership of alerts so the right person saw a failure.',
      ],
      technologies: ['Azure', 'Terraform', 'Linux', 'Python', 'Azure Monitor'],
    },
  ],
  projects: [
    {
      id: 'platform-baseline',
      name: 'Cloud Platform Baseline',
      description:
        'A small, reviewed starting point for a cloud environment: network, compute, and shared services described as code.',
      problem:
        'New environments were being clicked together in the console, so each one drifted and was hard to explain later.',
      technologies: ['Terraform', 'AWS', 'GitHub Actions'],
      responsibilities: [
        'Split the baseline into modules a teammate could read in one sitting.',
        'Added a pipeline that shows the plan before anything is applied.',
        'Documented the few commands required to review a change.',
      ],
      github: 'https://github.com/your-username/cloud-platform-baseline',
    },
    {
      id: 'delivery-template',
      name: 'Service Delivery Template',
      description:
        'A reusable workflow for building, scanning, and publishing a container image with the same steps every time.',
      problem:
        'Each repository had invented its own release script, so failures were familiar and the fixes were not.',
      technologies: ['GitHub Actions', 'Docker', 'SonarCloud'],
      responsibilities: [
        'Defined one workflow other repositories could copy.',
        'Kept scan results in the pull request instead of a side channel.',
        'Left the template short enough to change without a platform team in the room.',
      ],
      github: 'https://github.com/your-username/service-delivery-template',
      demo: 'https://example.com',
    },
    {
      id: 'signal-notes',
      name: 'Operational Signals',
      description:
        'A narrow set of dashboards and alerts for a service: saturation, errors, and whether the last deploy changed either one.',
      problem:
        'The team had plenty of graphs and still heard about incidents from users first.',
      technologies: ['CloudWatch', 'Azure Monitor', 'Linux'],
      responsibilities: [
        'Chose a few signals that mapped to how the service actually fails.',
        'Tied alert text to the dashboard a responder should open.',
        'Removed noisy checks that nobody acted on.',
      ],
      github: 'https://github.com/your-username/operational-signals',
    },
  ],
  certifications: [
    {
      id: 'aws-saa',
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '[Year]',
      credentialId: '[Credential ID]',
      credentialUrl: 'https://www.credly.com/',
    },
    {
      id: 'terraform-associate',
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '[Year]',
      credentialId: '[Credential ID]',
      credentialUrl: 'https://www.credly.com/',
    },
    {
      id: 'az-104',
      name: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      year: '[Year]',
      credentialId: '[Credential ID]',
    },
  ],
  achievements: [
    {
      id: 'automation',
      title: 'Infrastructure automation',
      summary:
        'Moved environment setup out of a private checklist and into a change the team can review.',
      icon: 'automation',
    },
    {
      id: 'migration',
      title: 'Cloud migration',
      summary:
        'Prepared a workload for managed cloud services and wrote down the cutover instead of improvising it.',
      icon: 'migration',
    },
    {
      id: 'delivery',
      title: 'CI/CD improvements',
      summary:
        'Gave repositories a shared build and release path so a failure looked the same everywhere.',
      icon: 'delivery',
    },
    {
      id: 'cost',
      title: 'Cost awareness',
      summary:
        'Looked for idle environments and oversized defaults, and treated cleanup as part of the change.',
      icon: 'cost',
    },
    {
      id: 'security',
      title: 'Security improvements',
      summary:
        'Kept secrets out of repositories and made image and code checks visible in the pull request.',
      icon: 'security',
    },
    {
      id: 'reliability',
      title: 'Reliability improvements',
      summary:
        'Narrowed alerts to conditions someone would actually wake up for, and pointed them at a dashboard.',
      icon: 'reliability',
    },
  ],
} satisfies Profile
