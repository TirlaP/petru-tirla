export const caseStudies = [
  {
    id: "aifrontdesk",
    title: "AiFrontDesk - AI-Powered Call Center Solution",
    subtitle: "Full-Stack AI Solution with OpenAI & Twilio Integration",
    clientIndustry: "SaaS / Customer Service",
    timeline: "6 months",
    teamSize: "Co-founded, 2 developers",
    technologies: ["OpenAI API", "React.js", "Next.js", "Node.js", "Twilio", "MongoDB", "Terraform", "Ansible"],
    challenge: "Businesses needed an AI-powered call center solution to handle customer inquiries with minimal human intervention, while maintaining natural conversation flow. The system needed to support multiple organizations with different knowledge bases and handle concurrent calls efficiently.",
    approach: "We designed a multi-tenant architecture with real-time capabilities. I implemented a custom integration between OpenAI's API and Twilio's voice services, creating a seamless pipeline for audio processing, speech-to-text conversion, AI response generation, and text-to-speech output. The solution included a user management system with role-based access control and a customizable knowledge base per client.",
    solution: "The final solution featured:\n\n- Multi-tenant architecture supporting concurrent calls\n- 1.2 second response latency\n- Custom webhook system for real-time call monitoring\n- Comprehensive admin dashboard for call analytics\n- Dynamic knowledge base that adapts per organization\n- Infrastructure automation with Terraform and Ansible",
    results: {
      metrics: [
        { label: "Response Latency", value: "1.2s", improvement: "Industry-leading speed" },
        { label: "Architecture", value: "Multi-tenant", improvement: "Concurrent call handling via Twilio" },
        { label: "Knowledge Bases", value: "Per-client", improvement: "Custom AI training per organization" },
        { label: "Infrastructure", value: "IaC", improvement: "Terraform + Ansible automation" }
      ]
    },
    images: {
      before: "/images/case-studies/aifrontdesk-before.jpg",
      after: "/images/case-studies/aifrontdesk-after.jpg",
      solution: "/images/case-studies/aifrontdesk-solution.jpg"
    },
    slug: "aifrontdesk"
  },
  {
    id: "repup-ai",
    title: "RepUp AI - Revenue Intelligence Platform",
    subtitle: "SaaS Platform for B2B Sales Teams with AI-Powered Conversation Intelligence",
    clientIndustry: "SaaS / Sales Intelligence",
    timeline: "Ongoing (Founded 2024)",
    teamSize: "Solo founder & developer",
    technologies: ["NestJS", "TypeScript", "React", "Supabase", "PostgreSQL", "OpenAI API", "AssemblyAI", "BullMQ", "Redis", "Stripe"],
    challenge: "B2B sales managers and RevOps teams lacked a unified tool to transform conversation intelligence into actionable account and deal intelligence. Existing solutions were fragmented across CRMs, call recording tools, and spreadsheets, making it hard to track deal health and revenue signals.",
    approach: "I built a full revenue intelligence workspace from scratch as a solo founder. The architecture centers on a call intelligence pipeline (audio upload, transcription via AssemblyAI, AI analysis via OpenAI) that feeds into a revenue graph with confidence-scored identity links. I implemented bilateral sync with 6 major CRMs to ensure data flows both ways without conflicts.",
    solution: "The platform includes:\n\n- NestJS backend with 50+ services, 25+ controllers, 37 repositories\n- 6 CRM integrations with bilateral sync: HubSpot, Salesforce, Pipedrive, Zoho, ActiveCampaign, Dynamics 365\n- Call intelligence pipeline: transcription, AI summaries, action items, objection detection, risk assessment\n- Deal risk scoring with multi-signal analysis and champion detection\n- Human-in-the-loop workflow automation with draft approval before CRM writes\n- Stripe credit-based billing system\n- Dual-mode architecture (monolith + worker) for independent scaling",
    results: {
      metrics: [
        { label: "Paying Clients", value: "20+", improvement: "Live SaaS business with real revenue" },
        { label: "Active Users", value: "200+", improvement: "Growing user base across sales teams" },
        { label: "CRM Integrations", value: "6", improvement: "HubSpot, Salesforce, Pipedrive, Zoho, ActiveCampaign, Dynamics 365" },
        { label: "Backend Services", value: "50+", improvement: "NestJS modular architecture" },
        { label: "DB Migrations", value: "120+", improvement: "Supabase PostgreSQL with RLS for multi-tenancy" }
      ]
    },
    images: {
      before: "/images/case-studies/repup-before.jpg",
      after: "/images/case-studies/repup-after.jpg",
      solution: "/images/case-studies/repup-solution.jpg"
    },
    slug: "repup-ai"
  },
  {
    id: "lista-firme",
    title: "Lista Firme - Romanian Company Data Platform",
    subtitle: "Indexing 2M Companies from Government APIs with Custom Job Queue",
    clientIndustry: "Data / Business Intelligence",
    timeline: "2024 - Present",
    teamSize: "Solo developer",
    technologies: ["Bun", "Hono", "Drizzle ORM", "PostgreSQL", "Zod", "TypeScript"],
    challenge: "Romania lacked a unified, searchable platform for company financial data. Information was scattered across three separate government sources (ANAF, ONRC, Firme Online), each with different APIs, formats, and rate limits. Building a reliable data pipeline to index nearly 2 million companies required handling 5M+ raw API responses without Redis or RabbitMQ infrastructure overhead.",
    approach: "I designed a custom PostgreSQL-based job queue with lease-based work-stealing, eliminating the need for external queue infrastructure. The pipeline scrapes three government data sources in parallel, normalizes financial data (revenue, profit, loss, employee count, assets) across multiple years, and stores everything in a well-indexed PostgreSQL database. A monorepo structure with a shared Zod contracts package ensures type safety across the API boundary.",
    solution: "The platform includes:\n\n- Data pipeline scraping 3 government sources: ANAF (Romanian Tax Authority), ONRC (National Trade Register), Firme Online\n- Custom job queue in PostgreSQL with lease-based work-stealing (no Redis/RabbitMQ dependency)\n- Cursor-based pagination with stored anchor points for stable browsing across 2M rows\n- Async export pipeline: CSV (100k rows) and XLSX (50k rows) with streaming 100-row batches\n- Financial data normalization across multiple years\n- Monorepo with shared Zod contracts package for end-to-end type safety\n- Bun runtime, Hono API framework, Drizzle ORM",
    results: {
      metrics: [
        { label: "Companies Indexed", value: "1,968,946", improvement: "Near-complete Romanian company coverage" },
        { label: "Raw API Responses", value: "5M+", improvement: "Processed from 3 government sources" },
        { label: "Job Queue", value: "Custom PG", improvement: "Lease-based work-stealing, zero external deps" },
        { label: "Export Capacity", value: "100k rows", improvement: "Streaming CSV/XLSX async pipeline" }
      ]
    },
    images: {
      solution: "/images/case-studies/placeholder.jpg"
    },
    slug: "lista-firme"
  },
  {
    id: "moovrsoft",
    title: "Moovrsoft - Luxury Transportation SaaS",
    subtitle: "Multi-Tenant Platform with Stripe Connect, PostGIS, and Voice Booking",
    clientIndustry: "SaaS / Transportation",
    timeline: "2025 - Present",
    teamSize: "Solo developer",
    technologies: ["Bun", "Hono", "Supabase", "React", "Stripe Connect", "PostGIS", "Deepgram", "OpenAI", "TypeScript"],
    challenge: "Luxury transportation and chauffeur companies needed a modern, multi-tenant booking platform that could handle complex pricing rules (geographic zones, seasonal rates, time windows, affiliate commissions), per-tenant payment processing, and voice-based booking for high-end clients who prefer calling over using apps.",
    approach: "I built a multi-tenant SaaS from scratch with Stripe Connect for per-tenant payment accounts, PostGIS for geographic pricing zones with a polygon editor (Terra Draw), and a voice booking pipeline using Deepgram for speech-to-text combined with OpenAI for intent extraction. The platform includes 40+ Row-Level Security policies in Supabase for tenant isolation and 13+ embeddable booking widget templates for client websites.",
    solution: "The platform includes:\n\n- Stripe Connect integration with per-tenant Stripe accounts for payment processing\n- PostGIS geo-pricing zones with Terra Draw polygon editor for zone creation\n- Voice booking via Deepgram (speech-to-text) + OpenAI (intent extraction)\n- 13+ embeddable booking widget templates for client websites\n- Dynamic pricing engine with rule-based architecture (seasonal, geographic, time-window, affiliate)\n- Google Calendar integration for booking sync\n- CRM features: customer segments, marketing campaigns\n- Supabase with 40+ RLS policies for multi-tenant isolation",
    results: {
      metrics: [
        { label: "RLS Policies", value: "40+", improvement: "Full multi-tenant data isolation" },
        { label: "Widget Templates", value: "13+", improvement: "Embeddable booking widgets" },
        { label: "Voice Booking", value: "Deepgram + AI", improvement: "Speech-to-text with intent extraction" },
        { label: "Payment", value: "Stripe Connect", improvement: "Per-tenant payment accounts" }
      ]
    },
    images: {
      solution: "/images/case-studies/placeholder.jpg"
    },
    slug: "moovrsoft"
  }
];
