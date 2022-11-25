import React from 'react'

export const FilteredPortfolioWorks = ({works}) => {
    return (
        <div className='worksPrtf-works__list'>
            {
                works.map((work, ind) => (
                    <div className='worksPrtf-works__list-item' key={ind}>
                        <img src={work.img} alt="" className='worksPrtf-works__list-item__img'/>
                    </div>
                ))
            }
        </div>
    )
}