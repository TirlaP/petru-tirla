// Technology Proficiency data file

export const techCategories = [
  {
    id: "frontend",
    name: "Frontend Technologies"
  },
  {
    id: "backend",
    name: "Backend Technologies"
  },
  {
    id: "database",
    name: "Databases"
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure"
  },
  {
    id: "tools",
    name: "Tools & Methodologies"
  }
];

export const technologies = [
  {
    id: "react",
    name: "React",
    logo: "/images/tech/react.svg", // We'll create these later
    category: "frontend",
    experience: 4, // years
    proficiency: 95, // percentage
    projects: ["Portfolio Website", "AiFrontDesk", "Sport Website"],
    status: "actively-using", // actively-using, learning, familiar
  },
  {
    id: "nextjs",
    name: "Next.js",
    logo: "/images/tech/nextjs.svg",
    category: "frontend",
    experience: 3,
    proficiency: 90,
    projects: ["Portfolio Website", "AiFrontDesk"],
    status: "actively-using",
  },
  {
    id: "tailwindcss",
    name: "TailwindCSS",
    logo: "/images/tech/tailwindcss.svg",
    category: "frontend",
    experience: 3,
    proficiency: 95,
    projects: ["Portfolio Website", "Expansio Agency"],
    status: "actively-using",
  },
  {
    id: "typescript",
    name: "TypeScript",
    logo: "/images/tech/typescript.svg",
    category: "frontend",
    experience: 2,
    proficiency: 85,
    projects: ["AiFrontDesk"],
    status: "actively-using",
  },
  {
    id: "javascript",
    name: "JavaScript",
    logo: "/images/tech/javascript.svg",
    category: "frontend",
    experience: 4,
    proficiency: 95,
    projects: ["All Projects"],
    status: "actively-using",
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    logo: "/images/tech/html-css.svg",
    category: "frontend",
    experience: 5,
    proficiency: 98,
    projects: ["All Projects"],
    status: "actively-using",
  },
  {
    id: "nodejs",
    name: "Node.js",
    logo: "/images/tech/nodejs.svg",
    category: "backend",
    experience: 3,
    proficiency: 88,
    projects: ["AiFrontDesk"],
    status: "actively-using",
  },
  {
    id: "express",
    name: "Express",
    logo: "/images/tech/express.svg",
    category: "backend",
    experience: 3,
    proficiency: 85,
    projects: ["AiFrontDesk"],
    status: "actively-using",
  },
  {
    id: "graphql",
    name: "GraphQL",
    logo: "/images/tech/graphql.svg",
    category: "backend",
    experience: 2,
    proficiency: 75,
    projects: ["AiFrontDesk"],
    status: "familiar",
  },
  {
    id: "firebase",
    name: "Firebase",
    logo: "/images/tech/firebase.svg",
    category: "backend",
    experience: 3,
    proficiency: 85,
    projects: ["Full-Stack Admin Dashboard"],
    status: "actively-using",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: "/images/tech/mongodb.svg",
    category: "database",
    experience: 3,
    proficiency: 85,
    projects: ["AiFrontDesk"],
    status: "actively-using",
  },
  {
    id: "mysql",
    name: "MySQL",
    logo: "/images/tech/mysql.svg",
    category: "database",
    experience: 4,
    proficiency: 80,
    projects: ["E-Commerce Applications"],
    status: "familiar",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "/images/tech/postgresql.svg",
    category: "database",
    experience: 2,
    proficiency: 75,
    projects: ["Project Management Applications"],
    status: "familiar",
  },
  {
    id: "git",
    name: "Git & GitHub",
    logo: "/images/tech/git.svg",
    category: "devops",
    experience: 4,
    proficiency: 90,
    projects: ["All Projects"],
    status: "actively-using",
  },
  {
    id: "docker",
    name: "Docker",
    logo: "/images/tech/docker.svg",
    category: "devops",
    experience: 2,
    proficiency: 70,
    projects: ["AiFrontDesk"],
    status: "familiar",
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/images/tech/aws.svg",
    category: "devops",
    experience: 1,
    proficiency: 65,
    projects: ["AiFrontDesk"],
    status: "learning",
  },
  {
    id: "figma",
    name: "Figma",
    logo: "/images/tech/figma.svg",
    category: "tools",
    experience: 3,
    proficiency: 80,
    projects: ["UI/UX Implementation"],
    status: "actively-using",
  },
  {
    id: "jest",
    name: "Jest",
    logo: "/images/tech/jest.svg",
    category: "tools",
    experience: 2,
    proficiency: 75,
    projects: ["AiFrontDesk"],
    status: "familiar",
  },
  {
    id: "webpack",
    name: "Webpack",
    logo: "/images/tech/webpack.svg",
    category: "tools",
    experience: 3,
    proficiency: 80,
    projects: ["Performance Optimization"],
    status: "familiar",
  },
  {
    id: "storybook",
    name: "Storybook",
    logo: "/images/tech/storybook.svg",
    category: "tools",
    experience: 2,
    proficiency: 80,
    projects: ["Component Library"],
    status: "familiar",
  }
];

// Technology Proficiency translations
export const techProficiencyTranslations = {
  en: {
    heading: "Technical Expertise",
    subheading: "A comprehensive view of my technological skills",
    yearsLabel: "Years Experience",
    proficiencyLabel: "Proficiency",
    projectsLabel: "Used In",
    statusLabels: {
      "actively-using": "Actively Using",
      "learning": "Currently Learning",
      "familiar": "Familiar With"
    },
    filterLabel: "Filter by",
    allTech: "All Technologies"
  },
  ro: {
    heading: "Expertiză Tehnică",
    subheading: "O privire cuprinzătoare asupra abilităților mele tehnologice",
    yearsLabel: "Ani de Experiență",
    proficiencyLabel: "Competență",
    projectsLabel: "Utilizat În",
    statusLabels: {
      "actively-using": "Utilizare Activă",
      "learning": "În Curs de Învățare",
      "familiar": "Familiarizat Cu"
    },
    filterLabel: "Filtrează după",
    allTech: "Toate Tehnologiile"
  },
  fr: {
    heading: "Expertise Technique",
    subheading: "Une vue complète de mes compétences technologiques",
    yearsLabel: "Années d'Expérience",
    proficiencyLabel: "Compétence",
    projectsLabel: "Utilisé Dans",
    statusLabels: {
      "actively-using": "Utilisation Active",
      "learning": "En Apprentissage",
      "familiar": "Familier Avec"
    },
    filterLabel: "Filtrer par",
    allTech: "Toutes les Technologies"
  },
  it: {
    heading: "Competenza Tecnica",
    subheading: "Una visione completa delle mie competenze tecnologiche",
    yearsLabel: "Anni di Esperienza",
    proficiencyLabel: "Competenza",
    projectsLabel: "Utilizzato In",
    statusLabels: {
      "actively-using": "Utilizzo Attivo",
      "learning": "In Apprendimento",
      "familiar": "Familiare Con"
    },
    filterLabel: "Filtra per",
    allTech: "Tutte le Tecnologie"
  }
};