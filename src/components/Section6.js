import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {modalToggle} from "../store/actions";
import {peterBioAskQstModalW} from "../data/modalsData";

const Section6 = () => {
    const dispatch = useDispatch()

    const modalOpen = () => {
        dispatch(modalToggle(peterBioAskQstModalW.modalType))
    }

    return (
        <section className='autobio-section'>
            <div className="autobio-section__body">
                <div className='autobio-section__block'>
                    <div className='autobio-cnt'>
                        <h3 className='autobio-title'>Яна Петерсон</h3>
                        <p className='autobio-subTitle'>Основатель и руководитель студии интерьера «Custom Made»</p>
                        <p className='autobio-text'>«Считаю, что неразрешимых ситуаций не бывает. Кто хочет двигаться вперед - ищет пути по решению проблем, кто не хочет - причины неудач»</p>
                        <button className='autobio-btn btn-wht' onClick={modalOpen}>Задать вопрос</button>
                    </div>
                </div>
                <div className='autobio-section__img-block'>
                    <img src="./assets/images/autoBioRight.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Section6