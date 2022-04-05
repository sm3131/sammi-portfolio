import React from "react";

function Nav({ currentPage, handlePageChange }) {

    return (
        <header className = "container">
            <div className ="row">
            <h1 className="col-12 text-center">
                <a className="name-head" href="/sammi-portfolio">
                    Sammi Moore
                </a>
            </h1>
            </div>
            <nav>
                <ul className ="row align-center nav-list">
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-active': 'nav-not-active'}>
                            About Me
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-active': 'nav-not-active'}>
                            Portfolio
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-active': 'nav-not-active'}>
                            Resume
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-active': 'nav-not-active'}>
                            Contact Me
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;