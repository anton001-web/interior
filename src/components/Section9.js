import React, {useState} from 'react'
import CustomInput from "./customComponents/CustomInput";
import {useDispatch} from "react-redux";
import InnerFormModal from "./customComponents/InnerFormModal";

const Section9 = () => {
    const dispatch = useDispatch()
    const [innerFormModalVisible, setInnerFormModalVisible] = useState(false)

    async function openModal (e) {
        e.preventDefault()
        await console.log('data gathering')
        setTimeout(() => {
            setInnerFormModalVisible(!innerFormModalVisible)
        }, 1300)
    }

    return (
        <section className='form-section'>
            <div className="container">
                <div className='form-section__body'>
                    {
                        innerFormModalVisible === true ? (
                            <InnerFormModal
                                toggleState={setInnerFormModalVisible}
                            />
                        ) : (
                            <div className="form-block">
                                <div className='form-wrap'>
                                    <h1 className='main-form__title title-black'>Нужна консультация?</h1>
                                    <form className="main-form">
                                        <CustomInput inputId='main-form__input-name' placeholder='Как к вам обращаться'/>
                                        <CustomInput inputId='main-form__input-phone' placeholder='Номер телефона'/>
                                        <button className='main-form__submit-btn btn-blk' onClick={openModal}>Заказать звонок</button>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Section9