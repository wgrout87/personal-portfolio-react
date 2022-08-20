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
                    My name is William Grout. I've been a professional pizza cook for seven years with Fiore Pizza, but am currently transitioning into full stack web development. As I rose to leadership positions at Fiore, I was entrusted with teaching new employees the skills they needed to not only succeed but thrive in their roles.
                    <br />
                    <br />
                    Recently, I am a graduate of the University of Utah's Coding Bootcamp, where I have gained both front and backend web development skills. I've recently gained the hard skills necessary to enter the workplace as a full stack developer, but I've been cultivating the soft skills necessary to integrate into a team for years.
                </p>
            </div>
        </div>
    )
}

export default About;