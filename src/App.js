import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentCategory, setCurrentCategory] = useState('about');

  return (
    <>
      <Header
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <main>
        {currentCategory === 'about' && <About />}
        {currentCategory === 'portfolio' && <Portfolio />}
        {currentCategory === 'contact' && <Contact />}
        {currentCategory === 'resume' && <Resume />}
      </main>
      <Footer />
    </>
  );
}

export default App;
