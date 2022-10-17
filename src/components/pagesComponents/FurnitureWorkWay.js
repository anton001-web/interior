import React from 'react'
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";

const FurnitureWorkWay = ({secData}) => {
    const {
        title,
        bgImg,
        workwayList
    } = secData

    return (
        <section className='furniture-page__workway-section'>
            <div className='furniture-page__workway-sec__body'>
                <LeftRightSectionCustomStyles
                    img={bgImg}
                    isImgLeft={true}
                    titleHide={true}
                    isntHalf={true}
                    minHeight={900}
                    className='furniture-custom-workway-lr'
                >
                    <div className='furniture-page__workway-body'>
                        <h1 className='furniture-page__workway-title title-black'>{title}</h1>
                        <div className='furniture-page__workway-list__block'>
                            <div className='furniture-page__workway-list'>
                                {
                                    workwayList.map((item, ind) => (
                                        <div key={ind} className='furniture-page__workway-list__item' data-b
                                             data-num={ind + 1}>
                                            <div className='furniture-page__workway-item__left-opt'>
                                                <div className='furniture-page__workway-item__left-opt__st-num'>
                                                    {ind + 1}
                                                </div>
                                                <div className='furniture-page__workway-item__bottom-line'>

                                                </div>
                                            </div>
                                            <div className='furniture-page__workway-item__text-group'>
                                                <h3 className='furniture-page__workway-item__title'>{item.title}</h3>
                                                <p className='furniture-page__workway-item__text'>{item.text}</p>
                                                {item.btn && (<button className='furniture-page__workway-btn btn-blk'>Заказать</button>)}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </LeftRightSectionCustomStyles>
            </div>
        </section>
    )
}

export default FurnitureWorkWay