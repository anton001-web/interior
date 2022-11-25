import React from 'react'
import {teamMembersList, teamSecData} from "../../data/aboutCompData";
import useMatchMedia from "use-match-media";
import {modalToggle} from "../../store/actions";
import {ourTeamAskqstModalW} from "../../data/modalsData";
import {useDispatch} from "react-redux";

const OurTeamSec = () => {
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]
    const dispatch = useDispatch()

    const modalOpen = () => {
        dispatch(modalToggle(ourTeamAskqstModalW.modalType))
    }

    return (
        <section className='our-team__section'>
            <div className='our-teamSec__body'>
                <h1 className='our-teamSec-clone__title title-black'>Наша команда</h1>
                <div className='our-teamSec__team-block'>
                    <div className='custom-container'>
                        <h1 className='our-teamSec-title title-black'>Наша команда</h1>
                        <div className='our-teamSec__team-info__block'>
                            <div className='our-teamSec__team-list__block'>
                                <div className='our-teamSec-teamHead__block'>
                                    <h3 className='our-teamSec-teamHead'>{teamSecData.teamHead}</h3>
                                    <span className='our-teamSec-teamHead__subTitle'>руководитель студии</span>
                                </div>
                                <ul className='our-teamSec__team-list'>
                                    {
                                        teamSecData.membersList.map((member, ind) => (
                                            <li key={ind} className='our-teamSec__team-list__item' data-last={teamSecData.membersList.length === ind + 1 && true}>{member}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='our-teamSec__main-team-tagline__block'>
                                <p className='our-teamSec__tagline'>
                                    «Считаю, что неразрешимых ситуаций не бывает. Кто хочет двигаться вперед - ищет пути по решению проблем, кто не хочет - причины неудач»
                                </p>
                                <button className='our-teamSec-tagline__askQ-btn' onClick={modalOpen}>Задать вопрос <img src="./assets/images/askQArrowBtn.png" alt="arrow "/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='our-teamSec__clone-team-tagline__block'>
                    <p className='our-teamSec__tagline'>
                        «Считаю, что неразрешимых ситуаций не бывает. Кто хочет двигаться вперед - ищет пути по решению проблем, кто не хочет - причины неудач»
                    </p>
                    <button className='our-teamSec-tagline__askQ-btn'>Задать вопрос <img src="./assets/images/askQArrowBtn.png" alt="arrow "/></button>
                </div>
                <div className='our-teamSec__sideImg-block'>
                    <img src={teamSecData.sideImg} alt="side picture"/>
                </div>
                {
                    mob && (
                        <div className='mobile-members__list'>
                            {
                                teamMembersList.map((member, ind) => (
                                    <div className='mobile-members__list-item'>
                                        <img src={member.memberImg} alt="member pic" className='mobile-members__list-item__img'/>
                                        <h4 className='mobile-members__list-item__name'>{member.name}</h4>
                                        <p className='mobile-members__list-item__position'>{member.position}</p>
                                        <p className='mobile-members__list-item__tagline'>{member.tagline}</p>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default OurTeamSec