import React from 'react'

export const CustomAdvantagesListItem = ({text, list, ico, title}) => {
    return (
        <div className='custom-adv__list-item'>
            <div className='custom-adv__list-item__content'>
                <div className='custom-adv__list-item__img-block'>
                    <img src={ico} alt=""/>
                </div>
                <div className='custom-adv__list-item-content'>
                    <h3 className='custom-adv__list-item__title'>{title}</h3>
                    {
                        text ? (
                            <p className='custom-adv__list-item__text'>{text}</p>
                        ) : (
                            <ol className='custom-adv__list-item__list'>
                                {
                                    list.map((item, ind) => (
                                        <li className='custom-adv__list-item__list-item'>{item}</li>
                                    ))
                                }
                            </ol>
                        )
                    }
                </div>
            </div>
        </div>
    )
}