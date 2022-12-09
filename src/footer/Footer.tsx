import React from 'react';
import style from './Footer.module.scss';
import Title from "../common/components/title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Title text={"Daria "} span={"Golenko"} backgroundText={"Resume"}/>
                <div className={style.SocialContainer}>
                    <div><a target={"_blank"} href={"mailto:dasha-golenko@mail.ru"}><FontAwesomeIcon className={style.socialImg} icon={faEnvelope}/></a></div>
                    <div> <a target={"_blank"} href={"https://t.me/appple_pie"}><FontAwesomeIcon className={style.socialImg} icon={faTelegram} /></a></div>
                    <div> <a target={"_blank"} href={"https://www.linkedin.com/in/darya-golenko-7b69861a9/"}><FontAwesomeIcon className={style.socialImg} icon={faLinkedin} /></a></div>
                    <div> <a target={"_blank"} href={"https://github.com/Dora-ApplePie?tab=repositories"}><FontAwesomeIcon className={style.socialImg} icon={faGithub} /></a></div>
                </div>
                <span>© 2022, All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
