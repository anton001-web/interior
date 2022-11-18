import React, {useState} from 'react'
import CustomForm from "../customComponents/CustomForm";
import useMatchMedia from "use-match-media";
import InnerFormModal from "../customComponents/InnerFormModal";

const FrntPForm = ({formData}) => {
    const [tablet] = [useMatchMedia('(max-width: 767px)') || false]
    const [innerModalVisible, setInnerModalVisible] = useState(false)

    const {
        formTitle,
        formInputs,
        formTexts,
        formBg,
        formBgTablet
    } = formData

    const toggleVisibility = (e) => {
        e.preventDefault()
        console.log('date gathering')
        setTimeout(() => {
            setInnerModalVisible(!innerModalVisible)
        }, 1300)
    }

    return (
        <section className='frntP-form__section' style={{backgroundImage: `url(${!tablet ? formBg : 'none'})`}}>
            <div className='container'>
                <div className='frntP-form__body'>
                    <div className='frntP-form__info' style={{backgroundImage: `url(${tablet && formBgTablet})`}}>
                        <div>
                            <h1 className='frntP-form__info-title title-white'>{formTitle}</h1>
                            <div className='frntP-form__info-text__group'>
                                {
                                    formTexts.map((text, ind) => (
                                        <p key={ind} className='frntP-form__info-text'>{text}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='frntP-form__wrap'>
                        {
                            innerModalVisible ? (
                                <InnerFormModal
                                    toggleState={setInnerModalVisible}
                                />
                            ) : (
                                <CustomForm inputsList={formInputs} className='frntP-form' btnHandler={toggleVisibility}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrntPForm