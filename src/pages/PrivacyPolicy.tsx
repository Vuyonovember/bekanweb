import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const PrivacyPolicy: FC = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Last updated: {lastUpdated}
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
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Fill out contact forms on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Apply for a job with us</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold 
              certain information. You can instruct your browser to refuse all cookies or to indicate when a 
              cookie is being sent.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our website, provide services 
              on our behalf, or assist us in analyzing how our website is used.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Data Security</h2>
            <p>
              We value your trust in providing us your personal information, thus we are striving to use 
              commercially acceptable means of protecting it. However, no method of transmission over the 
              internet or method of electronic storage is 100% secure and reliable.
            </p>

              <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@bekanarc.xyz" className="text-accent-blue hover:underline">
                privacy@bekanarc.xyz
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
