import React, { useEffect } from "react";

function Resume() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 30%';
    });

    return (
        <div>
            <h2>Resume</h2>
        </div>
    )
}

export default Resume;