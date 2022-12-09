import React from 'react'
import {reviewData} from "../data/reviewData";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

const Section7 = () => {
    return (
        <section className='review-section'>
            <div className="container">
                <div className="review-section__body">
                    <h1 className='title-white'>Отзывы</h1>
                    <div className='review-list__block'>
                        <div className="review-list">
                            {
                                reviewData.map((item, ind) => (
                                    <div
                                        className='review-list__item'
                                        key={ind}
                                        data-num={ind + 1}

                                    >
                                        <p className='review-list__item-text'>{item.text}</p>
                                        <span className='review-list__item-auth'>{item.auth}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <Swiper
                            className='review-genSec-swiper'
                            slidesPerView={1}
                            loop={true}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            breakpoints={{
                                480: {
                                    slidesPerView: 3
                                }
                            }}
                            modules={[Navigation, Pagination]}
                            pagination={{
                                el: '.custom-swiper1-fraction',
                                clickable: true
                            }}
                        >
                            {
                                reviewData.map((item, ind) => (
                                    <SwiperSlide
                                        key={ind}
                                        className='review-swiper__slide'

                                    >
                                        <div
                                            className='review-list__item'
                                            data-num={ind + 1}
                                        >
                                            <p className='review-list__item-text'>{item.text}</p>
                                            <span className='review-list__item-auth'>{item.auth}</span>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <div className='custom-swiper1-fraction'></div>
                        </Swiper>
                        <button className="review-section__btn btn-blk">
                            Смотреть все отзывы
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7