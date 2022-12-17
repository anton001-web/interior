import React, {useState} from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";
import CustomInput from "../customComponents/CustomInput";
import CustomForm from "../customComponents/CustomForm";
import InnerFormModal from "../customComponents/InnerFormModal";

const ServicesForm = ({formBg, inputsList, bg, className = undefined}) => {
    const [innerFormVisible, setInnerFormVisible] = useState(false)

    const toggleVisibility = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setInnerFormVisible(!innerFormVisible)
        }, 1300)
    }

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
                {
                    innerFormVisible ? (
                        <InnerFormModal
                            toggleState={setInnerFormVisible}
                            isFullWidth={true}
                        />
                    ) : (
                        <CustomForm className={className} inputsList={inputsList} btnHandler={toggleVisibility}/>
                    )
                }
            </LeftRightSectionCustomStyles>
        </section>
    )
}
export default ServicesForm