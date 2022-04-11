import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Project</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;