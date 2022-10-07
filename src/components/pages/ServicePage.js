import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {currentServicesList, servicesPricePolicyData} from "../../data/servicesData";
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import CustomAdvantagesList from "../customComponents/CustomAdvantagesList";
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";
import useMatchMedia from "use-match-media";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import PricePolicyDWorksPage from "../pagesComponents/PricePolicyDWorksPage";

const ServicePage = () => {
    const params = useParams()
    const currentServices = currentServicesList.filter(item => item.type === params.serviceCategory)

    return (
        <div className='service-page'>
            <CustomLeftRightSection
                isImgLeft={false}
                sideImg={currentServices[0].img}
                title={currentServices[0].title}
                text={currentServices[0].pageHeroFirstText}
                secondText={currentServices[0].pageHeroSecondText}
                btnText={currentServices[0].title.split(' ').pop()}
                btnType='btn-whtB'
                isTitleClone={true}
            />
            {
                params.serviceCategory === 'redevelopment' ||
                params.serviceCategory === 'decoration' ||
                params.serviceCategory === 'auth-svision' ? (
                    <div className='service-page__benefits-list__section'>
                        <img className='benefits-bg' src="./assets/images/servicesBenefitsBG.png" alt=""/>
                        <div className='services-page__benefits-list-overlay'>

                        </div>
                        <div className='service-page__benefits-list__block'>
                            <CustomAdvantagesList list={currentServices[0].benefitsList}/>
                        </div>
                    </div>
                ) : params.serviceCategory === 'furniture' ? (
                    <div className='spage-authC__subInfo'>
                        <div className="container">
                            <div className="spage-authC__subInfo-block">
                                <h1 className='spage-authC__subInfo-title title-white'>{currentServices[0].secSubInfo.title}</h1>
                                <ul className='spage-authC__subInfo-list'>
                                    {
                                        currentServices[0].secSubInfo.list.map((item, ind) => (
                                            <li className='spage-authC__subInfo-list__item'>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            {
                params.serviceCategory === 'des-works' ? (
                    <PricePolicyDWorksPage currentServices={currentServices}/>
                ) : null
            }
        </div>
    )
}

export default ServicePage