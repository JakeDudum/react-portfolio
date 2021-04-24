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
import "./style.css";


function Technologies() {
    return (
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
    )
}

export default Technologies;