import React from 'react'
import LeftRightSectionCustomStyles from "../../components/customComponents/LeftRightSectionCustomStyles";

const ReDevAdv = ({list}) => {
    return (
        <section className='redevelopmentP-advList__section'>
            <LeftRightSectionCustomStyles
                img='./assets/images/redevPAdvBG.png'
                titleHide={true}
                isImgLeft={true}
                bgColor='#171717'
                tabletImgTop={true}
            >
                <div className='redevelopmentP-advList__block'>
                    <div className='redevelopmentP-advList__wrap'>
                        <h1 className='redevelopment-advList__title title-white'>Что можно сделать благодаря перепланировке?</h1>
                        <ul className='redevelopmentP-advList'>
                            {
                                list.map((item, ind) => (
                                    <li key={ind} className='redevelopmentP-advList__item'>{item.text}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </LeftRightSectionCustomStyles>
        </section>
    )
}

export default ReDevAdv