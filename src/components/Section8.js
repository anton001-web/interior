import React, {useState} from 'react'
import {instsWorks} from "../data/instsWorks";
import {motion} from "framer-motion";
import InnerFormModal from "./customComponents/InnerFormModal";

const Section8 = () => {

    const hoverVariants = {
        rest: {
            opacity: 0,
            duration: .3
        },
        hover: {
            opacity: 1,
            transition: {
                duration: .3,
            }
        }
    }

    return (
        <section className='instsWorks-section'>
            <div className="container">
                <div className="instsWorks-section__body">
                    <h1 className="instsWorks-title title-black">Наши проекты в Instagram</h1>
                    <div className='inst-link__hidden'><img src="./assets/images/inst.png" alt=""/>peterson.designer</div>
                    <div className='instsWorks-block'>
                        <div className='instsWorks-list'>
                            {
                                instsWorks.map((item, ind) => (
                                    <motion.div initial="rest" whileHover="hover" animate="rest" className='instsWorks-list__item' key={ind}>
                                        <img src={item.img} alt=""/>
                                        <motion.div variants={hoverVariants} className='instsWorks-list__item-info-block'>
                                            <div className="instsWorks-list__item-info">
                                                <span className='instsWorks-list__item-info__group'>
                                                    <img src="./assets/images/like.png" alt=""/>
                                                    {ind * 20}
                                                </span>
                                                <span className='instsWorks-list__item-info__group'>
                                                    <img src="./assets/images/comment.png" alt=""/>
                                                    {ind * 10}
                                                </span>
                                                <img src="./assets/images/forward.png" alt=""/>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="instsWorks-btns__list">
                        <button className='instsWorks-btn btn-blk'>Смотреть все проекты</button>
                        <div className='inst-link__block'><img src="./assets/images/inst.png" alt=""/>peterson.designer</div>
                        <button className='instsWorks-follow-btn btn-whtB'>Подписаться</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section8