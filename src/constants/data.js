export const profile = {
  name: 'Krish Mungase',
  firstName: 'Krish',
  lastName: 'Mungase',
  roles: [
    'Full Stack Developer',
    'Competitive Programmer',
    'React Engineer',
    'Problem Solver',
  ],
  tagline: 'I design and build fast, polished web products end-to-end.',
  bio: `Final-year CE student at MIT Academy of Engineering. I write production React & Node at WorkableAI, ship side projects on weekends, and grind LeetCode in between.`,
  location: 'Pune, Maharashtra, India',
  email: 'mungasekrishna8@gmail.com',
  phone: '+91 9021107094',
  socials: {
    github: 'https://github.com/krishmungase',
    linkedin: 'https://linkedin.com/in/krishna-mungase-5365ab27b',
    leetcode: 'https://leetcode.com/u/psycho_coder07/',
    email: 'mailto:mungasekrishna8@gmail.com',
  },
  leetcodeHandle: 'psycho_coder07',
  resumeUrl: '/Krish.pdf',
}

export const skills = [
  { name: 'TypeScript', category: 'Language', color: '#3178c6', ring: 0 },
  { name: 'JavaScript', category: 'Language', color: '#f7df1e', ring: 0 },
  { name: 'C++', category: 'Language', color: '#00599c', ring: 0 },
  { name: 'Python', category: 'Language', color: '#3776ab', ring: 0 },
  { name: 'Java', category: 'Language', color: '#f89820', ring: 0 },
  { name: 'C', category: 'Language', color: '#a8b9cc', ring: 0 },
  { name: 'SQL', category: 'Language', color: '#e38c00', ring: 0 },

  { name: 'React.js', category: 'Frontend', color: '#61dafb', ring: 1 },
  { name: 'Next.js', category: 'Frontend', color: '#ffffff', ring: 1 },
  { name: 'Redux', category: 'Frontend', color: '#764abc', ring: 1 },
  { name: 'TailwindCSS', category: 'Frontend', color: '#38bdf8', ring: 1 },

  { name: 'Node.js', category: 'Backend', color: '#3c873a', ring: 2 },
  { name: 'Express', category: 'Backend', color: '#94a3b8', ring: 2 },
  { name: 'Spring Boot', category: 'Backend', color: '#6db33f', ring: 2 },
  { name: 'MongoDB', category: 'Backend', color: '#47a248', ring: 2 },
  { name: 'PostgreSQL', category: 'Backend', color: '#336791', ring: 2 },

  { name: 'Docker', category: 'DevOps', color: '#2496ed', ring: 3 },
  { name: 'AWS', category: 'DevOps', color: '#ff9900', ring: 3 },
  { name: 'Firebase', category: 'DevOps', color: '#ffca28', ring: 3 },
  { name: 'Git', category: 'DevOps', color: '#f05032', ring: 3 },
  { name: 'GitHub', category: 'DevOps', color: '#ffffff', ring: 3 },
]

export const skillCategories = [
  'All',
  'Language',
  'Frontend',
  'Backend',
  'DevOps',
]

export const projects = [
  {
    slug: 'bl-sheet',
    title: 'BL Sheet',
    blurb:
      'Project management platform with tasks, assessments & live dashboards.',
    description:
      'A team-built SaaS for managing projects end-to-end. I owned the Tasks and Assessment modules: schema, REST APIs, full-stack data flow, and a snappy React UI.',
    tags: ['TypeScript', 'React', 'Node.js', 'TailwindCSS', 'AWS', 'Shadcn UI'],
    category: 'Full-Stack',
    live: 'https://app.blsheet.com',
    github: null,
    accent: '#7c5cff',
    featured: true,
    span: 'lg',
    role: 'Full-stack engineer · Team project',
  },
  {
    slug: 'code-mitra',
    title: 'Code Mitra',
    blurb: 'Udemy-style learning platform with courses, enrollment, and auth.',
    description:
      'Built REST APIs for course catalog, enrollment, and user management. Designed a clean responsive UI with React, Tailwind, Ant Design and Shadcn UI.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    category: 'Full-Stack',
    live: 'https://codemitra-yt.vercel.app',
    github: null,
    accent: '#22d3ee',
    span: 'md',
    role: 'Full-stack engineer',
  },
  {
    slug: 'work-orbit',
    title: 'Work-Orbit',
    blurb: 'Freelance bidding platform with escrow payments & workflows.',
    description:
      'Team-built bidding marketplace. I shipped the bidding system, escrow payment flow, and freelancer onboarding/workflow logic on a Spring Boot + PostgreSQL backend.',
    tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
    category: 'Full-Stack',
    live: 'https://work-orbit.netlify.app',
    github: null,
    accent: '#f472b6',
    span: 'md',
    role: 'Full-stack engineer · Team project',
  },
  {
    slug: 'codify',
    title: 'Codify',
    blurb: 'Real-time interview & collab platform — voice, live code, replay.',
    description:
      'A collaborative interview studio with voice chat, synchronized live coding, sticky notes, and session replay. Built for fast pair-programming and mock interviews.',
    tags: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
    category: 'Collaboration',
    live: 'https://app-codify.vercel.app',
    github: null,
    accent: '#a78bfa',
    featured: true,
    span: 'lg',
    role: 'Solo project',
  },
  {
    slug: 'truedoc',
    title: 'TrueDoc',
    blurb: 'AI document verification with YOLOv11 + RoboFlow.',
    description:
      'A document authenticity checker that uses a trained YOLOv11 model (RoboFlow) to detect tampering and verify fields in scanned IDs and certificates.',
    tags: ['React', 'TailwindCSS', 'YOLOv11', 'RoboFlow'],
    category: 'AI/ML',
    live: 'https://true-doc-nine.vercel.app',
    github: null,
    accent: '#34d399',
    span: 'md',
    role: 'Solo project',
  },
  {
    slug: 'docs-app',
    title: 'Docs App',
    blurb: 'Google Docs clone — real-time collaborative editing + chat.',
    description:
      'A live collaborative document editor with multi-user cursors, presence, and an in-document chat sidebar.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    category: 'Collaboration',
    live: 'https://docs-g.netlify.app',
    github: null,
    accent: '#60a5fa',
    span: 'sm',
    role: 'Solo project',
  },
  {
    slug: 'foodo',
    title: 'Foodo Admin',
    blurb: 'Admin dashboard for a food-delivery platform.',
    description:
      'Role-based admin UI for managing restaurants, menus, and orders. Built with React, Tailwind, and protected role-based routes.',
    tags: ['React', 'TailwindCSS', 'RBAC'],
    category: 'Frontend',
    live: 'https://mernspace-admin-ui.vercel.app',
    github: null,
    accent: '#fb923c',
    span: 'sm',
    role: 'Solo project',
  },
  {
    slug: 'd-club',
    title: 'D-Club',
    blurb: 'Find the right college-club partners by interests.',
    description:
      'A discovery platform that matches students with club partners based on shared interests and skills.',
    tags: ['React', 'TailwindCSS', 'Firebase'],
    category: 'Frontend',
    live: 'https://d-clubs.vercel.app',
    github: null,
    accent: '#facc15',
    span: 'sm',
    role: 'Solo project',
  },
]

export const projectCategories = [
  'All',
  'Full-Stack',
  'Frontend',
  'AI/ML',
  'Collaboration',
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'WorkableAI',
    location: 'Remote',
    period: 'Jul 2025 — Present',
    type: 'Internship',
    logo: 'https://www.workableai.org/new_logo.png',
    points: [
      'Building React frontends with reusable, accessible components.',
      'Designing modular Node.js APIs with clean separation of concerns.',
      'Pairing on reviews — pushing for readability, performance, and test coverage.',
    ],
    stack: ['React.js', 'Node.js', 'Express', 'TailwindCSS'],
    accent: '#7c5cff',
  },
]

export const education = [
  {
    role: 'B.Tech, Computer Engineering',
    company: 'MIT Academy of Engineering, Pune',
    period: '2023 — 2027',
    detail: 'CGPA: 8.50 / 10',
    accent: '#22d3ee',
  },
  {
    role: 'Higher Secondary (12th)',
    company: 'Junior College',
    period: '2023',
    detail: 'Student of the Year — 2023',
    accent: '#f472b6',
  },
]

export const achievements = [
  {
    title: '1st Prize — Web Development',
    org: 'Knowledge Network Club, MIT Academy of Engineering',
    icon: 'trophy',
  },
  {
    title: 'Student of the Year (2023)',
    org: 'Junior College',
    icon: 'medal',
  },
]

export const cpStats = {
  leetcodeUrl: 'https://leetcode.com/u/psycho_coder07/',
  handle: 'psycho_coder07',
  totalSolved: 767,
  easy: 367,
  medium: 370,
  hard: 30,
  rating: 1836,
  contestsAttended: 104,
  maxStreak: 162,
  globalRank: '~ 55k',
  badges: ['500 Days Badge', '100 Days Badge'],
}

export const cpStatRings = [
  { key: 'easy', color: '#22c55e', label: 'Easy' },
  { key: 'medium', color: '#f59e0b', label: 'Medium' },
  { key: 'hard', color: '#ef4444', label: 'Hard' },
]

export const cpStatTiles = [
  { key: 'rating', icon: 'Trophy', label: 'Contest rating', accent: '#fbbf24' },
  { key: 'contestsAttended', icon: 'Target', label: 'Contests', accent: '#8b6dff' },
  { key: 'maxStreak', icon: 'Flame', label: 'Max streak', accent: '#fb7185', suffix: 'd' },
  { key: 'globalRank', icon: 'Code2', label: 'Global rank', accent: '#22d3ee' },
]

export const aboutFacts = [
  { icon: 'MapPin', label: 'Based in', value: 'Pune, India' },
  { icon: 'Briefcase', label: 'Currently', value: 'WorkableAI Intern' },
  { icon: 'GraduationCap', label: 'Studying', value: 'B.Tech CE · 8.50 CGPA' },
  { icon: 'Cpu', label: 'Daily driver', value: 'React · Node · C++' },
]

export const skillStackCategories = ['Language', 'Frontend', 'Backend', 'DevOps']

export const skillCategoryMeta = {
  Language: {
    file: 'languages.ts',
    varName: 'languages',
    tag: 'the speaking layer',
    blurb: 'How I think out loud.',
  },
  Frontend: {
    file: 'frontend.ts',
    varName: 'frontend',
    tag: 'the visible layer',
    blurb: 'What ships to the browser.',
  },
  Backend: {
    file: 'backend.ts',
    varName: 'backend',
    tag: 'the thinking layer',
    blurb: 'Where the heavy lifting lives.',
  },
  DevOps: {
    file: 'devops.ts',
    varName: 'devops',
    tag: 'the shipping layer',
    blurb: 'How it gets to production.',
  },
}

export const contactSocials = [
  { icon: 'Github', socialKey: 'github', label: 'GitHub' },
  { icon: 'Linkedin', socialKey: 'linkedin', label: 'LinkedIn' },
  { icon: 'LeetCode', socialKey: 'leetcode', label: 'LeetCode' },
]

export const heroWaveform = [3, 6, 4, 8, 5, 9, 6, 4, 7, 5, 3, 8, 4, 6, 5, 7, 4]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'CP', href: '#cp' },
  { label: 'Contact', href: '#contact' },
]
