import React from 'react'

function ProjectCard({ project }) {
    return (
        <div key={project.title} className="bg-[#111031] w-full p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-300">{project.title}</h3>
            <p className="mb-4 text-gray-400">{project.description}</p>
            <div className='flex flex-row justify-between mt-10 px-10'>
                <button className='bg-[#3f5bf3] rounded px-6 py-2 transition duration-300 hover:bg-[#3449c9]'><a href={project.link} className="text-gray-200" target='_blank' rel="noopener noreferrer">Source Code</a></button>
                <button className='bg-[#007800] rounded px-6 py-2 transition duration-300 hover:bg-[#036e08]'><a href={project.link} className="text-gray-200" target='_blank' rel="noopener noreferrer">Website Link</a></button>
            </div>
        </div>
    )
}

export default ProjectCard