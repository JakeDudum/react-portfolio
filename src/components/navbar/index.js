import React, { Component } from 'react';
import Contact from '../Contact';
import Projects from '../Projects';
import AboutMe from '../AboutMe';
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
            case 'Contact':
                component = <Contact />;
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
                    <h1>Jake Dudum</h1>
                    <div className="links">
                        <div onClick={(e) => this.setComponent("AboutMe", e)} className="link">About Me</div>
                        <div onClick={(e) => this.setComponent("Projects", e)} className="link">Projects</div>
                        <div onClick={(e) => this.setComponent("Contact", e)} className="link">Contact</div>
                        <div onClick={(e) => this.setComponent("Resume", e)} className="link">Resume</div>
                    </div>
                </nav>
                {this.loadComponent()}
            </div>
        )
    }
}

export default Navbar;