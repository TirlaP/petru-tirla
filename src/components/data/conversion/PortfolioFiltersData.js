export const portfolioFilters = {
  industries: [
    { id: "saas", name: "SaaS" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "finance", name: "Finance" },
    { id: "healthcare", name: "Healthcare" },
    { id: "education", name: "Education" },
    { id: "marketing", name: "Marketing & Design" },
    { id: "construction", name: "Architecture & Construction" }
  ],
  technologies: [
    { id: "react", name: "React.js" },
    { id: "next", name: "Next.js" },
    { id: "node", name: "Node.js" },
    { id: "typescript", name: "TypeScript" },
    { id: "tailwind", name: "TailwindCSS" },
    { id: "mongodb", name: "MongoDB" },
    { id: "postgres", name: "PostgreSQL" },
    { id: "firebase", name: "Firebase" },
    { id: "aws", name: "AWS" },
    { id: "wordpress", name: "WordPress" },
    { id: "webflow", name: "Webflow" }
  ],
  projectTypes: [
    { id: "web-app", name: "Web Application" },
    { id: "mobile-app", name: "Mobile App" },
    { id: "website", name: "Website" },
    { id: "ecommerce", name: "E-Commerce Store" },
    { id: "dashboard", name: "Admin Dashboard" },
    { id: "api", name: "API/Backend" },
    { id: "integration", name: "System Integration" }
  ],
  problemsSolved: [
    { id: "performance", name: "Performance Optimization" },
    { id: "ux", name: "User Experience Enhancement" },
    { id: "scalability", name: "Scalability Solution" },
    { id: "security", name: "Security Implementation" },
    { id: "automation", name: "Process Automation" },
    { id: "migration", name: "System Migration" },
    { id: "redesign", name: "Website Redesign" }
  ],
  skillsDemonstrated: [
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend Development" },
    { id: "fullstack", name: "Full-Stack Development" },
    { id: "ui-design", name: "UI Implementation" },
    { id: "database", name: "Database Design" },
    { id: "api-design", name: "API Design" },
    { id: "architecture", name: "System Architecture" },
    { id: "testing", name: "Testing & QA" }
  ]
};

// Map projects to filters for quick filtering
export const projectFiltersMap = {
  "aifrontdesk": {
    industries: ["saas"],
    technologies: ["react", "next", "node"],
    projectTypes: ["web-app"],
    problemsSolved: ["automation", "scalability"],
    skillsDemonstrated: ["fullstack", "api-design", "architecture"]
  },
  "portfolio-website": {
    industries: ["marketing"],
    technologies: ["react", "next", "tailwind"],
    projectTypes: ["website"],
    problemsSolved: ["ux", "performance"],
    skillsDemonstrated: ["frontend", "ui-design"]
  },
  "altfel-design-studio": {
    industries: ["construction"],
    technologies: ["wordpress"],
    projectTypes: ["website"],
    problemsSolved: ["redesign"],
    skillsDemonstrated: ["frontend", "ui-design"]
  },
  "expansio-agency": {
    industries: ["marketing"],
    technologies: ["webflow"],
    projectTypes: ["website"],
    problemsSolved: ["redesign", "ux"],
    skillsDemonstrated: ["frontend", "ui-design"]
  },
  "sport-website": {
    industries: ["education"],
    technologies: ["webflow"],
    projectTypes: ["website"],
    problemsSolved: ["ux"],
    skillsDemonstrated: ["frontend", "ui-design"]
  },
  "sync-business-agency": {
    industries: ["marketing", "finance"],
    technologies: ["wordpress"],
    projectTypes: ["website"],
    problemsSolved: ["redesign"],
    skillsDemonstrated: ["frontend", "ui-design"]
  },
  "zona-de-confort-design": {
    industries: ["construction"],
    technologies: ["webflow"],
    projectTypes: ["website"],
    problemsSolved: ["ux"],
    skillsDemonstrated: ["frontend", "ui-design"]
  },
  "auto-tinder": {
    industries: ["saas"],
    technologies: [],
    projectTypes: ["automation"],
    problemsSolved: ["automation"],
    skillsDemonstrated: ["backend"]
  }
};
