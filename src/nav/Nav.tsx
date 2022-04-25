import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.active} href={"#main"}>Main</a>
            <a href={"#skills"}>Skills</a>
            <a href={"#projects"}>Project</a>
            <a href={"#contacts"}>Contacts</a>
        </div>
    );
}

export default Nav;