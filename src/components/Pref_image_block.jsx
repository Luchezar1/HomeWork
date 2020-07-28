import React from 'react';
import mp from '../stylesheets/MainPreference.module.css';
import Vector from '../image/Vector.png';
import Vector_list from '../image/Vector_list.png';
import Vector_leaf from '../image/Vector_leaf.png';
import Vector_mail from '../image/Vector_mail.png';

const ImageBlock=()=>{
    return(
            <div className={mp.Pref_image_block}>
                <div className={mp.Pref_image_content}>
                    <img className={mp.Pref_image} src={Vector_list}/>
                    <p className={mp.Pref_image_content}>Сертифіковані спеціалісти зі стажем від 5 років </p>
                </div>
                <div className={mp.Pref_image_content}>
                    <img className={mp.Pref_image} src={Vector_leaf}/>
                    <p className={mp.Pref_image_content}>Сертифіковані спеціалісти зі стажем від 5 років </p>
                </div>
                <div className={mp.Pref_image_content}>
                    <img className={mp.Pref_image} src={Vector_mail}/>
                    <p className={mp.Pref_image_content}>Сертифіковані спеціалісти зі стажем від 5 років </p>
                </div>
                <div className={mp.Pref_image_content}>
                    <img className={mp.Pref_image} src={Vector_list}/>
                    <p className={mp.Pref_image_content}>Сертифіковані спеціалісти зі стажем від 5 років </p>
                </div>
                <div className={mp.Pref_image_content}>
                    <img className={mp.Pref_image} src={Vector}/>
                    <p className={mp.Pref_image_content}>Сертифіковані спеціалісти зі стажем від 5 років </p>
                </div>
            </div>
    )
}

export default ImageBlock;
