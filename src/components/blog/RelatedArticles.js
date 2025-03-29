import Link from 'next/link';
import { motion } from 'framer-motion';

const RelatedArticles = ({ currentArticle, allArticles }) => {
  if (!currentArticle || !allArticles || allArticles.length <= 1) {
    return null;
  }

  // Filter out the current article
  const otherArticles = allArticles.filter(article => article.id !== currentArticle.id);
  
  // Calculate relevance score for each article based on:
  // 1. Shared tags
  // 2. Same category
  // 3. Recent publication date
  const relatedArticles = otherArticles
    .map(article => {
      let score = 0;
      
      // Score for matching tags
      const currentTags = currentArticle.tags || [];
      const articleTags = article.tags || [];
      const sharedTags = currentTags.filter(tag => articleTags.includes(tag));
      score += sharedTags.length * 10; // Each shared tag is worth 10 points
      
      // Score for same category
      if (currentArticle.category && article.category && currentArticle.category === article.category) {
        score += 20; // Same category is worth 20 points
      }
      
      // Score for recency
      const currentDate = new Date(currentArticle.date);
      const articleDate = new Date(article.date);
      const diffMonths = Math.abs(
        (currentDate.getFullYear() - articleDate.getFullYear()) * 12 + 
        (currentDate.getMonth() - articleDate.getMonth())
      );
      score += Math.max(0, 12 - diffMonths); // More recent articles get higher scores (up to 12 points)
      
      return {
        ...article,
        relevanceScore: score
      };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3); // Get top 3 related articles
  
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-dark dark:text-light border-b border-dark/10 dark:border-light/10 pb-2">
        Related Articles
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedArticles.map(article => (
          <motion.div
            key={article.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-light/50 dark:bg-dark/50 rounded-lg overflow-hidden shadow-sm border border-dark/10 dark:border-light/10 flex flex-col h-full"
          >
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="font-semibold text-lg mb-2 text-dark dark:text-light line-clamp-2">
                {article.title}
              </h4>
              
              <p className="text-dark/70 dark:text-light/70 text-sm mb-3 line-clamp-3">
                {article.excerpt}
              </p>
              
              <Link
                href={`/articles/${article.id}`}
                className="text-primary dark:text-primaryDark font-medium text-sm mt-auto"
              >
                Read Article
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;