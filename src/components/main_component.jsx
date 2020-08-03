import React from 'react';
import HeaderComponent from './header_component';
import hairstyle from '../image/hairstyle.png';
import HeaderPages from '../components/header_pages';
import m from '../stylesheets/MainStyle.module.css';
import mainPicture1 from '../image/mainPicture1.png';
import mainPicture2 from '../image/mainPicture2.png';
import mainPicture3 from '../image/mainPicture3.png';
import MainPreference from "./main_preference";
import MainStuff from "./main_stuff";
import footerMap from '../image/footerMap.png';
import FooterComponent from "./footer_component";

const MainComponent = ()=>{
    return(
       <div>
           <HeaderComponent/>
           <HeaderPages/>
           <img src={hairstyle}/>
            <div className={m.main_offer}>
                Що ми пропунуємо клієнтам
            </div>
                <div className={m.main_content}>
                    <div className={m.main_content_block} >
                        <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                            Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                        <img className={m.main_content_picture} src={mainPicture1}/>
                    </div>

                    <div className={m.main_content_block} >
                        <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                            Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                        <img className={m.main_content_picture} src={mainPicture2}/>
                    </div>

                    <div className={m.main_content_block} >
                        <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                            Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                        <img className={m.main_content_picture} src={mainPicture3}/>
                    </div>

                    <div className={m.main_content_block} >
                        <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                            Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                        <img className={m.main_content_picture} src={mainPicture1}/>
                    </div>
                </div>

           <div className={m.main_content}>
               <div className={m.main_content_block} >
                   <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                       Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                   <img className={m.main_content_picture} src={mainPicture1}/>
               </div>

               <div className={m.main_content_block} >
                   <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                       Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                   <img className={m.main_content_picture} src={mainPicture2}/>
               </div>

               <div className={m.main_content_block} >
                   <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                       Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                   <img className={m.main_content_picture} src={mainPicture3}/>
               </div>

               <div className={m.main_content_block} >
                   <div className={m.main_content_text}><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Orci eu cursus convallis malesuada. Suscipit sapien, fringilla vitae sed. Ante lacus netus odio enim dignissim pellentesque eu tortor phasellus.
                       Sed sem et, leo tortor vivamus metus augue donec.</p> </div>
                   <img className={m.main_content_picture} src={mainPicture1}/>
               </div>
           </div>
                <MainPreference/>
                <br/>
                <br/>
                <MainStuff/>
           <br/>
           <br/>
           <img src={footerMap} alt=""/>
           <FooterComponent/>
       </div>
    )
}
export default MainComponent;
