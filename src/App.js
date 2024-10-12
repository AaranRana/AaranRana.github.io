import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;