import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiTag, FiSearch, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Exploring innovative materials and designs that are shaping the future of sustainable architecture.',
    date: 'May 15, 2023',
    readTime: '5 min read',
    category: 'Sustainability',
    image: '/images/blog/sustainable-architecture.jpg',
    slug: 'future-of-sustainable-architecture'
  },
  {
    id: 2,
    title: 'Maximizing Small Spaces: Urban Design Solutions',
    excerpt: 'Creative approaches to making the most of limited urban spaces through intelligent design.',
    date: 'April 28, 2023',
    readTime: '4 min read',
    category: 'Urban Design',
    image: '/images/blog/urban-design.jpg',
    slug: 'maximizing-small-spaces'
  },
  {
    id: 3,
    title: 'The Art of Lighting in Modern Architecture',
    excerpt: 'How lighting design transforms spaces and enhances architectural features in contemporary buildings.',
    date: 'April 10, 2023',
    readTime: '6 min read',
    category: 'Design',
    image: '/images/blog/lighting-design.jpg',
    slug: 'art-of-lighting'
  },
  {
    id: 4,
    title: 'Biophilic Design: Bringing Nature Indoors',
    excerpt: 'The principles of biophilic design and how they contribute to healthier living and working environments.',
    date: 'March 22, 2023',
    readTime: '7 min read',
    category: 'Wellness',
    image: '/images/blog/biophilic-design.jpg',
    slug: 'biophilic-design'
  },
  {
    id: 5,
    title: 'The Rise of Smart Homes: Technology Meets Design',
    excerpt: 'How smart home technology is being seamlessly integrated into modern architectural design.',
    date: 'March 5, 2023',
    readTime: '5 min read',
    category: 'Technology',
    image: '/images/blog/smart-homes.jpg',
    slug: 'rise-of-smart-homes'
  },
  {
    id: 6,
    title: 'Preserving History: Modern Additions to Heritage Buildings',
    excerpt: 'Balancing preservation and innovation when adding contemporary elements to historic structures.',
    date: 'February 18, 2023',
    readTime: '8 min read',
    category: 'Preservation',
    image: '/images/blog/heritage-buildings.jpg',
    slug: 'modern-additions-to-heritage-buildings'
  },
];

const categories = ['All', 'Sustainability', 'Urban Design', 'Design', 'Wellness', 'Technology', 'Preservation'];

const Blog: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, trends, and inspiration from the world of architecture and design.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        <FiTag className="mr-1" />
                        {post.category}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                      >
                        Read more
                        <FiChevronRight className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 bg-white hover:bg-gray-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-4 py-2 border border-primary-500 bg-primary-50 text-primary-600 rounded-md text-sm font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest articles, news, and design inspiration.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-r-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
