import React, { useEffect } from "react";

function Header(props) {
    const {
        currentCategory,
        setCurrentCategory
    } = props;

    useEffect(() => {
        setTimeout(() => {
            document.getElementById(currentCategory).style.transform = 'translateY(0px)';
        }, 300);
    }, [currentCategory])

    return (
        <header className="bg-primary mb-4 py-2 flex-row align-center">
            <div className="container mx-3 flex-row justify-space-between-lg justify-center align-center">
                <h1>William Grout</h1>

                <nav className="text-center mx-3">
                    <button
                        className={`btn pill mx-1 ${currentCategory === 'about' && 'navActive'}`}
                        onClick={() => setCurrentCategory('about')}
                    >
                        About Me
                    </button>
                    <button
                        className={`btn pill mx-1 ${currentCategory === 'portfolio' && 'navActive'}`}
                        onClick={() => setCurrentCategory('portfolio')}
                    >
                        Portfolio
                    </button>
                    <button
                        className={`btn pill mx-1 ${currentCategory === 'contact' && 'navActive'}`}
                        onClick={() => setCurrentCategory('contact')}
                    >
                        Contact Me
                    </button>
                    <button
                        className={`btn pill mx-1 ${currentCategory === 'resume' && 'navActive'}`}
                        onClick={() => setCurrentCategory('resume')}
                    >
                        Resume
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;