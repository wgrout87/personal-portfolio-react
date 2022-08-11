import React, { useEffect } from "react";

function Resume() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 30%';
        document.getElementById('clouds').style.backgroundPosition = '0% 45%';
        document.getElementById('hills').style.backgroundPosition = '0% 60%';
        document.getElementById('me').style.backgroundPosition = '0% 85%';
    }, []);

    return (
        <div id="resume" className="transition" style={{ transform: 'translateY(-100vh)' }}>
            <h2>Resume</h2>
        </div>
    )
}

export default Resume;