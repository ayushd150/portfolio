import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App font-inter">
      <Navbar />
      <main className="pt-24"> {/* Add padding-top so content isn't hidden behind fixed navbar */}
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
