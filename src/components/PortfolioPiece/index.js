import React from "react";

function PortfolioPiece({ element }) {
    return (
        <article className="bg-primary p-3 m-3 rounded-corners">
            <a href={element.url} target="_blank" rel="noreferrer">
                <img src={element.img} alt={`${element.title} website preview`} id={element.id} />
                <label htmlFor={element.id} className="rounded-corners dynamic-text">
                    {element.title}<br />
                    <span>{element.technologies}</span>
                </label>
            </a>
            <a className="dynamic-text" href={element.github} target="_blank" rel="noreferrer">GitHub Repo</a>
        </article>
    )
}

export default PortfolioPiece;
