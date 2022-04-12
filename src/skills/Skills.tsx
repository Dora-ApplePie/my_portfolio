import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/container.module.css';
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS/TS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur cupiditate debitis distinctio "}/>
                    <Skill title={"CSS/HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda "}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"Redux"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda "}/>
                    <Skill title={"Redux-Thunk"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"REST API"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"Axios"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"StoryBook"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"Unit Tests"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"Postman"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"Material UI"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda consectetur "}/>
                    <Skill title={"Git"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam asperiores assumenda "}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;