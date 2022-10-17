import React from 'react'
import classNames from "classnames";

const LeftRightSectionCustomStyles = React.forwardRef((props, ref) => {
    const {
        isImgLeft,
        img,
        title,
        children,
        bgColor,
        titleColor,
        className,
        titleHide,
        tabletImgTop,
        isntHalf,
        minHeight = 450
    } = props

    const bgStyles = {
        gridColumn: isImgLeft ? '' : '2',
        gridRow: isImgLeft ? '' : '1',
        backgroundImage: `url(${img})`,
    }

    const wrapSt = {
        minHeight: minHeight + 'px',
        gridTemplateColumns: isImgLeft ? `${isntHalf ? '45% 55%' : '50% 50%'}` : `${isntHalf ? '55% 45%' : '50% 50%'}`
    }

    return (
        <div className={`custom-content__lr-section ${className}`} ref={ref} style={{minHeight: minHeight + 'px'}}>
            {/*<div className="container">*/}
                <div className='custom-content__lr-section__wrap' style={wrapSt}>
                    <div className={`custom-content__lr-section__bg ${!tabletImgTop ? 'custom-content__lr-section__bg-bottom-active' : 'custom-content__lr-section__bg-bottom-active'}`} style={bgStyles}>

                    </div>
                    <div className='custom-content__lr-section-info__block' style={{gridColumn: isImgLeft ? '2' : '1', backgroundColor: bgColor}}>
                        <div className='custom-container'>
                            <div className='custom-content__lr-section-info__content'>
                                {!titleHide ? <h1 className={classNames(`custom-content__lr-section-info__block-title title-${titleColor}`)}>{title}</h1> : null}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    )
})

export default LeftRightSectionCustomStyles