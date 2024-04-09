import React from "react";
import resumeFile from "../../assets/resumeFile/resume-port.pdf"

function Resume() {

    return (
        <section className="container">
            <div className="row">
                <h1 className="col-12 resume-head">Resume Details</h1>
                <a href={resumeFile} target="_blank" rel="noreferrer" className="col-12 col-md-6 col-lg-6 text-info fs-3 text-center p-4">
                    Click Here To View Full Resume
                </a>
                <div className="col-12 col-md-6 col-lg-6 resume-text">
                    <h2>Front-End Skills</h2>
                    <ul className="col-12 col-md-6 col-lg-6 resume-list" >
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>Laravel Blade</li>
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
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;