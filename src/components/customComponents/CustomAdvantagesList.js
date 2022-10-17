import React from 'react'
import {CustomAdvantagesListItem} from "./CustomAdvantagesListItem";


const CustomAdvantagesList = ({list, img, bgColor}) => {
    return (
        <>
            <img className='benefits-bg' src={img} alt=""/>
            <div className='benefits-list-overlay' style={{background: bgColor}}></div>
            <div className='benefits-list__block'>
                <div className='custom-adv-list__block'>
                    <div className="custom-adv-list">
                        {
                            list.map((item, ind) => (
                                <CustomAdvantagesListItem
                                    key={ind}
                                    text={item.text}
                                    ico={item.img}
                                    list={item.clarifyinglist}
                                    title={item.title}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomAdvantagesList