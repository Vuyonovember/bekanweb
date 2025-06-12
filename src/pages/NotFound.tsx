import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHome, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div className="min-h-screen bg-navy-light">
      <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-navy p-8 sm:p-10 rounded-2xl border border-white/5 shadow-xl"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent-blue-start/10 mb-6">
              <span className="text-4xl font-bold text-accent-blue-start">404</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-display font-semibold text-text-primary mb-4">
              Page Not Found
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link 
                to="/" 
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-medium text-white bg-gradient-to-r from-accent-blue-start to-accent-blue-end hover:opacity-90 transition-opacity"
              >
                <FiHome className="mr-2" />
                Back to Home
                <FiChevronRight className="ml-1.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-medium text-text-primary border border-white/20 hover:bg-white/5 transition-colors"
              >
                Contact Support
                <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Credence', path: '/credence' },
                  { name: 'Vision', path: '/vision' },
                  { name: 'Join Us', path: '/join' },
                ].map((page, index) => (
                  <Link
                    key={index}
                    to={page.path}
                    className="px-4 py-2 text-sm rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
