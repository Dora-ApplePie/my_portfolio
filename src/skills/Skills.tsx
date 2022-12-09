import React from 'react';
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import tsIcon from "../assets/icons/typescript.svg";
import reduxIcon from "../assets/icons/redux_icon.svg";
import reduxToolkitIcon from "../assets/icons/redux_toolkit.svg";
import apiIcon from "../assets/icons/restApi.svg";
import axiosIcon from "../assets/icons/axios_logo_icon.svg";
import storybookIcon from "../assets/icons/file_type_storybook.svg";
import materialIcon from "../assets/icons/material-ui-1.svg";
import gitIcon from "../assets/icons/file_type_git_icon.svg";
import htmlIcon from "../assets/icons/html-1.svg";
import sassIcon from "../assets/icons/sass-1.svg";
import reactIcon from "../assets/icons/react_icon.svg";
import postmanIcon from "../assets/icons/postman-icon.svg";

function Skills() {

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"My "} span={"skills"} backgroundText={"ability"}/>
                <div className={style.skills}>
                    <Skill iconImage={tsIcon} title={"JS/TS"} description={"DOM, Immutable, event, array methods, prototype, generics, classes, promises, async/await, tests, cookies etc."}/>
                    <Skill iconImage={reactIcon} title={"React"} description={"Hooks, props, render, functional and classes components etc."}/>
                    <Skill iconImage={reduxIcon} title={"Redux"} description={"Flow, flux, reducers, store, actions, dispatch, selectors etc."}/>
                    <Skill iconImage={reduxToolkitIcon} title={"Redux-Toolkit"} description={"A package that makes working with Redux easier"}/>
                    <Skill iconImage={htmlIcon} title={"CSS/HTML"} description={"Elements, attributes, formatting, borders, margins, positions, flex, grid, media etc."}/>
                    <Skill iconImage={sassIcon} title={"SASS"} description={"Mixins, variables, nesting, fragmentation, import, inheritance etc."}/>
                    <Skill iconImage={axiosIcon} title={"AXIOS"} description={"Instance, handling errors, get, post, put, delete etc."}/>
                    <Skill iconImage={apiIcon} title={"REST API"} description={"Request payload, response data, endpoint, http codes, get, post, put, delete etc."}/>
                    <Skill iconImage={gitIcon} title={"GIT"} description={"Branch, checkout, merge, pull, push, commit, remote, ssh, clone, gitignore etc."}/>
                    <Skill iconImage={storybookIcon} title={"Storybook"} description={"Args, decorators, parameters, snapshot testing, loaders etc."}/>
                    <Skill iconImage={materialIcon} title={"Material UI"} description={"Inputs, buttons, data display, navigation, feedback  etc."}/>
                    <Skill iconImage={postmanIcon} title={"Postman"} description={"Requests, setting cookie, API key, base URL, environment variables, query parameters  etc."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
