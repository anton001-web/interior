import React, {useEffect, useState} from 'react'
import {archWWStages, archWWstagesLinks} from "../../data/archDesPageData";
import CustomWorkway from "../customComponents/CustomWorkway";
import {ArchPageWWitem} from "./ArchPageWWitem";

const ArchPageWWdesktop = () => {
    const [activeType, setActiveType] = useState('design')
    const [content, setContent] = useState([])

    useEffect(() => {
        setContent(archWWStages.filter(stage => stage.type === activeType)[0])
    }, [activeType])

    const changeActiveType = (e) => {
        setActiveType(e.target.dataset.type)
    }

    return (
        <div className='arch-pageWW__desk-block'>
            <div className='arch-pageWW__stages-list'>
                {
                    archWWstagesLinks.map((stage, ind) => (
                        <div className='arch-pageWW__stages-list-item__block' key={ind}>
                            <span
                                data-type={stage.type}
                                onClick={changeActiveType}
                                className='arch-pageWW__stages-list-item'
                                key={ind}
                                data-active={stage.type === activeType}
                            >
                                {stage.title}
                            </span>
                            {archWWstagesLinks.length !== ind+1 && <img src="./assets/images/swiperLightArrowNext.png" alt="arrow"/>}
                        </div>
                    ))
                }
            </div>
            <div className='arch-pageWW__content-block'>
                <span className='arch-pageWW__stage-title'>{content.title}</span>
                <ArchPageWWitem type={activeType} />
            </div>
        </div>
    )
}

export default ArchPageWWdesktop