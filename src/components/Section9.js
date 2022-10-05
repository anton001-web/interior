import React from 'react'
import CustomInput from "./customComponents/CustomInput";

const Section9 = () => {
    return (
        <section className='form-section'>
            <div className="container">
                <div className='form-section__body'>
                    <div className="form-block">
                        <div className='form-wrap'>
                            <h1 className='main-form__title title-black'>Нужна консультация?</h1>
                            <form className="main-form">
                                <CustomInput inputId='main-form__input-name' placeholder='Как к вам обращаться'/>
                                <CustomInput inputId='main-form__input-phone' placeholder='Номер телефона'/>
                                <button className='main-form__submit-btn btn-blk'>Заказать звонок</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section9