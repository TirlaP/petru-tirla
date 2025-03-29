import React from 'react';

const ArticleSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index}
          className="col-span-1 w-full p-6 bg-light border border-dark/20 rounded-2xl 
                     dark:bg-dark dark:border-light/20 flex flex-col h-full animate-pulse"
        >
          {/* Image skeleton */}
          <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
          
          {/* Date and reading time skeleton */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          
          {/* Title skeleton */}
          <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
          
          {/* Excerpt skeleton */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
          
          {/* Tags skeleton */}
          <div className="flex flex-wrap mt-auto mb-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 mr-2 mb-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 mr-2 mb-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-14 mb-2"></div>
          </div>
          
          {/* Read more link skeleton */}
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default ArticleSkeleton;