import React from "react";

function Footer() {
    return(
        <footer>
            <div className="row">
            <p>Thanks for Visiting!</p>
            </div>
            <div className="row">
                <a href="https://github.com/sm3131" target="_blank" rel="noreferrer" className="col-12 col-md-4 col-lg-4 footer-links">GitHub</a>
                <a href="https://www.linkedin.com/in/smoore31/"  target="_blank" rel="noreferrer" className="col-12 col-md-4 col-lg-4 footer-links">LinkedIn</a>
                <a href="mailto:sm31moore@gmail.com" className="col-12 col-md-4 col-lg-4 footer-links">Email</a>
            </div>
        </footer>
    )
}

export default Footer;