import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {hoverVariants} from "../../otherFuncs/variants";
import {motion} from "framer-motion";

const CustomSwiper = (props) => {
    const {
        slidesList,
        imgWbg = false,
        overlayCustom = false
    } = props

    return (
        <Swiper
            slidesPerView={1}
            freeMode={true}
            className='custom-swiper'
            spaceBetween={25}
            modules={[Navigation, Pagination]}
            pagination={{
                el: '.custom-swiper-faction',
                clickable: true
            }}
            navigation={{
                prevEl: '.custom-swiper-button-prev',
                nextEl: '.custom-swiper-button-next',
            }}
            breakpoints={{
                480: {
                    freeMode: false,
                    slidesPerView: 2.5,
                    pagination: {
                        el: '.custom-swiper-faction',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            return `<span class='custom-swiper-pagination-curCount'>${current}</span>` + '/' + (total);
                        }
                    },
                },
                767: {
                    freeMode: false,
                    slidesPerView: 4,
                    pagination: {
                        el: '.custom-swiper-faction',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            return `<span class='custom-swiper-pagination-curCount'>${current}</span>` + '/' + (total);
                        }
                    },
                }
            }}
        >
            {
                slidesList.map((slide, ind) => (
                    <SwiperSlide
                        key={ind}
                        className='custom-swiper__slide'
                    >
                        {
                            !imgWbg && (
                                <div className='custom-swiper__text-group'>
                                    {slide.title && <h2 className='custom-swiper__title'>{slide.title}</h2>}
                                    {slide.subTitle && <p className='custom-swiper__subTitle'>{slide.subTitle}</p>}
                                </div>
                            )
                        }
                        <motion.div initial="rest" whileHover="hover" animate="rest" className='custom-swiperSlide-img__wrap'>
                            {
                                imgWbg && (
                                    <motion.div variants={hoverVariants} className={`custom-swiper-overlay custom`}>
                                        <span className='custom-swiper-overlay-text'>{slide.title}</span>
                                    </motion.div>
                                )
                            }
                            <img src={slide.img} alt="bottom image" className='custom-swiperSlide__img'/>
                        </motion.div>
                    </SwiperSlide>
                ))
            }
            <div className='custom-swiper__navPag-block'>
                <div className='custom-swiper__navPag'>
                    <button className='custom-swiper-button-prev custom-swiper-control'>&#x2190;</button>
                    <div className='custom-swiper-faction'></div>
                    <button className='custom-swiper-button-next custom-swiper-control'>&#x2192;</button>
                </div>
            </div>
        </Swiper>
    )
}



export default CustomSwiper