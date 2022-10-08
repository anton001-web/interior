import React from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";
import CustomInput from "../customComponents/CustomInput";

const ServicesForm = ({formBg}) => {
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
                <div className='services-form__block'>
                    <div className='services-form__wrap'>
                        <h1 className='services-form__block-title title-black'>Нужна консультация?</h1>
                        <form className='services-form'>
                            <CustomInput inputId='services-form__name' placeholder='Как к вам обращатся'/>
                            <CustomInput inputId='services-form__phoneNum' placeholder='Номер телефона'/>
                            <button className="services-form__btn btn-blk" onClick={(e) => {e.preventDefault()}}>Заказать консультацию</button>
                        </form>
                    </div>
                </div>
            </LeftRightSectionCustomStyles>
        </section>
    )
}
export default ServicesForm