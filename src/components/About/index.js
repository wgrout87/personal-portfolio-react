import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 0%';
        document.getElementById('clouds').style.backgroundPosition = '0% 0%';
        document.getElementById('hills').style.backgroundPosition = '0% 0%';
        document.getElementById('me').style.backgroundPosition = '0% 100vh';
    }, []);

    return (
        <div id="about" className="container flex-row transition" style={{ transform: 'translateY(-100vh)' }}>
            <div className="col-4 col-md-3 col-lg-2">
                <img id="avatar" src="../assets/images/pixel-avatar.png" alt="pixel avatar of William Grout"></img>
            </div>
            <div className="speech-bubble col-8 col-md-6 col-lg-4 p-sm-3 p-1 mx-auto">
                <h2 className="speech-bubble-text text-center">Hi, I'm William Grout!</h2>
                <p className="speech-bubble-text text-center">I'm a Full Stack Web Developer</p>
            </div>
            <div className="col-11 col-md-11 col-lg-6 p-3 bg-primary mx-auto rounded-corners mb-4">
                <h2 className="speech-bubble-text bg-light rounded-corners p-2 mb-3">About Me:</h2>
                <p className="speech-bubble-text about-me bg-light rounded-corners p-2 mb-0 mt-2">
                    My name is William Grout and I'm working toward a career change to web development. I worked for eight years in the restaurant industry, but have recently been establishing my corporate office bona fides at HealthEquity.
                    <br />
                    <br />
                    I am a graduate of the University of Utah's Coding Bootcamp, where I have gained both front and backend web development skills. I'm hoping to leverage the attitude of hard work and diligence I've developed in my previous roles to demonstrate value with my new coding skills.
                </p>
            </div>
        </div>
    )
}

export default About;