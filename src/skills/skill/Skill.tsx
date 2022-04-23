import React from 'react';
import style from './Skill.module.css';

type propsType = {
    title: string
    description: string
}

function Skill(props: propsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <div className={style.skillInfo}>
                <h3>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
}

export default Skill;