import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>Tejashree Dhalgade</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                    <a href="https://github.com/Tejashree3" target='_blank'><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/tejashree-dhalgade-1088181a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin /></a>
                </div>
            </div>
            <p className='text-gray-400'>@2024 Tejashree Dhalgade</p>

        </div>
    )
}
export default Footer