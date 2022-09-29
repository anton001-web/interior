import React, {useState} from 'react'
import {worksList} from "../data/worksListData";
import {AnimatePresence, AnimatePresenceProps, motion} from "framer-motion";

const Filter = ({cards}) => {

    console.log(cards[0])


    //something wrong with anim...
    return (
        <div className='works-list__array-block'>
            <div className="works-list__array">
                <AnimatePresence
                    exitBeforeEnter={true}
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
                                className='works-list__array-item'
                            >
                                <img src={item.img} alt="img" className='works-list__array-item__img'/>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Filter