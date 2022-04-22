import React from 'react';
import style from './Title.module.css';

type propsType = {
    backgroundText?: string,
    text: string
    span: string
}

function Title(props: propsType) {
    return (
        <div className={style.title}>
            <h2>{props.text} <span>{props.span}</span></h2>
            <span className={style.titleBg}>{props.backgroundText}</span>
        </div>
    );
}

export default Title;