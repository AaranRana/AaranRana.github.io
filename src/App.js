import React from 'react';
import "./index.css";
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;