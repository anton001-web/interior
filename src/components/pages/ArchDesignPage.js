import React from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import {archDesHeadSecTexts, archPageFormInputs} from "../../data/archDesPageData";
import ArchPageWorkWay from "../pagesComponents/ArchPageWorkWay";
import ArchPageSwiperSec from "../pagesComponents/ArchPageSwiperSec";
import ServicesForm from "../pagesComponents/ServicesForm";

const ArchDesignPage = () => {
    return (
        <section className='arch-design__sec'>
            <div className='arch-design__body'>
                <CustomLeftRightSection
                    title='Архитектурное проектирование загородных домов'
                    isTitleClone={true}
                    isHalf={true}
                    isImgLeft={false}
                    sideImg='./assets/images/archPageSideImg.png'
                    texts={archDesHeadSecTexts}
                    minHeight='710px'
                />
                <ArchPageWorkWay />
                <ArchPageSwiperSec />
                <div className="archPage-form__block">
                    <ServicesForm
                        formBg='./assets/images/archPage-formBG.png'
                        className='archPage-form__block'
                        inputsList={archPageFormInputs}
                    />
                </div>
            </div>
        </section>
    )
}

export default ArchDesignPage