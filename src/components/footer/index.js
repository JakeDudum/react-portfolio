import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function Footer() {
    return (
        <footer id="footer">
            <div id="links">
                <div className="linkContainer">
                    <a href="https://www.linkedin.com/in/jake-dudum-45a967185/" target="_blank" rel="noopener noreferrer">
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
            <p>Copyright &copy; 2020</p>
        </footer>
    )
}

export default Footer;