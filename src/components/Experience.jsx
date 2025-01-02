import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const experiences = [

  {
    company: 'Zerovaega Technologies',
    period: '2021-NOV - 2022-FEB',
    description: 'This is a detailed description of your experience in this company. It goes on to describe your role, responsibilities, and achievements during your tenure.',
  },

  {
    company: 'Neosao Services | Software Company in Kolhapur',
    period: '2024-APR - 2024-OCT',
    description: 'This is a detailed description of your experience in this company. It elaborates on the skills you developed and the projects you contributed to.',
  },

  {
    company: 'Tribe Appsoft India LLP',
    period: '2024 - Present',
    description: 'This is a detailed description of your experience in this company. It focuses on your ongoing projects and the impact you are making.',
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
