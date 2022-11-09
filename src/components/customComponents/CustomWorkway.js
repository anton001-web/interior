import React from 'react'


const CustomWorkway = ({stages, className}) => {
    return (
        <div className={`custom-workway__stages-block ${className || null}`}>
            <div className='workway-stages-block'>
                {
                    stages.map((item, ind) => {
                        return (
                            <div className='custom-workway-stages__item' key={ind} data-b data-hide-line={stages.length === ind + 1 ? true : false}>
                                <div className='custom-workway-stage-left__opt'>
                                    <div className='custom-workway-st-num'>
                                        {ind + 1}
                                    </div>
                                    <div className='custom-workway-stage-line'>

                                    </div>
                                </div>
                                <div className='custom-workway-stage-text__group'>
                                    <h3 className='custom-workway-stage__title'>{item.title}</h3>
                                    <p className='custom-workway-stage__text'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CustomWorkway