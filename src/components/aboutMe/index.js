import React from 'react';
import Selfie from '../../images/Selfie.PNG';
import "./style.css";

function AboutMe() {
    return (
        <section id="landing">
            <div id="selfieBox">
                <img className="spinIn" id="selfie" src={Selfie} alt="A selfie of Jake Dudum" />
            </div>
            <div className="typewriter">
                <h3>HELLO  WORLD!</h3>
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
            </div>
        </section>
    )
}

export default AboutMe;