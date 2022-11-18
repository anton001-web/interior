import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {
    completedProejcts,
    currentServicesList,
    interiorDPrices,
    servicesPricePolicyData
} from "../../data/servicesData";
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import CustomAdvantagesList from "../customComponents/CustomAdvantagesList";
import PricePolicyDWorksPage from "../pagesComponents/PricePolicyDWorksPage";
import ServicesForm from "../pagesComponents/ServicesForm";
import ReDevAdv from "../pagesComponents/ReDevAdv";
import AuthSVpPriceBlock from "../pagesComponents/AuthSVpPriceBlock";
import DecorPPriceBlock from "../pagesComponents/DecorPPriceBlock";
import FurnitureAdv from "../pagesComponents/FurnitureAdv";
import FurnitureWorkWay from "../pagesComponents/FurnitureWorkWay";
import DesWorksInsurance from "../pagesComponents/DesWorksInsurance";
import FrntPForm from "../pagesComponents/FrntPForm";
import DswpCmptProjects from "../pagesComponents/DswpCmptProjects";
import Agreement from "../pagesComponents/Agreement";
import DswpForm from "../pagesComponents/DswpForm";
import IntWorkPage from "../pagesComponents/IntWorkPage";
import IntWworkStages from "../pagesComponents/IntWworkStages";
import {useDispatch} from "react-redux";
import {modalToggle} from "../../store/actions";

const ServicePage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const currentServices = currentServicesList.filter(item => item.type === params.serviceCategory)

    const openModal = () => {
        dispatch(modalToggle({servicesType: currentServices[0].firstSecModalData, modalType: 'servicesPMain-custom_modal'}))
    }

    return (
        <div className='service-page'>
            <CustomLeftRightSection
                isImgLeft={false}
                sideImg={currentServices[0].img}
                title={currentServices[0].title}
                texts={currentServices[0].texts}
                btnText={currentServices[0].title.split(' ').pop()}
                btnType='btn-whtB'
                btnHandler={openModal}
                isTitleClone={true}
                isHalf={true}
            />
            {
                params.serviceCategory === 'redevelopment' ||
                params.serviceCategory === 'decoration' ||
                params.serviceCategory === 'auth-svision' ? (
                    <>
                        <div className='service-page__benefits-list__section'>
                            <CustomAdvantagesList list={currentServices[0].benefitsList} img='./assets/images/servicesBenefitsBG.png' bgColor='rgba(255, 255, 255, 0.7);'/>
                        </div>
                        {
                            params.serviceCategory === 'redevelopment' ? (<ReDevAdv list={currentServices[0].redevAdvList}/>) :
                            params.serviceCategory === 'decoration' ? <DecorPPriceBlock decorS={currentServices[0].decorSq} /> :
                            params.serviceCategory === 'auth-svision' ? <AuthSVpPriceBlock priceBlockList={currentServices[0].priceBlockList} /> : null
                        }
                        <ServicesForm formBg={currentServices[0].formBg} inputsList={currentServices[0].formInputs}/>
                    </>
                ) : params.serviceCategory === 'furniture' ? (
                    <>
                        <FurnitureAdv category={currentServices} />
                        <FurnitureWorkWay secData={currentServices[0].workwayData}/>
                        <FrntPForm formData={currentServices[0].formData}/>
                    </>
                ) : null
            }
            {
                params.serviceCategory === 'des-works' ? (
                    <>
                        <PricePolicyDWorksPage currentServices={currentServices}/>
                        <div className='DWorksPage-bnft__list-sec'>
                            <CustomAdvantagesList list={currentServices[0].benefitsList} img='./assets/images/DWorksPage-bnftBg.png' bgColor='linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);'/>
                        </div>
                        <DesWorksInsurance insuranceData={currentServices[0].insuranceData}/>
                        <DswpCmptProjects data={completedProejcts}/>
                        <Agreement />
                        <DswpForm formData={currentServices[0].formData}/>
                    </>
                ) : params.serviceCategory === 'interior-design' ? (
                    <IntWorkPage priceList={interiorDPrices} generalData={currentServices[0]}/>
                ) : null
            }
        </div>
    )
}

export default ServicePage