import React from 'react';
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div id={"contacts"} className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title text={"Get in"} span={"touch"} backgroundText={"contact"}/>
                <form className={style.contactsForm}>
                    <input type={"text"} placeholder={"YOUR NAME"} className={style.input}/>
                    <input type={"text"} placeholder={"YOUR EMAIL"} className={style.input}/>
                    <textarea placeholder={"YOUR MESSAGE"} className={style.textarea}/>
                </form>
                <button type="submit" className={style.submitBtn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
