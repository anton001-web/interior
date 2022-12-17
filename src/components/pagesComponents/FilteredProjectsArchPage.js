import React from 'react'
import {AnimatePresence} from "framer-motion";
import {hoverVariants} from "../../otherFuncs/variants";
import {motion} from "framer-motion";

const FilteredProjectsArchPage = ({currentItems}) => {


    return (
        <AnimatePresence>
            {
                currentItems.map((item, ind) => (
                    <motion.div
                        className='projects-upl__list-item'
                         layout
                         animate={{ opacity: 1 }}
                         initial={{ opacity: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            key={ind}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            className='projects-upl__list-item__body'
                        >
                            <motion.div variants={hoverVariants} className='custom-swiper-overlay custom'>
                                <span className='custom-swiper-overlay-text'>{item.title}</span>
                            </motion.div>
                            <img src={item.img} className='projects-upl__img'/>
                        </motion.div>
                    </motion.div>
                ))
            }
        </AnimatePresence>
    )
}

export default FilteredProjectsArchPage