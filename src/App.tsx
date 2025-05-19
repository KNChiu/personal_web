import React from 'react';
import './App.css';

// 導入組件
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app min-h-screen bg-background">
      {/* 添加明確的樣式和佈局 */}
      <div className="flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
