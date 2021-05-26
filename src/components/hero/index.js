import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Hero() {
    return (
        <section id="landing">
            <p id="typewriter">Hello world!</p>
            <div id="about">
                <div id="heading">My name is Jake Dudum.</div>
                <div id="sub-heading">I'm a Full Stack Web Developer located in San Bruno, California.</div>
                <div id="sub-heading">Check out my work below or shoot me over an email to get in touch.</div>
                <div id="links">
                    <div className="linkContainer">
                        <a href="https://www.linkedin.com/in/jakedudum" class="iconLink" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon id="linkedin" icon={faLinkedin} size="3x" />
                        </a>
                    </div>
                    <div className="linkContainer">
                        <a href="https://github.com/JakeDudum" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon id="github" icon={faGithubSquare} size="3x" />
                        </a>
                    </div>
                    <div className="linkContainer">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvWF8egOrjyWmH-t21TmTB32taW6Y7NSMRj4r79DYWd0-tJw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon id="email" icon={faEnvelope} size="3x" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;