import React from "react";

function Header(props) {
    const {
        currentCategory,
        setCurrentCategory
    } = props;

    function toggleNightMode(e) {
        document.body.classList.toggle('night');
        document.getElementById('clouds').classList.toggle('night-clouds');
        document.getElementById('hills').classList.toggle('night-hills');
    };

    return (
        <header className="bg-primary mb-4 py-2 flex-row align-center">
            <div className="container mx-3 flex-row justify-space-between-lg justify-center align-center">
                <h1>William Grout</h1>

                <nav className="text-center mx-3">
                    <button
                        className={`btn pill ${currentCategory === 'about' && 'navActive'}`} onClick={() => setCurrentCategory('about')}>About Me</button>
                    <button className={`btn pill ${currentCategory === 'portfolio' && 'navActive'}`} onClick={() => setCurrentCategory('portfolio')}>Portfolio</button>
                    <button className={`btn pill ${currentCategory === 'contact' && 'navActive'}`} onClick={() => setCurrentCategory('contact')}>Contact Me</button>
                    <button className={`btn pill ${currentCategory === 'resume' && 'navActive'}`} onClick={() => setCurrentCategory('resume')}>Resume</button>
                </nav>
            </div>
            <label htmlFor="toggleNightMode" className="ml-3">Night Mode:</label>
            <label className="switch">
                <input type="checkbox" name="toggleNightMode" id="toggleNightMode" onChange={toggleNightMode} />
                <span className="slider round"></span>
            </label>
        </header>
    )
}

export default Header;