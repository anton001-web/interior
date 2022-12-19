import React from 'react'
import CustomWorkway from "../customComponents/CustomWorkway";
import {useDispatch} from "react-redux";
import {modalToggle} from "../../store/actions";


const IntWworkStages = ({stagesData}) => {
    const dispatch = useDispatch()

    const {
        imagesList,
        workwayTitle,
        stagesList
    } = stagesData

    const openModal = () => dispatch(modalToggle('int-des__modal'))

    return (
        <section className='IntW-workway__stages-sec'>
            <div className='IntW-workway__stages-body'>
                <div className='IntW-workway__section-bg'>
                    {
                        imagesList.map((item, ind) => (
                            <img className='IntW-workway__section-bg__item' src={item.img} alt="accommodation-image" data-comp-hide={ind + 1 >= 5 && true}/>
                        ))
                    }
                </div>
                <div className='IntW-workway__content-upperBlock'>
                    <div className="custom-container">
                        <div className='IntW-workway__content-body'>
                            <h1 className='IntW-workway__title title-black'>{workwayTitle}</h1>
                            <CustomWorkway stages={stagesList} className='IntW-workway_stages'/>
                            <button onClick={openModal} className='IntW-workway__btn btn-blk'>Заказать дизайн</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntWworkStages