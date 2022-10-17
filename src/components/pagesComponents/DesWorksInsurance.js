import React from 'react'
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";

const DesWorksInsurance = ({insuranceData}) => {
    const {
        img,
        title,
        insuranceList
    } = insuranceData

    return (
        <section className='dswp-insurance__section'>
            <LeftRightSectionCustomStyles
                img={img}
                isImgLeft={false}
                titleHide={true}
                isntHalf={true}
                minHeight={900}
                tabletImgTop={true}
            >
                <div className='dswp-insurance__block'>
                    <h1 className='dswp-insurance__title title-black'>{title}</h1>
                    <div className='dswp-insurance__list-block'>
                        <div className='dswp-insurance__list'>
                            {
                                insuranceList.map((item, ind) => (
                                    <div key={ind} className='dswp-insurance__list-item' data-b>
                                        <h3 className='dswp-insurance__list-item__title'>{item.title}</h3>
                                        {item.texts.map((item, index) => (
                                            <div className='dswp-insurance__list-item__text-group' key={index}>
                                                <p className='dswp-insurance__list-item__text'>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </LeftRightSectionCustomStyles>
        </section>
    )
}

export default DesWorksInsurance