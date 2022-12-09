import React from 'react';
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {skillSet} from "../common/textInfo/skillsInfo";


function Skills() {

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"My "} span={"skills"} backgroundText={"ability"}/>
                <div className={style.skills}>
                    {
                        skillSet.map((s, i) => <Skill key={i} title={s.title} description={s.description}
                                                      iconImage={s.iconImage}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Skills;
