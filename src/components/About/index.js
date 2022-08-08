import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 0%';
        document.getElementById('clouds').style.backgroundPosition = '0% 0%';
        document.getElementById('hills').style.backgroundPosition = '0% 0%';
        document.getElementById('me').style.backgroundPosition = '0% 0%';
        document.getElementById('me').classList.remove("me");
    }, []);

    return (
        <div id="about" className="container flex-row display-none">
            <div className="col-4 col-md-6 col-lg-2">
                <img id="avatar" src="../assets/images/pixel-avatar.png" alt="pixel avatar of William Grout"></img>
            </div>
            <div className="speech-bubble col-8 col-md-6 col-lg-4 p-sm-3 p-1">
                <h2 className="speech-bubble-text text-center">Hi, I'm William Grout!</h2>
                <p className="speech-bubble-text text-center">I'm a Full Stack Web Developer</p>
            </div>
        </div>
    )
}

export default About;