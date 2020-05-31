import React from 'react';
import HTML from '../../images/HTML5.png';
import CSS from '../../images/CSS3.png';
import JS from '../../images/Javascript.png';
import Materialize from '../../images/Materialize.png';
import Bootstrap from '../../images/Bootstrap.png';
import Node from '../../images/Node.png';
import Express from '../../images/Express.png';
import MySQL from '../../images/MySQL.svg';
import MongoDB from '../../images/MongoDB.png';
import ReactLogo from '../../images/React.png';
import Selfie from '../../images/Selfie.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function AboutMe() {
    return (
        <div>
            <section id="landing">
                <div id="selfieBox">
                    <img className="spinIn" id="selfie" src={Selfie} alt="A selfie of Jake Dudum" />
                </div>
                <div className="typewriter">
                    <h3>HELLO WORLD!</h3>
                </div>
                <div id="bio">
                    <p className="tab">Hi my name if you didn't already know is Jake Dudum. I am a full stack web developer currently working at Trilogy Education Services as a teaching
                    assistant helping teach students from all walks of life how to code in MERN stack. Learning how to code is one thing, but teaching others to do it gives 
                    one a whole new perspective on things and really hammers home the importance of the basics and fundamentals of coding. You also get to see a whole lot of 
                    error screens and comile errors you may never have seen before accompanied of course with plenty of red text which you get to solve which is what I love doing, 
                    solving problems.</p>
                    <br></br>
                    <p className="tab">
                    Admittedly it took me well over seven years to solve the problem of what I really wanted to do in life. I worked in the customer service, 
                    food service, and delivery industries during those years and though I never hated my work I also never saw myself doing it for the rest of my life. Thankfully I 
                    figured out that I love coding in no small part thanks to my brother, Jerry, and my friend Darryl. On a much lighter note I enjoy playing video games in
                    my free time on my custom built gaming PC and am an achievement hunter/completionist.
                    </p>
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
                </div>
            </section>
            <section id="techSkills">
                <br></br>
                <h1 className="title">Technological Skills</h1>
                <br></br>
                <div className="scroll-animations">
                    <div className="skill animated">
                        <img className="logo" src={HTML} alt="HTML5 Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={CSS} alt="CSS3 Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={JS} alt="Javascript Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={Bootstrap} alt="Bootstrap Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={Materialize} alt="Materialize Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={Node} alt="Node Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={Express} alt="Express Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={MySQL} alt="MySQL Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={MongoDB} alt="MongoDB Logo" />
                    </div>
                    <div className="skill animated">
                        <img className="logo" src={ReactLogo} alt="React Logo" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;