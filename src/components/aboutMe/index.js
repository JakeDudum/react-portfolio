import React, { Component } from 'react';
import Hello from '../../images/helloWorld.jpg';
import "./style.css";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <img className="hello" src={Hello} alt="Hello World." />
                <p className="bio">Welcome to my website! I am a full stack web
                developer proficient in both MERN and SERN full stacks. I am also proficient in HTML, CSS, and
                Javascript as demonstrated by my projects in the portfolio section. I love learning new technologies,
                new node packages, and new languages in order to better my current and future projects. I am a problem
                solver through and through it's why I love coding so much, I get to solve problems and in the process
                make even more problems to solve.</p>
            </div>
        )
    }
}

export default AboutMe;