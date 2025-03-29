import { useEffect, useState } from 'react';
import Layout from "@/src/components/Layout";
import TransitionEffect from "@/src/components/TransitionEffect";
import { useLanguage } from "@/src/context/LanguageContext";
import { getAllArticleIds, getArticleData, getArticleMetadata } from "@/src/utils/articles";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Breadcrumbs from "@/src/components/Breadcrumbs";
import RelatedArticles from "@/src/components/blog/RelatedArticles";
import NewsletterSubscribe from "@/src/components/blog/NewsletterSubscribe";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/src/components/JsonLd";

// Custom components for MDX
const components = {
  h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4 text-dark dark:text-light" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold mt-8 mb-4 text-dark dark:text-light" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold mt-6 mb-3 text-dark dark:text-light" {...props} />,
  p: (props) => <p className="my-4 text-dark dark:text-light" {...props} />,
  a: (props) => <a className="text-primary dark:text-primaryDark underline" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 my-4 text-dark dark:text-light" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-4 text-dark dark:text-light" {...props} />,
  li: (props) => <li className="my-1 text-dark dark:text-light" {...props} />,
  blockquote: (props) => (
    <blockquote 
      className="border-l-4 border-primary dark:border-primaryDark pl-4 italic my-6 text-dark dark:text-light" 
      {...props} 
    />
  ),
  code: (props) => (
    <code 
      className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm" 
      {...props} 
    />
  ),
  pre: (props) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm" 
      {...props} 
    />
  ),
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = getArticleData(params.id);
  const mdxSource = await serialize(articleData.content);
  const allArticles = getArticleMetadata();
  
  return {
    props: {
      article: {
        ...articleData,
        mdxSource,
      },
      allArticles,
    },
  };
}

export default function Article({ article, allArticles }) {
  const router = useRouter();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [breadcrumbLabels, setBreadcrumbLabels] = useState({});
  
  useEffect(() => {
    // Set breadcrumb custom label for this article
    setBreadcrumbLabels({
      [`/articles/${article.id}`]: article.title
    });
    
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [article]);
  
  // Handle loading state
  if (router.isFallback || isLoading) {
    return (
      <>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light min-h-screen">
          <Layout className="p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:p-8">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 w-1/4 mb-8 rounded"></div>
              <div className="w-full h-64 sm:h-48 mb-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 w-3/4 mb-4 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-1/2 mb-8 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-full mb-2 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-full mb-2 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 w-3/4 mb-8 rounded"></div>
            </div>
          </Layout>
        </main>
      </>
    );
  }

  const articleUrl = `https://tirlap.github.io/petru-tirla/articles/${article.id}`;

  return (
    <>
      <Head>
        <title>{article.title} | Petru Tîrlă</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        {article.coverImage && <meta property="og:image" content={article.coverImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        {article.coverImage && <meta name="twitter:image" content={article.coverImage} />}
      </Head>
      
      {/* Structured data */}
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={articleUrl}
        images={[article.coverImage || 'https://tirlap.github.io/petru-tirla/images/profile.jpg']}
        authorName={article.author || 'Petru Tîrlă'}
        publisherName="Petru Tîrlă"
        publisherLogo="https://tirlap.github.io/petru-tirla/images/profile.jpg"
        datePublished={article.date}
        dateModified={article.lastUpdated || article.date}
      />
      
      <BreadcrumbJsonLd 
        items={[
          { href: 'https://tirlap.github.io/petru-tirla/', label: 'Home' },
          { href: 'https://tirlap.github.io/petru-tirla/articles/', label: 'Articles' },
          { href: articleUrl, label: article.title }
        ]} 
      />
      
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <Breadcrumbs customLabels={breadcrumbLabels} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/articles" 
              className="text-primary dark:text-primaryDark hover:underline flex items-center"
            >
              ← Back to Articles
            </Link>
          </motion.div>
          
          <article>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {article.coverImage && (
                <div className="w-full h-64 sm:h-48 mb-8 relative rounded-lg overflow-hidden shadow-md">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${article.coverImage})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'
                    }}
                  />
                </div>
              )}
              
              <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light sm:text-3xl">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-8">
                <span>{formatDate(article.date)}</span>
                <span className="mx-2">•</span>
                <span>{article.readingTime} min read</span>
                {article.author && (
                  <>
                    <span className="mx-2">•</span>
                    <span>By {article.author}</span>
                  </>
                )}
              </div>
              
              <div className="flex flex-wrap mb-8">
                {article.tags?.map((tag) => (
                  <span 
                    key={tag} 
                    className="mr-2 mb-2 px-3 py-1 bg-dark/10 dark:bg-light/10 
                              rounded-full text-dark dark:text-light text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXRemote {...article.mdxSource} components={components} />
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
                <h3 className="text-2xl font-bold mb-4 text-dark dark:text-light">
                  Share this article
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg flex items-center space-x-2 hover:bg-[#1a94dd] transition-colors"
                  >
                    <span>Twitter</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0077B5] text-white rounded-lg flex items-center space-x-2 hover:bg-[#006699] transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#3b5998] text-white rounded-lg flex items-center space-x-2 hover:bg-[#344e86] transition-colors"
                  >
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </article>
          
          {/* Newsletter subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 mb-16"
          >
            <NewsletterSubscribe />
          </motion.div>
          
          {/* Related articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <RelatedArticles currentArticle={article} allArticles={allArticles} />
          </motion.div>
        </Layout>
      </main>
    </>
  );
}