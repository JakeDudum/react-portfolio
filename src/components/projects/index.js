import React from 'react';
import RPS from '../../images/RPS-Multiplayer.png';
import Bark from '../../images/Bark.png';
import Jumble from '../../images/Jumble.png';
import Where2P from '../../images/Where2P.PNG';
import CMS from '../../images/CMS.png';
import WIP from '../../images/WIP-logo.png';
import "./style.css";

function Projects() {
    return (
        <div id="project-background">
            <div className="center">
                <h1 id="project-title">Projects</h1>
                <div className="scroll-animations">
                    <div className="project animateR">
                        <div className="image-container">
                            <div className="tech-used">
                                <p className="tech">HTML</p>
                                <p className="tech">CSS</p>
                                <p className="tech">JavaScript</p>
                                <p className="tech">jQuery</p>
                                <p className="tech">Bootstrap</p>
                                <p className="tech">PHP</p>
                                <p className="tech">MySQL</p>
                            </div>
                            <img className="image" src={CMS} alt="PHP CMS" />
                        </div>
                        <div className="project-content">
                            <h5>PHP CMS</h5><img className="wip" src={WIP} alt="Work in Progress Icon" />
                            <hr />
                            <p className="description">A content management system (CMS) built from a Udemy course.
                                Users can view posts, like them, and comment as well as create new posts and categories.
                                Admin approval is required for posts and comments in order to be visibile. </p>
                            <a className="projectLink" href="https://github.com/JakeDudum/Udemy-PHP-CMS" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            <a className="projectLink right" href="https://frozen-waters-48792.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                        </div>
                    </div>

                    <div className="project animateL">
                        <div className="image-container">
                            <div className="tech-used">
                                <p className="tech">HTML</p>
                                <p className="tech">CSS</p>
                                <p className="tech">JavaScript</p>
                                <p className="tech">React</p>
                                <p className="tech">MySQL</p>
                                <p className="tech">Node</p>
                                <p className="tech">Express</p>
                                <p className="tech">Passport</p>
                            </div>
                            <img className="image" src={Jumble} alt="Jumble Site" />
                        </div>
                        <div className="project-content">
                            <h5>Jumble</h5>
                            <hr />
                            <p className="description">An app for project management that is user-data driven.
                                Users can sign up for an account and add projects by filling in a new project
                                form that will ask for a project name, due date, budget for various departments, and
                                an initial task with due date.</p>
                            <a className="projectLink" href="https://github.com/JakeDudum/jumble-dash" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            <a className="projectLink right" href="https://jumble-dash.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                        </div>
                    </div>

                    <div className="project animateR">
                        <div className="image-container">
                            <div className="tech-used">
                                <p className="tech">HTML</p>
                                <p className="tech">CSS</p>
                                <p className="tech">JavaScript</p>
                                <p className="tech">Bootstrap</p>
                                <p className="tech">MySQL</p>
                                <p className="tech">Node</p>
                                <p className="tech">Express</p>
                                <p className="tech">Passport</p>
                            </div>
                            <img className="image" src={Bark} alt="Bark Site" />
                        </div>
                        <div className="project-content">
                            <h5>Bark</h5>
                            <hr />
                            <p className="description">An app inspired by Yik-Yak. Users can sign up for account and voice
                                whatever they want to those in their city. The site features a basic user profile to
                                view old posts and a few simple categories along with a like counter.</p>
                            <a className="projectLink" href="https://github.com/JakeDudum/Bark" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            <a className="projectLink right" href="https://tranquil-bastion-82369.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                        </div>
                    </div>

                    <div className="project animateL">
                        <div className="image-container">
                            <div className="tech-used">
                                <p className="tech">HTML</p>
                                <p className="tech">CSS</p>
                                <p className="tech">JavaScript</p>
                                <p className="tech">jQuery</p>
                                <p className="tech">Materialize</p>
                                <p className="tech">Firebase</p>
                            </div>
                            <img className="image" src={Where2P} alt="Where2P Site" />
                        </div>
                        <div className="project-content">
                            <h5>Where2P</h5>
                            <hr />
                            <p className="description">An app designed to help people find a bathroom quick.
                                The app uses multiple API's including Google Maps API, Yelp API, and
                                Google Places API in order to help the user find the closest
                                bathroom available and features user reviews as well.</p>
                            <a className="projectLink" href="https://github.com/JakeDudum/Where2p" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            <a className="projectLink right" href="https://jakedudum.github.io/Where2p/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                        </div>
                    </div>

                    <div className="project animateR">
                        <div className="image-container">
                            <div className="tech-used">
                                <p className="tech">HTML</p>
                                <p className="tech">CSS</p>
                                <p className="tech">JavaScript</p>
                                <p className="tech">jQuery</p>
                                <p className="tech">Bootstrap</p>
                                <p className="tech">Firebase</p>
                            </div>
                            <img className="image" src={RPS} alt="RPS-multiplayer Site" />
                        </div>
                        <div className="project-content">
                            <h5>RPS-Multiplayer</h5>
                            <hr />
                            <p className="description">An online multiplayer version of Rock-Paper-Scissors. Only two
                                players can play at any given time and only those two players can use the chat
                                functionality of the site. Player 1 always goes first followed by Player 2.</p>
                            <a className="projectLink" href="https://github.com/JakeDudum/RPS-Multiplayer" target="_blank" rel="noopener noreferrer">Github Repo</a>
                            <a className="projectLink right" href="https://jakedudum.github.io/RPS-Multiplayer/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;