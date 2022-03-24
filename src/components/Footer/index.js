import React from "react";

function Footer() {
    return(
        <footer className="container">
            <div className="row">
            <p>Thanks for Visiting!</p>
            </div>
            <div className="row">
                <a href="https://github.com/sm3131" target="_blank" className="col-12 col-md-4 col-lg-4 footer-links">GitHub</a>
                <a href="https://www.linkedin.com/in/smoore31/"  target="_blank" className="col-12 col-md-4 col-lg-4 footer-links">LinkedIn</a>
                <a target="_blank" className="col-12 col-md-4 col-lg-4 footer-links">Other</a>
            </div>
        </footer>
    )
}

export default Footer;