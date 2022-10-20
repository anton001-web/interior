import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import useMatchMedia from "use-match-media";
import {allCompletedProjectsMob} from "../../data/servicesData";

const DswpCmptProjects = ({data}) => {
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]
    const dswpCompletedP = React.createRef()
    const cardsContainer = React.createRef()

    const dswpCpmPrLimit = allCompletedProjectsMob.length
    const dswpCpmPrIncrease = 4;
    const pageCount = Math.ceil(dswpCpmPrLimit / dswpCpmPrIncrease);

    let currentPage = 1;
    let from = 0
    let to = 4

    const createCard = (el) => {
        const card = document.createElement('div')
        card.className = 'dswp-completedP__list-item'
        card.innerHTML = `<img src=${el.img}/>`
        cardsContainer.current.append(card)
    }

    const addDswpCpmPr = (pageIndex) => {
        currentPage = pageIndex
        const list = allCompletedProjectsMob.slice(from, to)
        list.forEach(el => createCard(el))
    }

    const addElems = () => {
        // cardsContainer.current.classList.add('active')
        from = from + 4
        to = to + 4
        addDswpCpmPr(currentPage + 1, from, to)
    }

    window.onload = function () {
        addDswpCpmPr(currentPage);
    }

    // useEffect(() => {
    //     mob && dswpCompletedP.current.remove()
    // }, [])

    const {
       title,
       list
    } = data

    return (
        <section className='dswp-completedP__section'>
            <div className='dswp-completedP__section-bg'><img src="./assets/images/dswpCmpPrjsBG.png" alt=""/></div>
            <div className='dswp-completedP__section-overlay'></div>
            <div className='container'>
                <div className='dswp-completedP__section-body'>
                    <div className='dswp-completedP-wrap'>
                        <h1 className='dswp-completedP__title title-white'>{title}</h1>
                        <div className='dswp-completedP__swiper-block'>
                            {
                                !mob ? (
                                    <Swiper
                                        ref={dswpCompletedP}
                                        modules={[Navigation, Pagination]}
                                        slidesPerView={1}
                                        className='dswp-completedP__swiper'
                                        spaceBetween={30}
                                        navigation={{
                                            nextEl: '.dswp-completedP-swiper-button-next',
                                            prevEl: '.dswp-completedP-swiper-button-prev'
                                        }}
                                        pagination={{
                                            el: '.custom-dswp-completedP-swiper-fraction',
                                            type: 'custom',
                                            renderCustom: function (swiper, current, total) {
                                                return `<span class='dswp-completedP-swiper__pag-count'>${current}</span>` + '/' + (total);
                                            }
                                        }}
                                    >
                                        {
                                            list.map((slide, ind) => (
                                                <SwiperSlide
                                                    key={ind}
                                                    className='dswp-completedP__swiper-slide'
                                                >
                                                    <div className='dswp-completedP__swiperS-body'>
                                                        {
                                                            slide.imgList.map((img, ind) => (
                                                                <img
                                                                    className='dswp-completedP__swiperS-body-img'
                                                                    key={ind}
                                                                    src={img.img}
                                                                    alt="picture"
                                                                    data-grid-pos={ind + 1}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                        <div className='dswp-completedP__swiper-controls_block'>
                                            <div className='dswp-completedP__swiper-controls'>
                                                <button className='dswp-completedP-swiper-button-prev dswp-completedP-swiper__control'>&#x2190;</button>
                                                <div className='custom-dswp-completedP-swiper-fraction'></div>
                                                <button className='dswp-completedP-swiper-button-next dswp-completedP-swiper__control'>&#x2192;</button>
                                            </div>
                                        </div>
                                    </Swiper>
                                ) : (
                                    <>
                                        <div className='dswp-completedP__list-block' ref={cardsContainer}>

                                        </div>
                                        <button onClick={() => addElems()} className='dswp-completedP__seeMore-btn btn-gr'>Загрузить ещё</button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DswpCmptProjects