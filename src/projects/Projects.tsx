import React from 'react';
import style from './Projects.module.scss';
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImg from "../assets/image/todo.png";
import socialImg from "../assets/image/social.jpeg";
import cardsAppImg from "../assets/image/cardsApp.png";
import tagsNotesImg from "../assets/image/tagsNote.png";


function Projects() {

    const styleHandler = (urlName: string) => {
        return {
            backgroundImage: `url(${urlName})`
        }
    }

    const social = styleHandler(socialImg);
    const todolist = styleHandler(todoImg);
    const cardsApp = styleHandler(cardsAppImg);
    const taggedNotes = styleHandler(tagsNotesImg);

    const projectsInfo = [
        {
            id: '1',
            codeLink: 'https://github.com/Dora-ApplePie/todolistApp/',
            viewLink: 'https://dora-applepie.github.io/todolistApp/',
            style: todolist,
            title: "Todolist",
            description: 'TS, React, Redux, Hooks, Functional components, RestAPI, Thunk, Axios, Material UI, Unit Tests, Storybook, SnapShot testing.',
        },
        {
            id: '2',
            codeLink: 'https://github.com/Dora-ApplePie/socialNetworkReact18',
            viewLink: 'https://dora-applepie.github.io/socialNetworkReact18/',
            style: social,
            title: "Social network",
            description: 'TS, React, Redux, RestAPI, Axios, Thunk, React Class components and migrate to the Functional components, React Router DOM.',
        },
        {
            id: '3',
            codeLink: 'https://github.com/Dora-ApplePie/cards-project',
            viewLink: 'https://dora-applepie.github.io/cards-project/',
            style: cardsApp,
            title: "Cards learning App",
            description: 'TS, React, Redux, HTML/CSS, RestAPI, Axios, Thunk, React Router DOM, Formik, Material UI.',
        },
        {
            id: '4',
            codeLink: 'https://github.com/Dora-ApplePie/note-with-tags/',
            viewLink: 'https://dora-applepie.github.io/note-with-tags/',
            style: taggedNotes,
            title: "Tagged notes",
            description: 'TS, React, Redux, React Functional components, HTML/SCSS, LocalStorage, Uuid.',
        },
    ]

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
