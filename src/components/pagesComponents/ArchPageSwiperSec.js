import React, {useState} from 'react'
import {suburbsHdesigns} from "../../data/archDesPageData";
import CustomSwiper from "../customComponents/CustomSwiper";
import useMatchMedia from "use-match-media";
import FilteredProjectsArchPage from "./FilteredProjectsArchPage";

const ArchPageSwiperSec = () => {
    const [tablet] = [useMatchMedia('(max-width: 767px)') || false]
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 3;

    const lastItemStart = currentPage * itemsPerPage
    const currentItems = suburbsHdesigns.slice(0, lastItemStart)
    const totalPages = Math.ceil(suburbsHdesigns.length / itemsPerPage)

    const pageIncrement = () => {
        setCurrentPage(currentPage+1)
    }


    return (
        <section className='arch-page__swiper-section'>
            <div className="container">
                <div className='arch-page__swiper-section__body'>
                    <h1 className='arch-page__swiper-title title-white'>Наши проекты загородных домов</h1>
                    {
                        !tablet ? (
                            <CustomSwiper slidesList={suburbsHdesigns} imgWbg={true} overlayCustom={true} />
                        ) : (
                            <div className='projects-upl__block'>
                                <div className='projects-upl__list'>
                                    <FilteredProjectsArchPage currentItems={currentItems} />
                                </div>
                                <button onClick={pageIncrement} className='projects-upl__btn btn-dGr'>Загрузить ещё</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ArchPageSwiperSec