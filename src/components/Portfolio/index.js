import React, { useEffect, useState } from "react";
import PortfolioPiece from "../PortfolioPiece";
import projects from "../PortfolioPiece/projects";

function Portfolio() {
    const [currentProject, setCurrentProject] = useState(0);

    useEffect(() => {
        if (window.innerWidth <= 650) {
            document.body.style.backgroundPosition = '0% 16.67%';
            document.getElementById('clouds').style.backgroundPosition = '0% 25%';
            document.getElementById('hills').style.backgroundPosition = '0% 33.33%';
            document.getElementById('me').style.backgroundPosition = '0% 100vh';
            return;
        }
        document.body.style.backgroundPosition = '0% 10%';
        document.getElementById('clouds').style.backgroundPosition = '0% 15%';
        document.getElementById('hills').style.backgroundPosition = '0% 20%';
        document.getElementById('me').style.backgroundPosition = '0% 100vh';
    }, []);

    return (
        <div id="portfolio" className="transition container flex-row" style={{ transform: 'translateY(-100vh)' }}>
            <div className="col-10 container flex-row">
                <div className="col-12 p-3">
                    <PortfolioPiece key={currentProject.id} element={projects[currentProject]} setCurrentProject={setCurrentProject} currentProject={currentProject} />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;