import React from 'react'
import {contactsData} from "../../data/aboutCompData";

const ContactsSec = () => {
    return (
        <section className='aboutP-contacts__section'>
            <div className='aboutP-contacts__body'>
                <div className='aboutP-contacts__wrap'>
                    <div className='custom-container'>
                        <h1 className='aboutP-contacts__title title-black'>Наши контакты</h1>
                        <div className='aboutP-contacts__block'>
                            <h3 className='aboutP-contacts__subTitle'>Головной офис</h3>
                            <div className='aboutP-contacts__table'>
                                <div className='aboutP-contacts__table-row'>
                                    <span className='aboutP-contacts__table-title'>Адрес</span>
                                    <span className='aboutP-contacts__table-text'>{contactsData.mainOfficeAddress}</span>
                                </div>
                                <div className='aboutP-contacts__table-row'>
                                    <span className='aboutP-contacts__table-title'>Телефон</span>
                                    <div className='aboutP-contacts__table-phones__list'>
                                        {
                                            contactsData.phonesList.map((phone, ind) => (
                                                <span className='aboutP-contacts__table-text' key={ind}>{phone}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='aboutP-contacts__table-row'>
                                    <span className='aboutP-contacts__table-title'>E-mail</span>
                                    <span className='aboutP-contacts__table-text'>{contactsData.mail}</span>
                                </div>
                                <div className='aboutP-contacts__table-row'>
                                    <span className='aboutP-contacts__table-title'>Режим работы</span>
                                    <span className='aboutP-contacts__table-text'>{contactsData.workingHours}</span>
                                </div>
                            </div>
                        </div>
                        <div className='aboutP-contacts__footer'>
                            <h4 className='aboutP-contacts__cooprTitle'>По вопросам сотрудничества</h4>
                            <p className='aboutP-contacts__cooprText'>Если Вы заинтересованы в сотрудничестве, просим направить нам сообщение на электронную почту сmade@mail.ru</p>
                        </div>
                    </div>
                </div>
                <div className='aboutP-contacts__sideImg-block'>
                    <picture>
                        <source srcSet="./assets/images/abtP-contactsMobile.png" media="(max-width: 480px)" className='aboutP-contacts__sideImg-mobile' />
                        <img srcSet="./assets/images/abtP-contactsTablet.png" alt="My default image" className='aboutP-contacts__sideImg-tablet'/>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default ContactsSec
