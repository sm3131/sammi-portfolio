import React from "react";
import Project from "../Project"

function Portfolio() {

    const projects =
        [
            {
                title: 'Climb Crux Conquer',
                name: 'climb-crux-conquer',
                link: 'https://climb-crux-conquer-471f0be43ef1.herokuapp.com/',
                repo: 'https://github.com/sm3131/climb-crux'
            },
            {
                title: 'Workout Tracker Pro',
                name: 'workout-app',
                link: 'https://workout-tracker-pro.herokuapp.com/',
                repo: 'https://github.com/sm3131/workout-tracker-pro'
            },
            {
                title: 'Rocks and Ropes',
                name: 'rocks-and-ropes-app',
                link: 'https://rocks-and-ropes.herokuapp.com/',
                repo: 'https://github.com/dmknapp2385/rocks-and-ropes'
            },
            {
                title: 'Coding Tech Blog',
                name: 'tech-blog-app',
                link: 'https://tech-blog30.herokuapp.com/',
                repo: 'https://github.com/sm3131/tech-blog'
            },
            {
                title: 'Bored and Brews',
                name: 'bored-brews-app',
                link: 'https://fmatthew40.github.io/bored-and-brews/',
                repo: 'https://github.com/fmatthew40/bored-and-brews'
            },
            {
                title: 'Weather Tracker',
                name: 'weather-app',
                link: 'https://sm3131.github.io/weather-dashboard/',
                repo: 'https://github.com/sm3131/weather-dashboard'
            }
        ]

    return (
        <section className="container">
            <h1 className="work-head">My Work</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[0]} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[1]} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[2]} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[3]} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[4]} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <Project project={projects[5]} />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;