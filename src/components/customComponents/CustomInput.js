import React from 'react'

const CustomInput = ({inputId, clName = false, placeholder, isMessageField = false}) => {
    return (
        <div className={`custom-input__group ${clName && clName}`}>
            {
                isMessageField
                    ?
                    <textarea id={inputId} className='custom-textarea' placeholder={placeholder}>

                    </textarea>
                    : <input id={inputId} className='custom-input' placeholder='name'/>
            }
            <label htmlFor={inputId} className='custom-input__label'>{placeholder}</label>
        </div>
    )
}

export default CustomInput
