import React from 'react'
import classNames from "classnames";
import useMatchMedia from "use-match-media";

const DswpAgrmnt = () => {
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]

    return (
        <section className='dswp-agreement__section'>
            <div className='dswp-agreement__bg'><img src="./assets/images/agreementDswpPbg.png" alt=""/></div>
            <div className='dswp-agreement__overlay'></div>
            <div className="container">
                <div className='dswp-agreement__body'>
                    <div className='dswp-agreement__wrap'>
                        <div className='dswp-agreement__text-group'>
                            <h1 className='dswp-agreement__title title-black'>
                                Образец договора {mob ? <img src="./assets/images/dswpAgrArrowWht.png" alt="link"/> : <img src="./assets/images/rightDswpAgrArrow.png" alt="link"/>}
                            </h1>
                            <h></h>
                        </div>
                        <div className='dswp-agreement-info__block'>
                            <p className='dswp-agreement__text'>
                                Ознакомтесь с образцом договора на осуществление ремонтных и отделочных работ в студии Custom Made.
                            </p>
                            <button className={classNames(`dswp-loadAgr__btn ${mob ? 'btn-whtB' : 'btn-blk'}`)}>
                                Скачать договор
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DswpAgrmnt