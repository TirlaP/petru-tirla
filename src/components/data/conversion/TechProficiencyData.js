export const techProficiencyData = {
  categories: [
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        {
          name: "React",
          years: 4,
          projects: ["Papilio (70+ modules)", "RepUp AI", "Maritime (4 frontends)"],
          status: "primary"
        },
        {
          name: "TypeScript",
          years: 4,
          projects: ["All projects (strict mode, Zod validation)"],
          status: "primary"
        },
        {
          name: "Next.js",
          years: 3,
          projects: ["AiFrontDesk", "Portfolio"],
          status: "actively using"
        },
        {
          name: "Tailwind CSS",
          years: 3,
          projects: ["RepUp AI", "Moovrsoft", "Lista Firme"],
          status: "actively using"
        },
        {
          name: "Electron",
          years: 1,
          projects: ["Maritime (offline-first vessel client)"],
          status: "production experience"
        }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      skills: [
        {
          name: "Node.js",
          years: 4,
          projects: ["RepUp AI", "Papilio", "Maritime", "Lista Firme"],
          status: "primary"
        },
        {
          name: "NestJS",
          years: 2,
          projects: ["RepUp AI (50+ services, 25+ controllers)"],
          status: "primary"
        },
        {
          name: "Hono",
          years: 2,
          projects: ["Papilio (Cloudflare Workers)", "Lista Firme", "Moovrsoft"],
          status: "actively using"
        },
        {
          name: "Bun",
          years: 2,
          projects: ["Lista Firme", "Maritime", "Moovrsoft"],
          status: "actively using"
        }
      ]
    },
    {
      id: "databases",
      name: "Databases & Data",
      skills: [
        {
          name: "PostgreSQL",
          years: 4,
          projects: ["All projects (90+ models in Maritime, 120+ migrations in RepUp)"],
          status: "primary"
        },
        {
          name: "Supabase",
          years: 3,
          projects: ["Papilio", "RepUp AI", "Moovrsoft (40+ RLS policies)"],
          status: "primary"
        },
        {
          name: "Redis",
          years: 2,
          projects: ["RepUp AI (BullMQ job queues, caching)"],
          status: "actively using"
        },
        {
          name: "MongoDB",
          years: 2,
          projects: ["RepUp AI (legacy)", "AiFrontDesk"],
          status: "production experience"
        },
        {
          name: "Prisma / Drizzle",
          years: 2,
          projects: ["Maritime (Prisma, 96 models)", "Lista Firme (Drizzle)"],
          status: "actively using"
        }
      ]
    },
    {
      id: "integrations",
      name: "Integrations & APIs",
      skills: [
        {
          name: "OpenAI / AI APIs",
          years: 2,
          projects: ["RepUp AI (call analysis)", "Moovrsoft (voice booking)", "AiFrontDesk"],
          status: "actively using"
        },
        {
          name: "Stripe",
          years: 3,
          projects: ["RepUp AI (billing)", "Moovrsoft (Stripe Connect)"],
          status: "actively using"
        },
        {
          name: "CRM APIs",
          years: 2,
          projects: ["RepUp AI (HubSpot, Salesforce, Pipedrive, Zoho, ActiveCampaign, Dynamics 365)"],
          status: "production experience"
        },
        {
          name: "SCIM / SOAP / AD",
          years: 1,
          projects: ["Papilio (Azure AD, Google Workspace, AON MapTalent)"],
          status: "production experience"
        }
      ]
    },
    {
      id: "infra",
      name: "Infrastructure",
      skills: [
        {
          name: "Cloudflare Workers",
          years: 2,
          projects: ["Papilio (serverless edge deployment)"],
          status: "actively using"
        },
        {
          name: "Docker",
          years: 2,
          projects: ["Maritime (Docker Compose, air-gapped)", "RepUp AI"],
          status: "actively using"
        },
        {
          name: "CI/CD",
          years: 3,
          projects: ["GitHub Actions across all projects"],
          status: "actively using"
        },
        {
          name: "PostGIS",
          years: 1,
          projects: ["Maritime (vessel tracking)", "Moovrsoft (geo-pricing zones)"],
          status: "production experience"
        }
      ]
    }
  ]
};
