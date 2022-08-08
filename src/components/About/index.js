import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 0%';
    });

    return (
        <div>
            <h2>About Me</h2>
        </div>
    )
}

export default About;