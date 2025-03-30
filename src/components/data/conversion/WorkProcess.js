// Work Process data file
import {
  FiCoffee,
  FiFileText,
  FiClipboard,
  FiCode,
  FiCheckCircle,
  FiUpload,
  FiLifeBuoy
} from 'react-icons/fi';

export const workProcess = [
  {
    id: 1,
    title: "Initial Consultation",
    icon: FiCoffee,
    description: "We'll discuss your project goals, requirements, and vision to align our understanding.",
    timeline: "1-2 days",
    clientInvolvement: "High - Sharing project details and answering questions",
    deliverables: "Project brief and initial recommendations"
  },
  {
    id: 2,
    title: "Requirements Analysis",
    icon: FiFileText,
    description: "Detailed analysis of your needs to define project scope, features, and technical requirements.",
    timeline: "2-3 days",
    clientInvolvement: "Medium - Providing feedback on requirements document",
    deliverables: "Comprehensive requirements document and technical specifications"
  },
  {
    id: 3,
    title: "Proposal and Planning",
    icon: FiClipboard,
    description: "Creating a detailed project plan including timeline, milestones, and deliverables.",
    timeline: "1-2 days",
    clientInvolvement: "Medium - Reviewing and approving proposal",
    deliverables: "Project proposal, timeline, and cost estimate"
  },
  {
    id: 4,
    title: "Design and Development",
    icon: FiCode,
    description: "Building your solution with regular updates and opportunities for feedback.",
    timeline: "Varies by project scope",
    clientInvolvement: "Medium - Regular check-ins and feedback sessions",
    deliverables: "Code, design assets, and development milestones"
  },
  {
    id: 5,
    title: "Testing and Quality Assurance",
    icon: FiCheckCircle,
    description: "Rigorous testing to ensure functionality, performance, and security meet requirements.",
    timeline: "2-5 days",
    clientInvolvement: "Low - Optional participation in user testing",
    deliverables: "Testing reports and quality assurance documentation"
  },
  {
    id: 6,
    title: "Deployment",
    icon: FiUpload,
    description: "Launching your solution to a production environment with monitoring for stability.",
    timeline: "1-2 days",
    clientInvolvement: "Low - Final approval before launch",
    deliverables: "Deployed application and deployment documentation"
  },
  {
    id: 7,
    title: "Support and Maintenance",
    icon: FiLifeBuoy,
    description: "Ongoing support to ensure your solution continues to operate optimally.",
    timeline: "Ongoing as needed",
    clientInvolvement: "Low - Reporting issues or requesting enhancements",
    deliverables: "Regular maintenance reports and feature updates"
  }
];

// Work Process translations
export const workProcessTranslations = {
  en: {
    heading: "My Work Process",
    subheading: "A transparent approach to ensure successful project delivery",
    timelineLabel: "Timeline",
    involvementLabel: "Your Involvement",
    deliverablesLabel: "Deliverables"
  },
  ro: {
    heading: "Procesul Meu de Lucru",
    subheading: "O abordare transparentă pentru a asigura livrarea cu succes a proiectului",
    timelineLabel: "Durată",
    involvementLabel: "Implicarea Ta",
    deliverablesLabel: "Livrabile"
  },
  fr: {
    heading: "Mon Processus de Travail",
    subheading: "Une approche transparente pour assurer la réussite du projet",
    timelineLabel: "Calendrier",
    involvementLabel: "Votre Implication",
    deliverablesLabel: "Livrables"
  },
  it: {
    heading: "Il Mio Processo di Lavoro",
    subheading: "Un approccio trasparente per garantire il successo del progetto",
    timelineLabel: "Tempistica",
    involvementLabel: "Il Tuo Coinvolgimento",
    deliverablesLabel: "Risultati"
  }
};