import React from 'react';
import mp from '../stylesheets/MainPreference.module.css';
import ImageBlock from "./Pref_image_block";
const MainPreference = () => {

    return (
        <div>
            <div className={mp.Pref_our_pref}>
                <div className={mp.Pref_text}><p className={mp}>НАШІ ПЕРЕВАГИ</p></div>
                <ImageBlock/>
            </div>
        </div>
    )
}
export default MainPreference;
