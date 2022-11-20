import React from 'react'
import CustomSwiper from "../customComponents/CustomSwiper";
import {achievementsSliderData, articlesSliderData} from "../../data/customSwiperData";

const AbtPSwipersSec = () => {
    return (
        <div className='abtP-swiper__sec'>
            <img src="./assets/images/abtPSwipersBg.png" className='abtP-swiper__sec-bg'/>
            <div className='abtP-swiper__sec-overlay'></div>
            <div className='container'>
                <div className='abtP-swiper__sec-body'>
                    <div className='abtP-swSec-achievementSwiper-wrap'>
                        <h1 className='swiper-title title-white'>Наши достижения</h1>
                        <CustomSwiper slidesList={achievementsSliderData} />
                    </div>
                    <div className='abtP-swSec-articleSwiper-wrap'>
                        <h1 className='swiper-title title-white'>Наши статьи в журналах</h1>
                        <CustomSwiper slidesList={articlesSliderData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbtPSwipersSec