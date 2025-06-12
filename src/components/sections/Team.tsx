import { FC } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const Team: FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Founder & Lead Architect',
      image: '/images/team/member1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Senior Designer',
      image: '/images/team/member2.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Project Manager',
      image: '/images/team/member3.jpg',
      social: {
        linkedin: '#',
        instagram: '#',
      },
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      image: '/images/team/member4.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Leadership
          </motion.h2>
          <motion.p 
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet the visionaries driving BeKan's mission to redefine business trust through innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-navy-light rounded-xl overflow-hidden border border-white/5 hover:border-accent-blue-start/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 bg-navy-light overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                <p className="text-accent-blue-start font-medium mb-4">{member.role}</p>
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <FiTwitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <FiInstagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
