import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import RecentWorks from './components/RecentWorks'; // Import the Recent Works component
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <RecentWorks />  {/* Add the Recent Works component here */}
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
