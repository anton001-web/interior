import React from 'react'
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";

const DecorPPriceBlock = ({decorS}) => {
    return (
        <section className='decorationPage-pBlock__section'>
            <LeftRightSectionCustomStyles
                img='./assets/images/decorPrBlockBg.png'
                titleHide={true}
                isImgLeft={true}
                bgColor='#171717'
                tabletImgTop={true}
            >
                <div className='decorationPage-pBlock'>
                    <div className='decorationPage-pBlock__wrap'>
                        <h1 className='decorationPage-pBlock__title title-white'>Стоимость декорирования интерьера квартиры</h1>
                        <div className='decorationPage-pBlock__body'>
                            <div className='decorationPage-pBlock__dec-S'>
                                <span className='decorationPage-pBlock__dec-S__sq'>от {decorS} p/кв.м</span>
                                <span className='decorationPage-pBlock__dec-S__text'>для интерьеров квартир Санкт-Петербурга</span>
                            </div>
                            <span className='decorationPage-pBlock__subTitle'>Журнальная фотосессия декорированной квартиры в подарок!</span>
                            <button className="decorationPage-pBlock__btn btn-dGr">Заказать декорирование </button>
                        </div>
                    </div>
                </div>
            </LeftRightSectionCustomStyles>
        </section>
    )
}

export default DecorPPriceBlock