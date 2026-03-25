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
  }
];
