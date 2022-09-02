import React from "react";

function PortfolioPiece({ element, setCurrentProject, currentProject }) {
    return (
        <article className="bg-primary p-3 m-3 rounded-corners">
            <a href={element.url} target="_blank" rel="noreferrer">
                <img src={element.img} alt={`${element.title} website preview`} id={element.id} />
                <label htmlFor={element.id} className="rounded-corners dynamic-text pointer">
                    {element.title}<br />
                    <span>{element.technologies}</span>
                </label>
            </a>
            <div className="flex-row justify-space-between">
                <span className="pointer" onClick={() => {
                    setCurrentProject(Math.max(currentProject - 1, 0))
                }}>{'<'}</span>
                <a className="dynamic-text" href={element.github} target="_blank" rel="noreferrer">GitHub Repo</a>
                <span className="pointer" onClick={() => {
                    setCurrentProject(Math.min(currentProject + 1, 5))
                }}>{'>'}</span>
            </div>
        </article>
    )
}

export default PortfolioPiece;
