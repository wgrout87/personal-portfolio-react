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
        <div className="container flex-row">
            <img className="col-sm-4 col-md-6 col-lg-2" src="../assets/images/pixel-avatar.png" alt="pixel avatar of William Grout"></img>
            <div className="speech-bubble col-sm-8 col-md-6 col-lg-4">
                <h2 className="text-center p-3">Hi, I'm William Grout!</h2>
            </div>
        </div>
    )
}

export default About;