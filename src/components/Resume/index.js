import React from "react";
import resumeLogo from "../../assets/img/resume.png"
import resumeFile from "../../assets/resumeFile/resume.pdf"

function Resume() {

    return (
        <section className="container">
            <div className="row">
                <h1 className="col-12 resume-head">Resume</h1>
                <a href={"/"} target="_blank" rel="noreferrer" className="col-12 col-md-6 col-lg-6">
                    <img src={resumeLogo} alt="MERN stack coding resume logo" className="col-12" />
                </a>
                <div className="col-12 col-md-6 col-lg-6 resume-text">
                    <h2>Front-End Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6 resume-list" >
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>Blade</li>
                        <li>Livewire</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                        <li>BootStrap</li>
                    </ul>
                    <h2>Back-End Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6 resume-list">
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>MySQL</li>
                        <li>Eloquent</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;