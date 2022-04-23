import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/container.module.css'
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <Title text={"Get in"} span={"touch"} backgroundText={"contact"}/>
                <form className={style.contactsForm}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}/>
                </form>
                <button type="submit" className={style.submitBtn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;