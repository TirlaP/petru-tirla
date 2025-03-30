import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const SkillBar = ({ skill }) => {
  const { name, level, years, logo, projects, status } = skill;
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: "-50px" });
  
  // Animate the skill bar width when in view
  useEffect(() => {
    if (isInView) {
      setWidth(level);
    }
  }, [isInView, level]);
  
  // Status badge styling
  const getStatusBadge = () => {
    switch(status) {
      case 'actively using':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'occasionally using':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'currently learning':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };
  
  return (
    <div ref={barRef} className="skill-bar mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {logo && (
            <div className="w-6 h-6 mr-3 relative">
              <Image 
                src={logo} 
                alt={`${name} logo`} 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          )}
          <h4 className="font-medium text-dark dark:text-light">{name}</h4>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 dark:text-gray-400 mr-3">{years} {years === 1 ? 'year' : 'years'}</span>
          <span className={`text-xs py-0.5 px-2 rounded-full ${getStatusBadge()}`}>
            {status}
          </span>
        </div>
      </div>
      
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary dark:bg-primaryDark rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>Projects: </span>
        {projects.slice(0, 2).join(', ')}
        {projects.length > 2 && ` +${projects.length - 2} more`}
      </div>
    </div>
  );
};

export default SkillBar;
