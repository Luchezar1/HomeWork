import React from 'react';
import fs from '../stylesheets/FooterStyle.module.css';

const FooterInfo =()=>{
    return(<div className={fs.footer_main_block}>
            <div className={fs.footer_info}>
                <a className={fs.a} href="#"><p>Головна</p></a>
                <a className={fs.a}href="#"><p>Послуги</p></a>
                <a className={fs.a} href="#"><p>переваги</p></a>
                <a className={fs.a} href="#"><p>Наші роботи</p></a>
                <a className={fs.a} href="#"><p>спеціалісти</p></a>
                <a className={fs.a} href="#"><p>контакти</p></a>
            </div>
        </div>
)
}

export default FooterInfo;
