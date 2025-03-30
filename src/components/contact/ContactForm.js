import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InputField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  type = 'text', 
  error, 
  required = false,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isOccupied = value.length > 0;
  
  return (
    <div className="mb-4 md:mb-5 relative">
      <div className="relative">
        {type !== 'textarea' ? (
          <input
            name={name}
            id={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={`peer w-full bg-transparent px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg outline-none transition-all text-sm md:text-base
                     ${isFocused ? 'border-primary dark:border-primaryDark' : 'border-gray-300 dark:border-gray-600'}
                     ${error ? 'border-red-500 dark:border-red-400' : ''}
                     text-dark dark:text-light focus:border-primary dark:focus:border-primaryDark`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        ) : (
          <textarea
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            rows="4"
            className={`peer w-full bg-transparent px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg outline-none transition-all resize-none text-sm md:text-base
                     ${isFocused ? 'border-primary dark:border-primaryDark' : 'border-gray-300 dark:border-gray-600'}
                     ${error ? 'border-red-500 dark:border-red-400' : ''}
                     text-dark dark:text-light focus:border-primary dark:focus:border-primaryDark`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        )}
        
        <label 
          htmlFor={name}
          className={`absolute text-xs md:text-sm left-3 transition-all duration-200 pointer-events-none
                   ${(isFocused || isOccupied) 
                     ? 'transform -translate-y-5 md:-translate-y-6 bg-light dark:bg-dark px-1 text-primary dark:text-primaryDark text-xs' 
                     : 'top-2 md:top-3 text-gray-500 dark:text-gray-400'}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      
      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-xs mt-1 absolute"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

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
  const [formStep, setFormStep] = useState(0);
  
  // Reset errors when form data changes
  useEffect(() => {
    const newErrors = { ...errors };
    
    if (formData.name && newErrors.name) {
      delete newErrors.name;
    }
    
    if (formData.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) && newErrors.email) {
      delete newErrors.email;
    }
    
    if (formData.message && newErrors.message) {
      delete newErrors.message;
    }
    
    if (Object.keys(newErrors).length !== Object.keys(errors).length) {
      setErrors(newErrors);
    }
  }, [formData, errors]);

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

  // Use FormSubmit.co as a serverless form backend
  const formAction = "https://formsubmit.co/petru.tirla@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // When using a form service like FormSubmit.co, we'll let the form
    // submit naturally, but we'll show a success state after a short delay
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
    
    // Submit the form programmatically
    e.target.submit();
  };
  
  const nextStep = () => {
    if (formStep === 0) {
      if (!formData.name.trim()) {
        setErrors({ ...errors, name: 'Name is required' });
        return;
      }
      if (!formData.email.trim()) {
        setErrors({ ...errors, email: 'Email is required' });
        return;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        setErrors({ ...errors, email: 'Invalid email address' });
        return;
      }
    }
    
    setFormStep(current => current + 1);
  };
  
  const prevStep = () => {
    setFormStep(current => current - 1);
  };

  // Form step variants for animations
  const formVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };
  
  // Progress indicator
  const progressWidth = formStep === 0 ? "w-1/2" : "w-full";

  // If form was submitted successfully, show a success message
  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg mx-auto bg-light dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6 shadow-lg text-center"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center bg-green-100 text-green-600 mb-4 md:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-light mb-2">Message Sent!</h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSubmitStatus(null)}
          className="bg-primary dark:bg-primaryDark text-light px-4 py-2 rounded-lg text-sm md:text-base font-medium"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto bg-light/50 dark:bg-dark/50 rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      {/* Progress bar */}
      <div className="mb-6">
        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full bg-primary dark:bg-primaryDark`}
            initial={{ width: "0%" }}
            animate={{ width: progressWidth }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
          <span className={formStep >= 0 ? "font-medium text-primary dark:text-primaryDark" : ""}>Personal Info</span>
          <span className={formStep >= 1 ? "font-medium text-primary dark:text-primaryDark" : ""}>Your Message</span>
        </div>
      </div>
      
      <form 
        onSubmit={handleSubmit}
        action={formAction}
        method="POST"
        className="w-full"
      >
        {/* FormSubmit.co configuration fields */}
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
        <input type="hidden" name="_template" value="table" />
        
        {/* Anti-spam honeypot field */}
        <div className="hidden">
          <input type="text" name="_honey" />
        </div>
        
        <AnimatePresence mode="wait">
          {formStep === 0 && (
            <motion.div
              key="step1"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-dark dark:text-light mb-4">Tell me about yourself</h3>
              
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              
              <div className="flex justify-end">
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary text-light py-1.5 px-4 md:py-2 md:px-5 rounded-lg text-sm md:text-base font-medium flex items-center"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
          
          {formStep === 1 && (
            <motion.div
              key="step2"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-dark dark:text-light mb-4">Your Message</h3>
              
              <InputField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              
              <InputField
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
              />
              
              <div className="flex justify-between">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-dark dark:border-light text-dark dark:text-light py-1.5 px-4 md:py-2 md:px-5 rounded-lg text-sm md:text-base font-medium flex items-center hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </motion.button>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary text-light py-1.5 px-4 md:py-2 md:px-5 rounded-lg text-sm md:text-base font-medium flex items-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default ContactForm;
