import React from 'react'
import GenInfoSec from "../AboutPage/GenInfoSec";
import CustomAdvantagesList from "../customComponents/CustomAdvantagesList";
import {aboutUsAdvLData} from "../../data/aboutCompData";
import AbtPSwipersSec from "../pagesComponents/AbtPSwipersSec";
import OurTeamSec from "../pagesComponents/OurTeamSec";
import Section7 from "../Section7";
import Section2 from "../Section2";
import ContactsSec from "../pagesComponents/ContactsSec";

const AboutUsPage = () => {
    return (
        <>
            <GenInfoSec />
            <div className='aboutUs-page__benefits-list__section'>
                <div className='container'>
                    <div className='aboutUs-page__benefits-sec__body'>
                        <div className='aboutUs-page__benefits-list'>
                            <h1 className='aboutUs-page__benefits-title title-black'>Наши преимущества</h1>
                            <CustomAdvantagesList list={aboutUsAdvLData} img='./assets/images/about-usAdvListBg.png' bgColor='rgba(0,0,0,0)'/>
                        </div>
                    </div>
                </div>
            </div>
            <AbtPSwipersSec />
            <OurTeamSec />
            <Section7 />
            <Section2 />
            <ContactsSec />
        </>
    )
}

export default AboutUsPage