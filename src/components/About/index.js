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
                            Most recently I was a full stack web developer at Walts TV. I worked on internal and external facing applications built with Laravel. Some of the features I built include: components of a content management system, price and inventory syncing automation with Walmart, point of sales shipping label and scanning functionality improvement, and Walmart product syncing automation.
                        </li>
                        <li className="about-item">
                            Prior to Walts I taught a fullstack web development bootcamp that focused on the MERN stack. As a teaching assistant I helped students with frontend, backend, and full stack application projects. I also lead office hours where I answered questions about homework, projects, algorithms, and other coding concepts.
                        </li>
                    </ul>
                    <h2>Skills</h2>
                    <ul className="about-list-2">
                        <li className="about-item">Front-End: HTML5 | CSS3 | Javascript | Blade | Tailwind CSS | Livewire | AlpineJs | React</li>
                        <li className="about-item">Back-End: PHP | Laravel | MySQL | Eloquent | Node.js | Express.js</li>
                        <li className="about-item">Other Technologies: Git | GitHub | Php MyAdmin | AWS | Heroku | Asana</li>
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