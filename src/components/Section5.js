import React, {useEffect} from 'react'
import {workStages, workStagesImgs} from "../data/workStages";
import classNames from "classnames";

const Section5 = () => {
    const secRef = React.createRef()
    const childRef = React.createRef()
    const imgRef = React.createRef()

    useEffect(() => {
        secRef.current.style.height = childRef.current.clientHeight + 'px'
        imgRef.current.style.height = childRef.current.clientHeight + 'px'
    }, [])

    window.addEventListener('resize',function(){
        secRef.current.style.height = childRef.current.clientHeight + 'px'
        imgRef.current.style.height = childRef.current.clientHeight + 'px'
    });

    return (

        // terrible layout btw))
        <section className='workway-section' ref={secRef}>
            {/*<div className="container">*/}
                <div className="workway-section__body">
                    <div className="workway-sectionBg" ref={imgRef}>

                        {
                            workStagesImgs.map((item, ind) => (
                                <img key={ind} src={item.img} alt="img" className={classNames(item.className)}/>
                            ))
                        }
                    </div>
                    <div className='workway-mContent__body'>
                    </div>
                    <div className='workway-content-upperBlock'>
                        <div className="container">
                            <div className='workway-content-upperBlock__body' ref={childRef}>
                                <div></div>
                                <div className='workway-content'>
                                    <h1 className='workway-title title'>
                                        Как мы работаем
                                    </h1>
                                    <div className='workway-stages-block'>
                                        {
                                            workStages.map((item,ind) => (
                                                <div className='workway-stages__item' key={ind} data-b data-num={ind}>
                                                    <div className='workway-stage-left__opt'>
                                                        <div className='workway-st-num'>
                                                            {ind + 1}
                                                        </div>
                                                        <div className='workway-stage-line'>

                                                        </div>
                                                    </div>
                                                    <div className='workway-stage-text__group'>
                                                        <h3 className='workway-stage__title'>{item.title}</h3>
                                                        <p className='workway-stage__text'>{item.text}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </section>
    )
}

export default Section5