import React from 'react'
import CustomForm from "../customComponents/CustomForm";

const DswpForm = ({formData}) => {

    const {
        formInputs,
        formBg,
        formTitle
    } = formData

    return (
        <section className='dswp-form__section'>
            <div className='dswp-form__bg-block'><img src={formBg} alt="" className='dswp-form__bg'/></div>
            <div className='container'>
                <div className='dswp-form__wrap'>
                    <div className='dswp-form__body'>
                        <CustomForm bgOpacity={true} formTitle={formTitle} inputsList={formInputs} className='dswp-form'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DswpForm