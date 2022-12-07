import React from 'react'
import {useParams} from "react-router-dom";
import {portfolioWorksList} from "../../data/worksPortfolioData";
import useMatchMedia from "use-match-media";
import CustomInput from "../customComponents/CustomInput";
import CustomSwiper from "../customComponents/CustomSwiper";
import {hoverVariants} from "../../otherFuncs/variants";
import {motion} from "framer-motion";


const PortfolioWorkPage = ({title}) => {
    const params = useParams()
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]

    const portfolioItem = portfolioWorksList.filter(work => work.type === params.portfolioWork)[0]

    return (
        <section className='portfolio-work__section'>
            <div className='portfolio-work__head-section'>
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
            </div>
            <div className='portfolio-work__gallery-section'>
                <div className='portfolio-work__mainImg-block'>
                    <img src={mob ? `${portfolioItem.mainImgMobile}` : `${portfolioItem.mainImg}`} alt=""/>
                </div>
                <div className='portfolio-work__mainGallery-list__block'>
                    {
                        portfolioItem.firstImgList.map((img, ind) => (
                            <div
                                key={ind}
                                className='portfolio-work__mainGallery-list__item'
                            >
                                <img src={img} alt=""/>
                            </div>
                        ))
                    }
                </div>
                <div className='portfolio-work__secondGallery-list__block'>
                    {
                        portfolioItem.secondImgList.map((imgS, ind) => (
                            <div
                                key={ind}
                                className='portfolio-work__secondGallery-list__item'
                            >
                                <img src={imgS} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='portfolio-work__form-section'>
                <img className="portfolio-work__form-bg" src="./assets/images/portfWorkFormBG.png" alt="background pic"/>
                <div className="portfolio-work__form-overlay"></div>
                <div className='container'>
                    <div className="portfolio-work__form-block">
                        <div className='portfolio-work__form-text__group'>
                            <h1 className='portfolio-work__form-title title-white'>Хотите также?</h1>
                            <p className='portfolio-work__form-text'>Оставьте заявку, и мы свяжемся с вами в течении дня. <br/> Это вас ни к чему не обязывает.</p>
                        </div>
                        <div className='portfolio-work__form-body'>
                            <div className='portfolio-work__form'>
                                <CustomInput clName='portfolio-work-form-input-wrap' inputId='portfolio-work__name' placeholder='Как к вам обращаться' />
                                <CustomInput clName='portfolio-work-form-input-wrap' inputId='portfolio-work__phone' placeholder='Номер телефона' />
                                <button className='portfolio-work__form-btn btn-wht'>Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-work__smProjects-sec">
                <div className='container'>
                    <div className="portfolio-work__smProjects-body">
                        <h1 className='portfolio-work__smProjects-title title-white'>Похожие проекты</h1>
                        <CustomSwiper slidesList={portfolioItem.similarProjectsList} imgWbg={true} />
                    </div>
                </div>
            </div>
            <div className='portfolio-work-toTh__sec'>
                <div className="container">
                    <div className="portfolio-work-toTh__body">
                        <h1 className='portfolio-work-toTh__title title-white'>К размышлению</h1>
                        <div className='portfolio-work-toTh__list'>
                            <motion.div initial="rest" whileHover="hover" animate="rest" className='portfolio-work-toTh__list-item'>
                                <motion.div variants={hoverVariants} className='portfolio-work-toTh__list-item-overlay'>
                                    <span className='portfolio-work-toTh__list-item-text'>Коммерческая недвижимость</span>
                                </motion.div>
                                <img src="./assets/images/portfWtoTHimg1.png" alt=""/>
                            </motion.div>
                            <motion.div initial="rest" whileHover="hover" animate="rest" className='portfolio-work-toTh__list-item'>
                                <motion.div variants={hoverVariants} className='portfolio-work-toTh__list-item-overlay'>
                                    <span className='portfolio-work-toTh__list-item-text'>Коттеджи</span>
                                </motion.div>
                                <img src="./assets/images/portfWtoTHimg2.png" alt=""/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioWorkPage