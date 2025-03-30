// Services data file
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiZap,
  FiLayers
} from 'react-icons/fi';

export const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FiLayout,
    description: "Creating responsive, interactive, and high-performance user interfaces that engage and delight your users.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    exampleProject: {
      title: "Portfolio Website",
      slug: "portfolio-website"
    }
  },
  {
    id: 2,
    title: "Backend Development",
    icon: FiServer,
    description: "Building robust server-side applications and APIs that power your web applications with security and performance in mind.",
    technologies: ["Node.js", "Express", "MongoDB", "Firebase"],
    exampleProject: {
      title: "AiFrontDesk",
      slug: "aifrontdesk"
    }
  },
  {
    id: 3,
    title: "Full-Stack Solutions",
    icon: FiCode,
    description: "End-to-end development of web applications from concept to deployment, ensuring seamless integration between frontend and backend.",
    technologies: ["MERN Stack", "Next.js", "GraphQL", "RESTful APIs"],
    exampleProject: {
      title: "AiFrontDesk",
      slug: "aifrontdesk"
    }
  },
  {
    id: 4,
    title: "UI/UX Implementation",
    icon: FiLayers,
    description: "Transforming designs into pixel-perfect, responsive interfaces with smooth animations and intuitive interactions.",
    technologies: ["TailwindCSS", "Styled Components", "Framer Motion"],
    exampleProject: {
      title: "Sport Website",
      slug: "sport-website"
    }
  },
  {
    id: 5,
    title: "Performance Optimization",
    icon: FiZap,
    description: "Improving website speed, responsiveness, and overall performance to enhance user experience and SEO rankings.",
    technologies: ["Webpack", "Next.js", "Core Web Vitals", "Lazy Loading"],
    exampleProject: {
      title: "Portfolio Website",
      slug: "portfolio-website"
    }
  },
  {
    id: 6,
    title: "Database Design & Implementation",
    icon: FiDatabase,
    description: "Designing efficient database structures and implementing data access layers for optimal performance and scalability.",
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    exampleProject: {
      title: "AiFrontDesk",
      slug: "aifrontdesk"
    }
  }
];

// Services translations
export const servicesTranslations = {
  en: {
    heading: "Services",
    subheading: "Specialized expertise to help you succeed",
    ctaButton: "Discuss Your Project",
    technologiesLabel: "Technologies",
    exampleLabel: "Example"
  },
  ro: {
    heading: "Servicii",
    subheading: "Expertiză specializată pentru a vă ajuta să reușiți",
    ctaButton: "Discută despre Proiectul Tău",
    technologiesLabel: "Tehnologii",
    exampleLabel: "Exemplu"
  },
  fr: {
    heading: "Services",
    subheading: "Expertise spécialisée pour vous aider à réussir",
    ctaButton: "Discuter de Votre Projet",
    technologiesLabel: "Technologies",
    exampleLabel: "Exemple"
  },
  it: {
    heading: "Servizi",
    subheading: "Competenza specializzata per aiutarti a avere successo",
    ctaButton: "Discuti il Tuo Progetto",
    technologiesLabel: "Tecnologie",
    exampleLabel: "Esempio"
  }
};