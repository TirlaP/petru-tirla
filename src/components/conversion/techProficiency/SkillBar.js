import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillBar = ({ skill }) => {
  const { name, years, projects, status } = skill;
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: "-50px" });

  const getStatusBadge = () => {
    switch(status) {
      case 'primary':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'actively using':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'production experience':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <motion.div
      ref={barRef}
      className="mb-4 p-3 rounded-lg bg-light/50 dark:bg-dark/50 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-medium text-dark dark:text-light">{name}</h4>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">{years}y</span>
          <span className={`text-xs py-0.5 px-2 rounded-full ${getStatusBadge()}`}>
            {status}
          </span>
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400">
        {projects.slice(0, 2).join(', ')}
        {projects.length > 2 && ` +${projects.length - 2} more`}
      </div>
    </motion.div>
  );
};

export default SkillBar;
