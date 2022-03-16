import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    return (
        <header className = "container">
            <div className ="row">
            <h2 className="col-12 text-center">
                <a>
                    Sammi Moore
                </a>
            </h2>
            </div>
            <nav>
                <ul className ="row align-center nav-list">
                    <li className="col-12 col-md-3 col-lg-3">
                        <a>
                            About Me
                        </a>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3">
                        <span>
                            Portfolio
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3">
                        <span>
                            Resume
                        </span>
                    </li>
                    <li className="col-12 col-md-3 col-lg-3">
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