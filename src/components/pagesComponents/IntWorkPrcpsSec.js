import React from 'react'
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";

const IntWorkPrcpsSec = ({sectionData}) => {

    const {
        title,
        img,
        texts
    } = sectionData

    return (
        <section className='int-work__principles-block__section'>
            <div className='int-work__principles-block__body'>
                <div className='int-work__principles-block__info-wrap'>
                    <div className="int-work__principles-container">
                        <div className='int-work__principles-block__info-body'>
                            <h1 className='int-work__principles-title title-black'>{title}</h1>
                            <div className='int-work__principles-texts__group'>
                                {
                                    texts.map((item, ind) => (
                                        <p key={ind} className='int-work__principles-text' data-b>
                                            {item}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='int-work__principles-block__bg'>
                    <img src={img} alt="background picture"/>
                </div>
            </div>
        </section>
    )
}

export default IntWorkPrcpsSec