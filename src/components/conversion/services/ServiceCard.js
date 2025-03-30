import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  const { id, title, icon: Icon, description, technologies, exampleProject } = service;
  
  return (
    <motion.div 
      className="service-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col h-full"
      whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-3">
        <div className="service-icon text-primary dark:text-primaryDark w-10 h-10 flex items-center justify-center bg-primary/10 dark:bg-primaryDark/10 rounded-lg mr-3 flex-shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="service-title text-lg font-bold text-dark dark:text-light line-clamp-1">{title}</h3>
      </div>
      
      <p className="service-description text-gray-600 dark:text-gray-300 text-sm mb-3 flex-grow line-clamp-3">{description}</p>
      
      <div className="service-technologies flex flex-wrap gap-1 mb-3">
        {technologies.slice(0, 3).map((tech, index) => (
          <span 
            key={index} 
            className="technology-tag text-xs py-0.5 px-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 3 && (
          <span className="technology-tag text-xs py-0.5 px-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
            +{technologies.length - 3}
          </span>
        )}
      </div>
      
      {exampleProject && (
        <div className="service-example mb-3 text-xs">
          <span className="text-gray-600 dark:text-gray-400">Example: </span>
          <Link 
            href={`/projects#${exampleProject.slug}`}
            className="text-primary dark:text-primaryDark hover:underline font-medium"
          >
            {exampleProject.title}
          </Link>
        </div>
      )}
      
      <Link href="/contact" className="mt-auto">
        <motion.button 
          className="service-cta w-full py-1.5 px-3 bg-primary dark:bg-primaryDark text-white rounded-lg font-medium transition-colors hover:bg-primary/90 dark:hover:bg-primaryDark/90 text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Discuss Your Project
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
