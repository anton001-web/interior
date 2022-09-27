import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-body">
                    <div className='headerR-part'>
                        <img src="./assets/images/logo.png" alt="" className='header-logo'/>
                        <div className="header-list__block">
                            <ul className='header-list__links'>
                                <li className="header-list__item">< Link className="header-list__link" data-r><span className='s'> о нас </span></Link></li>
                                <li className="header-list__item"><Link className="header-list__link" data-r>услуги</Link></li>
                                <li className="header-list__item"><Link className="header-list__link" data-r>портфолио</Link></li>
                                <li className="header-list__item"><Link className="header-list__link"> цены < /Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='headerL-part'>
                        <p className='header-address'>
                            <span> Санкт - Петербург</span>
                            <span> ул.Уральская 13 </span>
                        </p>
                        <button className="header-btn btn-gr">
                            <p> Заказать звонок < /p></button>
                        <div className="header-menu__block">
                            <div className='header-menu__open'>
                                <span className='header-menu__open-line'> < /span>
                            </div>
                            <div className='header-menu'>
                                <ul className='header-menu__list'>
                                    <li className='header-menu__list-item' data-b>О нас</li>
                                    <li className='header-menu__list-item' data-b>Стоимость</li>
                                    <li className='header-menu__list-item' data-b>Портфолио</li>
                                    <li className='header-menu__list-item' data-b>Блог</li>
                                    <li className='header-menu__list-item' data-b>Контакты</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header