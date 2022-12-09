import React, {useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import useMatchMedia from "use-match-media";
import {Navigation, Pagination} from "swiper";
import {reviewsList} from "../../data/reviewsData";
import {FilteredReviews} from "../pagesComponents/FilteredReviews";

const ReviewPage = () => {
    const [tablet] = [useMatchMedia('(max-width: 767px)') || false]
    const [currentPage, setCurrentPage] = useState(1)

    const reviewsPerPage = 3

    const lastReviewStart = currentPage * reviewsPerPage
    const firstReviewStart = lastReviewStart - reviewsPerPage
    const currentReviews = reviewsList.slice(0, lastReviewStart)
    const totalPages = Math.ceil(reviewsList.length / reviewsPerPage)

    const addReviewsHandler = () => {
        setCurrentPage(currentPage + 1)
    }

    const reviewIncrement = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        } else {
            return null
        }
    }

    const reviewDecrement = () => {
        if(currentPage === 1) {
            return null
        } else if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <section className='reviews-section'>
            <img className='review-section__bg-img' src="./assets/images/reviewSecBG.png" alt=""/>
            <div className='reviews-section__overlay'></div>
            <div className="container">
                <div className="reviews-section__body">
                    <h1 className='reviews-section__title title-white'>Oтзывы</h1>
                    <div className='mobile-reviews-sec'>
                        <FilteredReviews reviews={currentReviews} />
                        <button className='reviews-add-btn btn-dGr' onClick={addReviewsHandler}>Загрузить ещё отзывы</button>
                        <div className='filtered-reviews__laptop-contorls'>
                            <div className='filtered-reviews__laptop-contorls__body'>
                                <button className='filtered-reviews-button-prev filtered-reviews-control' onClick={reviewDecrement}>&#x2190;</button>
                                <div className='filtered-reviews-fraction'>
                                    {currentPage}/{totalPages}
                                </div>
                                <button className='filtered-reviews-button-next filtered-reviews-control' onClick={reviewIncrement}>&#x2192;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewPage