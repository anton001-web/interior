import React, {useEffect} from 'react'
import {workStages, workStagesImgs} from "../data/workStages";
import classNames from "classnames";
import CustomWorkway from "./customComponents/CustomWorkway";
import {mainWWPrjOrderModalW} from "../data/modalsData";
import {ModalWindow} from "./customComponents/ModalWindow";
import {useDispatch} from "react-redux";
import {modalToggle} from "../store/actions";

const Section5 = () => {
    const wwModalRef = React.createRef()
    const dispatch = useDispatch()

    const modalOpen = () => {
        dispatch(modalToggle(mainWWPrjOrderModalW.modalType))
    }

    return (
        <section className='workway-section'>
            <div className="workway-section__body">
                <div className="workway-sectionBg">
                    {
                        workStagesImgs.map((item, ind) => (
                            <img key={ind} src={item.img} alt="img" className={classNames(item.className)}/>
                        ))
                    }
                </div>
                <div className='workway-content-upperBlock'>
                    <div className="custom-container">
                        <div className='ww-content-body'>
                            <div className='workway-content-upperBlock__body'>
                                <div className='workway-content'>
                                    <h1 className='workway-title title-white'>
                                        Как мы работаем
                                    </h1>
                                    <CustomWorkway stages={workStages} />
                                    <button className='main-workway__btn btn-dGr' onClick={modalOpen}>Заказать дизайн</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5