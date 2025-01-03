import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Fullstack clone - ferns Reality",
      description: "Design website and Dashboard using React js ,Tailwind css",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project2,
      title: "food Delivery-landing page",
      description: "A food Delivery-landing page design using React js ,tailwind css , framer-motion",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Best food - website",
      description: "A Best food - website create using  React js ,tailwind css , framer-motion .",
      links: {
        site: "#",
        github: "#",
      },
    },


  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
<div className="w-full md:w-1/2 p-4">
    <div className="h-[300px] overflow-hidden rounded-lg shadow-lg group relative">
        <div className=" h-full w-full rounded-lg shadow-inner relative">
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover absolute top-0 group-hover:scale-110 group-hover:translate-y-[-200px] transition-transform duration-700 ease-in-out"
            />
        </div>
    </div>
</div>

                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio