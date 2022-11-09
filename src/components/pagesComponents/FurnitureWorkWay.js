import React from 'react'
import CustomWorkway from "../customComponents/CustomWorkway";

const FurnitureWorkWay = ({secData}) => {

    const {
        title,
        bgImg,
        workwayList
    } = secData

    return (
        <section className='furniture-page__workway-section'>
            <div className='furniture-page__workway-sec__body'>
                <div className='furniture-page__bg'>
                    <img src={bgImg} alt="sideImg" className='furniture-page__bg-img'/>
                </div>
                <div className='furniture-page__workway-upperBlock'>
                    <div className='custom-container'>
                        <div className='furniture-page__workway-body'>
                            <h1 className='furniture-page__workway-title title-black'>{title}</h1>
                            <div className='furniture-page__workway-list__block'>
                                <CustomWorkway stages={workwayList} className='furniture-workway'/>
                                <button className='furniture-page__workway-btn btn-blk'>Заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FurnitureWorkWay