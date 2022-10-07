import React from 'react'
import {CustomAdvantagesListItem} from "./CustomAdvantagesListItem";


const CustomAdvantagesList = ({list}) => {
    return (
        <div className='custom-adv-list__block'>
            <div className="custom-adv-list">
                {
                    list.map((item, ind) => (
                        <CustomAdvantagesListItem
                            text={item.text}
                            ico={item.img}
                            list={item.clarifyinglist}
                            title={item.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CustomAdvantagesList