import React, { Component } from 'react';
import Projects from '../projects';
import AboutMe from '../aboutMe';
import Resume from '../../documents/Resume.pdf';
import "./style.css";

class Navbar extends Component {
    state = {
        currentComponent: "AboutMe"
    };

    setComponent(id, e) {
        e.preventDefault();
        this.setState({
            currentComponent: id
        });
        this.loadComponent();
    }

    loadComponent() {
        let component;
        switch (this.state.currentComponent) {
            case 'AboutMe':
                component = <AboutMe />;
                break;
            case 'Projects':
                component = <Projects />;
                break;
            default:
                component = <AboutMe />;
                break;
        }
        return component;
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <h1 className="name">Jake Dudum</h1>
                    <div className="links">
                        <div onClick={(e) => this.setComponent("AboutMe", e)} className="link">About Me</div>
                        <div onClick={(e) => this.setComponent("Projects", e)} className="link">Projects</div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvWF8egOrjyWmH-t21TmTB32taW6Y7NSMRj4r79DYWd0-tJw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="link">Contact</a>
                        <a href= { Resume } target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                    </div>
                </nav>
                {this.loadComponent()}
            </div>
        )
    }
}

export default Navbar;