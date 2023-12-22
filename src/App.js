import React from 'react';
import Header from './components/Header/Header';
import WelcomeText from './components/WelcomeText/WelcomeText';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <WelcomeText />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
