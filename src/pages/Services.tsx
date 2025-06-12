import { FiCheckCircle, FiSearch, FiUsers, FiLink2, FiFileText, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Services = () => {
  const processSteps = [
    {
      number: '1',
      title: 'Buyer Discovery',
      description: 'We start by understanding your needs including mineral type, quantity, target price, and destination country.',
      icon: <FiSearch className="w-6 h-6" />,
      details: 'You provide this via email or a short form. This helps us tailor the search to your real priorities.'
    },
    {
      number: '2',
      title: 'Sourcing from Verified Sellers',
      description: 'We connect with our vetted network of mineral producers, exporters, and intermediaries across Africa.',
      icon: <FiUsers className="w-6 h-6" />,
      details: 'Each seller must provide valid SGS reports, company registration, export licenses, and origin traceability.'
    },
    {
      number: '3',
      title: 'Matchmaking & Introduction',
      description: 'We shortlist the most aligned offers and send them to you with all necessary documentation.',
      icon: <FiLink2 className="w-6 h-6" />,
      details: 'We only connect you with sellers who are ready to move, compliant, and export-capable.'
    },
    {
      number: '4',
      title: 'Deal Support',
      description: 'We assist with introductions, logistics coordination, and provide contract templates.',
      icon: <FiFileText className="w-6 h-6" />,
      details: 'You stay in control while we handle the noise throughout the entire process.'
    }
  ];

  const benefits = [
    'Deep local presence & intel',
    'High-trust filtering — no time-wasters',
    'Focused on Africa\'s best minerals',
    'Compliance & documentation-first approach',
    'Built for boutique to mid-sized buyers ($50M–$300M/year)'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-navy text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-navy-900 to-navy-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Our <span className="text-primary">Services</span>
              </motion.h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Your trusted partner in sourcing verified, compliant rare earth minerals from Africa with precision, speed, and transparency.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-navy-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What We <span className="text-primary">Offer</span></h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We help buyers secure reliable mineral supply deals through a hands-on, high-trust process.
                </p>
              </div>

              <div className="bg-navy-700/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/5">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                    <div className="space-y-8">
                      {processSteps.map((step, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                            <p className="text-gray-300">{step.description}</p>
                            <p className="text-sm text-gray-400 mt-2">{step.details}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-navy-800/50 p-6 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                      <FiDollarSign className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">Fee Structure</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-navy-700/50 p-5 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Success-Based Model</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                            <span>5% on successful transactions, paid upon execution</span>
                          </li>
                          <li className="flex items-start">
                            <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                            <span>No upfront charges</span>
                          </li>
                          <li className="flex items-start">
                            <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                            <span>Premium options available for exclusive sourcing</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-navy-700/50 p-5 rounded-lg">
                        <h4 className="font-semibold text-lg mb-3">Why Work With Us?</h4>
                        <ul className="space-y-2">
                          {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-violet-500/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Source with Confidence?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you secure reliable mineral supply from Africa's most trusted sources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-navy font-medium rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get in Touch
                </a>
                <a 
                  href="/about" 
                  className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-primary/50 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 hover:bg-white/5"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;