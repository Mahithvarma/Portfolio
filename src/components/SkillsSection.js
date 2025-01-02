import { color } from 'framer-motion';
import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'Cpp', level: 80, color: '#004482' },
  { name: 'SQL', level: 75, color: '#eb7000' },
  { name: 'HTML', level: 80, color: '#e54c21' },
  { name: 'CSS', level: 70, },
  { name: 'Javascript', level: 75, color: '#d4b830' },
  { name: 'React.js', level: 70, color: '#2a2c2e'},
  { name: 'Node.js', level: 65, color: '#639b5a' },
];

const SkillsSection = () => {
  return (
    <div id="skills" className="py-40 bg-gray-200 h-fit-content">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center">
            <CircularProgressbar value={skill.level} text={`${skill.level}%`} styles={buildStyles({pathColor: `${skill.color}`})} className="w-24 h-24 mb-4" />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
