import { translations } from "@/src/components/data/Translations";
import { useLanguage } from "@/src/context/LanguageContext";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import { projects } from "../components/data/Projects";
import { GithubIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Technologies from "../components/Technologies";
import TransitionEffect from "../components/TransitionEffect";

// Import conversion optimization components
import FilterablePortfolio from "@/src/components/conversion/portfolioFilters/FilterablePortfolio";
import CaseStudiesGrid from "@/src/components/conversion/caseStudies/CaseStudiesGrid";
import TechProficiencyVisualization from "@/src/components/conversion/techProficiency/TechProficiencyVisualization";
import FloatingCTA from "@/src/components/conversion/cta/FloatingCTA";
import EnhancedCTA from "@/src/components/conversion/cta/EnhancedCTA";
import { ctaData } from "@/src/components/data/conversion/CTAData";

const DisplayProjects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const personalProjects = projects.personnalProjects;
    return personalProjects.map(function (project, index) {
        const title = project.name;
        const img = project.img;
        const summary = project.summary[language];
        const link = project.live_demo_url;
        const github = project.gitHub_url;
        const technologies = project.technologies;

        if (project.colSize === 12) {
            return (
                <FeaturedProject
                    key={index}
                    title={title}
                    img={img}
                    summary={summary}
                    link={link}
                    github={github}
                    technologies={technologies}
                    liveDemo={t.liveDemo}
                />
            );
        } else {
            return (
                <Project
                    key={index}
                    title={title}
                    img={img}
                    summary={summary}
                    link={link}
                    github={github}
                    technologies={technologies}
                    liveDemo={t.liveDemo}
                />
            );
        }
    });
};

const FeaturedProject = ({ title, summary, img, link, github, technologies }) => {
    const tech1 = technologies[0];
    const tech2 = technologies[1];
    const tech3 = technologies[2];
    return (
        <div className="col-span-12">
            <article className="w-full flex flex-col items-center justify-between relative rounded-2xl border border-solid border-dark bg-light shadow-2xl p-4 rounded-br-3xl dark:bg-dark dark:border-light md:p-8 lg:flex-row lg:p-12 lg:rounded-3xl lg:rounded-br-2xl">
                <div className="absolute top-0 left-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark rounded-br-3xl dark:bg-light md:rounded-[2rem] lg:-right-3 lg:w-[101.5%] lg:rounded-[2.5rem]" />
                <Link
                    href={link}
                    target="_blank"
                    className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/2"
                >
                    {img ? (
                        <FramerImage
                            src={img}
                            alt={title}
                            className="w-full h-auto flex justify-center items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            priority
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primaryDark/20 dark:from-primary/10 dark:to-primaryDark/10 flex items-center justify-center rounded-lg">
                            <span className="text-4xl font-bold text-primary/40 dark:text-primaryDark/40">{title.charAt(0)}</span>
                        </div>
                    )}
                </Link>
                <div className="w-full flex flex-col items-start justify-between pt-6 lg:w-1/2 lg:pl-6 lg:pt-0">
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-2xl font-bold text-primary dark:text-primaryDark lg:text-3xl">
                            {title}
                        </h2>
                    </Link>
                    <p className="my-2 font-medium text-dark dark:text-light text-justify text-sm md:text-base">
                        {summary}
                    </p>
                    <div className="flex flex-row justify-normal">
                        <Technologies tech1={tech1} tech2={tech2} tech3={tech3} />
                    </div>
                    <div className="mt-5 flex items-center">
                        <Link href={github} target="_blank" className="w-10">
                            <GithubIcon />
                        </Link>
                        <Link
                            href={link}
                            target="_blank"
                            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 text-base font-semibold dark:bg-light dark:text-dark md:px-6 md:text-lg"
                        >
                            Live Demo
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

const Project = ({ title, summary, img, link, github, technologies }) => {
    const tech1 = technologies[0];
    const tech2 = technologies[1];
    const tech3 = technologies[2];
    return (
        <div className="col-span-12 md:col-span-6">
            <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 relative dark:bg-dark dark:border-light md:p-6">
                <div className="absolute top-0 left-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[1.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-3 md:w-[101.5%] md:h-[101.5%] md:rounded-[2rem]" />
                <Link
                    href={link}
                    target="_blank"
                    className="w-full cursor-pointer overflow-hidden rounded-lg"
                >
                    {img ? (
                        <FramerImage
                            src={img}
                            alt={title}
                            className="w-full h-auto"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            priority
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                        />
                    ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primaryDark/20 dark:from-primary/10 dark:to-primaryDark/10 flex items-center justify-center rounded-lg">
                            <span className="text-3xl font-bold text-primary/40 dark:text-primaryDark/40">{title.charAt(0)}</span>
                        </div>
                    )}
                </Link>
                <div className="w-full flex flex-col items-start justify-between mt-4">
                    <Link
                        href={link}
                        target="_blank"
                        className="hover:underline underline-offset-2"
                    >
                        <h2 className="my-2 w-full text-left text-xl font-bold text-primary dark:text-primaryDark md:text-2xl lg:text-3xl">
                            {title}
                        </h2>
                    </Link>
                    <p className="my-2 font-medium text-dark dark:text-light h-auto">
                        <span className="text-justify text-sm md:text-base">{summary}</span>
                    </p>
                    <div className="flex flex-row justify-normal">
                        <Technologies tech1={tech1} tech2={tech2} tech3={tech3} />
                    </div>

                    <div className="w-full mt-5 flex items-center justify-between">
                        <Link
                            href={link}
                            target="_blank"
                            className="text-base font-semibold underline md:text-lg"
                        >
                            Live Demo
                        </Link>
                        <Link href={github} target="_blank" className="w-6 md:w-8">
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

const FramerImage = motion(Image);

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;

    return (
        <>
            <Head>
                <title>{t.title}</title>
                <meta name="description" content={t.description} />
                <meta property="og:title" content={t.title} />
                <meta property="og:description" content={t.description} />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="p-8 pt-8 md:p-12 md:pt-12 lg:p-16 lg:pt-16 xl:p-24 2xl:p-32">
                    <AnimatedText
                        text={t.heading}
                        className="mb-8 text-4xl sm:!text-6xl md:mb-16 lg:!text-7xl"
                    />
                    
                    {/* Filter portfolio section */}
                    <div className="mb-10 md:mb-20">
                        <FilterablePortfolio />
                    </div>
                    
                    {/* Case Studies Section */}
                    <div className="mt-16 mb-10 md:mt-24 lg:mt-32 md:mb-20">
                        <CaseStudiesGrid />
                    </div>
                    
                    {/* Enhanced CTA */}
                    <div className="mt-10 md:mt-16 lg:mt-20">
                        <EnhancedCTA 
                            variant={ctaData.variants.find(v => v.id === 'projects')} 
                            primaryCTA={ctaData.primary}
                            secondaryCTA={ctaData.tertiary}
                        />
                    </div>
                    
                    {/* Original Project Grid (hidden) */}
                    <div className="hidden grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <DisplayProjects />
                    </div>
                </Layout>
                
                {/* Floating CTA */}
                <FloatingCTA />
            </main>
        </>
    );
};

export default Projects;
