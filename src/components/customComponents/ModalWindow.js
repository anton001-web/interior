import React, {useEffect, useState} from 'react'
import CustomInput from "./CustomInput";
import {useDispatch, useSelector} from "react-redux";
import modals from "../Modals";
import {modalToggle} from "../../store/actions";
import {headerPrjOrderModalW, mainWWPrjOrderModalW, successModalW} from "../../data/modalsData";
import {currentServicesList} from "../../data/servicesData";
import CustomWorkway from "./CustomWorkway";

export const ModalWindow = React.forwardRef(({modalOptions}, ref) => {
    const [allowClosing, setAllowClosing] = useState(false)
    const dispatch = useDispatch()
    const [modalContent, setModalContent] = useState(modalOptions)

    const initialContent = modalOptions

    const {visible, type} = useSelector(state => {
        const {modal} = state
        return modal
    })

    useEffect(() => {
        if(visible && type === modalContent.modalType) {
            open()
        }
        if(visible && type.modalType) {
            setContent()
        }
    }, [visible, type])

    useEffect(() => {
        const curModal = ref.current
        curModal.addEventListener('click', (e) => {
            if(e.target.dataset.close === 'close') {
                dispatch(modalToggle(modalContent.modalType))
                curModal.classList.remove('open')
                curModal.classList.add('hide')
                setTimeout(() => {
                    setModalContent(modalOptions)
                    curModal.classList.remove('hide')
                }, 200)
            }
        })
    }, [])

    const setContent = () => {
        const newContent = type.servicesType

        if(ref.current.dataset.type === type.modalType) {
            setModalContent(newContent)
            open()
        }
    }

    const open = () => {
        ref.current.classList.add('open')
    }

    const modalBtnHandler = () => {
        setModalContent(successModalW)
    }

    async function gatherData (e) {
        e.preventDefault()
        console.log(ref.current)

        setTimeout(() => {
            modalBtnHandler()
        }, 1000)
    }

    return (
        <div className='default-modal' data-type={modalContent.modalType} ref={ref}>
            <div className='default-modal__overlay' data-close='true' >
                <div className="default-modal__window">
                    <div className="default-modal__header">
                        <h1 className='default-modal__title title-black'>{modalContent.title}</h1>
                        <button className="default-modal__close-btn">
                            <img src="./assets/images/modalClose.png" alt="close" data-close='close' />
                        </button>
                    </div>
                    <div className="default-modal__body">
                        {modalContent.texts ? modalContent.texts.map((text, ind) => (
                            <p key={ind} className="default-modal__text" data-b>{text}</p>
                        )) : 'texts is undefined'}
                        {modalContent.containsForm && (
                            <form className='default-modal__form'>
                                {
                                    modalContent.modalInputs && modalContent.modalInputs.map((input, ind) => (
                                        <CustomInput
                                            key={ind}
                                            placeholder={input.placeholder}
                                            inputId={input.inputId}
                                            isMessageField={input.messageField}
                                        />
                                    ))
                                }
                                {/*<CustomInput placeholder='Как к вам обращаться' inputId='default-modal__name-inp'/>*/}
                                {/*<CustomInput placeholder='Номер телефона' inputId='default-modal__phone-inp'/>*/}
                                {/*<CustomInput placeholder='Ваше сообщение' inputId='default-modal__message-ing' isMessageField={true}/>*/}
                                <button className='default-modal__btn btn-blk' onClick={gatherData} >{modalContent.btnText}</button>
                            </form>
                        )}
                    </div>
                    <div className="default-modal__footer">
                        {
                            modalContent === successModalW && (
                                <button className='default-modal__btn btn-blk' data-close='close'>Закрыть окно</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})