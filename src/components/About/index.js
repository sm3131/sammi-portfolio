import React from "react";
import coverImage from "../../assets/img/sammi.png";
import climbImage from "../../assets/img/climb.png";

function About() {
    return (
        <div className="container about-container">
            <div className="row">
                <h1 className="about-head">About Me</h1>
                <div className="col-12 col-md-4 col-lg-4 img-div-about">
                    <img src={coverImage} alt="professional headshot of Sammi Moore" className="cover-img" />
                </div>
                <div className="col-12 col-md-8 col-lg-8 mt-4 about-text">
                    <h2>Background</h2>
                    <ul className="about-list" >
                        <li className="about-item">
                            Currently a full stack web developer at Walts TV.
                        </li>
                        <li className="about-item">
                            Prior to Walts I taught a fullstack web development bootcamp that focused on the MERN stack.
                        </li>
                    </ul>
                    <h2>Skills</h2>
                    <ul className="about-list-2">
                        <li className="about-item">Front-End: HTML5 | CSS3 | Javascript | Blade | Tailwind | Livewire | AlpineJs | React</li>
                        <li className="about-item">Back-End: PHP | Laravel | MySQL | Eloquent | Node.js | Express.js</li>
                        <li className="about-item">Other Technologies: Git | GitHub | Php MyAdmin | Asana</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4 img-div-about">
                    <img src={climbImage} alt="Sammi Moore rock climbing outdoors" className="climb-img" />
                </div>
                <div className="col-12 col-md-8 col-lg-8 mt-4 about-text">
                    <h2>
                        Other Interests
                    </h2>
                    <ul className="about-list">
                        <li className="about-item">
                            Outside of coding I also enjoy:
                        </li>
                        <li className="about-item">
                            - Rockclimbing
                        </li>
                        <li className="about-item">
                            - Hiking
                        </li>
                        <li className="about-item">
                            - The outdoors
                        </li>
                        <li className="about-item">
                            - Health & Nutrition
                        </li>
                        <li className="about-item">
                            - Teaching & Coaching
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;