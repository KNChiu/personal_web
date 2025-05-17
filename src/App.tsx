import React from 'react';
import './App.css';

// 導入組件
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="app p-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <div className="mt-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-6">Button Component Showcase</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-neutral-dark mb-2">Primary Buttons</h3>
          <Button size="sm" onClick={() => alert('Small Primary Clicked')} className="mr-2">Small Primary</Button>
          <Button size="md" onClick={() => alert('Medium Primary Clicked')} className="mr-2">Medium Primary</Button>
          <Button size="lg" onClick={() => alert('Large Primary Clicked')}>Large Primary</Button>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-neutral-dark mb-2">Secondary Buttons</h3>
          <Button variant="secondary" size="sm" className="mr-2">Small Secondary</Button>
          <Button variant="secondary" size="md" className="mr-2">Medium Secondary</Button>
          <Button variant="secondary" size="lg">Large Secondary</Button>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-neutral-dark mb-2">Accent Buttons</h3>
          <Button variant="accent" size="sm" className="mr-2">Small Accent</Button>
          <Button variant="accent" size="md" className="mr-2">Medium Accent</Button>
          <Button variant="accent" size="lg">Large Accent</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-neutral-dark mb-2">Outline Buttons</h3>
          <Button variant="outline" size="sm" className="mr-2">Small Outline</Button>
          <Button variant="outline" size="md" className="mr-2">Medium Outline</Button>
          <Button variant="outline" size="lg">Large Outline</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
