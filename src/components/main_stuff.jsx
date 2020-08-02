import React from 'react';
import ms from '../stylesheets/MainStuff.module.css';
import chair from '../image/chair.png';
import StuffSlider from '../components/main_stuff_slaider'
const MainStuff=()=>{
    return(
        <div>
        <img src={chair} alt=""/>
        <div className={ms.stuff_container}>
                <p className={ms.stuff_text}>НАШІ СПЕЦІАЛІСТИ</p>
    <StuffSlider/>
        </div>
       </div>
    )
}

export default MainStuff;
