import React from 'react';
import h from './headerStyle.module.css';
import logo from '../image/logo.png';

 const HeaderComponent = () => {
    return (
       <div className={h.comm_header} >
          
          <div  className={h.logo_block}>
             <img className={h.logo_param}  src={logo} />
             <div className={h.logo_text}  >BEAUTY STUDIO</div>
          </div>
             <div className={h.header_contacts}>
               <p> м.Вінниця,вул.Шевченка,17 </p>
               <p>+38 (097) 123-45-67 </p>
             </div>
            
          </div>
    )

}
export default HeaderComponent;