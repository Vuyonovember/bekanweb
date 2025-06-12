import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';

const Cta: FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-navy to-navy-dark">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-start to-accent-blue-end"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
            variants={item}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            variants={item}
          >
            Let's discuss how BeKan can help you build trust and drive innovation in your business operations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            variants={item}
          >
            <a
              href="mailto:hello@bekanarc.xyz"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-navy bg-gradient-to-r from-accent-blue-start to-accent-blue-end hover:opacity-90 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get in Touch
              <FiArrowRight className="ml-2" />
            </a>
            <a
              href="tel:+27825538183"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-text-primary border-2 border-accent-blue-start hover:bg-accent-blue-start/10 rounded-lg transition-all"
            >
              <FiPhone className="mr-2" />
              +27 (82) 553 8183
            </a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/10"
            variants={container}
          >
            {[
              {
                icon: <FiMail className="w-6 h-6 text-accent-blue-start" />,
                title: 'Email Us',
                content: 'hello@bekanarc.xyz',
                link: 'mailto:hello@bekanarc.xyz',
              },
              {
                icon: <FiPhone className="w-6 h-6 text-accent-blue-start" />,
                title: 'Call Us',
                content: '+27 (82) 553 8183',
                link: 'tel:+27825538183',
              },
            ].map((contact, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mb-4 mx-auto">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <a 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors"
                >
                  {contact.content}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default Cta;
