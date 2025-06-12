import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 lg:pt-40 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-primary">BeKan</span> Architecture
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-6 sm:mb-8 px-2">
              Solving Emerging Market Problems with Data & Technology
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 px-2">
              We build systems that make business safer, faster, and more transparent in emerging markets.
              From trade to trust, we create infrastructure for smarter decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link 
                to="/about" 
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary hover:bg-primary/90 text-[#0a192f] font-medium rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Learn About Our Work
              </Link>
              <Link 
                to="/contact" 
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-gray-600 hover:border-primary/50 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90 z-0"></div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 bg-[#0a192f] border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-primary">What We Do</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 px-2">
              We build technology solutions that solve real-world problems in emerging markets,
              with a focus on trust, transparency, and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: '🔍',
                title: 'Data Intelligence',
                description: 'We harness data to uncover insights and opportunities in emerging markets.'
              },
              {
                icon: '⚡',
                title: 'Technology Solutions',
                description: 'We build robust systems that solve complex business challenges.'
              },
              {
                icon: '🤝',
                title: 'Trust Networks',
                description: 'We create platforms that enable secure and transparent transactions.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 sm:p-8 bg-[#112240] hover:bg-[#112240]/90 rounded-xl border border-gray-700/50 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credence Platform */}
      <section className="py-16 sm:py-20 bg-[#0a192f] border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-primary">Credence</span> by BeKan
              </h2>
              <h3 className="text-xl text-gray-300 font-medium mb-6">
                Verified Mineral Sourcing, Built on Trust
              </h3>
              <p className="text-gray-400 mb-6">
                Credence is our flagship solution — a high-trust sourcing and verification platform 
                for rare earth and industrial minerals. We help global buyers confidently source 
                compliant minerals from Africa, with full SGS paperwork, verified documentation, 
                and vetted counterparties.
              </p>
              <p className="text-lg text-primary-300 font-medium mb-8">
                No scams. No middlemen. Just clean deals.
              </p>
              <div className="space-y-4">
                {[
                  '✅ Verified suppliers (SGS, licenses, origin)',
                  '📄 Due diligence docs & compliance support',
                  '🚢 End-to-end support (CIF, contracts, logistics)',
                  '🤝 Direct match with serious buyers & sellers'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-primary-400">{item.split(' ')[0]}</span>
                    <span className="text-gray-400">{item.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  to="/credence" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-primary hover:bg-primary/90 transition-colors"
                >
                  Learn More About Credence
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-navy-800/50 p-8 rounded-xl border border-white/5">
              <h4 className="text-xl font-semibold mb-4">Who We Serve</h4>
              <div className="space-y-6">
                {[
                  {
                    title: 'Boutique Trading Firms',
                    description: 'Specialized firms looking for reliable mineral suppliers and trade opportunities.'
                  },
                  {
                    title: 'Specialty Manufacturers',
                    description: 'Manufacturers requiring specific mineral specifications and reliable supply chains.'
                  },
                  {
                    title: 'Hedge Funds & Storage Buyers',
                    description: 'Investment firms looking for commodity exposure and storage opportunities.'
                  },
                  {
                    title: 'Family Offices',
                    description: 'Private investment offices with commodity trading arms and strategic interests.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 text-primary p-2 rounded-full mr-4 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-200">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Approach</span>
            </h2>
            <p className="text-lg text-gray-400">
              We combine deep market knowledge with cutting-edge technology to create solutions that drive real impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Market Intelligence',
                description: 'Deep research and data analysis to understand market dynamics.'
              },
              {
                number: '02',
                title: 'Technology Integration',
                description: 'Building robust platforms that solve real business problems.'
              },
              {
                number: '03',
                title: 'Trust Infrastructure',
                description: 'Creating systems that enable secure and transparent transactions.'
              },
              {
                number: '04',
                title: 'Sustainable Growth',
                description: 'Solutions designed for long-term success and scalability.'
              }
            ].map((item, index) => (
              <div key={index} className="group relative p-6 bg-navy-700/30 hover:bg-navy-700/50 rounded-xl border border-white/5 transition-all hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-300">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why <span className="text-primary">Choose</span> BeKan
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We're not just another technology company. We're a partner that understands the unique challenges of emerging markets and builds solutions that make a real difference.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Deep Market Knowledge',
                    description: 'Years of experience in emerging markets across multiple industries.'
                  },
                  {
                    title: 'Technology Expertise',
                    description: 'Cutting-edge solutions built by a team of experienced engineers.'
                  },
                  {
                    title: 'Focus on Trust',
                    description: 'We build systems that create transparency and accountability.'
                  },
                  {
                    title: 'Proven Results',
                    description: 'Track record of successful implementations and satisfied clients.'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-primary/10 text-primary p-1 rounded-full mr-4 mt-1 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-navy bg-primary hover:bg-primary/90 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="bg-navy-800/50 p-10 rounded-2xl border border-white/5 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Streamlined Process</h3>
                <p className="text-gray-400">Our end-to-end solution simplifies mineral sourcing from inquiry to shipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Focus Areas</span>
            </h2>
            <p className="text-lg text-gray-400">
              We specialize in creating solutions for these key sectors in emerging markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔄',
                title: 'Commodity Trading',
                description: 'Technology solutions for efficient and transparent commodity trading.'
              },
              {
                icon: '📊',
                title: 'Supply Chain',
                description: 'End-to-end visibility and optimization for complex supply chains.'
              },
              {
                icon: '🔗',
                title: 'Trust Networks',
                description: 'Building trusted networks of verified partners and suppliers.'
              },
              {
                icon: '📱',
                title: 'Digital Marketplaces',
                description: 'Platforms that connect buyers and sellers efficiently.'
              },
              {
                icon: '📈',
                title: 'Data Analytics',
                description: 'Actionable insights from complex market data.'
              },
              {
                icon: '🔐',
                title: 'Compliance Solutions',
                description: 'Ensuring regulatory compliance across markets.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 bg-navy-700/30 hover:bg-navy-700/50 rounded-xl border border-white/5 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-200">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/solutions" 
              className="inline-flex items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Explore All Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/70 backdrop-blur-sm border border-white/5 rounded-2xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From Inquiry to Shipment – <span className="text-violet-400">Built for Speed & Confidence</span></h2>
                <p className="text-lg text-gray-400 mb-8">
                  We're not a marketplace. We're your sourcing intelligence team.
                </p>
                
                <div className="space-y-6">
                  {[
                    { number: '1', title: 'Tell us what you\'re sourcing', description: 'Share your specific requirements and quality standards' },
                    { number: '2', title: 'We match with verified supply', description: 'Our network of pre-vetted suppliers gets to work' },
                    { number: '3', title: 'Receive paperwork & specs', description: 'Review all documentation before proceeding' },
                    { number: '4', title: 'Facilitate CIF/FOB logistics', description: 'We handle the complex logistics from start to finish' },
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 text-lg font-bold group-hover:bg-violet-500/30 transition-colors">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{step.title}</h3>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy-800/30 p-8 rounded-xl border border-white/5">
                <div className="aspect-w-16 aspect-h-9 bg-navy-700/50 rounded-lg overflow-hidden mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-violet-500/10 to-primary/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-600/20 mb-4">
                        <svg className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                      <h4 className="text-white font-medium mb-2">Efficient Sourcing</h4>
                      <p className="text-sm text-gray-400">Streamlined process for verified mineral procurement</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-6">
                    Our streamlined process ensures you get the right materials, from the right sources, at the right time.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 transition-colors"
                  >
                    Start Sourcing Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-2xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/5 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Whether you're looking for technology solutions or need help with commodity sourcing, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-navy font-medium rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get in Touch
                </Link>
                <Link 
                  to="/solutions" 
                  className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-primary/50 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 hover:bg-white/5"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Home;
