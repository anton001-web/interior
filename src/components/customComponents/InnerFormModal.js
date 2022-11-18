import React from 'react'
import {textsDefault} from "../../data/modalsData";

export const InnerFormModal = React.forwardRef((props, ref) => {

    const closeInnerFormModal = () => {
        setTimeout(() => {
            toggleState(false)
        }, 500)
    }

    const {
        title = 'Вы заказали обратный звонок!',
        texts = textsDefault,
        toggleState,
        minWidth = 700,
        minHeight = 350,
        containsOtherBG = false
    } = props

    return (
        <div className={`custom-innerForm__modal ${containsOtherBG && 'custom-innerForm__modal-with__oth-bg'}`} style={{maxWidth: minWidth, minHeight: minHeight}}>
            <div className='custom-innerForm__modal-body'>
                <h1 className={`custom-innerForm__modal-title ${containsOtherBG ? 'title-white' : 'title-black'}`}>{title}</h1>
                {
                    texts.map((text, ind) => (
                        <p className='custom-innerForm__modal-text' key={ind}>{text}</p>
                    ))
                }
                <button className={`custom-innerForm__modal-btn ${containsOtherBG ? 'btn-wht' : 'btn-blk'}`} onClick={closeInnerFormModal}>Закрыть окно</button>
            </div>
        </div>
    )
})

export default InnerFormModal