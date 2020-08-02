import React from 'react';
import mp from '../stylesheets/MainPreference.module.css';
import ImageBlock from "./Pref_image_block";
import ImageContainer from "./Pref_image_Container";

const MainPreference = () => {

    return (
        <div>
            <div className={mp.Pref_our_pref}>
                <div className={mp.Pref_text}><p className={mp}>НАШІ ПЕРЕВАГИ</p></div>
                <ImageBlock/>
            </div>
            <ImageContainer/>
        </div>
    )
}
export default MainPreference;
