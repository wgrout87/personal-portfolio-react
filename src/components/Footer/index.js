import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-secondary py-2 flex-row align-center">
            <div className="container flex-row justify-center align-center">
                <a href="https://github.com/wgrout87" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/william-grout-49945b232/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://stackoverflow.com/users/18238467/william-grout" target="_blank" rel="noreferrer">
                    <FaStackOverflow />
                </a>
            </div>
        </footer>
    )
}

export default Footer;