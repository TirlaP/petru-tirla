import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ArticleSearch = ({ articles, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Extract unique categories and tags
  const categories = [...new Set(articles.map(article => article.category).filter(Boolean))];
  const allTags = articles.flatMap(article => article.tags || []);
  const tags = [...new Set(allTags)];
  
  useEffect(() => {
    // Apply filters
    const filteredArticles = articles.filter(article => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (article.tags && article.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      
      // Category filter
      const matchesCategory = selectedCategory === '' || 
        article.category === selectedCategory;
      
      // Tag filter
      const matchesTag = selectedTag === '' ||
        (article.tags && article.tags.includes(selectedTag));
      
      return matchesSearch && matchesCategory && matchesTag;
    });
    
    onFilterChange(filteredArticles);
  }, [searchTerm, selectedCategory, selectedTag, articles, onFilterChange]);
  
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
  };
  
  return (
    <div className="mb-12 bg-light/30 dark:bg-dark/30 p-6 rounded-lg shadow-sm border border-dark/10 dark:border-light/10">
      <h2 className="text-xl font-bold mb-4 text-dark dark:text-light">Search & Filter Articles</h2>
      
      <div className="space-y-4">
        {/* Search input */}
        <div>
          <label htmlFor="searchTerm" className="block text-sm font-medium text-dark dark:text-light mb-1">
            Search
          </label>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, content, or tags..."
            className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light/50 text-dark dark:text-light"
          />
        </div>
        
        {/* Category and tag filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category dropdown */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-dark dark:text-light mb-1">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light/50 text-dark dark:text-light"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Tag dropdown */}
          <div>
            <label htmlFor="tag" className="block text-sm font-medium text-dark dark:text-light mb-1">
              Tag
            </label>
            <select
              id="tag"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light/50 text-dark dark:text-light"
            >
              <option value="">All Tags</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Reset button */}
        {(searchTerm || selectedCategory || selectedTag) && (
          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-4 py-2 bg-dark text-light rounded-md text-sm hover:bg-light hover:text-dark border border-transparent hover:border-dark transition-colors dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
          >
            Reset Filters
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ArticleSearch;