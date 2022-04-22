import React from 'react';
import style from './Project.module.css';

type PropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <a href={"#"} className={style.button}>Look</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.ProjectTitle}>{props.title}</h3>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;