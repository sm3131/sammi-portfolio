import React from 'react'; 
import Nav from './components/Nav'
import About from './components/About'

function App() {
  return (
    <div className="nav-bar">
      <Nav />
      <main>
        <About />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
