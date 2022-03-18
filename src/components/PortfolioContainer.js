import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        // if (currentPage === 'Contact') {
        //     return <Contact />;
        //   }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div className="nav-bar">
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
                {renderPage()}
        </div>
    );
}

export default PortfolioContainer;