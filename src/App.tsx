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
import Input from './components/Input';
import Heading from './components/Heading';
import Card, { CardBody, CardHeader, CardFooter } from './components/Card';

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
        <Heading level={2} variant="section">Button Component Showcase</Heading>
        
        <div className="mb-4">
          <Heading level={3}>Primary Buttons</Heading>
          <Button size="sm" onClick={() => alert('Small Primary Clicked')} className="mr-2">Small Primary</Button>
          <Button size="md" onClick={() => alert('Medium Primary Clicked')} className="mr-2">Medium Primary</Button>
          <Button size="lg" onClick={() => alert('Large Primary Clicked')}>Large Primary</Button>
        </div>

        <div className="mb-4">
          <Heading level={3}>Secondary Buttons</Heading>
          <Button variant="secondary" size="sm" className="mr-2">Small Secondary</Button>
          <Button variant="secondary" size="md" className="mr-2">Medium Secondary</Button>
          <Button variant="secondary" size="lg">Large Secondary</Button>
        </div>

        <div className="mb-4">
          <Heading level={3}>Accent Buttons</Heading>
          <Button variant="accent" size="sm" className="mr-2">Small Accent</Button>
          <Button variant="accent" size="md" className="mr-2">Medium Accent</Button>
          <Button variant="accent" size="lg">Large Accent</Button>
        </div>

        <div>
          <Heading level={3}>Outline Buttons</Heading>
          <Button variant="outline" size="sm" className="mr-2">Small Outline</Button>
          <Button variant="outline" size="md" className="mr-2">Medium Outline</Button>
          <Button variant="outline" size="lg">Large Outline</Button>
        </div>
      </div>

      <div className="mt-12 p-6 bg-white shadow-lg rounded-lg">
        <Heading level={2} variant="section">Input Component Showcase</Heading>

        <div className="mb-4">
          <Heading level={3}>Outline Inputs</Heading>
          <Input label="Name" placeholder="Your Name" className="mb-2" />
          <Input label="Email" type="email" placeholder="Your Email" />
        </div>

        <div className="mb-4">
          <Heading level={3}>Filled Inputs</Heading>
          <Input variant="filled" label="Name" placeholder="Your Name" className="mb-2" />
          <Input variant="filled" label="Email" type="email" placeholder="Your Email" />
        </div>

        <div>
          <Heading level={3}>Underline Inputs</Heading>
          <Input variant="underline" label="Name" placeholder="Your Name" className="mb-2" />
          <Input variant="underline" label="Email" type="email" placeholder="Your Email" />
        </div>
      </div>

      <div className="mt-12">
        <Heading level={2} variant="section">Card Component Showcase</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>Featured Post</CardHeader>
            <CardBody>This is a basic card with a header and body.</CardBody>
            <CardFooter>Published on January 1, 2024</CardFooter>
          </Card>

          <Card variant="outlined">
            <CardHeader>Outlined Card</CardHeader>
            <CardBody>This is an outlined card with a subtle border.</CardBody>
            <CardFooter>Last updated: February 15, 2024</CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>Elevated Card</CardHeader>
            <CardBody>This card has a stronger shadow to stand out.</CardBody>
            <CardFooter>Created by: John Doe</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;