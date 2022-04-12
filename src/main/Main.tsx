import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/container.module.css'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.intro}>
                    <span>Hi There</span>
                    <h1>I am DARIA GOLENKO</h1>
                    <p>A Frontend Developer.</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;