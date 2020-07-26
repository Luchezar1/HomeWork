import React from 'react';
import h from './headerStyle.module.css';
const HeaderPages = ()=>{

    return(
    <div className={h.header_pages}>
       <div className={h.header_links}>
       <a href="#"><li  className={h}>  Головна</li></a>
       <a href="#"><li  className={h}>  Послуги</li></a>
       <a href="#"><li  className={h}>  Переваги</li></a>
       <a href="#"><li  className={h}>  Наші роботи</li></a>
       <a href="#"><li  className={h}>  Спеціалісти</li></a>
       <a href="#"><li  className={h}>  Контакти</li></a>

       </div  >
       <div>
       <button  className={h.header_button_call} >  Замовити дзвінок   </button>
       </div>
     </div>
    )
}
export default HeaderPages;
