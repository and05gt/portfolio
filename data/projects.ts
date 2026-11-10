export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Modern Fullstack LMS Platform',
    subtitle: 'EdTech / E-Learning Solution',
    description:
      'A comprehensive learning management system featuring server-rendered courses, secure JWT authentication, lesson progress tracking, and Stripe Checkout payment webhooks.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Stripe'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'NoteHub App',
    subtitle: 'Productivity & Note Management',
    description:
      'High-performance personal note-taking web app with server-side prefetching, client-side hydration via TanStack Query, debounced search filtering, and paginated archives.',
    tags: [
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'CSS Modules',
      'REST API',
    ],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-3',
    title: 'Resume Checker',
    subtitle: 'Career Analytics Dashboard',
    description:
      'Web application for analyzing candidate resumes with protected user routes, theme personalization, and a dashboard for metrics evaluation.',
    tags: ['Next.js', 'TypeScript', 'CSS Modules', 'Node.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];
