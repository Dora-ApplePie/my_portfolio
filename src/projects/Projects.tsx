import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/container.module.css';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImg from "../assets/image/todo.png";
import socialImg from "../assets/image/social.jpeg";


function Projects() {

    const social = {
        backgroundImage: `url(${todoImg})`,
    };

    const todolist = {
        backgroundImage: `url(${socialImg})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${style.projectsContainer} ${styleContainer.container}`}>
                <Title text={"My "} span={"projects"} backgroundText={"works"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
                    <Project style={todolist} title={"Todolist"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen."}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;