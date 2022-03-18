import React from "react";
import github from "../../assets/img/github.png"

function Project() {

    // const [projects] = useState([
    //     {
    //         name: 'workout-app',
    //         link: 'https://workout-tracker-pro.herokuapp.com/',
    //         repo: 'https://github.com/sm3131/workout-tracker-pro'
    //     },
    //     {
    //         name:'',
    //         link:'',
    //         repo:''
    //     }
    // ])

    const projects = 
    [
        {
            name: 'workout-app',
            link: 'https://workout-tracker-pro.herokuapp.com/',
            repo: 'https://github.com/sm3131/workout-tracker-pro'
        }
    ]

    return (
        <div className="bg-image hover-overlay ripple shadow-1-strong rounded">
            {projects.map((project) => (
                <img src={require(`../../assets/img/${project.name}.png`)} className="w-100" alt="workout-tracker-app" />
            ))}
            {projects.map((project) => (
          <div className="mask image-cover">
              <a href={project.link} target="_blank" className="project-anchor"><h2 className="project-name">Workout Tracker Pro</h2></a>
              <a href={project.repo} target="_blank" className="project-anchor"><img src={github} className="project-img"/><span className="project-repo">GitHub Repo</span></a>
          </div>
            ))}
      </div>
    )
}

export default Project;