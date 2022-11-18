import React, {useState} from 'react'
import CustomInput from "../customComponents/CustomInput";
import InnerFormModal from "../customComponents/InnerFormModal";

const IntWorkFormSec = ({sectionData}) => {
    const [innerModalVisible, setInnerModalVisible] = useState(false)

    const openInnerModal = (e) => {
        e.preventDefault()
        console.log('data gathering')
        setTimeout(() => {
            setInnerModalVisible(!innerModalVisible)
        }, 1300)
    }

    const {
        formTitle,
        secBg,
        formText,
        formInputs
    } = sectionData

    return (
        <section className='intW-form-section'>
            <div className='intW-form-sec__body'>
                <div className='intW-form__bg'>
                    <img src={secBg} alt="section bg"/>
                </div>
                <div className='intW-form__content__wrap'>
                    <div className='custom-container'>
                        {
                            innerModalVisible ? (
                                <InnerFormModal
                                    toggleState={setInnerModalVisible}
                                    title='Ваше сообщение было отправлено'
                                />
                            ): (
                                <div className='intW-form__content'>
                                    <h1 className='intW-form__content__title title-black'>{formTitle} <img src="./assets/images/rightDswpAgrArrow.png" alt=""/></h1>
                                    <p className='intW-form__content__text'>{formText}</p>
                                    <form className='intW-form'>
                                        {
                                            formInputs.map((input, ind) => (
                                                <CustomInput inputId={input.inputId} placeholder={input.placeholder} isMessageField={input.messageField || false}/>
                                            ))
                                        }
                                        <button className='intW-form__btn btn-blk' onClick={openInnerModal}>Отправить сообщение</button>
                                    </form>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntWorkFormSec