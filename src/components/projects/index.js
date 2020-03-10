import React from 'react';
import "./style.css";

function Projects() {
    return (
        <div>
            <img src="..." alt="RPS-multiplayer Site" />
            <div>
                <h5>RPS-Multiplayer</h5>
                <p>An online multiplayer version of Rock-Paper-Scissors. Only two
                players can play at any given time and only those two players can use the chat
                functionality of the site. Player 1 always goes first followed by Player 2.
                </p>
                <a href="https://github.com/JakeDudum/RPS-Multiplayer" target="_blank">Github Repo</a>
                <a href="https://jakedudum.github.io/RPS-Multiplayer/" target="_blank">Deployed Site</a>
            </div>
        </div>
    )
}

export default Projects;