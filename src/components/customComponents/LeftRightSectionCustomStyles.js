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
        tabletImgTop
    } = props

    const bgStyles = {
        gridColumn: isImgLeft ? '' : '2',
        gridRow: isImgLeft ? '' : '1',
        backgroundImage: `url(${img})`,
    }

    return (
        <div className={`custom-content__lr-section ${className}`} ref={ref}>
            {/*<div className="container">*/}
                <div className='custom-content__lr-section__wrap' style={{gridTemplateColumns: isImgLeft ? '47% 53%' : '47% 53%'}}>
                    <div className={`custom-content__lr-section__bg ${!tabletImgTop ? 'custom-content__lr-section__bg-bottom-active' : null}`} style={bgStyles}>

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