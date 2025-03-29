import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const Breadcrumbs = ({ customLabels = {} }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Fix for the infinite loop - use useMemo for stable dependency
  const pathWithoutQuery = useMemo(() => {
    return router.asPath ? router.asPath.split('?')[0] : '';
  }, [router.asPath]);

  useEffect(() => {
    if (!pathWithoutQuery) return;
    
    // Get path segments
    const segments = pathWithoutQuery.split('/').filter(segment => segment !== '');
    
    // Map segments to breadcrumb items
    const items = segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      
      // Check if the segment is an ID (for dynamic routes)
      const isId = index > 0 && segments[index - 1].toLowerCase() === 'articles';
      
      // Get appropriate label
      let label;
      if (isId && customLabels[href]) {
        // If it's an ID and we have a custom label, use that
        label = customLabels[href];
      } else {
        // Otherwise, format the segment
        label = segment
          // Replace hyphens with spaces
          .replace(/-/g, ' ')
          // Capitalize first letter of each word
          .replace(/\b\w/g, char => char.toUpperCase());
      }
      
      return { href, label };
    });
    
    // Add home at the beginning
    const breadcrumbItems = [{ href: '/', label: 'Home' }, ...items];
    setBreadcrumbs(breadcrumbItems);
  }, [pathWithoutQuery, customLabels]);

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