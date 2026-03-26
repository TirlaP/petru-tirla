import { FiCode, FiUsers, FiCpu, FiLink, FiDatabase, FiWifi } from 'react-icons/fi';

export const services = [
  {
    id: 'fullstack',
    title: {
      en: 'Full-Stack Web Applications',
      ro: 'Aplicații Web Full-Stack',
      fr: 'Full-Stack Web Applications',
      it: 'Full-Stack Web Applications'
    },
    icon: FiCode,
    description: {
      en: 'End-to-end development of modern web applications with type-safe frontends, robust backends, and production-grade infrastructure.',
      ro: 'Dezvoltare completă de aplicații web moderne cu frontend-uri type-safe, backend-uri robuste și infrastructură de producție.',
      fr: 'End-to-end development of modern web applications with type-safe frontends, robust backends, and production-grade infrastructure.',
      it: 'End-to-end development of modern web applications with type-safe frontends, robust backends, and production-grade infrastructure.'
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'NestJS', 'Hono', 'PostgreSQL'],
    exampleProject: {
      slug: 'aifrontdesk',
      title: 'AiFrontDesk'
    }
  },
  {
    id: 'saas',
    title: {
      en: 'Multi-Tenant SaaS Platforms',
      ro: 'Platforme SaaS Multi-Tenant',
      fr: 'Multi-Tenant SaaS Platforms',
      it: 'Multi-Tenant SaaS Platforms'
    },
    icon: FiUsers,
    description: {
      en: 'Architecting SaaS products with tenant isolation, row-level security, subscription billing, and scalable multi-org data models.',
      ro: 'Arhitectură de produse SaaS cu izolarea tenant-ilor, row-level security, facturare pe abonament și modele de date multi-organizație scalabile.',
      fr: 'Architecting SaaS products with tenant isolation, row-level security, subscription billing, and scalable multi-org data models.',
      it: 'Architecting SaaS products with tenant isolation, row-level security, subscription billing, and scalable multi-org data models.'
    },
    technologies: ['RLS', 'Supabase', 'Stripe', 'Tenant Isolation', 'React', 'Hono'],
    exampleProject: {
      slug: 'repup-ai',
      title: 'RepUp AI'
    }
  },
  {
    id: 'ai',
    title: {
      en: 'AI & LLM Integration',
      ro: 'Integrare AI & LLM',
      fr: 'AI & LLM Integration',
      it: 'AI & LLM Integration'
    },
    icon: FiCpu,
    description: {
      en: 'Integrating large language models, speech-to-text, and AI pipelines into production applications for call intelligence, voice booking, and automated analysis.',
      ro: 'Integrarea modelelor lingvistice mari, speech-to-text și pipeline-uri AI în aplicații de producție pentru inteligență conversațională, rezervări vocale și analiză automată.',
      fr: 'Integrating large language models, speech-to-text, and AI pipelines into production applications for call intelligence, voice booking, and automated analysis.',
      it: 'Integrating large language models, speech-to-text, and AI pipelines into production applications for call intelligence, voice booking, and automated analysis.'
    },
    technologies: ['OpenAI', 'AssemblyAI', 'Deepgram', 'BullMQ', 'NestJS'],
    exampleProject: {
      slug: 'repup-ai',
      title: 'RepUp AI'
    }
  },
  {
    id: 'api',
    title: {
      en: 'API Design & Integration',
      ro: 'Design & Integrare API',
      fr: 'API Design & Integration',
      it: 'API Design & Integration'
    },
    icon: FiLink,
    description: {
      en: 'Designing clean APIs and connecting third-party systems including CRMs, identity providers, payment processors, and legacy SOAP services.',
      ro: 'Proiectarea de API-uri curate și conectarea sistemelor terțe, inclusiv CRM-uri, furnizori de identitate, procesatori de plăți și servicii SOAP legacy.',
      fr: 'Designing clean APIs and connecting third-party systems including CRMs, identity providers, payment processors, and legacy SOAP services.',
      it: 'Designing clean APIs and connecting third-party systems including CRMs, identity providers, payment processors, and legacy SOAP services.'
    },
    technologies: ['REST', 'GraphQL', 'SCIM', 'SOAP', 'Webhooks', 'CRM Sync'],
    exampleProject: {
      slug: 'repup-ai',
      title: 'RepUp AI'
    }
  },
  {
    id: 'data',
    title: {
      en: 'Data Platforms & Pipelines',
      ro: 'Platforme de Date & Pipeline-uri',
      fr: 'Data Platforms & Pipelines',
      it: 'Data Platforms & Pipelines'
    },
    icon: FiDatabase,
    description: {
      en: 'Building data ingestion pipelines, web scrapers, background job systems, and normalized data stores for large-scale datasets.',
      ro: 'Construirea de pipeline-uri de ingestie a datelor, scrapere web, sisteme de job-uri în fundal și depozite de date normalizate pentru seturi mari de date.',
      fr: 'Building data ingestion pipelines, web scrapers, background job systems, and normalized data stores for large-scale datasets.',
      it: 'Building data ingestion pipelines, web scrapers, background job systems, and normalized data stores for large-scale datasets.'
    },
    technologies: ['PostgreSQL', 'BullMQ', 'Redis', 'Drizzle', 'Bun', 'Zod'],
    exampleProject: {
      slug: 'lista-firme',
      title: 'Lista Firme'
    }
  },
  {
    id: 'realtime',
    title: {
      en: 'Real-Time & Offline Systems',
      ro: 'Sisteme Real-Time & Offline',
      fr: 'Real-Time & Offline Systems',
      it: 'Real-Time & Offline Systems'
    },
    icon: FiWifi,
    description: {
      en: 'Developing real-time communication layers and offline-first desktop clients with store-and-forward sync and geospatial tracking.',
      ro: 'Dezvoltarea de straturi de comunicare în timp real și clienți desktop offline-first cu sincronizare store-and-forward și urmărire geospațială.',
      fr: 'Developing real-time communication layers and offline-first desktop clients with store-and-forward sync and geospatial tracking.',
      it: 'Developing real-time communication layers and offline-first desktop clients with store-and-forward sync and geospatial tracking.'
    },
    technologies: ['WebSockets', 'Electron', 'PostGIS', 'MapLibre GL', 'Prisma'],
    exampleProject: {
      slug: 'maritime',
      title: 'Maritime Fleet Management'
    }
  }
];
