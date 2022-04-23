import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"My "} span={"skills"} backgroundText={"ability"}/>
                <div className={style.skills}>
                    <Skill title={"JS/TS"} description={"DOM, Immutable, event, array methods, prototype, generics, classes, promises, async/await, tests, cookies etc."}/>
                    <Skill title={"CSS/HTML"} description={"Elements, attributes, formatting, borders, margins, positions, flex, grid, media etc."}/>
                    <Skill title={"React"} description={"Hooks, props, render, functional and classes components etc."}/>
                    <Skill title={"Redux"} description={"Flow, flux, reducers, store, actions, dispatch, selectors etc."}/>
                    <Skill title={"SCSS"} description={"Mixins, variables, Nesting, fragmentation, import, inheritance etc."}/>
                    <Skill title={"GIT"} description={"Branch, checkout, merge, pull, push, commit, remote, ssh, clone, gitignore etc."}/>
                    <Skill title={"REST API"} description={"Request payload, response data, endpoint, http codes, get, post, put, delete etc."}/>
                    <Skill title={"AXIOS"} description={"Instance, handling errors, get, post, put, delete etc."}/>
                    <Skill title={"Storybook"} description={"Args, decorators, parameters, snapshot testing, loaders etc."}/>
                    <Skill title={"Material UI"} description={"Inputs, buttons, data display, navigation, feedback  etc."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;