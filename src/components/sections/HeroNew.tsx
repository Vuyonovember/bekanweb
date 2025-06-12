import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 to-[#0a192f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent-blue-start/5 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#112240] text-accent-blue-start border border-accent-blue-start/30">
              Trust in Business, Redefined
            </span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Building Trust in</span>
            <span className="gradient-text">Global Business</span>
          </motion.h1>
          
          <motion.p
            className="mt-8 text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            BeKan Architecture creates systems that make business more trustworthy and easier to navigate worldwide. 
            Our flagship product, <span className="text-text-primary font-medium">Credence</span>, helps verify and demonstrate trust in business relationships.
          </motion.p>
          
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
          
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative w-full max-w-4xl h-64 md:h-80 lg:h-96 rounded-2xl bg-[#112240] border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl md:text-5xl font-display font-semibold mb-4">
                    Trust, Verified.
                  </div>
                  <p className="text-text-secondary text-lg">
                    See how Credence is transforming business relationships
                  </p>
                </div>
              </div>
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: "url(" + "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 16h6V0h-6v16zm0 44h6V44h-6v16zM0 60h60v-6H0v6zm0-60h60V0H0v60z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E" + ")"
              }} />
            </div>
          </motion.div>
        </div>
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
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      >
        <span className="text-xs text-text-secondary/60 mb-1">Scroll to explore</span>
        <div className="w-5 h-8 border border-text-secondary/20 rounded-full flex justify-center p-0.5">
          <motion.div
            className="w-0.5 h-2 bg-text-secondary/70 rounded-full"
            animate={{
              y: [0, 6, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
