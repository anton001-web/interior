import React from 'react'
import CustomLeftRightSection from "../customComponents/CustomLeftRightSection";
import {generalAboutSecData} from "../../data/aboutCompData";

const GenInfoSec = () => {
    return (
        <section>
            <CustomLeftRightSection
                isImgLeft={false}
                sideImg={generalAboutSecData.sideImg}
                title={generalAboutSecData.title}
                texts={generalAboutSecData.texts}
                isTitleClone={true}
                isHalf={true}
                advList={generalAboutSecData.servicesList}
            />
        </section>
    )
}

export default GenInfoSec