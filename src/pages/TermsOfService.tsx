import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const TermsOfService: FC = () => {
  const effectiveDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-navy to-navy-dark text-white py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Last updated: {effectiveDate}
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 transition-colors group"
            >
              <FiHome className="mr-2" />
              Back to Home
              <FiArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-navy-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-gray-300">
              Welcome to BeKan. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service").
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Description of Service</h2>
            <p>
              BeKan provides a platform connecting buyers and sellers in the international trade sector, focusing on verified business transactions, compliance, and trade facilitation services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. User Accounts</h2>
            <p>
              To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. User Conduct</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Post false or misleading information</li>
              <li>Transmit any harmful or disruptive code</li>
              <li>Engage in fraudulent activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Intellectual Property</h2>
            <p>
              All content and materials available on the Service, including but not limited to text, graphics, logos, and software, are the property of BeKan or its licensors and are protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BeKan shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any changes by posting the updated Terms on our website and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@bekanweb.com" className="text-accent-blue hover:underline">
                legal@bekanweb.com
              </a>.
            </p>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BeKan. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;