import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const Portfolio: FC = () => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Villa Design',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A stunning modern villa with open spaces and natural light. The design focuses on sustainability and energy efficiency while maintaining a luxurious feel.',
      tags: ['Modern', 'Luxury', 'Sustainable'],
      demoUrl: '#',
    },
    {
      id: 2,
      title: 'Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      description: 'A contemporary office space designed to foster collaboration and creativity. Features include open workspaces, meeting pods, and green terraces.',
      tags: ['Office', 'Modern', 'Workspace'],
      demoUrl: '#',
    },
    {
      id: 3,
      title: 'Lakeside Retreat',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A peaceful retreat by the lake, blending seamlessly with the natural surroundings. The design emphasizes indoor-outdoor living and panoramic views.',
      tags: ['Nature', 'Luxury', 'Modern'],
      demoUrl: '#',
    },
    {
      id: 4,
      title: 'Urban Loft',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Industrial-chic loft in the heart of the city. Features exposed brick, high ceilings, and an open floor plan for modern urban living.',
      tags: ['Urban', 'Loft', 'Interior'],
      demoUrl: '#',
    },
    {
      id: 5,
      title: 'Mountain Cabin',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
      description: 'A cozy cabin retreat in the mountains, designed for year-round comfort. Features large windows to take in the stunning mountain views.',
      tags: ['Cabin', 'Nature', 'Wood'],
      demoUrl: '#',
    },
    {
      id: 6,
      title: 'Beach House',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A modern beach house with open spaces and panoramic ocean views. The design maximizes natural light and sea breezes.',
      tags: ['Beach', 'Modern', 'Luxury'],
      demoUrl: '#',
    },
  ];

  // State for modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter projects by category (you can implement category filtering here)
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Interior'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Open project modal
  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  // Close project modal
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate between project images
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    
    setCurrentImageIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? projectImages.length - 1 : prev - 1;
      } else {
        return prev === projectImages.length - 1 ? 0 : prev + 1;
      }
    });
  };

  // For demo purposes, we'll use the same image multiple times
  // In a real app, you would have multiple images per project
  const projectImages = selectedProject ? [
    { id: 1, src: selectedProject.image, alt: selectedProject.title },
    { id: 2, src: 'https://images.unsplash.com/photo-1583845112203-293299e56d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', alt: 'Project Detail 1' },
    { id: 3, src: 'https://images.unsplash.com/photo-1616486338819-3e3d5d4c4f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', alt: 'Project Detail 2' },
  ] : [];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of exceptional architectural designs and see how we bring visions to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              variants={item}
              whileHover={{ y: -5 }}
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <FiExternalLink className="ml-2" />
          </motion.a>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              onClick={closeProject}
            />
            
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <motion.div
                className="relative bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600">{selectedProject.category} Project</p>
                  </div>
                  <button
                    onClick={closeProject}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                  >
                    <FiX className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  {/* Image Gallery */}
                  <div className="relative h-96 bg-gray-100">
                    <img
                      src={projectImages[currentImageIndex].src}
                      alt={projectImages[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-colors"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-colors"
                      aria-label="Next image"
                    >
                      <FiChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {projectImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                        <p className="text-gray-600 mb-6">
                          {selectedProject.description}
                        </p>
                        
                        <h4 className="text-xl font-semibold mb-4">Project Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500">Client</p>
                            <p className="font-medium">Private Client</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">New York, USA</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Size</p>
                            <p className="font-medium">2,500 sq.ft.</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Completed</p>
                            <p className="font-medium">2023</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:pl-8 lg:border-l border-gray-200">
                        <h4 className="text-xl font-semibold mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          {selectedProject.demoUrl && (
                            <a
                              href={selectedProject.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                              <FiExternalLink className="mr-2" />
                              View Project
                            </a>
                          )}
                          
                          {selectedProject.githubUrl && (
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                            >
                              <FiGithub className="mr-2" />
                              View on GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
