import React, { useEffect } from "react";

function Portfolio() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 10%';
        document.getElementById('clouds').style.backgroundPosition = '0% 15%';
        document.getElementById('hills').style.backgroundPosition = '0% 20%';
        document.getElementById('me').style.backgroundPosition = '0% 0%';
        document.getElementById('me').classList.remove("me");
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
        </div>
    )
}

export default Portfolio;