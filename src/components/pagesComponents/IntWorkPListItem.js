import React from 'react'

const IntWorkPListItem = ({plItem}) => {
    return (
        <div className='int-work__pl-wrap'>
            <div className='int-work__pl-block'>
                <div className='int-work__pl-header'>
                    <div className='int-work__pl-header__text-group'>
                        <h3 className='int-work__pl-title'>{plItem.title}</h3>
                        <span className="int-work__pl-subTitle">{plItem.subTitle}</span>
                    </div>
                    <p className='int-work__pl-price'>{plItem.price} p / кв.м.</p>
                </div>
                <div className='int-work__pl-list__block'>
                    <div className='int-work__pl-list'>
                        {
                            plItem.benefitsList.map((item, ind) => (
                                <li key={ind} className='int-work__pl-list__item'>
                                    <span>{item.title}</span>
                                </li>
                            ))
                        }
                    </div>
                </div>
                <p className='int-work__pl-price__clone'>{plItem.price} p / кв.м.</p>
                <div className='int-work__pl-footer'>
                    <button className='int-work__pl-btn btn-whtB'>Заказать</button>
                    <a href="#" className='int-work__pl-downloadBtn'>Скачать комплектацию</a>
                </div>
            </div>
        </div>
    )
}

export default IntWorkPListItem