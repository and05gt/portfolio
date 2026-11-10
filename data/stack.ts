export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export const STACK_DATA: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description:
      'Modern, reactive interfaces with strong typing and optimized rendering.',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'Angular' },
      { name: 'HTML5 / CSS3' },
      { name: 'SCSS / Tailwind CSS' },
    ],
  },
  {
    title: 'Backend & Databases',
    description:
      'Server architectures, persistent data stores, and API design.',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Python' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'RESTful APIs' },
    ],
  },
  {
    title: 'DevOps & Engineering Practices',
    description:
      'Version control, containerized environments, and responsive layout standards.',
    skills: [
      { name: 'Docker' },
      { name: 'Git / GitHub' },
      { name: 'Responsive Web Design' },
      { name: 'Software Architecture' },
    ],
  },
];
