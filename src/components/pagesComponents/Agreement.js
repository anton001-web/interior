import React from 'react'
import classNames from "classnames";
import useMatchMedia from "use-match-media";

const Agreement = ({alwaysBlack = false, textColor = 'black', className}) => {
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]

    return (
        <section className={`agreement__section ${className}`}>
            {
                !alwaysBlack && (
                    <>
                        <div className='agreement__bg'><img src="./assets/images/agreementDswpPbg.png" alt=""/></div>
                        <div className='agreement__overlay'></div>
                    </>
                )
            }
            <div className="container">
                <div className='agreement__body'>
                    <div className='agreement__wrap'>
                        <div className='agreement__text-group'>
                            <h1 className='agreement__title title-black'>
                                Образец договора
                                {
                                    mob ? <img src="./assets/images/dswpAgrArrowWht.png" alt="link"/> :
                                        !mob && alwaysBlack ? <img src="./assets/images/dswpAgrArrowWht.png" alt="link"/> :
                                            <img src="./assets/images/rightDswpAgrArrow.png" alt="link"/>
                                }
                            </h1>
                            <h></h>
                        </div>
                        <div className='agreement-info__block'>
                            <p className='agreement__text'>
                                Ознакомтесь с образцом договора на осуществление ремонтных и отделочных работ в студии Custom Made.
                            </p>
                            <button className={classNames(`loadAgr__btn ${mob && !alwaysBlack ? 'btn-whtB': ''} ${alwaysBlack ? 'btn-whtB' : !mob && !alwaysBlack ? 'btn-blk' : ''}`)}>
                                Скачать договор
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agreement