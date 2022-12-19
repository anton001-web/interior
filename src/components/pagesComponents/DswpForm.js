import React, {useState} from 'react'
import CustomForm from "../customComponents/CustomForm";
import {useDispatch} from "react-redux";
import InnerFormModal from "../customComponents/InnerFormModal";

const DswpForm = ({formData}) => {
    const [innerFormModalVisible, setInnerFormModalVisible] = useState(false)

    const {
        formInputs,
        formBg,
        formTitle
    } = formData

    async function openModal (e) {
        e.preventDefault()
        await console.log('data gathering')
        setTimeout(() => {
            setInnerFormModalVisible(!innerFormModalVisible)
        }, 1300)
    }

    return (
        <section className='dswp-form__section'>
            <div className='dswp-form__bg-block'><img src={formBg} alt="" className='dswp-form__bg'/></div>
            <div className='container'>
                <div className='dswp-form__wrap'>
                    <div className='dswp-form__body'>
                        {
                            innerFormModalVisible ? (
                                <InnerFormModal
                                    toggleState={setInnerFormModalVisible}
                                />
                            ): (
                                <CustomForm btnHandler={openModal} bgOpacity={true} formTitle={formTitle} inputsList={formInputs} className='dswp-form'/>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DswpForm