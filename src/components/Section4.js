import React from 'react'
import {services} from "../data/servicesData";

const Section4 = () => {
    return (
        <section className='services-section'>
            <div className="container">
                <div className="services-body">
                    <div className='services-bg'>

                    </div>
                    <div className='services-block'>
                        <h1 className='services-title title'>Что мы предлогаем?</h1>
                        <div className='services-list'>
                            {
                                services.map((item, ind) => (
                                    <div key={ind} className='services-list__item'>
                                        <div className='mobile-gutter'>
                                            <div className='services-list__item-text__group'>
                                                <h3 className='services-list__item-title'>{item.title}</h3>
                                                <p className='services-list__item-text'>{item.text}</p>
                                            </div>
                                            <button className='services-list__item-btn btn-whtB'>Подробнее</button>
                                        </div>
                                        <div className='services-list__item-mobileImg-block'>
                                            <img src={item.img} className='services-list__item-mobileImg'/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4