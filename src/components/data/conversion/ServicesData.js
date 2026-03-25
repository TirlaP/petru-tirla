import { FiCode, FiUsers, FiCpu, FiLink, FiDatabase, FiWifi } from 'react-icons/fi';

export const services = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Applications',
    icon: FiCode,
    description: 'End-to-end development of modern web applications with type-safe frontends, robust backends, and production-grade infrastructure.',
    technologies: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Hono', 'PostgreSQL'],
    exampleProject: {
      slug: 'aifrontdesk',
      title: 'AiFrontDesk'
    }
  },
  {
    id: 'saas',
    title: 'Multi-Tenant SaaS Platforms',
    icon: FiUsers,
    description: 'Architecting SaaS products with tenant isolation, row-level security, subscription billing, and scalable multi-org data models.',
    technologies: ['RLS', 'Supabase', 'Stripe', 'Tenant Isolation', 'React', 'Hono'],
    exampleProject: {
      slug: 'repup-ai',
      title: 'RepUp AI'
    }
  },
  {
    id: 'ai',
    title: 'AI & LLM Integration',
    icon: FiCpu,
    description: 'Integrating large language models, speech-to-text, and AI pipelines into production applications for call intelligence, voice booking, and automated analysis.',
    technologies: ['OpenAI', 'AssemblyAI', 'Deepgram', 'BullMQ', 'NestJS'],
    exampleProject: {
      slug: 'repup-ai',
      title: 'RepUp AI'
    }
  },
  {
    id: 'api',
    title: 'API Design & Integration',
    icon: FiLink,
    description: 'Designing clean APIs and connecting third-party systems including CRMs, identity providers, payment processors, and legacy SOAP services.',
    technologies: ['REST', 'GraphQL', 'SCIM', 'SOAP', 'Webhooks', 'CRM Sync'],
    exampleProject: {
      slug: 'repup-ai',
      title: 'RepUp AI'
    }
  },
  {
    id: 'data',
    title: 'Data Platforms & Pipelines',
    icon: FiDatabase,
    description: 'Building data ingestion pipelines, web scrapers, background job systems, and normalized data stores for large-scale datasets.',
    technologies: ['PostgreSQL', 'BullMQ', 'Redis', 'Drizzle', 'Bun', 'Zod'],
    exampleProject: {
      slug: 'lista-firme',
      title: 'Lista Firme'
    }
  },
  {
    id: 'realtime',
    title: 'Real-Time & Offline Systems',
    icon: FiWifi,
    description: 'Developing real-time communication layers and offline-first desktop clients with store-and-forward sync and geospatial tracking.',
    technologies: ['WebSockets', 'Electron', 'PostGIS', 'MapLibre GL', 'Prisma'],
    exampleProject: {
      slug: 'maritime',
      title: 'Maritime Fleet Management'
    }
  }
];
