import React from "react";
import coverImage from "../../assets/img/sammi.png"

function About() {
    return(
        <section className="container">
            <h1>About Me</h1>
            <div className="row" >
            <img src={coverImage} className="col-6"/>
            <div className="col-6">
            <h2>Background</h2>
            <ul className="col-6" >
                <li>Intro Text Abut Me!</li>
            </ul>
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
            </ul>
            <h2>
                Other Interests
            </h2>
            <ul>
                <li>RockClimbing</li>
            </ul>
            </div>
            </div>
        </section>
    )
}

export default About;