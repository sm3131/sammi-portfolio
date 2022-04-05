import React from "react";
import coverImage from "../../assets/img/sammi.png";
import climbImage from "../../assets/img/climb.png";

function About() {
    return (
    <div>
        <section className="container">
            <div className="row">
                <h1 className="col-12 about-head">About Me</h1>
                <img src={coverImage} alt="professional photo of Sammi Moore" className="col-12 col-md-6 col-lg-6 cover-img" />
                <div className="col-12 col-md-6 col-lg-6 about-text">
                    <h2>Background</h2>
                    <ul className="col-12 col-md-6 col-lg-6 about-list" >
                        <li className="about-item">
                            Hello! My name is Sammi Moore, I am 25 years old, and I graduated from Northern Arizona University in April 2021 with a Master's in Science Teaching. I taught anatomy and physiology for several years throughout graduate school, but upon graduation I discovered a whole new world in tech. After I graduated I took a few months off from school and work, and during this free time I found that coding truly piqued my interest. I began working on free coding platforms to become familiar with this entirely foreign field of knowledge. After a couple of months of learning about coding basics and how it applies to almost everything humans interact with today, I decided I wanted to further pursue this field. That was when I made the decision to fully immerse myself in a six month full stack web development bootcamp through the University of Arizona. Over those six months I gained a wealth of knowledge in full stack web development, and with these newfound skills I plan to continue building and creating more projects to practice and eventually find a career in coding.
                        </li>
                        <br></br>
                        <li className="about-item">
                            My goal is to eventually land a remote programming job, that will provide me with both stability and
                            flexibility. I am still trying to decide which areas of full stack web development I want to specialize in, but I currently have the skills and knowledge in both front-end and back-end technologies which will allow me to fit in with a variety of different companies.I have been working hard to create a portfolio that showcases the projects I have created throughout over the past 6 to 12 months. You can visit the Resume link to view a more formal overview of my schooling, work, and proficiencies.To view some of my larger coding projects, please visit the Portfolio link, and if you have any questions you can use the contact form in the Contact Me link to send me a message.
                        </li>
                    </ul>
                    <h2>Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6 about-list-2">
                        <li className="about-item">JavaScript: Adept at using Javascript for both front-end and back-end applications</li>
                        <li className="about-item">MERN Stack: Comfortable with technologies for building user interfaces, server side code, APIs, and databases.Experience with both SQL and NoSQL databases, such as MySQL and MongoDB.Implemented Sequelize, Mongoose, and GraphQL to develop APIs that communicate with databases allowing the client to GET, POST, UPDATE, and DELETE data.</li>
                        <li className="about-item">GitHub: Worked individually and in groups to create projects using Git and GitHub to implement version control and agile development when creating projects and applications.</li>
                        <li className="about-item">Insomnia to test API routes and endpoints for back-end applications or in the early phases of full stack application development</li>
                        <li className="about-item">Heroku, JawsDB, MongoDB Atlas, and GitHub pages for deployment of applications with and without databases.</li>
                    </ul>
                </div>
            </div>
            <section className="container">
                <div className="row">
                <img src={climbImage} alt="Sammi Moore rock climbing outdoors" className="col-12 col-md-6 col-lg-6 climb-img" />
                <div className="col-12 col-md-6 col-lg-6 about-text">      
                    <h2>
                        Other Interests
                    </h2>
                    <ul className="col-12 col-md-6 col-lg-6 about-list">
                        <li className="about-item">Outside of coding I also enjoy rock climbing, biking, hiking, lifting weights, construction, and drawing. I want venture out in my van and work remotely while traveling around the country to find the best outdoor recreation spots.Thank you for stopping by to peruse my page, and if you have any questions or would like to contact me do not hesitate to reach out in the "Contact Me" section.</li>
                    </ul>
                </div>
                </div>
            </section>
        </section>
    </div>
    )
}

export default About;