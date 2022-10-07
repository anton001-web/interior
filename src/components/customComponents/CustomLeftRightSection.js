import React from 'react'
import classNames from "classnames";
import useMatchMedia from "use-match-media";

const queries = [
    '(max-width: 767px)'
]

const CustomLeftRightSection = (props) => {
    const [tablet] = [useMatchMedia(queries) || false]

    const {
        isImgLeft,
        secondText = '',
        sideImg,
        title,
        text,
        btnText = 'Подробнее',
        btnType = 'btn-whtB',
        isTitleClone = false
    } = props

    const bgStyles = {
        gridColumn: isImgLeft ? '2' : '1',
        left: isImgLeft  ? '0' : '55%',
        backgroundImage: `url(${sideImg})`
    }

    return (
        <div className='custom-lr__section'>
            <div className="container">
                <div className={classNames(`custom-lr__sec-wrap ${isTitleClone && 'custom-lr__sec-wrap__active-antSt'}`)} style={{gridTemplateColumns: isImgLeft ? '1fr 1.1fr' : '1.1fr 1fr'}}>
                    <div className={classNames(`custom-lr__sec-bg ${tablet && !isImgLeft ? 'tabletTrue' : false}`)} style={bgStyles}>
                        {
                            isTitleClone && (
                                <div style={{display: tablet && isTitleClone ? 'block' : 'none'}} className="overlay-shadow"><h2 className='custom-lr__sec-title__clone'>{title}</h2></div>
                            )
                        }
                    </div>
                    <div className="custom-lr__sec-info__block" style={{gridColumn: isImgLeft ? '2' : '1'}}>
                        <div className='custom-lr__sec-info'>
                            <h2 className='custom-lr__sec-title' style={{display: tablet && isTitleClone ? 'none' : 'block'}}>{title}</h2>
                            <p className='custom-lr__sec-text'>
                                <span>{text}</span>
                                <span>{secondText}</span>
                            </p>
                            <button className={classNames(`custom-lr__sec-btn ${btnType}`)}>{btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomLeftRightSection