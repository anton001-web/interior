import React, {useState} from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import {servicesData, servicesLRtexts} from "../../data/servicesData";
import {servicesMainList} from "../../data/generalData";
import CustomInput from "../customComponents/CustomInput";
import InnerFormModal from "../customComponents/InnerFormModal";

const ServicesPage = () => {
    const [innerFormModalVisible, setInnerFormModalVisible] = useState(false)

    async function openInnerModal (e) {
        e.preventDefault()
        await console.log('data gathering')
        setTimeout(() => {
            setInnerFormModalVisible(!innerFormModalVisible)
        }, 1300)
    }



    return (
        <section className='services-page'>
            <div className='services-page__services-list__block'>
                <div className='services-page__serv-list__wrap'>
                    <div className='services-page__serv-list'>
                        <h3 className='services-page__main-title'>Наши услуги</h3>
                        <p className='services-page__main-text'>Более 15 лет мы работаем в сфере проектирования дизайна
                            интерьеров жилых и коммерческих помещений Санкт-Петербурга и Москвы. </p>
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
                        <div className='services-page__serv-list__overlay'></div>
                        <img src="./assets/images/servPageMain.png" alt=""/>
                        <h3 className='services-page__second-main__title'>Наши услуги</h3>
                    </div>
                </div>
            </div>
            {
                servicesData.services.map((item, ind) => (
                    <CustomLeftRightSection
                        key={ind}
                        title={item.title}
                        texts={item.texts}
                        sideImg={item.img}
                        isImgLeft={(ind + 1) % 2 === 0 ? false : true}
                    />
                ))
            }
            <div className="services-page__form-block">
                <div className="services-page__form-wrap">
                    <div className='services-page__form-bg'>
                        <img src="./assets/images/sectionPageFormBg.png" alt="side image"/>
                    </div>
                    <div className='services-page__form-content'>
                        {
                            innerFormModalVisible === true ? (
                                <InnerFormModal
                                    toggleState={setInnerFormModalVisible}
                                />
                            ) : (
                                <>
                                    <h1 className='services-page__form-title'>Расскажите нам о своем проекте</h1>
                                    <p className='services-page__form-text'>Разрешите нам познакомиться с вами и узнать о вашем
                                        проекте. Мы подготовим для вас индивидуальное предложение.</p>
                                    <form className='services-page__form'>
                                        {
                                            servicesData.inputsList.map((input, ind) => (
                                                <CustomInput inputId={input.inputId} placeholder={input.placeholder}
                                                             isMessageField={input.messageField}/>
                                            ))
                                        }
                                        <button onClick={openInnerModal} className="services-p__form-btn btn-blk">
                                            Отправить сообщение
                                        </button>
                                    </form>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesPage