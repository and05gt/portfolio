export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured?: boolean;
  overview: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    authAndSecurity: string;
  };
  features: string[];
  challenges: {
    problem: string;
    solution: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'lms-platform',
    title: 'Modern Fullstack LMS Platform',
    subtitle: 'EdTech / E-Learning Solution',
    description:
      'A comprehensive learning management system featuring server-rendered courses, secure JWT authentication, lesson progress tracking, and Stripe Checkout payment webhooks.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Stripe'],
    demoUrl: 'https://lms-platform-neon-six.vercel.app/',
    githubUrl: 'https://github.com/and05gt/lms-platform',
    imageUrl: '/images/lms-platform.png',
    featured: true,
    overview:
      'This application provides a production-grade digital learning platform. It allows users to browse course catalogs, track real-time video progress, manage their enrolled content, and safely purchase access via Stripe Checkout with signature-verified webhooks.',
    architecture: {
      frontend:
        'Next.js App Router with Server Components for static course catalog rendering and Client Components for dynamic media player interactions.',
      backend:
        'Next.js Route Handlers and Server Actions handling transactional mutations, Stripe Webhook listeners, and API endpoints.',
      database:
        'MySQL accessed through Prisma ORM with strict indexing on user enrollments and course modules.',
      authAndSecurity:
        'JWT session management, bcrypt credential hashing, and secure Stripe webhook signature verification.',
    },
    features: [
      'Protected video lessons with synchronized user progress',
      'Automated purchase fulfillment using asynchronous Stripe webhooks',
      'Course catalog with category filtration and server-side pre-rendering',
      'User dashboard with ongoing course analytics and access status',
    ],
    challenges: [
      {
        problem:
          'Webhook fulfillment race conditions where database upserts failed during simultaneous user redirection.',
        solution:
          'Implemented idempotent event handling and validated responses to guarantee persistent enrollment state before client navigation.',
      },
      {
        problem:
          'Preventing unnecessary client re-renders during video progress updates.',
        solution:
          'Decoupled progress heartbeat sync from the main player state using debounced server action triggers.',
      },
    ],
  },
  {
    id: 'rental-car',
    title: 'RentalCar App',
    subtitle: 'Car Rental & Catalog Platform',
    description:
      'A high-performance car rental platform built with Next.js and TypeScript, utilizing Server-Side Prefetching and React Query client hydration for seamless browsing and car booking.',
    tags: [
      'Next.js',
      'TypeScript',
      'React Query',
      'Axios',
      'Formik',
      'Yup',
      'CSS Modules',
    ],
    demoUrl: 'https://rental-car-xi-blue.vercel.app/',
    githubUrl: 'https://github.com/and05gt/rental-car',
    imageUrl: '/images/rental-car.png',
    featured: true,
    overview:
      'RentalCar is a modern, responsive web application designed for renting cars efficiently. It solves common web catalogue performance bottlenecks by leveraging Next.js Server Components with TanStack Query prefetching and client-side cache hydration, delivering instant page transitions without loading flickers.',
    architecture: {
      frontend:
        'Next.js App Router with React Server Components, TanStack Query hydration provider, and scoped CSS Modules for isolated component styling.',
      backend:
        'Modular API layer built on Axios instances with centralized error handling and dynamic query parameter serialization.',
      database:
        'External RESTful endpoints feeding vehicle models, price tiers, and rental criteria directly to the SSR data layer.',
      authAndSecurity:
        'Form validation and input sanitization handled by Formik coupled with strict Yup schemas for reliable user bookings and notifications via React Hot Toast.',
    },
    features: [
      'Dynamic catalog with multi-attribute filtering (brand, price, and mileage)',
      'SSR prefetching on /catalog and /catalog/[carId] with zero initial loading lag',
      'Car details view displaying full technical specifications and rental terms',
      'Interactive booking modal flow powered by Formik, Yup validation, and React Hot Toast',
      'Custom 404 handling and fully responsive UI optimized across devices',
    ],
    challenges: [
      {
        problem:
          'Eliminating layout shift (CLS) and initial loading flickers when navigating between the catalog and individual car detail pages.',
        solution:
          'Structured Next.js Server Components to prefetch data at request time using TanStack Query dehydrate utilities, hydrating the client cache directly on initial HTML load.',
      },
      {
        problem:
          'Managing robust client-side form validation and instant feedback during the rental booking flow.',
        solution:
          'Integrated Formik with Yup validation schemas, pairing asynchronous submission handlers with React Hot Toast for instant visual state feedback.',
      },
    ],
  },
  {
    id: 'resume-checker',
    title: 'Resume Checker (Backend & API)',
    subtitle: 'Career Analytics Platform',
    description:
      'Architected and implemented the backend services, document ingestion pipeline, and scoring APIs to integrate with an existing client frontend.',
    tags: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'REST API',
      'MongoDB',
      'Document Parsing',
    ],
    demoUrl: 'https://resume-checker-backend-rho.vercel.app/',
    githubUrl: 'https://github.com/and05gt/resume-checker-backend',
    imageUrl: '/images/resume-checker.png',
    featured: false,
    overview:
      'Developed the core server-side engine for a resume auditing dashboard. Responsible for architecting API endpoints, file upload validation, text extraction routines, and scoring logic while integrating seamlessly into a pre-existing frontend interface.',
    architecture: {
      frontend:
        'Client application (pre-built UI consumed the newly developed API contracts).',
      backend:
        'Node.js & Express.js with modular controller-service layers and strict request validation.',
      database:
        'MongoDB database persistence tracking submission history, candidate scoring metrics, and audit logs.',
      authAndSecurity:
        'File buffer sanitization to prevent malicious upload payloads, CORS configuration, and route authentication middleware.',
    },
    features: [
      'Document parsing pipeline handling uploaded resume files and extracting structured text',
      'Algorithmic heuristic evaluation calculating ATS readability and keyword density scores',
      'Robust RESTful API design ensuring backwards-compatibility with the client UI',
      'Centralized error-handling middleware providing consistent JSON error structures',
    ],
    challenges: [
      {
        problem:
          'Parsing varied and malformed document structures without crashing node processes or blocking the event loop.',
        solution:
          'Implemented file mime-type and size guards, wrapped parsing routines in isolated asynchronous services, and sanitized raw extracted strings.',
      },
      {
        problem:
          'Integrating into an existing frontend with fixed payload expectations.',
        solution:
          'Standardized API responses and strict TypeScript interface contracts to match the existing UI schema seamlessly.',
      },
    ],
  },
];
