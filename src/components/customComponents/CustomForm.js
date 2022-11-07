import React from 'react'
import CustomInput from "./CustomInput";
import classNames from "classnames";

const CustomForm = ({bgOpacity, btnText = 'Заказать консультацию', formTitle = 'Нужна консультация?', inputsList, className = 'undefined', textColor = 'black'}) => {
    return (
        <div className={classNames(`custom-services-form__block ${className}`)} style={{backgroundColor: !bgOpacity ? '#fff' : null}}>
            {bgOpacity && (
                <div className='custom-services-form__overlay'></div>
            )}
            <div className='custom-services-form__wrap' style={{color: `${textColor}`}}>
                <h1 className={`custom-services-form__block-title title-${textColor}`}>{formTitle}</h1>
                <form className='custom-services-form'>
                    {
                        inputsList.map((input, ind) => (
                            <CustomInput inputId={input.inputId} placeholder={input.placeholder} />
                        ))
                    }
                    <button className={`custom-services-form__btn ${textColor === 'black' ? 'btn-blk' : 'btn-wht'}`} onClick={(e) => {e.preventDefault()}}>{btnText}</button>
                </form>
            </div>
        </div>
    )
}

export default CustomForm