import React from 'react'
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";

const AuthSVpPriceBlock = ({priceBlockList}) => {
    return (
        <section className="authSVP-priceBlock-section">
            <LeftRightSectionCustomStyles
                img='./assets/images/authSVPpriceBlockBg.png'
                titleHide={true}
                isImgLeft={true}
                bgColor='#171717'
                tabletImgTop={true}
            >
                <div className='authSVP-priceBlock'>
                    <div className='authSVP-priceBlock__wrap'>
                        <h1 className='authSVP-priceBlock__title title-white'>Стоимость авторского надзора</h1>
                        <div className='authSVP-priceBlock__list'>
                            {
                                priceBlockList.map((item, ind) => (
                                    <div className='authSVP-priceBlock__list-item'>
                                        <span className='authSVP-priceBlock__list-item__price'>{item.price}</span>
                                        <span className='authSVP-priceBlock__list-item__text'>{item.text}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <button className="authSVP-priceBlock__btn btn-dGr">Заказать авторский надзор</button>
                    </div>
                </div>
            </LeftRightSectionCustomStyles>
        </section>
    )
}

export default AuthSVpPriceBlock