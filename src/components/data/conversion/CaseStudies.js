// Case Studies data file

export const caseStudies = [
  {
    id: "ecommerce-performance",
    title: "E-commerce Performance Optimization",
    client: "Online Retail Company",
    industry: "E-commerce",
    timeline: "6 weeks",
    teamSize: "Solo Developer",
    technologies: ["Next.js", "React", "TailwindCSS", "Vercel"],
    problem: "The client's e-commerce platform was experiencing slow page load times (averaging 6+ seconds), poor mobile experience, and low conversion rates (1.2%). Users were abandoning carts due to performance issues, especially on mobile devices where bounce rates exceeded 65%.",
    approach: `I conducted a comprehensive performance audit using Lighthouse and WebPageTest to identify key bottlenecks. The approach focused on:

1. Implementing proper image optimization with next/image
2. Adding efficient code splitting and lazy loading
3. Moving from client-side rendering to Static Site Generation (SSG) for product pages
4. Optimizing third-party scripts and implementing proper resource prioritization
5. Refactoring CSS with TailwindCSS to reduce bundle size`,
    solution: `The solution involved several technical implementations:

- Converted the application from Create React App to Next.js
- Implemented Static Site Generation for product catalog pages
- Created a custom image component with proper lazy loading and WebP format
- Reduced JavaScript bundle size through code splitting and tree shaking
- Optimized CSS delivery with TailwindCSS's JIT compiler
- Implemented a service worker for offline capabilities and caching
- Added Redis-based caching layer for product data
- Configured proper Webpack optimizations for production builds`,
    results: `The implementation delivered significant measurable improvements:

- Page load time reduced from 6.2s to 1.8s (71% improvement)
- Time to Interactive improved from 9.8s to 2.5s (74% improvement)
- Mobile bounce rate decreased from 65% to 38% (42% improvement)
- Conversion rate increased from 1.2% to 2.8% (133% improvement)
- Overall sales increased by 45% in the first quarter after implementation
- Google Lighthouse score improved from 46 to 94`,
    visualAssets: [
      {
        type: "image",
        url: "/images/case-studies/ecommerce-before-after.jpg",
        caption: "Before and after comparison of website performance"
      },
      {
        type: "chart",
        data: {
          // This would be chart data for visualization
          type: "bar",
          labels: ["Before", "After"],
          datasets: [
            { label: "Load Time (s)", data: [6.2, 1.8] },
            { label: "Conversion Rate (%)", data: [1.2, 2.8] }
          ]
        }
      }
    ],
    testimonial: {
      quote: "The performance improvements were remarkable. Our conversion rates skyrocketed and the enhanced user experience has transformed our business.",
      author: "Sarah Johnson, E-commerce Director"
    }
  },
  {
    id: "ai-call-center",
    title: "AI-Powered Call Center Solution",
    client: "SaaS Company",
    industry: "Technology",
    timeline: "12 weeks",
    teamSize: "Lead Developer + 1 AI Specialist",
    technologies: ["Node.js", "React.js", "Next.js", "OpenAI API", "Twilio", "Stripe", "WebSockets"],
    problem: "The client needed a scalable call center solution that could handle a high volume of customer inquiries without requiring a large team of human agents. Their existing system had long wait times (average 15+ minutes), high operational costs, and inconsistent customer service quality.",
    approach: `I approached this challenge with a focus on creating a seamless integration between AI capabilities and human oversight:

1. Designing a multi-tenant architecture to support concurrent calls across organizations
2. Creating a robust AI engine using OpenAI's API with custom prompt engineering 
3. Building a real-time communication layer with WebSockets for instant updates
4. Implementing a secure payment processing system with Stripe
5. Developing a business-specific knowledge base integration feature`,
    solution: `The technical implementation included:

- A Node.js backend with Express for handling API requests
- Custom middleware for handling multi-tenant authentication and authorization
- Integration with OpenAI's API for natural language processing
- Twilio integration for voice communication
- Real-time database with Firebase for tracking call status
- WebSockets for live updates to the dashboard
- Stripe integration for subscription management
- React frontend with Next.js for the admin dashboard
- Custom analytics engine for call quality monitoring`,
    results: `The implementation delivered exceptional results:

- Reduced response latency to 1.5 seconds (previously 15+ minutes)
- Decreased operational costs by 65% while handling 3x more calls
- Improved customer satisfaction scores from 72% to 91%
- Enabled 24/7 availability without additional staffing
- Reduced error rates in information provided to customers by 45%
- System successfully handles over 10,000 calls per week across multiple organizations`,
    visualAssets: [
      {
        type: "image",
        url: "/images/case-studies/ai-call-center-dashboard.jpg",
        caption: "AI Call Center Dashboard Interface"
      },
      {
        type: "diagram",
        url: "/images/case-studies/system-architecture.svg",
        caption: "System Architecture Diagram"
      }
    ],
    testimonial: {
      quote: "This solution revolutionized our customer service capabilities. We can now handle exponentially more calls with better quality and consistency.",
      author: "Michael Chen, CTO"
    }
  },
  {
    id: "data-visualization-dashboard",
    title: "Interactive Analytics Dashboard",
    client: "Financial Services Firm",
    industry: "Finance",
    timeline: "8 weeks",
    teamSize: "Solo Developer",
    technologies: ["React", "TypeScript", "D3.js", "Redux", "Node.js", "MongoDB"],
    problem: "The client was struggling to make sense of large volumes of financial data. Their existing reporting system was static, slow to update, and difficult to interpret, requiring financial analysts to spend hours creating reports manually each week.",
    approach: `I took a user-centered approach to solve this problem:

1. Conducted user interviews to identify key metrics and visualization needs
2. Created a flexible data pipeline to process and normalize various data sources
3. Designed an intuitive interface with customizable dashboard components
4. Implemented real-time data updates and interactive filtering capabilities
5. Built export functionality for presentations and reporting`,
    solution: `The technical implementation included:

- React frontend with TypeScript for type safety
- Custom D3.js visualizations for complex financial charts
- Redux for state management across the application
- Node.js backend for data processing and API endpoints
- MongoDB for storing configuration and processed data
- Real-time updates using WebSockets
- Export capabilities to PDF, Excel, and PowerPoint formats
- Responsive design for desktop and tablet use cases`,
    results: `The implementation delivered significant business impact:

- Reduced report creation time from 5+ hours to 10 minutes per week
- Improved data-driven decision making with 73% more decisions referencing dashboard data
- Generated $2.4M in additional revenue through identified opportunities
- Decreased misinterpretation of financial data by 62%
- Enabled real-time monitoring of key financial metrics
- Expanded adoption across the organization with 95% of analysts using the tool daily`,
    visualAssets: [
      {
        type: "image",
        url: "/images/case-studies/financial-dashboard.jpg",
        caption: "Financial Analytics Dashboard"
      },
      {
        type: "chart",
        data: {
          // This would be chart data for visualization
          type: "line",
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
          datasets: [
            { label: "Time Saved (hours)", data: [5, 28, 45, 65, 85, 100] }
          ]
        }
      }
    ],
    testimonial: {
      quote: "The dashboard transformed how we analyze data. What used to take hours now happens instantly, and the interactive visualizations have revealed patterns we never noticed before.",
      author: "Alex Peterson, Financial Analytics Director"
    }
  }
];

// Case Studies translations
export const caseStudiesTranslations = {
  en: {
    heading: "Case Studies",
    subheading: "Detailed examples of problems solved and results delivered",
    problemLabel: "Challenge",
    approachLabel: "Approach",
    solutionLabel: "Solution",
    resultsLabel: "Results",
    timelineLabel: "Timeline",
    teamSizeLabel: "Team Size",
    technologiesLabel: "Technologies Used",
    testimonialLabel: "Client Feedback",
    tableOfContents: "Table of Contents",
    nextCase: "Next Case Study",
    previousCase: "Previous Case Study",
    relatedLabel: "Related Projects",
    industryLabel: "Industry"
  },
  ro: {
    heading: "Studii de Caz",
    subheading: "Exemple detaliate de probleme rezolvate și rezultate livrate",
    problemLabel: "Provocare",
    approachLabel: "Abordare",
    solutionLabel: "Soluție",
    resultsLabel: "Rezultate",
    timelineLabel: "Durată",
    teamSizeLabel: "Dimensiunea Echipei",
    technologiesLabel: "Tehnologii Utilizate",
    testimonialLabel: "Feedback Client",
    tableOfContents: "Cuprins",
    nextCase: "Următorul Studiu de Caz",
    previousCase: "Studiul de Caz Anterior",
    relatedLabel: "Proiecte Conexe",
    industryLabel: "Industrie"
  },
  fr: {
    heading: "Études de Cas",
    subheading: "Exemples détaillés de problèmes résolus et de résultats livrés",
    problemLabel: "Défi",
    approachLabel: "Approche",
    solutionLabel: "Solution",
    resultsLabel: "Résultats",
    timelineLabel: "Calendrier",
    teamSizeLabel: "Taille de l'Équipe",
    technologiesLabel: "Technologies Utilisées",
    testimonialLabel: "Retour Client",
    tableOfContents: "Table des Matières",
    nextCase: "Étude de Cas Suivante",
    previousCase: "Étude de Cas Précédente",
    relatedLabel: "Projets Connexes",
    industryLabel: "Industrie"
  },
  it: {
    heading: "Casi Studio",
    subheading: "Esempi dettagliati di problemi risolti e risultati ottenuti",
    problemLabel: "Sfida",
    approachLabel: "Approccio",
    solutionLabel: "Soluzione",
    resultsLabel: "Risultati",
    timelineLabel: "Tempistica",
    teamSizeLabel: "Dimensione del Team",
    technologiesLabel: "Tecnologie Utilizzate",
    testimonialLabel: "Feedback del Cliente",
    tableOfContents: "Indice",
    nextCase: "Caso Studio Successivo",
    previousCase: "Caso Studio Precedente",
    relatedLabel: "Progetti Correlati",
    industryLabel: "Settore"
  }
};