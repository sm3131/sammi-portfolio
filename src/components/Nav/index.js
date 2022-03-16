import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    return (
        <header className = "container">
            <div className ="row">
            <h1 className="col-12 text-center">
                <a>
                    Sammi Moore
                </a>
            </h1>
            </div>
            <nav>
                <ul className ="row align-center nav-list">
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <a>
                            About Me
                        </a>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span>
                            Portfolio
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span>
                            Resume
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3 nav-item">
                        <span>
                            Contact Me
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;