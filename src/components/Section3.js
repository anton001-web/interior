import React from 'react'
import {advantages} from "../data/advantagesData";

const Section3 = () => {
    return (
        <section className='advantages-section'>
            <div className="container">
                <div className="advantages-body">
                    <h1 className='title-black'>Наши преимущества</h1>
                    <div className="advantages-list__block">
                        <div className="advantages-list">
                            {
                                advantages.map((item, ind) => (
                                    <div className='advantages-list__item' key={ind}>
                                        <div className='advantages-list-img__block'>
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className='advantages-list__text-group'>
                                            <h2 className='advantages-list__title'>{item.title}</h2>
                                            <p className='advantages-list__text'>{item.text}</p>
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

export default Section3;