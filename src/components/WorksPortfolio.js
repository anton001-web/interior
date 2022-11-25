import React, {useEffect, useState} from 'react'
import {worksPortfolioItems, worksPortfolioTypes} from "../data/worksPortfolioData";
import {FilteredPortfolioWorks} from "./FilteredPortfolioWorks";

const WorksPortfolio = () => {
    const [currentWorksType, setCurrentWorksType] = useState('flats')
    const [currentWorksByType, setCurrentWorksByType] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const worksPerPage = 10

    useEffect(() => {
        setCurrentWorksByType(worksPortfolioItems.filter(item => item.type === currentWorksType)[0].worksList)
    }, [currentWorksType])

    const setWorksType = (e) => {
        setCurrentPage(1)
        setCurrentWorksType(e.target.dataset.type)
    }

    const lastWorkStart = currentPage * worksPerPage
    const firstWorkStart = lastWorkStart - worksPerPage
    const currentWorks = currentWorksByType.slice(firstWorkStart, lastWorkStart)
    const totalPages = Math.ceil(currentWorksByType.length / worksPerPage)

    const nextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1 )
        } else if(currentPage === totalPages) {
            return null
        }
    }

    const prevPage = () => {
        if(currentPage === 1) {
            return null
        } else if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <section className='works-portfolio__section'>
            <img src="./assets/images/worksPortfolioBG.png" alt="bg pic"  className='works-portfolio__sec-bg'/>
            <div className='works-portfolio__sec-overlay'></div>
            <div className='works-portfolio__body'>
                <div className="container">
                    <div className='works-portfolio__works-types__block'>
                        <h1 className='works-portfolio__title title-white'>Портфолио последних работ</h1>
                        <div className='works-portfolio__types-list'>
                            {
                                worksPortfolioTypes.map((type, ind) => (
                                    <span
                                        className='works-portfolio__types-list__item'
                                        key={ind}
                                        data-type={type.type}
                                        data-margin={ind + 1 !== worksPortfolioTypes.length}
                                        onClick={setWorksType}
                                        data-active={type.type === currentWorksType}
                                    >
                                        {type.title}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='worksPrtf-works__list-block'>
                    <FilteredPortfolioWorks works={currentWorks}/>
                </div>
                <div className="container">
                    <div className='worksPrtf-works__pagination-block'>
                        <div className="worksPrtf-works__pagination">
                            <button className={`worksPrtf-works__pagination-prev worksPrtf-works__pagination-control ${currentPage === 1 && 'disable'}`} onClick={prevPage}>&#x2190;</button>
                            <div className='worksPrtf-works__pagination-fraction'>{currentPage} / {totalPages}</div>
                            <button className={`worksPrtf-works__pagination-next worksPrtf-works__pagination-control ${currentPage === totalPages && 'disable'}`} onClick={nextPage}>&#x2192;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorksPortfolio