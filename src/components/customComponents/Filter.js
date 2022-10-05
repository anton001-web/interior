import React, {useState} from 'react'
import {worksList} from "../../data/worksListData";
import {AnimatePresence, AnimatePresenceProps, motion} from "framer-motion";

const Filter = ({cards}) => {

    const hoverVariants = {
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

    //something wrong with anim...
    return (
        <div className='works-list__array-block'>
            <div className="works-list__array">
                <AnimatePresence
                    exitBeforeEnter={true}
                    initial={'hidden'}
                    whileHover={'animate'}
                >
                    {
                        cards[0].images.map((item, ind) => (
                            <motion.div
                                layout
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                key={ind}
                            >
                                <motion.div
                                    initial={'hidden'}
                                    whileHover={'animate'}
                                    className='works-list__array-item'
                                >
                                    <img src={item.img} alt="img" className='works-list__array-item__img'/>
                                    <motion.div variants={hoverVariants} className='works-list__hoverItem'>
                                        {item.title}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Filter