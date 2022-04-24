import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/container.module.css'

function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}></div>
                <div className={style.intro}>
                    <h1>I'm DARIA GOLENKO.</h1>
                    <span>Frontend React Developer</span>
                    <div><a href={'#'} className={style.buttonCV}>Download CV</a></div>
                </div>
            </div>
        </div>
    );
}

export default Main;