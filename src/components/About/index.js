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
                    My name is Will, and I used to make pizzas on a food truck. I enjoyed pursuing a passion for cooking, but with a shifting economy and a global pandemic shutting many businesses down, I desided to turn my sights elsewhere. I found a passion for coding while taking a 24 week bootcamp, and I hope to be able to continue to develop my coding skills throughout a long career as a web developer.
                    <br />
                    <br />
                    So far I've learned the basics of several front end and back end technologies, and I'm looking to bring that knowledge to bear on professional projects.
                </p>
            </div>
        </div>
    )
}

export default About;