import React from 'react';
import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-navy pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Our Projects</h1>
          <div className="text-center text-text-secondary">
            <p>Coming soon. Our projects will be showcased here.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
