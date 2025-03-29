import Layout from "@/src/components/Layout";
import TransitionEffect from "@/src/components/TransitionEffect";
import { useLanguage } from "@/src/context/LanguageContext";
import { getAllArticleIds, getArticleData } from "@/src/utils/articles";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

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
  
  return {
    props: {
      article: {
        ...articleData,
        mdxSource,
      },
    },
  };
}

export default function Article({ article }) {
  const router = useRouter();
  const { language } = useLanguage();
  
  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{article.title} | Petru Tîrlă</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        {article.coverImage && <meta property="og:image" content={article.coverImage} />}
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="p-32 pt-16 xl:p-24 lg:p-16 md:p-12 sm:p-8">
          <div className="mb-8">
            <Link 
              href="/articles" 
              className="text-primary dark:text-primaryDark hover:underline flex items-center"
            >
              ← Back to Articles
            </Link>
          </div>
          
          <article>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {article.coverImage && (
                <div className="w-full h-64 sm:h-48 mb-8 relative rounded-lg overflow-hidden">
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
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://tirlap.github.io/petru-tirla/articles/${article.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://tirlap.github.io/petru-tirla/articles/${article.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0077B5] text-white rounded-lg"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </article>
        </Layout>
      </main>
    </>
  );
}