import React from 'react'
import {useParams} from "react-router-dom";
import {portfolioWorksList} from "../../data/worksPortfolioData";
import useMatchMedia from "use-match-media";


const PortfolioWorkPage = ({title}) => {
    const params = useParams()
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]

    const portfolioItem = portfolioWorksList.filter(work => work.type === params.portfolioWork)[0]

    return (
        <section className='portfolio-work__section'>
            <img className='portfolio-work__head-bg' src="./assets/images/portfWorkHeadBG.png" alt=""/>
            <div className='portfolio-work__head-overlay'></div>
            <div className="container">
                <div className='portfolio-work__details-block'>
                    <div className="portfolio-work__details-titles__group">
                        <h1 className='portfolio-work__details-title title-white'>{portfolioItem.title}</h1>
                        <span className='portfolio-work__details-subTitle'>Дизайн квартиры <i>{portfolioItem.flatSquare} м<sup>2</sup></i></span>
                    </div>
                    <div className='portfolio-work__details-main__img-block'>
                        <img src={portfolioItem.heroImg} alt="flat design image"/>
                    </div>
                    <div className='portfolio-work__details-info'>
                        <div className='portfolio-work__details-info__text' data-b>
                            <h3 className='portfolio-work__details-info__title'>О проекте</h3>
                            <p className='portfolio-work__details-info__text'>{portfolioItem.aboutProject}</p>
                        </div>
                        <div className='portfolio-work__details-info__text'>
                            <h3 className='portfolio-work__details-info__title'>Задачи</h3>
                            <p className='portfolio-work__details-info__text'>{portfolioItem.exercises}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioWorkPage