import React from "react";
import Project from "../Project"

function Portfolio() {
    return (
        <section className="container">
            <h1 className="work-head">My Work</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    {/* <h2 className="project-head">Project 1</h2> */}
                    <Project />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="project-head">Project 2</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="project-head">Project 3</h2>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="project-head">Project 4</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="project-head">Project 5</h2>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <h2 className="project-head">Project 6</h2>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;