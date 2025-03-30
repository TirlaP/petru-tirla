import AnimatedText from "@/src/components/AnimatedText";
import { translations } from "@/src/components/data/Translations";
import Layout from "@/src/components/Layout";
import TransitionEffect from "@/src/components/TransitionEffect";
import { useLanguage } from "@/src/context/LanguageContext";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

// Import conversion optimization components
import AvailabilityIndicator from "@/src/components/conversion/availability/AvailabilityIndicator";
import EnhancedCTA from "@/src/components/conversion/cta/EnhancedCTA";
import WorkProcessVisualization from "@/src/components/conversion/workProcess/WorkProcessVisualization";
import { ctaData } from "@/src/components/data/conversion/CTAData";
import FloatingCTA from "../components/conversion/cta/FloatingCTA";

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact || {
        title: "Contact Me | Petru Tîrlă",
        description:
            "Get in touch with Petru Tîrlă. Send me a message and I'll get back to you as soon as possible.",
        heading: "Get In Touch",
        subheading:
            "I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to drop me a message using the form below.",
    };

    return (
        <>
            <Head>
                <title>{t.title}</title>
                <meta name="description" content={t.description} />
                <meta property="og:title" content={t.title} />
                <meta property="og:description" content={t.description} />
            </Head>
            <TransitionEffect />
            <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="p-8 pt-8 md:p-12 md:pt-16 lg:p-16 xl:p-24 2xl:p-32 2xl:pt-16">
                    <AnimatedText
                        text={t.heading}
                        className="mb-8 text-4xl sm:!text-6xl md:mb-16 lg:!text-7xl"
                    />
                    <p className="text-base mb-8 text-center max-w-2xl mx-auto md:text-lg md:mb-16">
                        {t.subheading}
                    </p>

                    <div className="grid grid-cols-1 gap-8 md:gap-12 mb-8 lg:grid-cols-2 lg:mb-16">
                        <div>
                            <ContactForm />
                        </div>

                        <div className="flex flex-col justify-start space-y-8">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-primaryDark mb-3 md:mb-4">
                                    Current Availability
                                </h3>
                                <AvailabilityIndicator />
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-primaryDark mb-3 md:mb-4">
                                    Contact Options
                                </h3>
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                                                Email
                                            </h4>
                                            <a
                                                href="mailto:petru.tirla@gmail.com"
                                                className="text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark"
                                            >
                                                petru.tirla@gmail.com
                                            </a>
                                        </div>

                                        <div>
                                            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                                                LinkedIn
                                            </h4>
                                            <a
                                                href="https://www.linkedin.com/in/petru-tirla/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark"
                                            >
                                                linkedin.com/in/petru-tirla
                                            </a>
                                        </div>

                                        <div>
                                            <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                                                Schedule a Call
                                            </h4>
                                            <a
                                                href="https://calendly.com/petru-tirla/30min"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 bg-primary dark:bg-primaryDark text-white rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primaryDark/90 transition-colors"
                                            >
                                                Book a 30-minute slot
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 mb-8 md:mt-16 md:mb-16">
                        <EnhancedCTA
                            variant={ctaData.variants.find((v) => v.id === "services")}
                            primaryCTA={ctaData.tertiary}
                            secondaryCTA={ctaData.secondary}
                        />
                    </div>
                </Layout>

                {/* Work Process Section - Helps set client expectations */}
                <div className="w-full">
                    <WorkProcessVisualization />
                </div>

                {/* Floating CTA */}
                <FloatingCTA />
            </main>
        </>
    );
};

export default Contact;
