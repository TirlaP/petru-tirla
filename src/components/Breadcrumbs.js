import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Breadcrumbs = ({ customLabels = {} }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Create a memoized path that won't change unless the actual path changes
  const path = useMemo(() => {
    return router.asPath ? router.asPath.split('?')[0] : '';
  }, [router.asPath]);

  // Generate breadcrumbs only when path or customLabels change
  useEffect(() => {
    if (!path) return;
    
    // Function to generate breadcrumbs
    const generateBreadcrumbs = () => {
      // Get path segments
      const segments = path.split('/').filter(segment => segment !== '');
      
      if (segments.length === 0) {
        return [{ href: '/', label: 'Home' }];
      }
      
      // Create breadcrumb items
      const breadcrumbItems = [{ href: '/', label: 'Home' }];
      
      segments.forEach((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        
        // Check if the segment is an ID (for dynamic routes)
        const isId = index > 0 && segments[index - 1].toLowerCase() === 'articles';
        
        // Get appropriate label
        let label;
        if (isId && customLabels[href]) {
          label = customLabels[href];
        } else {
          label = segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
        }
        
        breadcrumbItems.push({ href, label });
      });
      
      return breadcrumbItems;
    };
    
    const newBreadcrumbs = generateBreadcrumbs();
    setBreadcrumbs(newBreadcrumbs);
  }, [path, customLabels]);

  if (!breadcrumbs.length || breadcrumbs.length === 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-6">
      <ol className="flex flex-wrap items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
            )}
            
            {index === breadcrumbs.length - 1 ? (
              <span className="text-dark dark:text-light font-medium">{breadcrumb.label}</span>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={breadcrumb.href}
                  className="text-primary dark:text-primaryDark hover:underline"
                >
                  {breadcrumb.label}
                </Link>
              </motion.div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;