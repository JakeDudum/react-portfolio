import React, { Component } from 'react';
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
import "./style.css";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section id="landing">
                    <div id="selfieBox">
                        <img className="spinIn" id="selfie" src={Selfie} alt="A selfie of Jake Dudum" />
                    </div>
                    <div className="typewriter">
                        <h3>HELLO WORLD!</h3>
                    </div>
                    <p id="bio">Welcome to my website! I am a full stack web
                    developer proficient in both MERN and SERN full stacks. I am also proficient in HTML, CSS, and
                    Javascript as demonstrated by my projects in the portfolio section. I love learning new technologies,
                    new node packages, and new languages in order to better my current and future projects. I am a problem
                    solver through and through it's why I love coding so much, I get to solve problems and in the process
                make even more problems to solve.</p>
                </section>
                <section id="techSkills">
                    <br></br>
                    <h1 className="title">Technological Skills</h1>
                    <br></br>
                    <div className="scroll-animations">
                        <div className="skill animated">
                            <img className="logo" src={HTML} alt="HTML5 Logo" />
                            <p>HTML5</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={CSS} alt="CSS3 Logo" />
                            <p>CSS3</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={JS} alt="Javascript Logo" />
                            <p>Javascript</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={Bootstrap} alt="Bootstrap Logo" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={Materialize} alt="Materialize Logo" />
                            <p>Materialize</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={Node} alt="Node Logo" />
                            <p>Node.js</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={Express} alt="Express Logo" />
                            <p>Express</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={MySQL} alt="MySQL Logo" />
                            <p>MySQL</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={MongoDB} alt="MongoDB Logo" />
                            <p>MongoDB</p>
                        </div>
                        <div className="skill animated">
                            <img className="logo" src={ReactLogo} alt="React Logo" />
                            <p>React.js</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutMe;