import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {firstSwiperData} from "../data/firstSwiperData";

import 'swiper/scss'
import {Navigation, Pagination} from "swiper";

const Section1 = () => {
    return (
        <section className='section1'>
            <div className='section1-body'>
                <Swiper
                    className='section1-swiper'
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        el: '.custom-swiper1-faction',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            return current + '/' + (total - 1);
                        }
                    }}
                    loop
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl: '.swiper1-button-prev',
                        nextEl: '.swiper1-button-next',
                    }}
                >
                    <div className='first-section__titles-group'>
                        <img src="./assets/images/sec1Logo.png" alt=""/>
                        <span className='first-section__title'>Студия интерьера Яны Петерсон</span>
                    </div>
                    {firstSwiperData.map(slide => (
                        <SwiperSlide key={slide} className='section1-swiper__slide'>
                            <img src={slide.img} alt=""/>
                        </SwiperSlide>
                    ))}
                    <div className='swiper1-bottom-border'></div>
                    <div className='swiper1-buttons__block'>
                        <button className='swiper1-button-prev'><img src="./assets/images/prevArr.png" alt=""/></button>
                        <div className='custom-swiper1-faction'></div>
                        <button className='swiper1-button-next'><img src="./assets/images/nextArr.png" alt=""/></button>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Section1