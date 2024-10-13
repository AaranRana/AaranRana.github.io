import React from 'react';
import "./index.css";
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div>
      <div className="App bg-gradient-to-r from-emerald-100 via-teal-100 to-fuchsia-200 text-black w-auto h-auto pb-5">
        <Header />
        <main>
          <Home />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;