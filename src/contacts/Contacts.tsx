import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <a href={'#'} className={style.button}>Send</a>
            </div>
        </div>
    );
}

export default Contacts;