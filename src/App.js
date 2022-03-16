import React from 'react'; 
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="nav-bar">
      <Nav />
      <main>
        <About />
      </main>
        <Footer />
    </div>
  );
}

export default App;
