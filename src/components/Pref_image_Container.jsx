import React from 'react';
import mp from '../stylesheets/MainPreference.module.css';
import example from '../image/example.png'

const ImageContainer =()=>{
    return(
    <div className={mp.Pref_image_container}>
        <img src={example} alt=""/>

    </div>
    )

}

export default ImageContainer;

