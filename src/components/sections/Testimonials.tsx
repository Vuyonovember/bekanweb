import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials: FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Working with BeKan Architecture was an absolute pleasure. They transformed our outdated home into a modern masterpiece while preserving its original charm. Their attention to detail and creative solutions exceeded our expectations.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
      content: 'The office space BeKan designed for us has completely transformed how our team works. The open, collaborative environment has boosted productivity and employee satisfaction. Their innovative approach to space planning is truly impressive.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      content: 'As a first-time business owner, I was nervous about the design process, but the team at BeKan made it seamless. They listened to my vision and brought it to life in ways I couldn\'t have imagined. Our restaurant\'s design has been a major factor in our success.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Real Estate Developer',
      content: 'We\'ve worked with many architecture firms, but BeKan stands out for their innovative designs and practical solutions. They understand the balance between aesthetics and functionality, and their projects consistently deliver on both fronts.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FiStar
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <img
                    className="h-14 w-14 rounded-full object-cover"
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Project completed in {new Date().getFullYear() - Math.floor(Math.random() * 5)}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-primary-600 rounded-full hover:bg-gray-50 transition-colors">
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-primary-600 rounded-full hover:bg-gray-50 transition-colors">
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="/testimonials"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More Testimonials
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
