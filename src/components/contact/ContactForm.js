import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit} 
      className="w-full max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label className="block text-dark dark:text-light mb-2" htmlFor="name">
          Name
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light"
          id="name"
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-dark dark:text-light mb-2" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light"
          id="email"
          type="email"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-dark dark:text-light mb-2" htmlFor="subject">
          Subject
        </label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light"
          id="subject"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-dark dark:text-light mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark dark:border-light"
          id="message"
          rows="5"
        />
        {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent 
                  hover:border-dark dark:bg-light dark:text-dark 
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                  disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
      
      {submitStatus === 'success' && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-500 mt-4"
        >
          Message sent successfully!
        </motion.p>
      )}
      
      {submitStatus === 'error' && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 mt-4"
        >
          Error sending message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;