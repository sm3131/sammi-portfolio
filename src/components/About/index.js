import React from "react";
import coverImage from "../../assets/img/sammi.png"

function About() {
    return(
        <section className="container">
            <div className="row">
            <h1 className="col-12 about-head">About Me</h1>
            <img src={coverImage} className="col-12 col-md-6 col-lg-6 cover-img"/>
            <div className="col-12 col-md-6 col-lg-6 about-text">
            <h2>Background</h2>
            <ul className="col-12 col-md-6 col-lg-6 about-list" >
                <li>Intro Text About Me!</li>
            </ul>
            <h2>Skills</h2>
            <ul className="col-12 col-md-6 col-lg-6 about-list">
                <li>JavaScript</li>
            </ul>
            <h2>
                Other Interests
            </h2>
            <ul className="col-12 col-md-6 col-lg-6 about-list">
                <li>RockClimbing</li>
            </ul>
            </div>
            </div>
        </section>
    )
}

export default About;