import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero: FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100 opacity-20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
            variants={item}
          >
            <span className="text-sm font-medium text-white">Now with AI-powered insights</span>
            <FiArrowRight className="ml-2 text-white" />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight"
            variants={item}
          >
            <span className="block">Building Trust in</span>
            <span className="gradient-text">Global Business</span>
          </motion.h1>
          
          <motion.p
            className="mt-8 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            variants={item}
          >
            BeKan Architecture creates systems that make business more trustworthy and easier to navigate worldwide. 
            Our flagship product, <span className="text-text-primary font-medium">Credence</span>, helps verify and demonstrate trust in business relationships.
          </motion.p>
          
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            variants={item}
          >
            <Link
              to="/credence"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue-start to-accent-blue-end text-white font-medium hover:opacity-90 transition-opacity duration-200 text-lg"
            >
              Explore Credence
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-full bg-transparent border border-text-secondary/30 text-text-primary hover:bg-white/5 transition-colors duration-200 font-medium text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, -10, -20]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center p-1 mb-2">
          <motion.div 
            className="w-1 h-2 bg-text-secondary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="text-xs text-text-secondary/70">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
