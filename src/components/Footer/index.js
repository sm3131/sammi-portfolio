import React from "react";

function Footer() {
    return(
        <footer className="container">
            <div className="row">
            <p>Thanks for Visiting!</p>
            </div>
            <div className="row">
                <a className="col-12 col-md-4 col-lg-4 footer-links">GitHub</a>
                <a className="col-12 col-md-4 col-lg-4 footer-links">LinkedIn</a>
                <a className="col-12 col-md-4 col-lg-4 footer-links">Other</a>
            </div>
        </footer>
    )
}

export default Footer;