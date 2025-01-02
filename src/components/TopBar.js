import React, { useState, useEffect } from 'react';

const TopBar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        setActiveSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-indigo-700 p-2 pl-4 pr-4 rounded-full shadow-lg z-10">
     <div className="flex justify-center items-center space-x-4">
        <a
          href="#home"
          className={`p-2 pl-4 pr-4 rounded-full ${activeSection === 'home' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
          aria-current={activeSection === 'home' ? 'page' : undefined}
        >
          Home
        </a>
        <a
          href="#skills"
          className={`p-2 pl-4 pr-4 rounded-full ${activeSection === 'skills' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
          aria-current={activeSection === 'skills' ? 'page' : undefined}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`p-2 pl-4 pr-4 rounded-full ${activeSection === 'projects' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
          aria-current={activeSection === 'projects' ? 'page' : undefined}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`p-2 pl-4 pr-4 rounded-full ${activeSection === 'contact' ? 'bg-gray-800 text-white' : 'text-gray-300'}`}
          aria-current={activeSection === 'contact' ? 'page' : undefined}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
