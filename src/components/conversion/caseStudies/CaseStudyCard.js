import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CaseStudyCard = ({ caseStudy, index }) => {
  const { id, title, subtitle, clientIndustry, technologies, images, challenge, results } = caseStudy;
  
  // Alternate layout based on index for visual interest
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className="case-study-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
          <Image
            src={images.solution || '/images/case-studies/placeholder.jpg'}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <span className="text-sm text-primary-100 font-medium bg-primary/80 dark:bg-primaryDark/80 px-3 py-1 rounded-full">
                {clientIndustry}
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-primaryDark mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{subtitle}</p>
          
          <div className="mb-4">
            <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-2">The Challenge</h4>
            <p className="text-gray-700 dark:text-gray-300 overflow-hidden max-h-[4.5rem]">{challenge}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase font-medium mb-2">Key Results</h4>
            <div className="grid grid-cols-2 gap-4">
              {results.metrics.slice(0, 2).map((metric, i) => (
                <div key={i} className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="text-xl font-bold text-primary dark:text-primaryDark">{metric.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {technologies.slice(0, 5).map((tech, i) => (
              <span 
                key={i} 
                className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                +{technologies.length - 5} more
              </span>
            )}
          </div>
          
          <Link href={`/case-studies/${id}`}>
            <motion.button
              className="w-full py-2 px-4 text-center bg-primary dark:bg-primaryDark text-white rounded-lg font-medium hover:bg-primary/90 dark:hover:bg-primaryDark/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Study
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
