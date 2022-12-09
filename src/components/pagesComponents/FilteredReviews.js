import React from 'react'
import {AnimatePresence, motion} from "framer-motion";

export const FilteredReviews = ({reviews}) => {
    return (
        <div className='reviews-list'>
            <AnimatePresence>
                {
                    reviews.map((item, ind) => (
                        <motion.div
                            className='tablet-review-list__item'
                            key={ind}
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className='tablet-review-list__item-header'>
                                <div className='tablet-review-list__item-hBody'>
                                    <div className='review-swiper__item-content__header'>
                                        <img src={item.authImg} alt="author image" className='review-swiper__item-auth-img'/>
                                        <span className='review-swiper__item-headerText'>{item.authName}</span>
                                        <span className='review-swiper__item-headerText'>{item.authNick}</span>
                                    </div>
                                    <div className='review-swiper__item-text'>
                                        {
                                            item.textsList.map((item, ind) => (
                                                <p key={ind} className='review-swiper__item-text__item'>{item}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='tablet-review-list__item-imgBlock'>
                                <img src={item.projectData.projectImg} alt=""/>
                                <div className='tablet-review-list__item-img-overlay'></div>
                            </div>
                        </motion.div>
                    ))
                }
            </AnimatePresence>
        </div>
    )
}