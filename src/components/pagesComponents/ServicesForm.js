import React from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";
import CustomInput from "../customComponents/CustomInput";
import CustomForm from "../customComponents/CustomForm";

const ServicesForm = ({formBg, inputsList}) => {
    return (
        <section className='services-page__form-sec'>
            <LeftRightSectionCustomStyles
                tabletImgTop={false}
                isImgLeft={false}
                img={formBg}
                title='Нужна консультация?'
                titleColor='black'
                bgColor='white'
                titleHide={true}
            >
                <CustomForm inputsList={inputsList}/>
            </LeftRightSectionCustomStyles>
        </section>
    )
}
export default ServicesForm