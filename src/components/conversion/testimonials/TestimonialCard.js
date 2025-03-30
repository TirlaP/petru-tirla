import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCard = ({ testimonial, isCurrent }) => {
  const { name, company, position, image, quote, projectType, rating } = testimonial;
  
  return (
    <motion.div 
      className={`testimonial-card bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg mx-3 h-full ${isCurrent ? 'opacity-100' : 'opacity-50'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isCurrent ? 1 : 0.5, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="testimonial-header flex items-center mb-6">
        {image && (
          <div className="testimonial-image mr-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary dark:border-primaryDark">
              <Image 
                src={image} 
                alt={name} 
                fill 
                sizes="64px"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        )}
        <div className="testimonial-author">
          <h4 className="font-bold text-dark dark:text-light">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{position} @ {company}</p>
          <div className="testimonial-rating flex mt-1">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-lg ${i < rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <blockquote className="testimonial-quote text-gray-600 dark:text-gray-300 italic mb-4 relative">
        <span className="text-4xl text-primary/20 dark:text-primaryDark/20 absolute -top-6 -left-2">&ldquo;</span>
        &ldquo;{quote}&rdquo;
        <span className="text-4xl text-primary/20 dark:text-primaryDark/20 absolute -bottom-10 -right-2">&rdquo;</span>
      </blockquote>
      
      <div className="testimonial-project-type mt-6 text-sm text-gray-500 dark:text-gray-400 font-medium">
        Project: {projectType}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
