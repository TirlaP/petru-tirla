import { FiLayout, FiServer, FiCode, FiPenTool, FiZap, FiDatabase } from 'react-icons/fi';

export const services = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FiLayout,
    description: 'Creating responsive, interactive user interfaces with modern frameworks and best practices for optimal user experience.',
    technologies: ['React.js', 'Next.js', 'TailwindCSS', 'JavaScript/TypeScript'],
    exampleProject: {
      slug: 'aifrontdesk',
      title: 'AiFrontDesk'
    }
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FiServer,
    description: 'Building robust, scalable server-side applications with secure API endpoints and efficient database management.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'SQL', 'Firebase'],
    exampleProject: {
      slug: 'aifrontdesk',
      title: 'AiFrontDesk'
    }
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Solutions',
    icon: FiCode,
    description: 'Developing end-to-end web applications from database design to responsive UI, ensuring seamless integration between all components.',
    technologies: ['MERN Stack', 'Next.js', 'Firebase', 'RESTful APIs'],
    exampleProject: {
      slug: 'aifrontdesk',
      title: 'AiFrontDesk'
    }
  },
  {
    id: 'uiux',
    title: 'UI/UX Implementation',
    icon: FiPenTool,
    description: 'Transforming design mockups into fully functional interfaces with attention to detail, animations, and responsive behavior.',
    technologies: ['Figma to Code', 'CSS/SCSS', 'Framer Motion', 'Tailwind'],
    exampleProject: {
      slug: 'portfolio-website',
      title: 'Portfolio Website'
    }
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    icon: FiZap,
    description: 'Analyzing and improving web application speed, reducing load times, and enhancing overall performance for better user experience.',
    technologies: ['Lighthouse', 'Webpack', 'Code Splitting', 'Lazy Loading'],
    exampleProject: {
      slug: 'portfolio-website',
      title: 'Portfolio Website'
    }
  },
  {
    id: 'databases',
    title: 'Database Design & Management',
    icon: FiDatabase,
    description: 'Creating efficient database structures, optimizing queries, and ensuring data integrity for your application.',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    exampleProject: {
      slug: 'aifrontdesk',
      title: 'AiFrontDesk'
    }
  }
];
