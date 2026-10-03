import type { Profile } from '../types/profile.ts'
import { publicAsset } from '../lib/assets.ts'

/**
 * Profile content taken from Sudhanshu_Kumar_Resume-8july_3413.pdf.
 * Edit this file to change what the site shows.
 * Do not put passwords, API keys, or tokens in this file.
 */
export const profile: Profile = {
  usingSampleContent: false,
  name: 'Sudhanshu Kumar',
  title: 'Senior Cloud Engineer',
  specialties: 'Azure & AWS · Kubernetes · Infrastructure as Code · DevOps',
  summary:
    'Senior Cloud Engineer with 5.5+ years designing and automating cloud infrastructure, primarily on Microsoft Azure, with AWS for multi-cloud and migration work. I focus on AKS, Terraform, CI/CD, and observability.',
  location: 'New Delhi, India',
  email: 'sudhanshu2267@gmail.com',
  phone: '+91-9810837352',
  linkedin: 'https://www.linkedin.com/in/sud2268',
  github: 'https://github.com/sud2268',
  resumePath: publicAsset('/resume/resume.pdf'),
  image: {
    src: publicAsset('/images/profile.svg'),
    alt: 'Monogram placeholder for Sudhanshu Kumar. Replace this file with a portrait.',
  },
  focusAreas: ['Microsoft Azure', 'Kubernetes', 'Terraform', 'CI/CD and observability'],
  impacts: [
    { value: '5.5+', label: 'Years in cloud and DevOps' },
    { value: '40%', label: 'Shorter production release cycle' },
    { value: '50%', label: 'Faster incident response' },
    { value: '20%', label: 'Lower compute cost' },
  ],
  about: [
    'I am a Senior Cloud Engineer with 5.5+ years architecting and automating enterprise-scale cloud infrastructure. Microsoft Azure is the primary platform. AWS is where the work is multi-cloud or a migration. The day-to-day is AKS and EKS, Terraform, CI/CD, and full-stack observability.',
    'At R Systems International I own end-to-end Azure infrastructure design and delivery for PeriGen, including a private AKS platform, and a separate AWS serverless data platform for emissions calculation. At Tata Consultancy Services I delivered Azure DevOps pipelines, Terraform upgrades, monitoring, and backend services across client environments.',
    'I graduated with a B.Tech in Computer Science from GGSIPU, Delhi, in August 2020, and I hold the AZ-204 Microsoft Azure Developer Associate certification.',
  ],
  highlights: [
    { label: 'Experience', value: '5.5+ years in cloud and DevOps' },
    { label: 'Education', value: 'B.Tech, Computer Science, GGSIPU' },
    { label: 'Certification', value: 'AZ-204, Azure Developer Associate' },
  ],
  skillsIntro:
    'Production tools, grouped the way an infrastructure profile usually reads. Azure is primary. AWS is hands-on project experience, not a second equal specialty. Dashed chips are familiar: I have used them, and they are not the core of the role.',
  experienceIntro: 'R Systems International, and before that Tata Consultancy Services.',
  projectsIntro:
    'Two platforms from my current role, written as short case studies: the problem, what I took on, and the outcome. They are client systems, so there is no public repository or demo.',
  educationIntro:
    'Bachelor’s degree in computer science. GGSIPU is Guru Gobind Singh Indraprastha University, Delhi.',
  certificationsIntro: 'The certification listed on my resume. The document does not include a credential ID or year.',
  achievementsIntro: 'Results called out in my experience, kept in the words of the resume.',
  resumeIntro: 'The PDF version of this background, dated 8 July.',
  contactIntro:
    'Email, phone, and LinkedIn are the direct routes. The form is ready to connect to an email service and does not send a message until that is configured.',
  skills: [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: 'cloud',
      skills: [
        'Microsoft Azure',
        'AKS',
        'ACR',
        'Application Gateway',
        'Virtual Network',
        'NSG',
        'AWS',
        'S3',
        'Lambda',
        'Glue',
        'Step Functions',
        'API Gateway',
        'EventBridge',
        'VPC',
        'Secrets Manager',
        'RDS',
      ],
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: 'workflow',
      skills: ['Azure DevOps', 'Bash', 'PowerShell'],
      familiar: ['Ansible'],
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code',
      icon: 'boxes',
      skills: ['Terraform', 'Terraform Cloud', 'Bicep', 'ARM Templates', 'TFLint', 'Checkov'],
    },
    {
      id: 'cicd',
      title: 'CI/CD',
      icon: 'branch',
      skills: ['Azure DevOps', 'GitHub Actions', 'Jenkins'],
    },
    {
      id: 'containers',
      title: 'Containers',
      icon: 'container',
      skills: ['Kubernetes', 'AKS', 'EKS', 'Docker', 'Helm', 'Container Registry'],
    },
    {
      id: 'observability',
      title: 'Monitoring & Observability',
      icon: 'activity',
      skills: [
        'Azure Monitor',
        'Log Analytics',
        'Application Insights',
        'Container Insights',
        'Prometheus',
        'Grafana',
        'CloudWatch',
      ],
    },
    {
      id: 'security',
      title: 'Security & Governance',
      icon: 'shield',
      skills: [
        'RBAC',
        'Azure Policy',
        'Key Vault',
        'WAF',
        'Front Door Premium',
        'Private Link',
        'IAM',
        'CIS Benchmarks',
      ],
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: 'code',
      skills: ['Python', 'Bash', 'PowerShell'],
      familiar: ['Java', 'C++', 'Android'],
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: 'database',
      skills: [],
      familiar: ['MySQL'],
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
      id: 'r-systems',
      title: 'Senior Cloud Engineer',
      company: 'R Systems International',
      location: 'New Delhi, India',
      scope:
        'End-to-end Azure platform design and delivery for PeriGen, plus a production AWS serverless data platform.',
      start: 'Dec 2024',
      end: 'Present',
      responsibilities: [
        'Architected Azure infrastructure with Terraform, delivering 17+ reusable modules for networking, AKS, security, and observability across dev, staging, and production.',
        'Built a private AKS cluster on Kubernetes 1.30 with Workload Identity, an OIDC issuer, Azure CNI overlay networking, and cluster autoscaling, on a hub-and-spoke network with segmented subnets and NSGs.',
        'Automated infrastructure delivery in Azure DevOps with staged Terraform plan and apply, gated approvals, and TFLint and Checkov scanning.',
        'Designed production AWS infrastructure with Terraform for S3, IAM, Glue, Lambda, Step Functions, SNS, and API Gateway across 4 environments, using modules and Terraform Cloud remote state.',
        'Architected an event-driven pipeline in AWS Step Functions for multi-stage ETL, with Glue 5.0 jobs, RDS and JDBC connectivity, and Lambda-backed API Gateway endpoints.',
        'Built GitHub Actions pipelines for Terraform with AWS OIDC, so the workflows do not use long-lived credentials.',
      ],
      achievements: [
        'Put AKS behind an internal NGINX load balancer and exposed it through Azure Front Door Premium, Private Link, and WAF, with no public ingress.',
        'Set Azure Policy governance with 10+ custom audit policies for security, cost, tagging, and compliance, and Key Vault with RBAC for secrets.',
        'Added AKS monitoring with Container Insights, kube-audit logging, and alerts for CPU, memory, disk pressure, and CrashLoopBackOff, routed through dual Log Analytics workspaces.',
        'Configured VPC-attached Lambda functions with least-privilege IAM and Secrets Manager, plus SNS alerts and EventBridge-scheduled runs.',
      ],
      technologies: [
        'Azure',
        'AKS',
        'Terraform',
        'Terraform Cloud',
        'Azure DevOps',
        'GitHub Actions',
        'AWS',
        'Key Vault',
      ],
    },
    {
      id: 'tcs-developer',
      title: 'Software Developer (Cloud & DevOps)',
      company: 'Tata Consultancy Services',
      location: 'New Delhi, India',
      scope:
        'Cloud and DevOps for client platforms: Azure pipelines, Terraform, observability, and backend services.',
      start: 'Jan 2022',
      end: 'Dec 2024',
      responsibilities: [
        'Led an Angular migration of a critical client application and a Gen2+ Databricks migration using VNet injection.',
        'Engineered multi-stage Azure DevOps pipelines with Terraform for repeatable delivery across 5+ client environments.',
        'Upgraded Terraform from v0.13 to v1.2, migrating deprecated resources across 12+ modules.',
        'Wrote Python scripts to parse Azure Log Analytics data into scheduled health reports, and a utility to validate ARM templates and detect drift.',
        'Developed Python services with Flask and FastAPI for infrastructure metrics and deployment status, and Java services on Azure Event Hubs and Service Bus.',
        'Executed Inox@scale and GitHub migrations to consolidate repositories.',
      ],
      achievements: [
        'Improved platform performance by 30% and reduced compute costs by 20% on the Databricks migration.',
        'Reduced production deployment cycle time by 40%.',
        'Improved application stability by 75% through load testing and autoscaling, with zero downtime during peak traffic.',
        'Reduced mean incident response time by 50% with real-time failure alerts on Azure Function Apps.',
        'Reduced manual reporting effort by 70%. Drift detection prevented 10+ production incidents.',
        'Reduced licensing and tooling costs by 20% through the repository consolidation.',
        'The Java services handled 50,000+ daily transactions, and the Python APIs were used by 3 development teams.',
      ],
      technologies: [
        'Azure',
        'Terraform',
        'Azure DevOps',
        'Databricks',
        'Python',
        'Java',
        'Log Analytics',
        'GitHub',
      ],
    },
    {
      id: 'tcs-ase',
      title: 'Assistant System Engineer',
      company: 'Tata Consultancy Services',
      location: 'Pune, India',
      scope: 'Retention and backup, pipeline stages, and an Agile team of 5 engineers.',
      start: 'Jan 2021',
      end: 'Jan 2022',
      responsibilities: [
        'Designed a long-term data retention and backup strategy with Terraform.',
        'Refactored Azure Pipelines so development and production were separate stages.',
        'Led an Agile team of 5 engineers, with sprint planning aligned to client requirements.',
        'Delivered internal training on Azure Function Apps, Application Insights, Key Vault, GitHub, Docker, Kubernetes, and Ansible.',
      ],
      achievements: [
        'Reduced data loss risk by 90% and aligned retention with client SLAs.',
        'Improved deployment efficiency by 25% and reduced environment misconfiguration.',
        'Improved project delivery velocity by 15%.',
        'Increased team onboarding speed by 20% through the training.',
      ],
      technologies: ['Terraform', 'Azure Pipelines', 'Azure Functions', 'Application Insights', 'Key Vault', 'Docker', 'Kubernetes'],
    },
  ],
  projects: [
    {
      id: 'perigen',
      name: 'PeriGen — Vigilance Mobile',
      description:
        'Azure cloud platform for PeriGen: private AKS, networking, security, and observability, described as Terraform modules for dev, staging, and production.',
      problem:
        'The workloads needed a private Kubernetes path, reusable infrastructure, and governance across environments, without a public ingress.',
      outcome:
        'A private AKS platform on Kubernetes 1.30, 17+ Terraform modules across three environments, Front Door Premium with Private Link and WAF, and cluster alerts for CPU, memory, disk, and CrashLoopBackOff.',
      technologies: [
        'Terraform',
        'AKS',
        'Azure Front Door',
        'Private Link',
        'WAF',
        'Azure Policy',
        'Key Vault',
        'Azure DevOps',
      ],
      responsibilities: [
        'Delivered 17+ reusable Terraform modules for networking, AKS, security, and observability.',
        'Built a private AKS cluster on Kubernetes 1.30 with Workload Identity, OIDC, Azure CNI overlay, and cluster autoscaling on a hub-and-spoke network.',
        'Fronted the internal NGINX load balancer with Azure Front Door Premium, Private Link, and WAF.',
        'Added custom Azure Policy, Key Vault with RBAC, and Azure DevOps pipelines with TFLint and Checkov.',
      ],
    },
    {
      id: 'ghg-platform',
      name: 'AWS Serverless Data Platform',
      description:
        'Production AWS infrastructure for a GHG emissions calculation workflow, deployed with Terraform across four environments and orchestrated as an event-driven ETL pipeline.',
      problem:
        'The calculation process needed modular infrastructure, a multi-stage ETL flow, and CI/CD that did not depend on long-lived cloud credentials.',
      outcome:
        'The same modules deployed to four environments, GitHub Actions assuming AWS roles through OIDC, Glue and Lambda behind a Step Functions ETL path, and SNS alerts on a schedule.',
      technologies: [
        'Terraform',
        'Terraform Cloud',
        'S3',
        'Glue',
        'Lambda',
        'Step Functions',
        'API Gateway',
        'GitHub Actions',
      ],
      responsibilities: [
        'Deployed S3, IAM, Glue, Lambda, Step Functions, SNS, and API Gateway with reusable modules and Terraform Cloud remote state.',
        'Orchestrated multi-stage ETL in Step Functions, with Glue 5.0 jobs talking to RDS over JDBC and Lambda behind API Gateway.',
        'Built GitHub Actions pipelines that assume AWS roles through OIDC and deploy path-triggered ETL jobs.',
        'Attached Lambda to the VPC with least-privilege IAM and Secrets Manager, and added SNS alerts plus EventBridge schedules.',
      ],
    },
  ],
  education: [
    {
      id: 'btech',
      credential: 'B.Tech in Computer Science',
      school: 'GGSIPU — Guru Gobind Singh Indraprastha University',
      location: 'Delhi, India',
      date: 'Graduated Aug 2020',
      detail: 'Bachelor of Technology in Computer Science, completed in August 2020.',
    },
  ],
  certifications: [
    {
      id: 'az-204',
      name: 'AZ-204: Microsoft Azure Developer Associate',
      issuer: 'Microsoft',
    },
  ],
  achievements: [
    {
      id: 'automation',
      title: 'Infrastructure automation',
      summary:
        'Delivered 17+ Terraform modules and staged plan/apply pipelines, and upgraded Terraform from v0.13 to v1.2 across 12+ modules.',
      icon: 'automation',
    },
    {
      id: 'migration',
      title: 'Cloud migration',
      summary:
        'Led a Gen2+ Databricks migration with VNet injection and an Angular migration, improving platform performance by 30%.',
      icon: 'migration',
    },
    {
      id: 'delivery',
      title: 'CI/CD improvements',
      summary:
        'Multi-stage Azure DevOps pipelines cut production deployment cycle time by 40% across 5+ client environments.',
      icon: 'delivery',
    },
    {
      id: 'cost',
      title: 'Cost optimization',
      summary:
        'Reduced compute costs by 20% on the Databricks migration, and licensing and tooling costs by 20% after the GitHub migration.',
      icon: 'cost',
    },
    {
      id: 'security',
      title: 'Security improvements',
      summary:
        'Private AKS ingress through Front Door Premium, Private Link, and WAF, plus Azure Policy, Key Vault, and AWS OIDC in CI/CD.',
      icon: 'security',
    },
    {
      id: 'reliability',
      title: 'Reliability improvements',
      summary:
        'Cut incident response time by 50%, improved stability by 75%, and kept a zero-downtime result during peak traffic.',
      icon: 'reliability',
    },
  ],
}
