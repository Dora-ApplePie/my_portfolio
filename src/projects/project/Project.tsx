import React from 'react';
import style from './Project.module.css';

type PropsType = {
    title: string
    description: string
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href={"#"} className={style.button}>Look</a>
            </div>
            <div className={style.title}>{props.title}</div>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;