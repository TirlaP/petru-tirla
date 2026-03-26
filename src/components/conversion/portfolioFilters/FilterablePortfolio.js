import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import FilterBar from './FilterBar';
import { projects } from '@/src/components/data/Projects';
import { projectFiltersMap } from '@/src/components/data/conversion/PortfolioFiltersData';
import { FiGrid, FiList, FiShare2 } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Project Card that supports both grid and list views
const ProjectCard = ({ project, viewMode }) => {
  const { name, img, summary, live_demo_url, gitHub_url, technologies } = project;
  
  // Use English summary for consistency in filtering view
  const projectSummary = typeof summary === 'object' ? summary.en : summary;
  
  if (viewMode === 'list') {
    return (
      <motion.div 
        className="project-card-list bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/4 h-48 md:h-auto">
            {img ? (
              <Image
                src={img}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            ) : (
              <div className="w-full h-full min-h-[12rem] bg-gradient-to-br from-primary/20 to-primaryDark/20 dark:from-primary/10 dark:to-primaryDark/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary/40 dark:text-primaryDark/40">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          
          <div className="p-6 md:w-3/4">
            <h3 className="text-xl font-bold text-primary dark:text-primaryDark mb-2">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400 overflow-hidden max-h-12 mb-4">{projectSummary}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tech.startsWith('#') ? tech.substring(1) : tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span
                  className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md cursor-default"
                  title={technologies.slice(3).map(t => t.startsWith('#') ? t.substring(1) : t).join(', ')}
                >
                  +{technologies.length - 3} more
                </span>
              )}
            </div>

            <div className="flex space-x-4">
              <a 
                href={live_demo_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary dark:text-primaryDark font-medium hover:underline"
              >
                View Project
              </a>
              {gitHub_url !== "#" && (
                <a 
                  href={gitHub_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Grid view (default)
  return (
    <motion.div 
      className="project-card-grid bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <div className="relative h-48">
        {img ? (
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primaryDark/20 dark:from-primary/10 dark:to-primaryDark/10 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary/40 dark:text-primaryDark/40">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary dark:text-primaryDark mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 overflow-hidden max-h-20 mb-4 text-sm flex-grow">{projectSummary}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tech.startsWith('#') ? tech.substring(1) : tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span
              className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md cursor-default"
              title={technologies.slice(3).map(t => t.startsWith('#') ? t.substring(1) : t).join(', ')}
            >
              +{technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between mt-auto">
          <a 
            href={live_demo_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark text-sm font-medium hover:underline"
          >
            View Project
          </a>
          {gitHub_url !== "#" && (
            <a 
              href={gitHub_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FilterablePortfolio = () => {
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const router = useRouter();
  
  const allProjects = projects.personnalProjects;
  
  // Apply filters to projects
  useEffect(() => {
    if (Object.keys(activeFilters).length === 0) {
      setFilteredProjects(allProjects);
      return;
    }
    
    // Function to check if a project matches all active filters
    const projectMatchesFilters = (project) => {
      // Create a unique ID for the project that matches the format in projectFiltersMap
      const projectId = project.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const projectFilters = projectFiltersMap[projectId] || {};
      
      // Check if project matches all filter categories
      return Object.entries(activeFilters).every(([category, selectedFilters]) => {
        // Get the project's values for this category
        const projectValues = projectFilters[category] || [];
        // Check if at least one of the selected filters matches
        return selectedFilters.some(filter => projectValues.includes(filter));
      });
    };
    
    const filtered = allProjects.filter(projectMatchesFilters);
    setFilteredProjects(filtered);
    
  }, [activeFilters, allProjects]);
  
  // Share current filter selection - creates a URL with filter parameters
  const shareFilterSelection = () => {
    if (Object.keys(activeFilters).length === 0) {
      alert('No filters currently applied to share.');
      return;
    }
    
    // Create a query string from the active filters
    const queryParams = new URLSearchParams();
    
    Object.entries(activeFilters).forEach(([category, filters]) => {
      queryParams.set(category, filters.join(','));
    });
    
    const shareUrl = `${window.location.origin}${router.pathname}?${queryParams.toString()}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        alert('Filter selection URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy URL: ', err);
        alert('Failed to copy URL to clipboard.');
      });
  };
  
  // Parse URL query parameters for filters on component mount
  useEffect(() => {
    if (!router.isReady) return;
    
    const query = router.query;
    const urlFilters = {};
    
    Object.entries(query).forEach(([key, value]) => {
      // Skip non-filter query params
      if (['page', 'sort'].includes(key)) return;
      
      // Convert comma-separated values to array
      urlFilters[key] = value.split(',');
    });
    
    if (Object.keys(urlFilters).length > 0) {
      setActiveFilters(urlFilters);
    }
  }, [router.isReady, router.query]);
  
  return (
    <div className="filterable-portfolio py-8">
      <FilterBar 
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        totalProjects={allProjects.length}
        filteredCount={filteredProjects.length}
      />
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium flex space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-md ${
              viewMode === 'grid'
                ? 'bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <FiGrid className="mr-1" />
            <span>Grid</span>
          </button>
          
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-md ${
              viewMode === 'list'
                ? 'bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <FiList className="mr-1" />
            <span>List</span>
          </button>
        </div>
        
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
            Showing <span className="font-medium text-dark dark:text-light">{filteredProjects.length}</span> of {allProjects.length} projects
          </span>
          
          <button
            onClick={shareFilterSelection}
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 disabled:opacity-50"
            disabled={Object.keys(activeFilters).length === 0}
          >
            <FiShare2 className="mr-1" />
            <span>Share Filters</span>
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No projects match your filters</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Try adjusting your filter criteria or clear all filters.</p>
            <button
              onClick={() => setActiveFilters({})}
              className="px-4 py-2 bg-primary dark:bg-primaryDark text-white rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primaryDark/90 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        ) : (
          <div className={`
            ${viewMode === 'grid' 
              ? 'grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6' 
              : 'flex flex-col space-y-6'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div key={`${project.name}-${index}`} className={viewMode === 'grid' ? 'h-full' : ''}>
                <ProjectCard 
                  project={project}
                  viewMode={viewMode}
                />
              </div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterablePortfolio;
