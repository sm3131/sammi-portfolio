import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    return (
        <header>
            <h2>
                <a>
                    Sammi Moore
                </a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>
                            Portfolio
                        </span>
                    </li>
                    <li>
                        <span>
                            Resume
                        </span>
                    </li>
                    <li>
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