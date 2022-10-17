import React from 'react'

const FurnitureAdv = ({category}) => {
    return (
        <div className='spage-authC__subInfo'>
            <div className="container">
                <div className="spage-authC__subInfo-block">
                    <h1 className='spage-authC__subInfo-title title-white'>{category[0].secSubInfo.title}</h1>
                    <ul className='spage-authC__subInfo-list'>
                        {
                            category[0].secSubInfo.list.map((item, ind) => (
                                <li key={ind} className='spage-authC__subInfo-list__item'>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FurnitureAdv