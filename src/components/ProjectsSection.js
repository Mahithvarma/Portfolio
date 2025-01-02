import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Chat Application',
    description: 'Chat Application for seamless, instant communication between users. The application features user authentication, private chat functionalities, and an intuitive UI',
    link: 'https://github.com/Mahithvarma/Chat-Application',
  },
  {
    title: 'Book your wash',
    description: 'A Full-stack web application for my roommates to book their slot for washing machine, ensuring organized usage. Built using modern web technologies (MERN) for efficient and user-friendly scheduling.',
    link: 'https://github.com/Mahithvarma/Washing-Machine-Slot-Booking',
  },
  {
    title: 'Job Hunt',
    description: 'A job portal for students to find the jobs posted by the recruiters and helps the recruiters to hire the students.',
    link: 'https://github.com/Mahithvarma/Job-Portal',
  },
  {
    title: 'Netlfix clone',
    description: 'This is a Netflix clone website built using netlifx free APIs.',
    link: 'https://github.com/Mahithvarma/Netlfix_clone',
  },
  {
    title: 'Rock paper scissor game',
    description: 'A funny game with the computer.',
    link: 'https://github.com/Mahithvarma/Rock-paper-scissor-game',
  },
  {
    title: 'QR Generator',
    description: 'A simple QR code generator from text and link.',
    link: 'https://github.com/Mahithvarma/QR-Generator',
  },
  {
    title: 'Calculator',
    description: 'This is a Basic calculator that evaluates the user input with effective GUI.',
    link: 'https://github.com/Mahithvarma/calculator',
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="py-40 bg-gray-900 h-fit-content">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

    </div>
  );
}

export default ProjectsSection;
