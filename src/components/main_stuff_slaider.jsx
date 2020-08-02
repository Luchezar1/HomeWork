import React from 'react';
import ms from '../stylesheets/MainStuff.module.css';
import stuff1 from '../image/stuff_1.png'
import stuff2 from '../image/stuff_2.png'
import stuff3 from '../image/stuff_3.png'

const stuffSlider = () => {

    return (
        <div className={ms.stuff_slaider}>
            <div><img src={stuff1} alt=""/></div>
            <div><img src={stuff2} alt=""/></div>
            <div><img src={stuff3} alt=""/></div>
        </div>
    )

}

export default stuffSlider;
