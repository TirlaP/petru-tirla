import AlexShopEcommerce from "./../../img/Alex_Shop_Ecommerce.jpg";
import Books from "./../../img/Books2.jpg";
// import Hotel from "./../../img/Hotel.jpg";
// import Jungle from "./../../img/Jungle.jpg";
// import Marvel from "./../../img/Marvel.jpg";
// import News from "./../../img/News.jpg";
import Portfolio from "./../../img/Portfolio.jpg";
// import Shiny from "./../../img/Shiny.jpg";

export const projects = {
    collaborations: [
        {
            name: "ZEPHYR Web Studios",
            time: "01/2023 - Present",
            projects: ["AiFrontDesk", "WordPress & Webflow Websites", "E-commerce Solutions"],
            position: "Founder - Full-Stack Developer",
            company: "ZEPHYR Web Studios",
            companyLink: "#",
            address: "Remote, Romania",
            work: "Creating Software for customers and consulting them to solve their business problems. Developed AiFrontDesk, a Full-Stack AI call center solution. Developed 5+ modern WordPress & Webflow websites, implemented e-commerce solutions for clients, and successfully maintained over 10+ Web applications.",
        },
        {
            name: "ASSIST Software",
            time: "08/2022 - Present",
            projects: [
                "E-Commerce Applications",
                "CRM Applications",
                "Project Management Applications",
            ],
            position: "Software Engineer",
            company: "ASSIST Software",
            companyLink: "https://assist-software.net/",
            address: "Suceava, SV, RO",
            work: "Collaborated with 10+ teams to develop enterprise applications for E-Commerce, CRM, and Project Management. Enhanced E-Commerce performance from 30% to 80% by implementing features with Next.js and Styled Components. Refactored and managed the HR platform, updating from React 16 to React 18 and implementing new business features using TypeScript, Redux Thunk, and Styled Components. Built and maintained a component library using StoryBook. Led troubleshooting efforts, resolving over 300+ bugs and issues.",
        },
        {
            name: "Pentalog",
            time: "04/2022 - 07/2022",
            projects: ["Full-Stack Admin Dashboard"],
            position: "Software Engineer, Intern",
            company: "Pentalog",
            companyLink: "https://www.pentalog.com/",
            address: "Remote, Romania",
            work: "Designed and implemented a Full-Stack Admin Dashboard using HTML, CSS, JavaScript, Firebase and Node, with functionalities such as viewing orders, customers, and employees in data tables, visualizing data through charts, and using a built-in calendar and kanban.",
        },
        {
            name: "BTProvider",
            time: "10/2021 - 01/2022",
            projects: ["Data Analysis"],
            position: "Data Analyst, Intern",
            company: "BTProvider",
            companyLink: "#",
            address: "Bucharest, Romania",
            work: "Managed client data using SQL, Vertica, DBeaver, and Microsoft SQL, and designed Tableau data solutions.",
        },
    ],
    personnalProjects: [
        {
            name: "Portfolio Website",
            img: Portfolio, // Using the image previously used for Jobify
            live_demo_url: "https://petru-tirla.netlify.app", // Update this with your actual URL once deployed
            gitHub_url: "https://github.com/TirlaP/petru-tirla",
            technologies: ["#Next.js", "#React", "#TailwindCSS"],
            colSize: 12,
            summary:
                "A responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with Next.js, React, and TailwindCSS, featuring dark mode and multi-language support.",
        },
        {
            name: "AiFrontDesk",
            img: AlexShopEcommerce,
            live_demo_url: "#",
            gitHub_url: "#",
            technologies: [
                "#OpenAI API",
                "#React.js",
                "#Next.js",
                "#Node.js",
                "#Twilio",
                "#Stripe",
                "#WebSocket",
            ],
            colSize: 12,
            summary:
                "A Full-Stack AI call center solution with 1.5 sec response latency, using OpenAI API, React.js, Next.js, and Node.js. Integrated Twilio for voice communication, Stripe for payments, and WebSocket for real-time updates. Features multi-tenant architecture supporting concurrent calls across multiple organizations, user management, and business-specific knowledge base integration.",
        },
        {
            name: "JOBIFY",
            img: Portfolio,
            live_demo_url: "#",
            gitHub_url: "#",
            technologies: ["#React", "#Next.js", "#PostgreSQL"],
            colSize: 6,
            summary:
                "Application for freelancer-client collaboration using React, Next.js and PostgreSQL, including job posting, applications, client communication, invoicing, and project management.",
        },
        {
            name: "AUTO-Tinder",
            img: Books,
            live_demo_url: "#",
            gitHub_url: "#",
            technologies: ["#Python"],
            colSize: 6,
            summary:
                "A Python-based Tinder bot that learns user preferences and automates profile swiping based on those patterns.",
        },
    ],
};
