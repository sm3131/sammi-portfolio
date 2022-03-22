import React from "react";
import resumeLogo from "../../assets/img/resume.png"
import resumeFile from "../../assets/resumeFile/resume.pdf"

function Resume() {

    return (
        <section className="container">
            <div className="row">
                <h1 className="col-12 resume-head">Resume</h1>
                <a href={resumeFile} target="_blank" className="col-12 col-md-6 col-lg-6">
                    <img src={resumeLogo} className="col-12" />
                </a>
                <div className="col-12 col-md-6 col-lg-6 resume-text">
                    <h2>Front-End Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6 resume-list" >
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>BootStrap</li>
                        <li>jQuery</li>
                    </ul>
                    <h2>Back-End Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6 resume-list">
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;