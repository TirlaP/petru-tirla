import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    // In a real implementation, you would connect this to a newsletter service API
    // For static sites on GitHub Pages, you'd use a service like ConvertKit, MailChimp, etc.
    // For now, we'll simulate a successful subscription
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-light/50 dark:bg-dark/50 border border-dark/10 dark:border-light/10 rounded-lg p-6 shadow-sm"
    >
      <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">
        Subscribe to My Newsletter
      </h3>
      
      <p className="text-dark/70 dark:text-light/70 mb-4">
        Get notified when I publish new articles and updates.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="flex-grow p-2 border border-gray-300 rounded dark:bg-dark dark:border-light/30 text-dark dark:text-light"
          disabled={status === 'success' || isSubmitting}
        />
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === 'success' || isSubmitting}
          className="bg-primary text-light px-4 py-2 rounded font-medium hover:bg-primary/90 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>
      
      {status === 'success' && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-green-600 dark:text-green-400 mt-3 text-sm"
        >
          Thanks for subscribing! Check your email to confirm.
        </motion.p>
      )}
      
      <p className="text-dark/60 dark:text-light/60 text-xs mt-3">
        I respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
};

export default NewsletterSubscribe;