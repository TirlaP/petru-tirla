import { translations } from "@/src/components/data/Translations";
import { useLanguage } from "@/src/context/LanguageContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AnimatedText from "../components/AnimatedText";
import HireMe from "../components/HireMe";
import { LinkArrow } from "../components/Icons";
import Layout from "../components/Layout";
import TransitionEffect from "../components/TransitionEffect";
// Import image normally, we'll optimize it in the Image component directly
import profilePic from "./../img/dream_developer.png";
import { PersonJsonLd, WebsiteJsonLd } from "@/src/components/JsonLd";

// Import conversion optimization components
import ServicesGrid from "@/src/components/conversion/services/ServicesGrid";

import WorkProcessVisualization from "@/src/components/conversion/workProcess/WorkProcessVisualization";
import FloatingCTA from "@/src/components/conversion/cta/FloatingCTA";

export default function Home() {
    const router = useRouter();
    const { language } = useLanguage();
    const t = translations[language].home;

    return (
        <>
            <Head>
                <title>{t.title}</title>
                <meta name="description" content={t.description} />
                <meta property="og:title" content={t.title} />
                <meta property="og:description" content={t.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tirlap.github.io/petru-tirla/" />
                <meta
                    property="og:image"
                    content="https://tirlap.github.io/petru-tirla/images/profile.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t.title} />
                <meta name="twitter:description" content={t.description} />
            </Head>

            {/* Structured data */}
            <PersonJsonLd
                name="Petru Tîrlă"
                jobTitle="Full-Stack Developer"
                image="https://tirlap.github.io/petru-tirla/images/profile.jpg"
                sameAs={["https://www.linkedin.com/in/petru-tirla/", "https://github.com/TirlaP"]}
            />

            <WebsiteJsonLd
                name="Petru Tîrlă | Full-Stack Developer"
                description="Portfolio website of Petru Tîrlă, a professional Full-Stack Developer specializing in modern web applications."
                url="https://tirlap.github.io/petru-tirla/"
            />
            <TransitionEffect />
            <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light">
                {/* Hero Section */}
                <Layout className="p-8 pt-8 md:p-12 md:pt-16 lg:p-16 xl:p-24 2xl:p-32 2xl:pt-0">
                    <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                        <div className="w-full relative mb-8 lg:w-1/2 lg:mb-0">
                            <Image
                                src={profilePic}
                                alt="Petru Tîrlă's profile picture"
                                className="w-1/2 h-auto m-auto rounded-full shadow-2xl sm:w-2/5 md:w-3/5 lg:w-1/2 2xl:w-auto"
                                loading="eager"
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                            />
                        </div>
                        <div className="w-full flex flex-col items-center self-center text-center lg:w-1/2 lg:text-left">
                            <AnimatedText
                                text={t.greeting}
                                className="!text-3xl md:!text-5xl lg:!text-5xl xl:!text-6xl"
                            />
                            <p className="my-4 text-xs font-medium indent-10 text-justify sm:text-sm md:text-base">
                                I build the software that runs businesses. <strong>Multi-tenant SaaS platforms</strong>, <strong>data pipelines</strong> processing millions of records, <strong>AI integrations</strong> that ship to real users. Currently the founder of <strong>RepUp AI</strong> and senior engineer at <strong>Papilio</strong>, serving 1,000+ users across Switzerland and Germany.
                            </p>
                            <div className="flex items-center self-center mt-2 lg:self-start">
                                <Link
                                    href="/CV_Petru_Tirla.pdf"
                                    target="_blank"
                                    className="flex items-center bg-dark text-light p-2 px-4 rounded-lg text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2.5 md:px-6 md:text-lg"
                                    download={true}
                                >
                                    {t.cv} <LinkArrow className={"w-4 ml-1 md:w-6"} />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="relative group ml-4 text-base font-medium capitalize text-dark dark:text-light md:text-lg"
                                >
                                    Contact
                                    <span
                                        className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                                            router.asPath === "/contact" ? "w-full" : "w-0"
                                        }`}
                                    ></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </Layout>

                {/* Services Section */}
                <ServicesGrid />

                {/* Work Process Section */}
                <WorkProcessVisualization />

                {/* Floating CTA & HireMe Button */}
                <FloatingCTA />
                <HireMe />
            </main>
        </>
    );
}
