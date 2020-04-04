import React from 'react';
import RPS from '../../images/RPS-Multiplayer.png';
import Bark from '../../images/Bark.png';
import Jumble from '../../images/Jumble.png';
import Where2P from '../../images/Where2P.PNG';
import "./style.css";

function Projects() {
    return (
        <div className="center">
            <h2>Projects Completed</h2>
            <hr></hr>
            <div className="project">
                <img className="image" src={Jumble} alt="Jumble Site" />
                <h5>Jumble</h5>
                <p className="description">An app for project management that is completely user-data driven.
                Users can sign up for an account and then add projects by filling in a new project
                form that will ask for a project name, due date, budget for various departments, and
                an initial task with due date.
                    </p>
                <a className="projectLink" href="https://github.com/JakeDudum/jumble-dash" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a className="projectLink right" href="https://jumble-dash.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
            </div>

            <div className="project">
                <img className="image" src={Bark} alt="Bark Site" />
                <h5>Bark</h5>
                <p className="description">An app inspired by Yik-Yak. Users can sign up for account and voice
                whatever they want to those in their city. The site features a basic user profile to
                view old posts and a few simple categories along with a like counter.
                    </p>
                <a className="projectLink" href="https://github.com/JakeDudum/Bark" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a className="projectLink right" href="https://tranquil-bastion-82369.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
            </div>

            <div className="project">
                <img className="image" src={Where2P} alt="Where2P Site" />
                <h5>Where2P</h5>
                <p className="description">An app designed to help people find a bathroom quick.
                The app uses multiple API's including Google Maps API, Yelp API, and
                Google Places API in order to help the user find the closest
                bathroom available and features user reviews as well.
                    </p>
                <a className="projectLink" href="https://github.com/JakeDudum/Where2p" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a className="projectLink right" href="https://jakedudum.github.io/Where2p/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
            </div>

            <div className="project">
                <img className="image" src={RPS} alt="RPS-multiplayer Site" />
                <h5>RPS-Multiplayer</h5>
                <p className="description">An online multiplayer version of Rock-Paper-Scissors. Only two
                players can play at any given time and only those two players can use the chat
                functionality of the site. Player 1 always goes first followed by Player 2.
                    </p>
                <a className="projectLink" href="https://github.com/JakeDudum/RPS-Multiplayer" target="_blank" rel="noopener noreferrer">Github Repo</a>
                <a className="projectLink right" href="https://jakedudum.github.io/RPS-Multiplayer/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
            </div>
        </div>
    )
}

export default Projects;