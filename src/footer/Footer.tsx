import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/container.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Daria Golenko</h2>
                <div className={style.SocialContainer}>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                    <div className={style.social}></div>
                </div>
                <span>Все права защищены 2022</span>
            </div>
        </div>
    );
}

export default Footer;