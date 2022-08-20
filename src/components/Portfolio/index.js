import React, { useEffect } from "react";
import PortfolioPiece from "../PortfolioPiece";
import projects from "../PortfolioPiece/projects";

function Portfolio() {
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
                <div className="col-12 col-md-6 p-3">
                    {projects.slice(0, 3).map((element) => {
                        return <PortfolioPiece key={element.id} element={element} />
                    })}
                </div>
                <div className="col-12 col-md-6 p-3">
                    {projects.slice(3).map((element) => {
                        return <PortfolioPiece key={element.id} element={element} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;