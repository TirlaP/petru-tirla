import AnimatedText from "@/src/components/AnimatedText";
import { translations } from "@/src/components/data/Translations";
import Layout from "@/src/components/Layout";
import TransitionEffect from "@/src/components/TransitionEffect";
import { useLanguage } from "@/src/context/LanguageContext";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact || {
    title: "Contact Me | Petru Tîrlă",
    description: "Get in touch with Petru Tîrlă. Send me a message and I'll get back to you as soon as possible.",
    heading: "Get In Touch",
    subheading: "I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to drop me a message using the form below."
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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="p-32 pt-0 xl:p-24 lg:p-16 md:p-12 md:pt-16 sm:pt-8">
          <AnimatedText
            text={t.heading}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-lg mb-16 text-center max-w-2xl mx-auto md:text-base sm:mb-8">
            {t.subheading}
          </p>
          <ContactForm />
        </Layout>
      </main>
    </>
  );
};

export default Contact;