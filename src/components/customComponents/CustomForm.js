import React from 'react'
import CustomInput from "./CustomInput";
import classNames from "classnames";

const CustomForm = ({inputsList, className = 'undefined'}) => {
    return (
        <div className={classNames(`custom-services-form__block ${className}`)} >
            <div className='custom-services-form__wrap'>
                <h1 className='custom-services-form__block-title title-black'>Нужна консультация?</h1>
                <form className='custom-services-form'>
                    {
                        inputsList.map((input, ind) => (
                            <CustomInput inputId={input.inputId} placeholder={input.placeholder} />
                        ))
                    }
                    <button className="custom-services-form__btn btn-blk" onClick={(e) => {e.preventDefault()}}>Заказать консультацию</button>
                </form>
            </div>
        </div>
    )
}

export default CustomForm