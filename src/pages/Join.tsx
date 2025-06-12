import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiUser, FiMail, FiBriefcase, FiGlobe, FiMessageSquare } from 'react-icons/fi';
import Layout from '../components/Layout';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join the <span className="gradient-text">Waitlist</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Be among the first to experience Credence and help shape the future of business trust.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-[#112240]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <motion.div 
                className="text-center p-12 bg-[#0a192f] rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-accent-blue-start/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="w-8 h-8 text-accent-blue-start" />
                </div>
                <h2 className="text-3xl font-display font-semibold mb-4">Thank You!</h2>
                <p className="text-text-secondary mb-8">
                  We've added you to our waitlist. We'll be in touch soon with more details about Credence.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-accent-blue-start/10 text-accent-blue-start hover:bg-accent-blue-start/20 transition-colors duration-200 font-medium"
                >
                  Back to Home
                </a>
              </motion.div>
            ) : (
              <motion.div
                className="bg-[#0a192f] p-8 sm:p-10 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-semibold mb-2">Join the Waitlist</h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below to get early access to Credence.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-text-tertiary" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-ui-border bg-navy-light focus:border-accent-blue-start focus:ring-2 focus:ring-accent-blue-start/20 focus:outline-none transition-colors duration-200 text-text-primary"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Work Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-text-tertiary" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-ui-border bg-navy-light focus:border-accent-blue-start focus:ring-2 focus:ring-accent-blue-start/20 focus:outline-none transition-colors duration-200 text-text-primary"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiBriefcase className="h-5 w-5 text-text-tertiary" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-ui-border bg-navy-light focus:border-accent-blue-start focus:ring-2 focus:ring-accent-blue-start/20 focus:outline-none transition-colors duration-200 text-text-primary"
                        placeholder="Your Company"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-text-secondary mb-2">
                      Company Website
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiGlobe className="h-5 w-5 text-text-tertiary" />
                      </div>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-ui-border bg-navy-light focus:border-accent-blue-start focus:ring-2 focus:ring-accent-blue-start/20 focus:outline-none transition-colors duration-200 text-text-primary"
                        placeholder="https://"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      How do you plan to use Credence?
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <FiMessageSquare className="h-5 w-5 text-text-tertiary" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-ui-border bg-navy-light focus:border-accent-blue-start focus:ring-2 focus:ring-accent-blue-start/20 focus:outline-none transition-colors duration-200 text-text-primary"
                        placeholder="Tell us about your business and how you'd like to use our platform..."
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center items-center px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue-start to-accent-blue-end text-white font-medium hover:opacity-90 transition-opacity duration-200 text-lg ${
                        isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Join Waitlist'
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-text-tertiary text-center">
                    By joining, you agree to our{' '}
                    <a href="/privacy" className="text-accent-blue-start hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className="text-accent-blue-start hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
