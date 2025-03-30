import { useEffect, useState, useCallback, useMemo } from "react";
import AnimatedText from "@/src/components/AnimatedText";
import { translations } from "@/src/components/data/Translations";
import Layout from "@/src/components/Layout";
import TransitionEffect from "@/src/components/TransitionEffect";
import { useLanguage } from "@/src/context/LanguageContext";
import { getArticleMetadata } from "@/src/utils/articles";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ArticleSearch from "@/src/components/blog/ArticleSearch";
import ArticleSkeleton from "@/src/components/blog/ArticleSkeleton";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import NewsletterSubscribe from "@/src/components/blog/NewsletterSubscribe";
import { WebsiteJsonLd } from "@/src/components/JsonLd";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const ArticleItem = ({ article }) => (
    <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="col-span-1 w-full p-4 bg-light border border-dark rounded-2xl dark:bg-dark dark:border-light flex flex-col h-full group hover:shadow-md transition-all md:p-6"
    >
        <div className="aspect-video w-full mb-3 overflow-hidden rounded-lg relative md:mb-4">
            {article.coverImage ? (
                <div className="w-full h-40 relative rounded-lg overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                            backgroundImage: `url(${article.coverImage})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </div>
            ) : (
                <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">No image</span>
                </div>
            )}
        </div>
        <div className="flex flex-col flex-grow">
            <div className="mb-1 text-primary dark:text-primaryDark text-xs md:text-sm md:mb-2">
                {formatDate(article.date)} • {article.readingTime} min read
            </div>
            <h3 className="font-bold text-xl mb-1 text-dark dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors md:text-2xl md:mb-2">
                {article.title}
            </h3>
            <p className="text-dark dark:text-light mb-3 flex-grow text-sm md:text-base md:mb-4">{article.excerpt}</p>
            <div className="mt-auto">
                <div className="flex flex-wrap mb-2">
                    {article.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="mr-2 mb-2 text-xs px-3 py-1 bg-dark/10 dark:bg-light/10 
                         rounded-full text-dark dark:text-light"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={`/articles/${article.id}`}
                    className="text-primary dark:text-primaryDark font-semibold mt-2 inline-block group-hover:underline"
                >
                    Read More
                </Link>
            </div>
        </div>
    </motion.li>
);

export async function getStaticProps() {
    const articles = getArticleMetadata();
    return {
        props: {
            articles,
        },
    };
}

const ArticlesPage = ({ articles }) => {
    const { language } = useLanguage();
    const t = translations[language].articles;
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state for better UX
        const timer = setTimeout(() => {
            setFilteredArticles(articles);
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [articles]);

    // Memoize the filter change handler to prevent recreation on each render
    const handleFilterChange = useCallback((filtered) => {
        setFilteredArticles(filtered);
    }, []);
    
    // Memoize articles for the search component
    const memoizedArticles = useMemo(() => articles, [articles]);

    return (
        <>
            <Head>
                <title>{t.title}</title>
                <meta name="description" content={t.description} />
                <meta property="og:title" content={t.title} />
                <meta property="og:description" content={t.description} />
            </Head>

            {/* Structured data */}
            <WebsiteJsonLd
                name="Petru Tîrlă | Articles"
                description="Read articles and tutorials by Petru Tîrlă on web development, programming, and technology."
                url="https://tirlap.github.io/petru-tirla/articles/"
            />

            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="p-8 pt-8 md:p-12 md:pt-12 lg:p-16 lg:pt-16 xl:p-24 2xl:p-32 2xl:pt-0">
                    <Breadcrumbs />

                    <AnimatedText
                        text={t.heading}
                        className="mb-8 text-4xl sm:!text-6xl md:mb-16 lg:!text-7xl"
                    />

                    {/* Search and filter */}
                    <ArticleSearch articles={memoizedArticles} onFilterChange={handleFilterChange} />

                    {/* Articles grid */}
                    {isLoading ? (
                        <ArticleSkeleton count={4} />
                    ) : filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:gap-16">
                            {filteredArticles.map((article) => (
                                <ArticleItem key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center mt-8">
                            <p className="text-xl mb-4">
                                No articles found matching your criteria.
                            </p>
                            <button
                                onClick={() => setFilteredArticles(articles)}
                                className="bg-primary text-light px-4 py-2 rounded-md hover:bg-primary/90"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}

                    {/* Newsletter subscription */}
                    <div className="mt-12 md:mt-16 lg:mt-24">
                        <NewsletterSubscribe />
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default ArticlesPage;
