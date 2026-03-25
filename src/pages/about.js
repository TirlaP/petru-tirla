import { translations } from "@/src/components/data/Translations";
import { useLanguage } from "@/src/context/LanguageContext";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import { projects } from "../components/data/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import TransitionEffect from "../components/TransitionEffect";
import ProfilePicture from "../img/photo_Petru_T.jpeg";

// Import conversion optimization components

import EnhancedCTA from "@/src/components/conversion/cta/EnhancedCTA";
import FloatingCTA from "@/src/components/conversion/cta/FloatingCTA";
import { ctaData } from "@/src/components/data/conversion/CTAData";
import TabbedSkillsSection from "@/src/components/conversion/TabbedSkillsSection";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
};

const experienceYears = () => {
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - 2021;
    return experienceYears;
};

const projectsNumber = (collaboration) => {
    var number = 0;
    var projects = collaboration.map(function (project) {
        number += project.projects.length;
    });
    return number;
};

const collaborationNumber = (collaboration) => {
    return collaboration.length;
};

const About = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <>
            <Head>
                <title>{t.title}</title>
                <meta name="description" content={t.description} />
                <meta property="og:title" content={t.title} />
                <meta property="og:description" content={t.description} />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="p-8 pt-8 md:p-12 lg:p-16 xl:p-24 2xl:p-32 2xl:pt-16">
                    <AnimatedText
                        text={t.heading}
                        className="mb-8 text-4xl sm:text-6xl md:mb-16 lg:text-7xl"
                    />
                    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                        <div className="flex flex-col items-start justify-start order-2 lg:col-span-4 lg:order-1">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                {t.heading}
                            </h2>
                            <p className="text-justify font-medium indent-10">{t.bio}</p>
                            <p className="text-justify font-medium indent-10 my-4">
                                {t.experience.replace("{years}", experienceYears())}
                            </p>
                            <p className="text-justify font-medium indent-10">{t.skills}</p>
                        </div>
                        <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 lg:col-span-4 lg:order-2">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={ProfilePicture}
                                alt="Petru Tîrlă"
                                className="w-2/3 h-auto rounded-full mx-auto md:w-4/5 lg:w-full"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between order-3 lg:col-span-4 lg:order-3 lg:flex-col lg:items-start lg:justify-start lg:space-y-8">
                            <div className="flex flex-col items-center justify-center">
                                <span className="inline-block text-4xl font-bold sm:text-5xl lg:text-5xl xl:text-6xl">
                                    <AnimatedNumbers
                                        value={collaborationNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-sm font-medium capitalize text-dark/75 dark:text-light/75 text-center sm:text-base md:text-lg lg:text-xl">
                                    {t.collaborations}
                                </h2>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="inline-block text-4xl font-bold sm:text-5xl lg:text-5xl xl:text-6xl">
                                    <AnimatedNumbers
                                        value={projectsNumber(projects.collaborations)}
                                    />{" "}
                                </span>
                                <h2 className="text-sm font-medium capitalize text-dark/75 dark:text-light/75 text-center sm:text-base md:text-lg lg:text-xl">
                                    {t.projects}
                                </h2>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="inline-block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumbers value={experienceYears()} /> +
                                </span>
                                <h2 className="text-sm font-medium text-dark/75 dark:text-light/75 text-center sm:text-base md:text-lg lg:text-xl">
                                    {t.yearsOfExperience}
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced CTA after bio */}
                    <div className="mt-8 mb-10 md:mt-12 md:mb-16 lg:mb-20">
                        <EnhancedCTA
                            variant={ctaData.variants.find((v) => v.id === "hero")}
                            primaryCTA={ctaData.primary}
                            secondaryCTA={ctaData.secondary}
                        />
                    </div>

                    {/* Tabbed Skills Section - includes both Skills and TechProficiencyVisualization */}
                    <div className="w-full mt-8 mb-8 md:mt-12 md:mb-12 lg:mt-16 lg:mb-16">
                        <TabbedSkillsSection />
                    </div>

                    <Experience />
                    <Education />

                    {/* Final CTA */}
                    <div className="mt-16">
                        <EnhancedCTA
                            variant={ctaData.variants.find((v) => v.id === "projects")}
                            primaryCTA={ctaData.primary}
                            secondaryCTA={ctaData.tertiary}
                        />
                    </div>
                </Layout>

                {/* Floating CTA */}
                <FloatingCTA />
            </main>
        </>
    );
};
export default About;
