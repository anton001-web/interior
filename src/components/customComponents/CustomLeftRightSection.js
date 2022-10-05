import React from 'react'
import classNames from "classnames";
import useMatchMedia from "use-match-media";

const queries = [
    '(max-width: 767px)'
]


const CustomLeftRightSection = (props) => {
    const [tablet] = [useMatchMedia(queries) || false]

    console.log(!tablet)

    const {
        isImgLeft,
        sideImg,
        title,
        text,
        btnText = 'Подробнее',
        btnType = 'btn-whtB'
    } = props

    const bgStyles = {
        gridColumn: isImgLeft ? '2' : '1',
        left: isImgLeft  ? '0' : '70%',
        backgroundImage: `url(${sideImg})`
    }


    return (
        <div className='custom-lr__section'>
            <div className="container">
                <div className='custom-lr__sec-wrap' style={{gridTemplateColumns: isImgLeft ? '1fr 1.1fr' : '1.1fr 1fr'}}>
                    <div className={classNames(`custom-lr__sec-bg ${tablet && !isImgLeft ? 'tabletTrue' : false}`)} style={bgStyles}>

                    </div>
                    <div className="custom-lr__sec-info__block" style={{gridColumn: isImgLeft ? '2' : '1'}}>
                        <div className='custom-lr__sec-info'>
                            <h2 className='custom-lr__sec-title'>{title}</h2>
                            <p className='custom-lr__sec-text'>{text}</p>
                            <button className={classNames(`custom-lr__sec-btn ${btnType}`)}>{btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomLeftRightSection