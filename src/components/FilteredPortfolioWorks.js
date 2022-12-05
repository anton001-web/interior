import React from 'react'
import {AnimatePresence, motion} from "framer-motion";

export const FilteredPortfolioWorks = ({works}) => {

    const cardAnim = {
        hidden: {
            opacity: 0
        },
        animate: {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    }

    return (
        <div className='worksPrtf-works__list'>
            <AnimatePresence

            >
                {
                    works.map((work, ind) => (
                        <motion.div
                            className='worksPrtf-works__list-item'
                            key={ind}
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}

                        >
                            <motion.div
                                className='worksPrtf-works__list-item__body'
                                initial={'hidden'}
                                whileHover={'animate'}
                            >
                                <a href={`/works-portfolio${work.to}`}>
                                    <img src={work.img} alt="" className='worksPrtf-works__list-item__img'/>
                                    <motion.div variants={cardAnim} className='worksPrtf-works__list__hover-block'>
                                        {work.title}
                                    </motion.div>
                                </a>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </AnimatePresence>
        </div>
    )
}