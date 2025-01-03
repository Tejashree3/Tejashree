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
      img: project5,
      title: "Best food - website",
      description: "A Best food - website create using  React js ,tailwind css , framer-motion .",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: " Restaurant - landing-page",
      description: "A  Restaurant - landing page create using  React js ,tailwind css , framer-motion .",
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
<div className="w-full md:w-1/2 py-6 border border-primary rounded-md" >
<div className="h-[300px] overflow-hidden rounded-lg shadow-lg group relative px-9 flex justify-center items-center">
  <div className="h-full w-full rounded-lg   relative ">
    <img
      src={project.img}
      alt={project.title}
      className="w-full shadow-[0_4px_6px_0_rgba(255,255,255,0.3)] rounded-md h-auto object-cover  absolute top-0  transition-transform duration-[10s] ease-in-out group-hover:translate-y-[-88%]"
      style={{ height: "auto" }} // Ensure the image height is auto
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
        <div className='flex justify-center items-center'>

         <div className="flex items-center space-x-2 py-2 px-3 border
                          border-primary shadow-[0_4px_6px_0_rgba(255,255,255,0.3)]  rounded-[10px] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-110">

                                <span className="text-lg">Find more on </span>
                                <span><AiOutlineGithub/></span>
                            </div>
        </div>
    </div>
  )
}

export default Portfolio