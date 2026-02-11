import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarBackground from './components/ui/StarBackground';
import Loader from './components/ui/Loader';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);



  return (
    <div className="bg-[#0f1014] text-gray-900 dark:text-white min-h-screen transition-colors duration-300 relative">
      <StarBackground />
      {/* Cyberpunk Grid Background - Optional, keeping for now but StarBackground is on top/behind via z-index */}
      <div className="grid-background opacity-40"></div>



      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
