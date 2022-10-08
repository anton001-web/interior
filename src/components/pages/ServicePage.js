import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {currentServicesList, servicesPricePolicyData} from "../../data/servicesData";
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import CustomAdvantagesList from "../customComponents/CustomAdvantagesList";
import PricePolicyDWorksPage from "../pagesComponents/PricePolicyDWorksPage";
import ServicesForm from "../pagesComponents/ServicesForm";

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
                    <>
                        <div className='service-page__benefits-list__section'>
                            <CustomAdvantagesList list={currentServices[0].benefitsList} img='./assets/images/servicesBenefitsBG.png' bgColor='rgba(255, 255, 255, 0.7);'/>
                        </div>
                        <ServicesForm formBg={currentServices[0].formBg}/>
                    </>
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
                    <>
                        <PricePolicyDWorksPage currentServices={currentServices}/>
                        <div className='DWorksPage-bnft__list-sec'>
                            <CustomAdvantagesList list={currentServices[0].benefitsList} img='./assets/images/DWorksPage-bnftBg.png' bgColor='linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);'/>
                        </div>
                    </>
                ) : null
            }
        </div>
    )
}

export default ServicePage