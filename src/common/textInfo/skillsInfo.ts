import tsIcon from "../../assets/icons/typescript.svg";
import reactIcon from "../../assets/icons/react_icon.svg";
import reduxIcon from "../../assets/icons/redux_icon.svg";
import reduxToolkitIcon from "../../assets/icons/redux_toolkit.svg";
import htmlIcon from "../../assets/icons/html-1.svg";
import sassIcon from "../../assets/icons/sass-1.svg";
import axiosIcon from "../../assets/icons/axios_logo_icon.svg";
import apiIcon from "../../assets/icons/restApi.svg";
import gitIcon from "../../assets/icons/file_type_git_icon.svg";
import storybookIcon from "../../assets/icons/file_type_storybook.svg";
import materialIcon from "../../assets/icons/material-ui-1.svg";
import postmanIcon from "../../assets/icons/postman-icon.svg";
import {SkillSetType} from "../types/types";


export const skillSet: SkillSetType[] = [
    {
        iconImage: tsIcon,
        title: "JS/TS",
        description: "DOM, Immutable, event, array methods, prototype, generics, classes, promises, async/await, tests, cookies etc.",
    },
    {
        iconImage: reactIcon,
        title: "React",
        description: 'Hooks, props, render, functional and classes components etc.',
    },
    {
        iconImage: reduxIcon,
        title: "Redux",
        description: 'Flow, flux, reducers, store, actions, dispatch, selectors etc.',
    },
    {
        iconImage: reduxToolkitIcon,
        title: "Redux-Toolkit",
        description: 'A package that makes working with Redux easier',
    },
    {
        iconImage: htmlIcon,
        title: "CSS/HTML",
        description: 'Elements, attributes, formatting, borders, margins, positions, flex, grid, media etc.',
    },
    {
        iconImage: sassIcon,
        title: "SASS",
        description: 'Mixins, variables, nesting, fragmentation, import, inheritance etc.',
    },
    {
        iconImage: axiosIcon,
        title: "AXIOS",
        description: 'Instance, handling errors, get, post, put, delete etc.',
    },
    {
        iconImage: apiIcon,
        title: "REST API",
        description: 'Request payload, response data, endpoint, http codes, get, post, put, delete etc.',
    },
    {
        iconImage: gitIcon,
        title: "GIT",
        description: 'Branch, checkout, merge, pull, push, commit, remote, ssh, clone, gitignore etc.',
    },
    {
        iconImage: storybookIcon,
        title: "Storybook",
        description: 'Args, decorators, parameters, snapshot testing, loaders etc.',
    },
    {
        iconImage: materialIcon,
        title: "Material UI",
        description: 'Inputs, buttons, data display, navigation, feedback  etc.',
    },
    {
        iconImage: postmanIcon,
        title: "Postman",
        description: 'Requests, setting cookie, API key, base URL, environment variables, query parameters  etc.',
    },
]
