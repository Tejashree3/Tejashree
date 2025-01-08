import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [

  {
    company: 'Tribe Appsoft India LLP',
    period: '2024 - Present',
    description: 'Designed and implemented a property management dashboard with CRUD functionalities, enabling efficient listing updates and property categorization.Developed responsive blog pages and additional content modules, improving user retention by 15% through enhanced interface design.',
  },
  
  {
    company: 'Neosao Services | Software Company in Kolhapur',
    period: '2024-APR - 2024-OCT',
    description: 'Designed and implemented portfolio, blog, and career pages for Neosaos website using HTML, CSS, React.js,resulting in a 25% increase in visitor retention.Created and deployed 10+ responsive landing pages using Tailwind CSS, Material UI, and CoreUI, reducing pageload time by 15% and improving user experience.',
  },
  
  {
    company: 'Zerovaega Technologies',
    period: '2021-NOV - 2022-FEB',
    description: 'Designed and implemented 10+ webpages for the Zerovaega platform using HTML, CSS, JavaScript, and Bootstrap, improving website navigation and user engagement by 20%. Developed the "Constant Reader-Book Store" project to manage book categories and inventories, increasing data organization efficiency by 30%.Technologies: HTML, CSS, Javascript, React.js',
  },

];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experience</h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <Reveal key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="border border-primary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
                >
                <h2 className="text-gray-100 text-2xl font-semibold">{experience.company}</h2>
                <p className="text-gray-300">{experience.period}</p>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: isExpanded ? 'auto' : '40px' }} // Adjust collapsed height if needed
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden relative mt-4 text-gray-400"
                >
                  <p>{experience.description}</p>
                </motion.div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => toggleDescription(index)}
                    className="flex items-center space-x-2 py-2 px-3 border border-primary shadow-[0_4px_6px_0_rgba(255,255,255,0.3)] rounded-[10px] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-110 text-white"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
