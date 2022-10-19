import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {servicesPricePolicyData} from "../../data/servicesData";
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";
import useMatchMedia from "use-match-media";
import DesWorksMobilePP from "./DesWorksMobilePP";

const PricePolicyDWorksPage = ({currentServices}) => {
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]

    console.log(mob)

    return (
        <>
            {
                mob ? (
                   <DesWorksMobilePP title={currentServices[0].LRsectionData.title} />
                ) : (
                    <LeftRightSectionCustomStyles
                        img={currentServices[0].LRsectionData.img}
                        title={currentServices[0].LRsectionData.title}
                        isImgLeft={true}
                        titleColor='white'
                        bgColor='#171717'
                        className={currentServices[0].type}
                        minHeight='100vh'
                    >
                        <div className='des-works__page-priceList__block'>
                            <div className="des-works__page-priceList-table">
                                <Swiper
                                    className='pricePolicy-swiper'
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: '.pricePolicy-swiper-button-next',
                                        prevEl: '.pricePolicy-swiper-button-prev'
                                    }}
                                    pagination={{
                                        el: '.custom-pricePolicy-swiper-fraction',
                                        type: 'custom',
                                        renderCustom: function (swiper, current, total) {
                                            return `<span class='pricePolicy-swiper__pag-count'>${current}</span>` + '/' + (total);
                                        }
                                    }}
                                >
                                    {
                                        servicesPricePolicyData.map((item, ind) => (
                                            <SwiperSlide
                                                key={ind}
                                            >
                                                <div className='dsWp-prList__table-header'>
                                                    <h1 className='dsWp-prList__table-title'>{item.pricePolicyItemTitle}</h1>
                                                    <span className='dsWp-prList__table__subHdrIn'>Ед.изм.</span>
                                                    <span className='dsWp-prList__table__subHdrIn'>&#8381;</span>
                                                </div>
                                                <div className='dsWp-prList__table-list'>
                                                    {
                                                        item.list.map((item, ind) => (
                                                            <div key={ind} className='dsWp-prList__table-list__item'>
                                                                <span className='dsWp-prList__table-list__item-text'>{item.subTitle}</span>
                                                                <span className='dsWp-prList__table-list__item-text'>{item.unit}</span>
                                                                <span className='dsWp-prList__table-list__item-text'>{item.price}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                    <div className='pricePolicy-swiper__controls-block'>
                                        <button className='pricePolicy-swiper-button-prev'>&#x2190;</button>
                                        <div className='custom-pricePolicy-swiper-fraction'></div>
                                        <button className='pricePolicy-swiper-button-next'>&#x2192;</button>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </LeftRightSectionCustomStyles>
                )
            }
        </>
    )
}

export default PricePolicyDWorksPage