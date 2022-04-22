import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/container.module.css'
import Title from "../common/components/title/Title";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <Title text={"Daria "} span={"Golenko"} backgroundText={"Resume"}/>
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