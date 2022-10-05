import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import DropDownList from "./customComponents/DropDownList";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {dropdownToggle, toggleBurger} from "../store/actions";
import {DROPDOWN_CLOSE} from "../store/types";
import {hfLinks} from "../data/generalData";

const headerDDList = [
    'Дизайн интерьера',
    'Отделочные работы',
    'Авторский надзор',
    'Декорирование',
    'Согласование перепланировки',
    'Архитектурное проектирование',
]

const Header = () => {
    const headerMenuOpen = React.createRef()
    const dispatch = useDispatch()

    const menuOpen = () => {
        dispatch(toggleBurger())
        headerMenuOpen.current.classList.toggle('menu-open__active')
    }

    const {visible} = useSelector(store => {
        const {burger} = store
        return burger
    })

    if(visible) {
        document.documentElement.classList.add('scroll-active')
    } else {
        document.documentElement.classList.remove('scroll-active')
        dispatch(dropdownToggle(DROPDOWN_CLOSE))
    }

    const mVariants = {
        hidden: {
            opacity: 0,
            zIndex: -1,
            transition: {
                duration: .3
            }
        },
        animate: {
            opacity: 1,
            zIndex: 2,
            transition: {
                duration: .3
            }
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-body">
                    <div className='headerR-part'>
                        <img src="./assets/images/header-logo.png" alt="" className='header-logo'/>
                        <div className="header-list__block">
                            <ul className='header-list__links'>
                                {
                                    hfLinks.map((item, ind) => (
                                        <li key={ind} className="header-list__item">
                                            <Link to={item.to} className="header-list__link" data-r>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='headerL-part'>
                        <p className='header-address'>
                            <span> Санкт - Петербург</span>
                            <span> ул.Уральская 13 </span>
                        </p>
                        <button className="header-btn btn-gr">
                            <p> Заказать звонок </p></button>
                        <div className="header-menu__block" ref={headerMenuOpen}>
                            <div className='header-menu__open' onClick={menuOpen}>
                                <span className='header-menu__open-line'> </span>
                            </div>
                            <motion.div exit={'hidden'} variants={mVariants} animate={visible ? 'animate': 'hidden'} initial={'hidden'} className='header-menu'>
                                <DropDownList listTitle='Услуги' listItems={headerDDList} className='tabletDD'/>
                                <ul className='header-menu__list'>
                                    <div className='header-menu__list-items__block'>
                                        <li className='header-menu__list-item' data-b>О нас</li>
                                        <DropDownList listTitle='Услуги' listItems={headerDDList} className='desktopDD'/>
                                        <li className='header-menu__list-item' data-b>Стоимость</li>
                                        <li className='header-menu__list-item' data-b>Портфолио</li>
                                        <li className='header-menu__list-item' data-b>Блог</li>
                                        <li className='header-menu__list-item' data-b>Контакты</li>
                                    </div>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header