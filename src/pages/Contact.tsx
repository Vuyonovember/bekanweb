import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Layout from '../components/Layout';

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<{
    success: boolean | null;
    message: string;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Initialize EmailJS with public key from environment variables
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key is not set in environment variables');
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    if (!serviceID || !templateID) {
      console.error('EmailJS service ID or template ID is not set in environment variables');
      setStatus({
        success: false,
        message: 'Configuration error. Please try again later or contact us directly.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using EmailJS to send the email
      
      const result = await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vuyo@bekanarc.xyz' // Your email address
      });
      
      if (result.status === 200) {
        setStatus({
          success: true,
          message: 'Your message has been sent successfully! We\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later or contact us directly at vuyo@bekanarc.xyz'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'hello@bekanarc.xyz',
      link: 'mailto:hello@bekanarc.xyz'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+27 (82) 553 8183',
      link: 'tel:+27825538183'
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 5:00 PM SAST',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-text-primary">
      {/* Contact Form & Info */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-[#0a192f] px-4 sm:px-6">
        <div className="container mx-auto py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 px-2">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In <span className="text-primary">Touch</span>
            </motion.h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our mineral sourcing services? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              <div className="bg-[#112240] rounded-2xl shadow-lg border border-gray-700/50 p-5 sm:p-6 md:p-8">
                <div className="mb-6 md:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-gray-300 text-sm sm:text-base">Fill out the form and we'll respond within 24 hours.</p>
                </div>
                
                {status && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                  >
                    <div className="flex items-start">
                      {status.success ? (
                        <FiCheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      ) : (
                        <FiAlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <span>{status.message}</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#112240] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#112240] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-white"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#112240] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-white"
                        placeholder="+1 (___) ___-____"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#112240] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-white"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="New Project">New Project</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Career Opportunities">Career Opportunities</option>
                        <option value="General Question">General Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#112240] border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none text-white text-sm sm:text-base"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="ml-2 flex-shrink-0" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="bg-[#112240] rounded-2xl shadow-lg border border-gray-700/50 p-6 md:p-8 h-full">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8">Contact Information</h2>
                
                <div className="space-y-5 md:space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 sm:mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-white">{item.title}</h3>
                        {item.title === 'Business Hours' ? (
                          <p className="text-sm sm:text-base text-gray-300">{item.content}</p>
                        ) : (
                          <a 
                            href={item.link} 
                            className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors mt-0.5 sm:mt-1 block"
                          >
                            {item.content}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 sm:mt-12 bg-blue-900/30 p-5 sm:p-6 rounded-xl border border-blue-800/50">
                  <h3 className="text-lg font-medium text-white mb-3 sm:mb-4">Looking for immediate assistance?</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">
                    Our team is available during business hours to answer your questions about mineral sourcing and our services.
                  </p>
                  <a 
                    href="tel:+27825538183" 
                    className="inline-flex items-center justify-center sm:justify-start w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <FiPhone className="mr-2 flex-shrink-0" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => (
  <Layout>
    <Contact />
  </Layout>
);

export default ContactPage;
