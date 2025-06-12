import { motion } from 'framer-motion';
import { FiShield, FiLock, FiUsers, FiGlobe, FiBarChart2 } from 'react-icons/fi';
import Layout from '../components/Layout';

const Credence = () => {
  const features = [
    {
      icon: <FiShield className="w-8 h-8 text-accent-blue-start" />,
      title: 'Verified Business Profiles',
      description: 'Create and manage your verified business profile with all necessary credentials in one place.'
    },
    {
      icon: <FiLock className="w-8 h-8 text-accent-blue-start" />,
      title: 'Secure Document Storage',
      description: 'Safely store and share important business documents with verified partners.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-accent-blue-start" />,
      title: 'Partner Network',
      description: 'Connect and verify relationships with your business partners and clients.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-accent-blue-start" />,
      title: 'Global Verification',
      description: 'Verify and be verified by businesses worldwide with our global trust network.'
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-accent-blue-start" />,
      title: 'Trust Analytics',
      description: 'Gain insights into your business relationships and trust metrics.'
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#112240] text-accent-blue-start border border-accent-blue-start/30">
                Introducing Credence
              </span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Future of <span className="gradient-text">Business Trust</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Credence is a comprehensive platform that helps businesses verify, demonstrate, and manage trust in their professional relationships.
            </motion.p>
            
            <motion.div
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/join"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue-start to-accent-blue-end text-white font-medium hover:opacity-90 transition-opacity duration-200 text-lg"
              >
                Join Waitlist
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-full bg-transparent border border-text-secondary/30 text-text-primary hover:bg-white/5 transition-colors duration-200 font-medium text-lg"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#112240]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Everything you need to establish and maintain trust in your business relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#0a192f] p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-blue-start/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0a192f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
                How It Works
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Get started with Credence in just a few simple steps.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Create Your Profile',
                  description: 'Sign up and create your business profile with basic information.'
                },
                {
                  step: '2',
                  title: 'Verify Your Business',
                  description: 'Complete the verification process by submitting required documents.'
                },
                {
                  step: '3',
                  title: 'Build Your Network',
                  description: 'Connect with other verified businesses and start building trust.'
                },
                {
                  step: '4',
                  title: 'Grow With Confidence',
                  description: 'Leverage your verified status to build stronger business relationships.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-blue-start/10 flex items-center justify-center text-accent-blue-start text-xl font-semibold mb-4 md:mb-0 md:mr-6">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Ready to transform your business relationships?
            </h2>
            <p className="text-xl text-text-secondary mb-10">
              Join the waitlist now and be among the first to experience Credence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/join"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue-start to-accent-blue-end text-white font-medium hover:opacity-90 transition-opacity duration-200 text-lg"
              >
                Join Waitlist
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-transparent border border-text-secondary/30 text-text-primary hover:bg-white/5 transition-colors duration-200 font-medium text-lg"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Credence;
