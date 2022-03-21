import React from "react";
import github from "../../assets/img/github.png"

function Project({ project }) {

    const { title, name, link, repo } = project;

    return (
        <div className="bg-image hover-overlay ripple shadow-1-strong rounded img-div">
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


{/* <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
{projects.map((project) => (
    <img src={require(`../../assets/img/${project.name}.png`)} className="w-100" alt="workout-tracker-app" />
))}
{projects.map((project) => (
<div className="mask image-cover">
  <a href={project.link} target="_blank" className="project-anchor"><h2 className="project-name">Workout Tracker Pro</h2></a>
  <a href={project.repo} target="_blank" className="project-anchor"><img src={github} className="project-img"/><span className="project-repo">GitHub Repo</span></a>
</div>
))}
</div> */}