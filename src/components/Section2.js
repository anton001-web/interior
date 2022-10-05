import React, {useState} from 'react'
import {worksList, worksListItems} from "../data/worksListData";
import {motion} from "framer-motion";
import Filter from "./customComponents/Filter";

const Section2 = () => {
    const [cards, setCards] = useState(worksList.filter(item => item.type === 'apartments'))

    const handleCategory = (e) => {
        const currentCardsList = worksList.filter(item => item.type === e.target.dataset.type)
        setCards(currentCardsList)
    }

    return (
        <section className='works-list__section'>
            <div className='works-list__body'>
                <div className='works-list__header-block'>
                    <div className="container">
                        <div className="works-list__header">
                            <h1 className="title-white">
                                Портфолио лучших работ
                            </h1>
                            <ul className='works-ltoggle__list'>
                                {worksListItems.map((item, ind) => (
                                    <motion.li
                                        key={ind}
                                        className='works-ltoggle__list-item'
                                        data-type={item.type}
                                        onClick={handleCategory}
                                    >
                                        {item.title}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Filter cards={cards}/>
                <div className='works-list__footer-block'>
                    <div className="container">
                        <div className="works-list__footer">
                            <div className="works-list__footer-Cblock">
                                <p className='works-list__footer-text'>
                                    «Студия Яны Петерсон» – интерьеры по индивидуальной мерке
                                </p>
                                <button className='works-list__footer-btn btn-gr'>Смотреть все работы</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2