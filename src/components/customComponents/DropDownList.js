import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {burgerClose, dropdownToggle} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {DROPDOWN_TOGGLE} from "../../store/types";
import classNames from "classnames";
import useMatchMedia from "use-match-media";
import {closeBurgerMenu} from "../../otherFuncs/nullingStyles";
import {logPlugin} from "@babel/preset-env/lib/debug";

const DropDownList = ({listItems, listTitle, className}) => {
    const [minHeightList] = [useMatchMedia('(max-height: 560px)') || false]
    const dispatch = useDispatch()

    const openHandle = () => {
        dispatch(dropdownToggle(DROPDOWN_TOGGLE))
    }

    const closeBurgerMenu = () => {
        dispatch(burgerClose())
    }

    const {visible} = useSelector(store => {
        const {dropdown} = store
        return dropdown
    })

    const variants = {
        hidden: {
            visibility: 'hidden',
            height: 0,
            opacity: 0,
            padding: 0,
            transition: {
                duration: .3
            }

        },
        animate: {
            visibility: 'visible',
            height: 'auto',
            opacity: 1,
            padding: '10px 0px 0px 20px',
            transition: {
                duration: .3
            }
        }
    }

    return (
        <div className={classNames('dropdown-wrap', className)} data-b>
            <motion.span className="dropdown-title" onClick={openHandle}>{listTitle}</motion.span>
            <div className="ddMenu-wrap">
                <motion.div
                    variants={variants}
                    initial={'hidden'}
                    animate={visible ? 'animate': 'hidden'}
                    className="dropdown-menu"
                    exit
                >
                    {
                        listItems.map((item, ind) => (
                            <Link to={item.to} className='dropdown-link' data-lb key={ind} onClick={closeBurgerMenu}>
                                <div className='dropdown__item-title__block' data-ddtitle={item.title}><span className='dropdown__item-title'>{item.title}</span></div>
                            </Link>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default DropDownList