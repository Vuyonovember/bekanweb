import { motion } from 'framer-motion';
import { FiTarget, FiGlobe, FiUsers, FiShield } from 'react-icons/fi';
import Layout from '../components/Layout';

const Vision = () => {
  const principles = [
    {
      icon: <FiTarget className="w-8 h-8 text-accent-blue-start" />,
      title: 'Our Mission',
      description: 'To create a global standard for business trust and verification, making it easier for companies to establish and maintain trustworthy relationships.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-accent-blue-start" />,
      title: 'Our Vision',
      description: 'A world where every business interaction is built on a foundation of verified trust, enabling seamless and secure global commerce.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-accent-blue-start" />,
      title: 'Our Values',
      description: 'Integrity, transparency, and innovation guide everything we do. We believe in building solutions that put trust first.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-accent-blue-start" />,
      title: 'Our Promise',
      description: 'To provide businesses with the tools they need to verify and demonstrate their trustworthiness in an increasingly digital world.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-navy to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="gradient-text">Vision</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're building the future of business trust, one verified relationship at a time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-[#112240]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-[#0a192f] p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-blue-start/10 mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{principle.title}</h3>
                <p className="text-text-secondary">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-24 bg-[#0a192f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-display font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Building the Future of <span className="gradient-text">Business Trust</span>
            </motion.h2>
            
            <motion.div 
              className="prose prose-invert max-w-none text-left text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-6">
                In an increasingly digital world, establishing trust between businesses is more important than ever. 
                Yet, the current systems for verifying business credentials are fragmented, inefficient, and often 
                don't provide the level of assurance needed in today's global marketplace.
              </p>
              <p className="mb-6">
                That's why we created Credence — a comprehensive platform that makes it easy for businesses to 
                verify their credentials, demonstrate their trustworthiness, and build stronger relationships with 
                partners and customers around the world.
              </p>
              <p>
                Our vision is to create a global standard for business trust, where verification is seamless, 
                credentials are portable, and trust is transparent. We believe that by making it easier for 
                businesses to establish and maintain trust, we can help create a more open, efficient, and 
                prosperous global economy for everyone.
              </p>
            </motion.div>
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
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-text-secondary mb-10">
              Be part of the movement to create a more trustworthy business ecosystem.
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
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
