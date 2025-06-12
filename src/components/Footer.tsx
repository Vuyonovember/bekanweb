import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Simple handler to scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Footer links with scroll to top
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Credence Platform', path: '/credence' },
        { name: 'Commodity Trading', path: '/services' },
        { name: 'Supply Chain', path: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
  ];
  


  return (
    <footer className="bg-[#0a192f] text-gray-300 pt-12 pb-8 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 mb-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo/bekan.png" 
                  alt="BeKan Logo" 
                  className="h-9 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'flex items-center space-x-2';
                    fallback.innerHTML = `
                      <span class="text-2xl font-bold text-white">BeKan</span>
                      <span class="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">Architecture</span>
                    `;
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
                <span className="text-2xl font-bold text-white">BeKan</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-xs">
              Empowering businesses with innovative mineral sourcing solutions and data-driven insights.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                      <Link
                        to={link.path}
                        onClick={scrollToTop}
                        className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <a 
                  href="mailto:contact@bekan.tech" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:contact@bekan.tech';
                  }}
                  className="flex items-start space-x-3 group"
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    <FaEnvelope className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors">contact@bekan.tech</span>
                </a>
              </li>
              <li className="flex items-start">
                <div className="flex items-start space-x-3">
                  <span className="text-primary mt-0.5 flex-shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </span>
                  <span className="text-sm sm:text-base text-gray-400">Global Operations</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left mb-3 sm:mb-0">
              &copy; {currentYear} BeKan. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm">
              <Link 
                to="/privacy" 
                onClick={scrollToTop}
                className="text-gray-500 hover:text-white transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/terms" 
                onClick={scrollToTop}
                className="text-gray-500 hover:text-white transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                to="/cookies" 
                onClick={scrollToTop}
                className="text-gray-500 hover:text-white transition-colors whitespace-nowrap"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
