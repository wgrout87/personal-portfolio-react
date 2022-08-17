import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow, FaEnvelope } from 'react-icons/fa';

function Footer() {
    function toggleNightMode(e) {
        document.body.classList.toggle('night');
        document.getElementById('clouds').classList.toggle('night-clouds');
        document.getElementById('hills').classList.toggle('night-hills');
        document.getElementById('me').classList.toggle('night-me');
    };

    return (
        <footer className="bg-primary py-2 flex-row justify-space-between px-5">
            <div className="flex-row justify-center align-center">
                <a href="https://github.com/wgrout87" target="_blank" rel="noreferrer" className="tooltip">
                    <FaGithub />
                    <span className="tooltiptext">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/william-grout-49945b232/" target="_blank" rel="noreferrer" className="tooltip">
                    <FaLinkedin />
                    <span className="tooltiptext">LinkedIn</span>
                </a>
                <a href="https://stackoverflow.com/users/18238467/william-grout" target="_blank" rel="noreferrer" className="tooltip">
                    <FaStackOverflow />
                    <span className="tooltiptext">Stack Overflow</span>
                </a>
                <a href="mailto: wgrout87@gmail.com" className="tooltip">
                    <FaEnvelope />
                    <span className="tooltiptext">Email</span>
                </a>
            </div>
            <div>
                <label htmlFor="toggleNightMode" className="ml-3">Night Mode:</label>
                <label className="switch">
                    <input type="checkbox" name="toggleNightMode" id="toggleNightMode" onChange={toggleNightMode} />
                    <span className="slider round"></span>
                </label>
            </div>
        </footer>
    )
}

export default Footer;