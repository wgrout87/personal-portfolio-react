import React from "react";
import projects from "./projects";

function PortfolioPiece({ project, setCurrentProject, currentProject }) {
    return (
        <article className="bg-primary p-3 m-3 rounded-corners">
            <a href={project.url} target="_blank" rel="noreferrer">
                <img src={project.img} alt={`${project.title} website preview`} id={project.id} />
                <label htmlFor={project.id} className="rounded-corners dynamic-text pointer">
                    <span className="border-bottom">{project.title}</span>
                    <br /><br />
                    <span className="border-bottom">Summary:</span><br />{project.summary}
                    <br /><br />
                    <span className="border-bottom">Technologies:</span><br />{project.technologies}
                </label>
            </a>
            <div className="flex-row justify-space-between mt-2">
                <span className="pointer" onClick={() => {
                    currentProject === 0 ? setCurrentProject(projects.length - 1) : setCurrentProject(currentProject - 1);
                }}>{'<'}</span>
                <a className="dynamic-text" href={project.github} target="_blank" rel="noreferrer">GitHub Repo</a>
                <span className="pointer" onClick={() => {
                    currentProject === projects.length - 1 ? setCurrentProject(0) : setCurrentProject(currentProject + 1);
                }}>{'>'}</span>
            </div>
        </article>
    )
}

export default PortfolioPiece;
