import React, { useState } from 'react'; 
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  //const [resumeSelected, setResumeSelected] = useState(false);

  //const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="nav-bar">
      <Nav 
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      />
      <main>
        {!portfolioSelected ? (
          <>
           <About />
          </>
        ) : (
          <Portfolio />
        )}
      </main>
        <Footer />
    </div>
  );
}

export default App;
