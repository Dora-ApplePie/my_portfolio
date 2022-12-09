import React from 'react';
import style from './Main.module.scss';

function Main() {
    return (
        <div id={"main"} className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.photo}></div>
                <div className={style.intro}>
                    <h1>I'm DARIA GOLENKO.</h1>
                    <span>Frontend React Developer</span>
                    <div><a target={"_blank"} href={'https://drive.google.com/file/d/1Vh6i_ziWUTV0-p9TqMfwZRFfO9TyGmCp/view?usp=share_link'} className={style.buttonCV}>OPEN CV</a></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
