import React from 'react';
import style from './Skill.module.css';


type propsType = {
    title: string
    description: string
    iconImage: string
}

function Skill(props: propsType) {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={props.iconImage}/>
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