import React from 'react';
import Bark from '../../images/Bark.png';
import Jumble from '../../images/Jumble.png';
import Where2P from '../../images/Where2P.PNG';
import CMS from '../../images/CMS.png';
import "./style.css";
import projects from './projects.json'

function Projects() {

    function render(image) {
        switch (image) {
            case "CMS":
                return CMS;
            case "Jumble":
                return Jumble;
            case "Bark":
                return Bark;
            case "Where2P":
                return Where2P;
        }
    }
    return (
        <div id="project-background">
            <div className="center">
                <h1 id="project-title">Projects</h1>
                <div className="scroll-animations">
                    {projects.map((project, index) => (
                        (index % 2 === 0) ? 
                            <div key={project.title} className="project animateR">
                            <div className="image-container">
                                <div className="tech-used">
                                    {projects[index].tech.map(tech => (
                                        <p key={tech + index} className="tech">{tech}</p>
                                    ))}
                                </div>
                                <img className="image" src={render(project.image)} alt={project.alt} />
                            </div>
                            <div className="project-content">
                                <h5>{project.title}</h5>
                                <hr />
                                <p className="description">{project.description}</p>
                                <a className="projectLink" href={project.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
                                <a className="projectLink right" href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed Site</a>
                            </div>
                        </div>
                        :
                        
                        <div key={project.title} className="project animateL">
                            
                            <div className="project-content">
                                <h5>{project.title}</h5>
                                <hr />
                                <p className="description">{project.description}</p>
                                <a className="projectLink" href={project.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
                                <a className="projectLink right" href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed Site</a>
                            </div>
                            <div className="image-container">
                                <div className="tech-used">
                                    {projects[index].tech.map(tech => (
                                        <p key={tech + index} className="tech">{tech}</p>
                                    ))}
                                </div>
                                <img className="image" src={render(project.image)} alt={project.alt} />
                            </div>
                        </div>
                                    
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;