import React, { useEffect } from "react";

function Portfolio() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 10%';
        document.getElementById('clouds').style.backgroundPosition = '0% 15%';
        document.getElementById('hills').style.backgroundPosition = '0% 20%';
        document.getElementById('me').style.backgroundPosition = '0% -50%';
    }, []);

    return (
        <div id="portfolio" className="transition container flex-row" style={{ transform: 'translateY(-100vh)' }}>
            <div className="col-10 container flex-row">
                <div className="col-12 col-md-6 p-3">
                    <article className="bg-primary p-3 m-3 rounded-corners">
                        <a href="https://dawnwogerman.github.io/6degreesofkevinbacon/" target="_blank" rel="noreferrer">
                            <img src="./assets/images/6_degrees.png" alt="6 Degrees of Kevin Bacon website preview" id="6-degrees" />
                            <label for="6-degrees" className="rounded-corners dynamic-text">
                                6 Degrees of Kevin Bacon<br />
                                <span>HTML, CSS, Javascript, Jquery, Bulma, and server-side API's</span>
                            </label>
                        </a>
                    </article>
                    <article className="bg-primary p-3 m-3 rounded-corners">
                        <a href="https://github.com/wgrout87/Employee-Tracker" target="_blank" rel="noreferrer">
                            <img src="./assets/images/github.com_wgrout87_Employee-Tracker.png" alt="Employee-Tracker github preview" id="employeeTracker" />
                            <label for="employeeTracker" className="rounded-corners dynamic-text">
                                Employee Tracker<br />
                                <span>Javascript, Node.js, MYSQL, MYSQL2</span>
                            </label>
                        </a>
                    </article>
                    <article className="bg-primary p-3 m-3 rounded-corners">
                        <a href="https://wgrout87.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
                            <img src="./assets/images/code-quiz-mobile.png" alt="Code Quiz website preview" id="code-quiz" />
                            <label for="code-quiz" className="rounded-corners dynamic-text">
                                Code Quiz<br />
                                <span>HTML, CSS, Javascript</span>
                            </label>
                        </a>
                    </article>
                </div>
                <div className="col-3 col-md-6 m-auto p-3">
                    <article className="bg-primary p-3 m-3 rounded-corners">
                        <a href="https://herooutline.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img src="./assets/images/herooutline.herokuapp.com_.png" alt="A Hero's Outline website preview" id="herosOutline" />
                            <label for="herosOutline" className="rounded-corners dynamic-text">
                                A Hero's Outline<br />
                                <span>HTML, CSS, Javascript, Bootstrap, Sequelize, Express, Node.js, Handlebars</span>
                            </label>
                        </a>
                    </article>
                    <article className="bg-primary p-3 m-3 rounded-corners">
                        <a href="https://fathomless-springs-34063.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img src="./assets/images/budget_tracker.png" alt="Budget Tracker github preview" id="budgetTracker" />
                            <label for="budgetTracker" className="rounded-corners dynamic-text">
                                Budget Tracker<br />
                                <span>PWA, MongoDB, IndexedDB</span>
                            </label>
                        </a>
                    </article>
                    <article className="bg-primary p-3 m-3 rounded-corners">
                        <a href="https://evening-river-75441.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img src="./assets/images/savedBooks.png" alt="Book Search website preview" id="book-search" />
                            <label for="book-search" className="rounded-corners dynamic-text">
                                Book Search<br />
                                <span>GraphQL, Apollo Server</span>
                            </label>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;