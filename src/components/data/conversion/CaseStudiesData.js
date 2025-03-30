export const caseStudies = [
  {
    id: "aifrontdesk",
    title: "AiFrontDesk - AI-Powered Call Center Solution",
    subtitle: "Full-Stack AI Solution with OpenAI Integration",
    clientIndustry: "SaaS / Customer Service",
    timeline: "3 months",
    teamSize: "3 developers",
    technologies: ["OpenAI API", "React.js", "Next.js", "Node.js", "Twilio", "Stripe", "WebSocket"],
    challenge: "The client needed an AI-powered call center solution to handle customer inquiries with minimal human intervention, while maintaining high quality of service and natural conversation flow. The system needed to support multiple organizations with different knowledge bases and handle concurrent calls efficiently.",
    approach: "We designed a multi-tenant architecture with real-time capabilities. I implemented a custom integration between OpenAI's API and Twilio's voice services, creating a seamless pipeline for audio processing, speech-to-text conversion, AI response generation, and text-to-speech output. The solution included a user management system with role-based access control and a customizable knowledge base that could be tailored to each organization's needs.",
    solution: "The final solution featured:\n\n- Multi-tenant architecture supporting concurrent calls\n- 1.5 second response latency (industry-leading speed)\n- Custom webhook system for real-time call monitoring\n- Comprehensive admin dashboard for call analytics\n- Dynamic knowledge base that adapts to new information\n- Stripe integration for subscription management",
    results: {
      metrics: [
        { label: "Response Latency", value: "1.5s", improvement: "70% faster than industry average" },
        { label: "Call Resolution Rate", value: "85%", improvement: "40% increase from previous system" },
        { label: "Agent Productivity", value: "300%", improvement: "Agents now handle 3x more calls" },
        { label: "Cost Savings", value: "$12,000/month", improvement: "60% reduction in operational costs" }
      ],
      testimonial: "The AI solution developed by Petru transformed our customer service operations. We've drastically reduced wait times while maintaining high quality of service. The ROI on this project was achieved within the first two months.",
      clientName: "David Miller",
      clientPosition: "CTO, FrontLine Services"
    },
    images: {
      before: "/images/case-studies/aifrontdesk-before.jpg",
      after: "/images/case-studies/aifrontdesk-after.jpg",
      solution: "/images/case-studies/aifrontdesk-solution.jpg"
    },
    slug: "aifrontdesk"
  },
  {
    id: "ecommerce-performance",
    title: "E-Commerce Performance Optimization",
    subtitle: "Boosting Speed and Conversion for an Online Store",
    clientIndustry: "Retail / E-Commerce",
    timeline: "6 weeks",
    teamSize: "2 developers",
    technologies: ["Next.js", "React", "Redux", "Tailwind CSS", "GraphQL", "Cloudinary"],
    challenge: "The client's e-commerce platform was suffering from slow page loads (average 6.2s), poor mobile experience, and a high cart abandonment rate (78%). This was directly impacting their conversion rates and customer satisfaction.",
    approach: "I conducted a comprehensive performance audit using Lighthouse and WebPageTest to identify bottlenecks. The approach focused on implementing modern web optimization techniques including code splitting, lazy loading, image optimization, and server-side rendering for critical paths. We also redesigned the checkout flow to reduce friction points.",
    solution: "The implementation included:\n\n- Conversion to Next.js for improved SSR capabilities\n- Implementation of dynamic imports and code splitting\n- Cloudinary integration for responsive images and automatic WebP format\n- Redis caching for API responses\n- Checkout redesign with progress indication and form simplification\n- Custom hook-based form validation for instant feedback",
    results: {
      metrics: [
        { label: "Page Load Time", value: "1.8s", improvement: "71% reduction" },
        { label: "Lighthouse Score", value: "94", improvement: "From 62 to 94" },
        { label: "Cart Abandonment", value: "42%", improvement: "36% reduction" },
        { label: "Conversion Rate", value: "4.7%", improvement: "2.2x increase" },
        { label: "Mobile Orders", value: "+63%", improvement: "63% increase" }
      ],
      testimonial: "The performance improvements were immediately noticeable. Our customers have commented on how much faster and smoother the shopping experience is, and our conversion rates reflect that satisfaction. This project has had a direct positive impact on our bottom line.",
      clientName: "Laura Chen",
      clientPosition: "E-Commerce Director, StyleFusion"
    },
    images: {
      before: "/images/case-studies/ecommerce-before.jpg",
      after: "/images/case-studies/ecommerce-after.jpg",
      solution: "/images/case-studies/ecommerce-solution.jpg"
    },
    slug: "ecommerce-performance"
  }
];
