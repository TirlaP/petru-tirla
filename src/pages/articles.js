import AnimatedText from "@/src/components/AnimatedText";
import { translations } from "@/src/components/data/Translations";
import Layout from "@/src/components/Layout";
import TransitionEffect from "@/src/components/TransitionEffect";
import { useLanguage } from "@/src/context/LanguageContext";
import Head from "next/head";
import Link from "next/link";

const ArticleItem = ({ article }) => (
    <li className="col-span-1 w-full p-4 bg-light border border-dark rounded-2xl dark:bg-dark dark:border-light">
        <h3 className="font-bold text-2xl mb-2 text-dark dark:text-light">{article.title}</h3>
        <p className="text-dark dark:text-light">{article.excerpt}</p>
        <Link
            href={`/articles/${article.id}`}
            className="text-primary dark:text-primaryDark font-bold mt-2 inline-block"
        >
            Read More
        </Link>
    </li>
);

const ArticlesPage = () => {
    const { language } = useLanguage();
    const t = translations[language].articles;

    // This is a placeholder for your articles data
    const articles = [
        { id: 1, title: "Article 1", excerpt: "This is a short excerpt of article 1..." },
        { id: 2, title: "Article 2", excerpt: "This is a short excerpt of article 2..." },
        // Add more articles as needed
    ];

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
                    <div className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        {articles.map((article) => (
                            <ArticleItem key={article.id} article={article} />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default ArticlesPage;
