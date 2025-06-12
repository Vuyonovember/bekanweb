import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
      setShowScrollToTop(offset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-text-primary">
      <Header 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />

      <main className="flex-grow">
        {children}
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-accent-blue-start to-accent-blue-end text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy focus:ring-accent-blue-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0a192f] border-t border-white/5 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center mb-6">
                <img 
                  src="/logo/group-41.png" 
                  alt="BeKan Logo" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl font-display font-bold bg-gradient-to-r from-accent-blue-start to-accent-blue-end bg-clip-text text-transparent';
                    fallback.textContent = 'BeKan';
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md mb-6">
                Building the future of trust in business through innovative solutions and transparent relationships.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-text-secondary text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-blue-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+27825538183" className="hover:text-accent-blue-start transition-colors">
                    +27 (82) 553 8183
                  </a>
                </p>
                <p className="text-text-secondary text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-blue-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@bekanarc.xyz" className="hover:text-accent-blue-start transition-colors">
                    hello@bekanarc.xyz
                  </a>
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="https://twitter.com/bekanarc" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-blue-start transition-colors duration-200 p-2 hover:bg-white/5 rounded-full">
                  <FiTwitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/company/bekanarc" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-blue-start transition-colors duration-200 p-2 hover:bg-white/5 rounded-full">
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Credence', path: '/credence' },
                  { name: 'Vision', path: '/vision' },
                  { name: 'Join Us', path: '/join' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-text-secondary hover:text-accent-blue-start text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue-start/0 group-hover:bg-accent-blue-start transition-all duration-200 mr-3"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms of Service', path: '/terms' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-text-secondary hover:text-accent-blue-start text-sm transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue-start/0 group-hover:bg-accent-blue-start transition-all duration-200 mr-3"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 lg:col-span-4">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">
                Stay Updated
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-blue-start/50 focus:border-transparent text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-accent-blue-start to-accent-blue-end text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-text-tertiary text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} BeKan. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-text-tertiary hover:text-accent-blue-start text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-text-tertiary hover:text-accent-blue-start text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;