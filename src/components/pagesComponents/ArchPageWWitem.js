import React from 'react'
import CustomWorkway from "../customComponents/CustomWorkway";
import {archWWStages} from "../../data/archDesPageData";

export const ArchPageWWitem = ({type}) => {

    const currentContent = archWWStages.filter(stage => stage.type === type)[0]

    return (
        <div className='arch-pageWW__content'>
            {
                type === 'design' ? (
                    <CustomWorkway
                        stages={currentContent.workwayList}
                        className='arch-pageWW__design-stages'
                    />
                ) : (
                    <div className='arch-pageWW__content-texts__block'>
                        {
                            currentContent.texts.map((text, ind) => (
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
    )
}
