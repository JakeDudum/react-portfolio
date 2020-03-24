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
import "./style.css";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section className="landing">
                    <p className="bio">Welcome to my website! I am a full stack web
                    developer proficient in both MERN and SERN full stacks. I am also proficient in HTML, CSS, and
                    Javascript as demonstrated by my projects in the portfolio section. I love learning new technologies,
                    new node packages, and new languages in order to better my current and future projects. I am a problem
                    solver through and through it's why I love coding so much, I get to solve problems and in the process
                make even more problems to solve.</p>
                </section>
                <section className="techSkills">
                    <h1 className="title">Technological Skills</h1>
                    <div className="skill">
                        <img className="logo" src={HTML} alt="HTML5 Logo"/>
                        HTML5
                        </div>
                    <div className="skill">
                        <img className="logo" src={CSS} alt="CSS3 Logo"/>
                        CSS3
                        </div>
                    <div className="skill">
                        <img className="logo" src={JS} alt="Javascript Logo"/>
                        Javascript
                        </div>
                    <div className="skill">
                        <img className="logo" src={Bootstrap} alt="Bootstrap Logo"/>
                        Bootstrap
                    </div>
                    <div className="skill">
                        <img className="logo" src={Materialize} alt="Materialize Logo"/>
                        Materialize
                    </div>
                    <div className="skill">
                        <img className="logo" src={Node} alt="Node Logo"/>
                        Node.js
                        </div>
                    <div className="skill">
                        <img className="logo" src={Express} alt="Express Logo"/>
                        Express
                        </div>
                    <div className="skill">
                        <img className="logo" src={MySQL} alt="MySQL Logo"/>
                        MySQL
                        </div>
                    <div className="skill">
                        <img className="logo" src={MongoDB} alt="MongoDB Logo"/>
                        MongoDB
                        </div>
                    <div className="skill">
                        <img className="logo" src={ReactLogo} alt="React Logo"/>
                        React.js
                        </div>
                </section>
            </div>
        )
    }
}

export default AboutMe;