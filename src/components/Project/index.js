import React from "react";
import github from "../../assets/img/github.png"

function Project({ project }) {

    const { title, name, link, repo } = project;

    return (
        <div className="bg-image hover-overlay img-div">
            <img src={require(`../../assets/img/${name}.png`)} className="w-100 app-img" alt="workout-tracker-app" />
                <div className="mask image-cover">
                <div className="row">
                    <a href={link} target="_blank" className="project-anchor"><h2 className="project-name">{title}</h2></a>
                    <a href={repo} target="_blank" className="project-anchor"><img src={github} className="project-img" /></a>
                </div>
            </div>
        </div>
    )
}

export default Project;


