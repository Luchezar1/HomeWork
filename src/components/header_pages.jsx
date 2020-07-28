import React from 'react';
import s from '../stylesheets/headerStyle.module.css';

const headerPages = () => {

    return (
        <div className={s.header_pages}>
            <div className={s.header_links}>
                <a sref="#">
                    <li className={s}> Головна</li>
                </a>
                <a sref="#">
                    <li className={s}> Послуги</li>
                </a>
                <a sref="#">
                    <li className={s}> Переваги</li>
                </a>
                <a sref="#">
                    <li className={s}> Наші роботи</li>
                </a>
                <a sref="#">
                    <li className={s}> Спеціалісти</li>
                </a>
                <a sref="#">
                    <li className={s}> Контакти</li>
                </a>

            </div>
            <div>
                <button className={s.header_button_call}> Замовити дзвінок</button>
            </div>
        </div>
    )
}
export default headerPages;
