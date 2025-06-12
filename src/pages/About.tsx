import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiGlobe, 
  FiShield, 
  FiUsers, 
  FiFileText,
  FiBarChart2, 
  FiZap as FiLightningBolt,
  FiShield as FiShieldCheck
} from 'react-icons/fi';
import Layout from '../components/Layout';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const About: FC = () => {


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0a192f] overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
              variants={itemVariants}
            >
              Redefining Trust in Global Trade
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
              variants={itemVariants}
            >
              At BeKan, we exist to make international trade safer, smarter, and more transparent — starting with emerging markets. Through our flagship platform Credence, we connect verified suppliers across Africa with vetted global buyers, helping close trust gaps in high-stakes transactions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
              variants={itemVariants}
            >
              <Link 
                to="/contact" 
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary hover:bg-primary/90 text-[#0a192f] font-medium rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Get Started
              </Link>
              <Link 
                to="/about" 
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-gray-600 hover:border-primary/50 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 sm:py-24 bg-[#0a192f] overflow-hidden border-t border-gray-800/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              To build the most trusted global trade network by leveraging technology, data, and human expertise to verify and connect businesses worldwide.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-[#112240] p-6 sm:p-8 rounded-xl border border-gray-800/50 hover:border-primary/30 transition-all hover:shadow-lg h-full"
              variants={fadeInUp}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <FiGlobe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 sm:mb-4">Global Impact</h3>
              <p className="text-sm sm:text-base text-gray-400">We believe in creating technology that bridges markets and unlocks economic potential across borders.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#112240] p-6 sm:p-8 rounded-xl border border-gray-800/50 hover:border-primary/30 transition-all hover:shadow-lg h-full"
              variants={fadeInUp}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <FiShield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 sm:mb-4">Trust First</h3>
              <p className="text-sm sm:text-base text-gray-400">We're building systems that prioritize security, transparency, and accountability at every step.</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#112240] p-6 sm:p-8 rounded-xl border border-gray-800/50 hover:border-primary/30 transition-all hover:shadow-lg h-full"
              variants={fadeInUp}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <FiLightningBolt className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 sm:mb-4">Efficiency</h3>
              <p className="text-sm sm:text-base text-gray-400">Streamlining international trade with smart technology and expert support.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="relative py-24 bg-navy">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              What We Do
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We help businesses trade smarter by providing trusted sourcing, B2B matchmaking, compliance simplified, and market intelligence.
            </motion.p>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-blue-end mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-accent-blue/30 transition-all hover:shadow-lg hover:shadow-accent-blue/5"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiUsers className="h-8 w-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Trusted Sourcing</h3>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                To build trust in global trade by creating transparent, efficient, and secure marketplaces that connect emerging market suppliers with global buyers.
              </p>
            </motion.div>

            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-accent-blue/30 transition-all hover:shadow-lg hover:shadow-accent-blue/5"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiUsers className="h-8 w-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">B2B Matchmaking</h3>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                AI-powered matching with compatible trade partners based on your specific needs.
              </p>
            </motion.div>

            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-accent-blue/30 transition-all hover:shadow-lg hover:shadow-accent-blue/5"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiFileText className="h-8 w-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Compliance Simplified</h3>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                Automated document verification and compliance checks for seamless transactions.
              </p>
            </motion.div>

            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-accent-blue/30 transition-all hover:shadow-lg hover:shadow-accent-blue/5"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiBarChart2 className="h-8 w-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Market Intelligence</h3>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                Actionable insights and trends to inform your international trade decisions.
              </p>
            </motion.div>

            <motion.div 
              className="bg-navy-light/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 hover:border-accent-blue/30 transition-all hover:shadow-lg hover:shadow-accent-blue/5"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FiShieldCheck className="h-8 w-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Ongoing Monitoring</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our commitment to trust doesn't end at verification. We continuously monitor:
              </p>
              <ul className="space-y-4">
                {[
                  "Transaction history and performance",
                  "Regulatory compliance status",
                  "Customer feedback and dispute resolution"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                  >
                    <FiShieldCheck className="h-6 w-6 text-accent-blue mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to get started?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join us in building the future of trusted global trade.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="mailto:hello@bekan.tech"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium bg-primary text-[#0a192f] hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
