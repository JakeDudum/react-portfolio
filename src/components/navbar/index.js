import React, { Component } from 'react';
import Resume from '../../documents/Resume.pdf';
import Menu from '../../images/menu.png';
import "./style.css";

class Navbar extends Component {
    state = {
        dropdownMenu: false
    };


    toggle = target => {
        this.setState({ [target]: !this.state[target] });
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <h1 className="name">Jake Dudum</h1>
                    <div className="links">
                        <a href="#aboutMe" className="link">About Me</a>
                        <a href="#project-background" className="link">Projects</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvWF8egOrjyWmH-t21TmTB32taW6Y7NSMRj4r79DYWd0-tJw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="link">Contact</a>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                    </div>
                    <img className="menuIcon" src={Menu} alt="menu" onClick={() => this.toggle("dropdownMenu")} />
                    <div id="navbar-menu" style={{ display: `${this.state.dropdownMenu ? "block" : "none"}` }}>
                        <a href="#aboutMe" className="link" onClick={() => this.toggle("dropdownMenu")}>About Me</a>
                        <a href="#project-background" className="link" onClick={() => this.toggle("dropdownMenu")}>Projects</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvWF8egOrjyWmH-t21TmTB32taW6Y7NSMRj4r79DYWd0-tJw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="link">Contact</a>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;