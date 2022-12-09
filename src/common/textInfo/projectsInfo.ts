import socialImg from "../../assets/image/social.jpeg";
import todoImg from "../../assets/image/todo.png";
import cardsAppImg from "../../assets/image/cardsApp.png";
import tagsNotesImg from "../../assets/image/tagsNote.png";
import {styleHandler} from "../utils/urlStyleHandler";
import {ProjectInfoType} from "../types/types";


export const projectsInfo: ProjectInfoType[] = [
    {
        id: '1',
        codeLink: 'https://github.com/Dora-ApplePie/todolistApp/',
        viewLink: 'https://dora-applepie.github.io/todolistApp/',
        style: styleHandler(todoImg),
        title: "Todolist",
        description: 'TS, React, Redux, Hooks, Functional components, RestAPI, Thunk, Axios, Material UI, Unit Tests, Storybook, SnapShot testing.',
    },
    {
        id: '2',
        codeLink: 'https://github.com/Dora-ApplePie/socialNetworkReact18',
        viewLink: 'https://dora-applepie.github.io/socialNetworkReact18/',
        style: styleHandler(socialImg),
        title: "Social network",
        description: 'TS, React, Redux, RestAPI, Axios, Thunk, React Class components and migrate to the Functional components, React Router DOM.',
    },
    {
        id: '3',
        codeLink: 'https://github.com/Dora-ApplePie/cards-project',
        viewLink: 'https://dora-applepie.github.io/cards-project/',
        style: styleHandler(cardsAppImg),
        title: "Cards learning App",
        description: 'TS, React, Redux, HTML/CSS, RestAPI, Axios, Thunk, React Router DOM, Formik, Material UI.',
    },
    {
        id: '4',
        codeLink: 'https://github.com/Dora-ApplePie/note-with-tags/',
        viewLink: 'https://dora-applepie.github.io/note-with-tags/',
        style: styleHandler(tagsNotesImg),
        title: "Tagged notes",
        description: 'TS, React, Redux, React Functional components, HTML/SCSS, LocalStorage, Uuid.',
    },
]
