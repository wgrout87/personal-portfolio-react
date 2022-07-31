import React from "react";

function Header(props) {
    const {
        currentCategory,
        setCurrentCategory
    } = props;

    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <h1>William Grout</h1>
            </div>

            <nav className="text-center mx-3">
                <button
                    className={`btn pill ${currentCategory === 'about' && 'navActive'}`} onClick={() => setCurrentCategory('about')}>About Me</button>
                <button className={`btn pill ${currentCategory === 'portfolio' && 'navActive'}`} onClick={() => setCurrentCategory('portfolio')}>Portfolio</button>
                <button className={`btn pill ${currentCategory === 'contact' && 'navActive'}`} onClick={() => setCurrentCategory('contact')}>Contact Me</button>
                <button className={`btn pill ${currentCategory === 'resume' && 'navActive'}`} onClick={() => setCurrentCategory('resume')}>Resume</button>
            </nav>
        </header>
    )
}

export default Header;