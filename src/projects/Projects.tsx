import React from 'react';
import style from './Projects.module.scss';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import {projectsInfo} from "../common/textInfo/projectsInfo";


function Projects() {

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"My "} span={"projects"} backgroundText={"works"}/>
                <div className={style.projects}>

                    {
                        projectsInfo.map((p) => <Project key={p.id} title={p.title} description={p.description}
                                                         style={p.style} viewLink={p.viewLink} codeLink={p.codeLink}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
