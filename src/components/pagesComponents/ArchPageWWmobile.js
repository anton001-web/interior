import React, {useState} from 'react'
import {archWWStages} from "../../data/archDesPageData";
import CustomWorkway from "../customComponents/CustomWorkway";

const ArchPageWWmobile = () => {
    const [currentItem, setCurrentItem] = useState(null)

    const toggleItem = (ind) => {
        if (currentItem === ind) {
            return setCurrentItem(null)
        }

        setCurrentItem(ind)
    }

    return (
        <div className='arch-pageWW__tmob-block'>
            <div className='arch-pageWW__tmob-accordion'>
                {
                    archWWStages.map((item, ind) => (
                        <div className='arch-pageWW__tmob-accordion__item' key={ind}>
                            <div className='arch-pageWW__tmob-accordion__item-header' onClick={() => toggleItem(ind)}>
                                <h3 className='arch-pageWW__tmob-accordion__item-title'>{item.title}</h3>
                                {
                                    currentItem === ind ? <img src="./assets/images/accordionHide.png" alt="hide"/> : <img src="./assets/images/accordionShow.png" alt="show"/>
                                }
                            </div>
                            <div className={`arch-pageWW__tmob-accordion__item-body ${currentItem === ind && 'active'}`}>
                                {
                                    item.type === 'design' ? (
                                        <CustomWorkway
                                            stages={item.workwayList}
                                            className='arch-pageWW__design-stages'
                                        />
                                    ) : (
                                        <div className='arch-pageWW__content-texts__block'>
                                            {
                                                item.texts.map((text, ind) => (
                                                    <div className='arch-pageWW__content-text__wrap' key={ind}>
                                                        <p className='arch-pageWW__content-text'>{text.text}</p>
                                                        {
                                                            text.list && (
                                                                <ul className='arch-pageWW__content-text__list'>
                                                                    {
                                                                        text.list.map((t, i) => (
                                                                            <li className='arch-pageWW__content-text__list-item' key={i}>-{t}</li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            )
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArchPageWWmobile