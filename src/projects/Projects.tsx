import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/container.module.css';
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Project name"} description={"asdasdasd asdasda sdasda asdasdasd sdas daasdasd asd asdasdas asdasd asd dsdasd sdsdsd dsd sdasdasd asdasdasda sda sdasdasdasd"}/>
                    <Project title={"Project name"} description={"asdasda sdasdasdas dasdasdasd asdasda sdasdad dsd sdasdasd asdasdasda sda sdasdasdasd"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;