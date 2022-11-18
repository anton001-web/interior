import React, {useState} from 'react'
import {servicesPricePolicyData} from "../../data/servicesData";

const DesWorksMobilePP = ({title}) => {
    const [currentAccItem, setCurrentAccItem] = useState(null)
    const accordionContent = React.createRef()

    const AccordionToggle = (index) => {
        if(currentAccItem === index) {
            return setCurrentAccItem(null)
        }

        setCurrentAccItem(index)
    }

    return (
        <section className='des-works__mobile-privePolicy'>
            <div className="container">
                <div className="des-works__mobile-privePolicy__block">
                    <h1 className='des-works__mobile-title title-white'>{title}</h1>
                    <div className='des-works__mobile-privePolicy__accordion'>
                        {
                            servicesPricePolicyData.map((item, ind) => (
                                <div className='des-works__mobile-privePolicy__accordion-item' key={ind}>
                                    <div className='des-works__mobile-privePolicy__accordion-item__header' onClick={() => AccordionToggle(ind)}>
                                        <h3 className='des-works__mobile-privePolicy__accordion-item__header-title'>{item.pricePolicyItemTitle}</h3>
                                        {
                                            currentAccItem === ind ? <img src="./assets/images/accordionHide.png" alt="hide"/> : <img src="./assets/images/accordionShow.png" alt="show"/>
                                        }
                                    </div>
                                    <div className={`dsWp-prList__table-list desWorks-pp__accordion-content ${currentAccItem === ind && 'active'}`} ref={accordionContent}>
                                        <div className='dsWp-prList__table-header'>
                                            <h1></h1>
                                            <span className='dsWp-prList__table__subHdrIn dsWorks-page-pp-rub-ico'>&#8381;</span>
                                            <span className='dsWp-prList__table__subHdrIn'>Ед.изм.</span>
                                        </div>
                                        {
                                            item.list.map((item, ind) => (
                                                <div key={ind} className='dsWp-prList__table-list__item'>
                                                <span
                                                    className='dsWp-prList__table-list__item-text'>{item.subTitle}</span>
                                                    <span className='dsWp-prList__table-list__item-text'>{item.unit}</span>
                                                    <span className='dsWp-prList__table-list__item-text'>{item.price}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesWorksMobilePP