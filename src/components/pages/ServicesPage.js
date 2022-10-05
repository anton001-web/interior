import React from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import {servicesLRtexts} from "../../data/servicesData";
import {servicesMainList} from "../../data/generalData";
import CustomInput from "../customComponents/CustomInput";

const ServicesPage = () => {
    return (
        <section className='services-page'>
            <div className='services-page__services-list__block'>
                <div className="container">
                    <div className='services-page__serv-list__wrap'>
                        <div className='services-page__serv-list'>
                            <h3 className='services-page__main-title'>Наши услуги</h3>
                            <p className='services-page__main-text'>Более 15 лет мы работаем в сфере проектирования дизайна интерьеров жилых и коммерческих помещений Санкт-Петербурга и Москвы. </p>
                            <p className="services-page__main-text">В студии интерьера Custom Made вы можете заказать:</p>
                            <ul className='main-services-page__list'>
                                {
                                    servicesMainList.map((item, ind) => (
                                        <li key={ind} className='main-services-page__list-item'>
                                            {item.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='services-page__serv-list__bg'>
                            <h3 className='services-page__second-main__title'>Наши услуги</h3>
                        </div>
                    </div>
                </div>
            </div>
            <CustomLeftRightSection
                title='Дизайн интерьера'
                text={servicesLRtexts.interiorText}
                sideImg='./assets/images/services1.png'
                isImgLeft={true}
            />
            <CustomLeftRightSection
                title='Дизайн интерьера'
                text={servicesLRtexts.interiorText}
                sideImg='./assets/images/services2.png'
                isImgLeft={false}
            />
            <CustomLeftRightSection
                title='Дизайн интерьера'
                text={servicesLRtexts.interiorText}
                sideImg='./assets/images/services3.png'
                isImgLeft={true}
            />
            <CustomLeftRightSection
                title='Дизайн интерьера'
                text={servicesLRtexts.interiorText}
                sideImg='./assets/images/services4.png'
                isImgLeft={false}
            />
            <CustomLeftRightSection
                title='Дизайн интерьера'
                text={servicesLRtexts.interiorText}
                sideImg='./assets/images/services5.png'
                isImgLeft={true}
            />
            <CustomLeftRightSection
                title='Дизайн интерьера'
                text={servicesLRtexts.interiorText}
                sideImg='./assets/images/services6.png'
                isImgLeft={false}
            />
            <div className="services-page__form-block">
                <div className="container">
                    <div className="services-page__form-wrap">
                        <div className='services-page__form-bg'>

                        </div>
                        <div className='services-page__form-content'>
                            <h1 className='services-page__form-title'>Расскажите нам о своем проекте</h1>
                            <p className='services-page__form-text'>Разрешите нам познакомиться с вами и узнать о вашем проекте. Мы подготовим для вас индивидуальное предложение.</p>
                            <form className='services-page__form'>
                                <CustomInput inputId='services-p__form-name' placeholder='Как к вам обращаться'/>
                                <CustomInput inputId='services-p__form-phone' placeholder='Номер телефона'/>
                                <CustomInput inputId='services-p__form-message' placeholder='Ваше сообщение' isMessageField={true} />
                                <button className="services-p__form-btn btn-blk">
                                    Отправить сообщение
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesPage