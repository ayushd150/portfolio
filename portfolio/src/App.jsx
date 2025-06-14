import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App font-inter">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;