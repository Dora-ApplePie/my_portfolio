import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/container.module.css';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImg from "../assets/image/todo.png";
import socialImg from "../assets/image/social.jpeg";


function Projects() {

    const social = {
        backgroundImage: `url(${socialImg})`,
    };

    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title text={"My "} span={"projects"} backgroundText={"works"}/>
                <div className={style.projects}>
                    <Project style={todolist} title={"Todolist"} description={"TS, React, Redux, Hooks, RestAPI, Thunk, Axios, Material UI, Unit Tests, Storybook, SnapShot."}/>
                    <Project style={social} title={"Social network"} description={"TS, React, Redux, RestAPI, Axios, Thunk, Classes, Routing, Unit Tests."}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;