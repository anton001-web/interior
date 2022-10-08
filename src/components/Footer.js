import React from 'react'
import {footerNewLinks, footerNewLinksSecond, footerSocMList, hfLinks} from "../data/generalData";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-body">
                    <div className="footer-logo__block">
                        <img src="./assets/images/footerLogo.png" alt=""/>
                        <p className='copyright-text'>
                            <span>
                                <img src="./assets/images/copyRightIco.png" alt=""/>
                                2010-2022 Студия интерьера
                            </span>
                            <br/>
                            Custom Made, все права защищены
                        </p>
                    </div>
                    <div className='footer-links__block'>
                        <div className="footer-links-group">
                            <div className='footer-hLinks__list'>
                                <ul className='footer-list__links'>
                                    {
                                        hfLinks.map((item, ind) => (
                                            <li key={ind} className="footer-list__item" data-hidden={item.hidden}>
                                                <Link className="footer-list__link" data-r>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='footer-own__links-list'>
                                <ul className='footer-new__list-links'>
                                    {
                                        footerNewLinks.map((item, ind) => (
                                            <li key={ind} className="footer-new__list-item" data-hidden={item.deskHidden}>
                                                <Link className="footer-new__list-link" data-r>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='footer-new-list__own-list'>
                                <ul className='footer-new__list-links'>
                                    {
                                        footerNewLinksSecond.map((item, ind) => (
                                            <li key={ind} className="footer-new__list-item footer-new-own-list">
                                                <Link className="footer-new__list-link" data-r>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-socM-block">
                        <ul className='footer-socM-list'>
                            {
                                footerSocMList.map((item, ind) => (
                                    <div key={ind} className='socm-list__item' data-start={item.start} data-end={item.end}>
                                        <img src={item.img} alt="img"/>
                                        <span>{item.title}</span>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="footer-address__block">
                        <div className='footer-address'>
                            <div className='footer-address-group'>
                                <img src="./assets/images/footerMIco.png" alt=""/>
                                <span>
                                    Санкт-Петербург
                                    <br/>
                                    ул. Уральская, 13
                                </span>
                            </div>
                            <div className='footer-address-group address-phoneNum-group'>
                                <img src="./assets/images/footerPhone.png" alt=""/>
                                <span>
                                    +7(905) 204-77-74
                                    <br/>
                                    +7(812) 715-02-75
                                </span>
                            </div>
                            <div className='footer-btn-block'>
                                <button className="footer-btn btn-dGr">Заказать звонок</button>
                            </div>
                        </div>
                    </div>
                    <p className='second-copyRight-text'>
                        <div>
                            <span>
                            <img src="./assets/images/copyRightIco.png" alt=""/>
                            2010-2022 Студия интерьера
                        </span>
                            <br/>
                            Custom Made, все права защищены
                        </div>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer