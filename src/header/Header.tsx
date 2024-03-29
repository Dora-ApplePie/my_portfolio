import React from 'react';
import style from './Header.module.scss';
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <Nav />
            </div>
        </div>
    );
}

export default Header;
