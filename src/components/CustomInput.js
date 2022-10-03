import React from 'react'

const CustomInput = ({inputId, placeholder}) => {
    return (
        <div className='custom-input__group'>
            <input id={inputId} className='custom-input' placeholder='name'/>
            <label htmlFor={inputId} className='custom-input__label'>{placeholder}</label>
        </div>
    )
}

export default CustomInput