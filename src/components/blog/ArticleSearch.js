import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterTag = ({ tag, isSelected, onClick }) => (
  <motion.button
    onClick={() => onClick(tag)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-3 py-1 text-sm rounded-full transition-all border ${
      isSelected 
        ? 'bg-primary text-light border-transparent' 
        : 'bg-transparent text-dark dark:text-light border-dark/20 dark:border-light/20 hover:border-primary dark:hover:border-primaryDark'
    }`}
  >
    {tag}
  </motion.button>
);

const ArticleSearch = ({ articles, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilters, setActiveFilters] = useState(0);
  
  // Extract unique categories and tags - memoize to prevent recreating on each render
  const categories = useMemo(() => [...new Set(articles.map(article => article.category).filter(Boolean))], [articles]);
  const tags = useMemo(() => {
    const allTags = articles.flatMap(article => article.tags || []);
    return [...new Set(allTags)];
  }, [articles]);
  
  // Calculate filter count separately from filtering
  useEffect(() => {
    let count = 0;
    if (searchTerm) count++;
    if (selectedCategory) count++;
    if (selectedTag) count++;
    setActiveFilters(count);
  }, [searchTerm, selectedCategory, selectedTag]);
  
  // Memoize filtered articles to avoid unnecessary recalculations
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
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
  }, [searchTerm, selectedCategory, selectedTag, articles]);
  
  // Call onFilterChange when filtered articles change
  useEffect(() => {
    onFilterChange(filteredArticles);
  }, [filteredArticles, onFilterChange]);
  
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
  };
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };
  
  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 bg-light/80 dark:bg-dark/80 p-6 rounded-xl shadow-md border border-dark/10 dark:border-light/10"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-dark dark:text-light flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Find Articles
          {activeFilters > 0 && (
            <span className="ml-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {activeFilters}
            </span>
          )}
        </h2>
        
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-dark dark:text-light text-sm flex items-center"
        >
          {isExpanded ? 'Simple Search' : 'Advanced Search'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </div>
      
      {/* Search input */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-dark/50 text-dark dark:text-light focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primaryDark focus:border-transparent"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Categories */}
            {categories.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-dark dark:text-light mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <FilterTag 
                      key={category} 
                      tag={category} 
                      isSelected={category === selectedCategory}
                      onClick={handleCategoryClick}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Tags */}
            {tags.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-dark dark:text-light mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <FilterTag 
                      key={tag} 
                      tag={tag} 
                      isSelected={tag === selectedTag}
                      onClick={handleTagClick}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Active filters & Reset button */}
      {activeFilters > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Active filters:</span>
            <div className="flex ml-2 space-x-2">
              {searchTerm && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
                  Search: {searchTerm.length > 15 ? searchTerm.slice(0, 15) + '...' : searchTerm}
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedTag && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  Tag: {selectedTag}
                </span>
              )}
            </div>
          </div>
          
          <motion.button
            onClick={handleReset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear All
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ArticleSearch;