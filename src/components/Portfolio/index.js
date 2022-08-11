import React, { useEffect } from "react";

function Portfolio() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 10%';
        document.getElementById('clouds').style.backgroundPosition = '0% 15%';
        document.getElementById('hills').style.backgroundPosition = '0% 20%';
        document.getElementById('me').style.backgroundPosition = '0% -50%';
    }, []);

    return (
        <div id="portfolio" className="transition" style={{ transform: 'translateY(-100vh)' }}>
            <article>
                <a href="https://dawnwogerman.github.io/6degreesofkevinbacon/">
                    <img src="../../../public/assets/images/6_degrees.png" alt="6 Degrees of Kevin Bacon website preview" id="6-degrees" />
                    <label for="6-degrees" class="project-title">
                        6 Degrees of Kevin Bacon<br />
                        <span>HTML, CSS, Javascript, Jquery, Bulma, and server-side API's</span>
                    </label>
                </a>
            </article>
            {/* <article>
                <a href="https://wgrout87.github.io/Horiseon/">
                    <img src="./assets/images/horiseon.png" alt="Horiseon website preview" id="horiseon" />
                    <label for="horiseon" class="project-title">
                        Horiseon Code Refactor<br />
                        <span>HTML, CSS</span>
                    </label>
                </a>
            </article> */}
            {/* <article>
                <a href="https://wgrout87.github.io/Code-Quiz/">
                    <img src="./assets/images/code-quiz-mobile.png" alt="Code Quiz website preview" id="code-quiz" />
                    <label for="code-quiz" class="project-title">
                        Code Quiz<br />
                        <span>HTML, CSS, Javascript</span>
                    </label>
                </a>
            </article>
            <article>
                <a href="https://wgrout87.github.io/daily-planner/">
                    <img src="./assets/images/daily-planner-mobile.png" alt="Daily Planner website preview" id="daily-planner" />
                    <label for="daily-planner" class="project-title">
                        Daily Planner<br />
                        <span>HTML, CSS, Javascript, Bootstrap, and JQuery</span>
                    </label>
                </a>
            </article>
            <article>
                <a href="https://wgrout87.github.io/Weather-Dashboard/">
                    <img src="./assets/images/weather-dashboard.png" alt="Weather Dashboard website preview" id="weather-dashboard" />
                    <label for="weather-dashboard" class="project-title">
                        Weather Dashboard<br />
                        <span> HTML, CSS, Javascript, Bootstrap, and server-side API's</span>
                    </label>
                </a>
            </article>
            <article>
                <a href="https://dawnwogerman.github.io/6degreesofkevinbacon/">
                    <img src="./assets/images/6_degrees.png" alt="6 Degrees of Kevin Bacon website preview" id="6-degrees" />
                    <label for="6-degrees" class="project-title">
                        6 Degrees of Kevin Bacon<br />
                        <span>HTML, CSS, Javascript, Jquery, Bulma, and server-side API's</span>
                    </label>
                </a>
            </article> */}
        </div>
    )
}

export default Portfolio;