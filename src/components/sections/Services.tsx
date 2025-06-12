import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShield, FiTrendingUp, FiZap, FiGlobe, FiLock, FiBarChart2, FiArrowRight } from 'react-icons/fi';

const Services: FC = () => {
  const services = [
    {
      icon: <FiShield className="w-8 h-8 text-accent-blue-start" />,
      title: 'Trust Verification',
      description: 'Comprehensive verification services that establish and validate business trust through data and AI.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-accent-blue-start" />,
      title: 'Global Business Solutions',
      description: 'Tools and services to help businesses navigate and establish trust in global markets.'
    },
    {
      icon: <FiLock className="w-8 h-8 text-accent-blue-start" />,
      title: 'Secure Transactions',
      description: 'Secure and transparent transaction verification to ensure business integrity.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-accent-blue-start" />,
      title: 'Business Analytics',
      description: 'Data-driven insights to help businesses make informed decisions and build trust.'
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-accent-blue-start" />,
      title: 'Compliance & Risk',
      description: 'Tools to help businesses maintain compliance and manage risk in global operations.'
    },
    {
      icon: <FiZap className="w-8 h-8 text-accent-blue-start" />,
      title: 'API Integration',
      description: 'Seamless integration of trust verification into your existing business systems.'
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-accent-blue-start bg-accent-blue-start/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Business Trust Solutions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We provide innovative solutions to help businesses establish, verify, and maintain trust in a digital world.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-navy p-8 rounded-xl border border-white/5 hover:border-accent-blue-start/30 transition-all duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-accent-blue-start/10 rounded-xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-text-secondary text-lg mb-6 md:mb-8">
            Ready to transform how your business establishes trust?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-accent-blue-start to-accent-blue-end hover:opacity-90 transition-opacity"
            >
              Get Started
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 border border-accent-blue-start/30 text-accent-blue-start hover:bg-accent-blue-start/5 transition-colors rounded-full text-base font-medium"
            >
              Request Demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-text-secondary/80">
            Have questions?{' '}
            <Link to="/contact" className="text-accent-blue-start hover:underline">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
