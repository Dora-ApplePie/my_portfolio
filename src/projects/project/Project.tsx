import React from 'react';
import style from './Project.module.scss';

type PropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
    viewLink: string
    codeLink: string
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a target={"_blank"} href={props.viewLink} className={style.button}>Demo</a>
                <a target={"_blank"} href={props.codeLink} className={style.buttonSecond}>Code</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.ProjectTitle}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;
