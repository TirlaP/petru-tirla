import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/src/context/LanguageContext';
import { ctaTranslations } from '@/src/components/data/conversion/CallToAction';
import { FiMessageCircle, FiBriefcase, FiCalendar, FiClock } from 'react-icons/fi';

// Get the appropriate icon based on the icon name
const getIcon = (iconName, size = 20) => {
  switch (iconName) {
    case 'chat':
      return <FiMessageCircle size={size} />;
    case 'portfolio':
      return <FiBriefcase size={size} />;
    case 'calendar':
      return <FiCalendar size={size} />;
    case 'clock':
      return <FiClock size={size} />;
    default:
      return null;
  }
};

const CTAButton = ({ 
  cta, 
  className = '',
  showIcon = true,
  size = 'default', // 'small', 'default', 'large'
  fullWidth = false,
  onClick
}) => {
  const { language } = useLanguage();
  const { id, text, action, type, icon } = cta;
  
  // Get translated text
  const translatedText = ctaTranslations[language]?.[id] || text;
  
  // Handle external links (starting with http)
  const isExternalLink = action?.startsWith('http');
  
  // Style based on type
  const buttonStyles = {
    primary: 'bg-primary text-light hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light',
    secondary: 'border-2 border-dark text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark',
    tertiary: 'bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primaryDark/10 dark:text-primaryDark dark:hover:bg-primaryDark/20',
    quaternary: 'text-dark underline decoration-primary decoration-2 underline-offset-4 hover:decoration-4 dark:text-light dark:decoration-primaryDark'
  };
  
  // Size styles
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    default: 'py-2.5 px-6 text-base',
    large: 'py-3 px-8 text-lg'
  };
  
  // Common classes
  const baseClasses = `font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''}`;
  
  // Combined classes
  const buttonClasses = `${baseClasses} ${buttonStyles[type]} ${className}`;
  
  // Animation props
  const motionProps = {
    whileHover: { scale: type === 'quaternary' ? 1 : 1.05 },
    whileTap: { scale: 0.98 }
  };

  // If it's an external link
  if (isExternalLink) {
    return (
      <motion.a
        href={action}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        {...motionProps}
        onClick={onClick}
      >
        {showIcon && getIcon(icon)}
        <span>{translatedText}</span>
      </motion.a>
    );
  }
  
  // For internal links
  return (
    <Link href={action} passHref>
      <motion.span
        className={buttonClasses}
        {...motionProps}
        onClick={onClick}
      >
        {showIcon && getIcon(icon)}
        <span>{translatedText}</span>
      </motion.span>
    </Link>
  );
};

export default CTAButton;