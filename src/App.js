import React from 'react';
import TopBar from './components/TopBar';
import TitleSection from './components/TitleSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Toaster />
      <TopBar />
      <main className="pt-20">
        <section id="home">
          <TitleSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default App;
