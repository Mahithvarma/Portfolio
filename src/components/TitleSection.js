import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from './images/profile-image-2.jpg';

function TitleSection() {
  return (
    <header className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-900 text-white p-60">
      <div className="text-center md:text-left md:flex-1">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hello, I'm <span className="text-indigo-500">Mahith Varma</span></h1>
        <div className="text-2xl md:text-4xl">
          <Typewriter
            words={['Web Developer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <div className="md:flex-1 flex justify-center md:justify-end">
        <img src={profileImage} alt="Profile" className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-lg" />
      </div>
    </header>
  );
}

export default TitleSection;
