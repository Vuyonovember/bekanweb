import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiHome, FiCheckCircle } from 'react-icons/fi';

interface ValueItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Values: FC = () => {
  const values: ValueItem[] = [
    {
      icon: <FiAward className="w-8 h-8 text-accent-blue-start" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in every project, delivering exceptional quality and attention to detail.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-accent-blue-start" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their vision and bring it to life through teamwork.'
    },
    {
      icon: <FiHome className="w-8 h-8 text-accent-blue-start" />,
      title: 'Innovation',
      description: 'We are committed to pushing boundaries and developing cutting-edge solutions that drive business success.'
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-accent-blue-start" />,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and the highest ethical standards.'
    }
  ];

  return (
    <section className="py-24 bg-navy-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            These principles guide everything we do and shape the way we approach each business challenge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-navy p-8 rounded-xl border border-white/5 hover:border-accent-blue-start/30 transition-all duration-300 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent-blue-start/10 rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>
              <p className="text-text-secondary flex-grow">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
