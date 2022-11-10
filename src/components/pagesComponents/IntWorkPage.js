import React from 'react'
import LeftRightSectionCustomStyles from "../customComponents/LeftRightSectionCustomStyles";
import IntWorkPListItem from "./IntWorkPListItem";
import CustomForm from "../customComponents/CustomForm";
import Section2 from "../Section2";
import Agreement from "./Agreement";
import IntWworkStages from "./IntWworkStages";
import IntWorkPrcpsSec from "./IntWorkPrcpsSec";
import IntWorkFormSec from "./IntWorkFormSec";

const IntWorkPage = ({priceList, generalData}) => {
    const {
        iProjectCompound
    } = generalData

    return (
        <section className='int-work__page'>
            {
                priceList.map((item, ind) => (
                    <LeftRightSectionCustomStyles
                        num={ind + 1}
                        key={ind}
                        img={item.bgImg}
                        isImgLeft={ind % 2 === 0}
                        tabletImgTop={false}
                        titleHide={true}
                        className='int-work__lr-section'
                        bgLeft={ind % 2 === 0}
                    >
                        <IntWorkPListItem plItem={item}/>
                    </LeftRightSectionCustomStyles>
                ))
            }
            <div className='intW-page__compound-section'>
                <div className="container">
                    <div className="intW-page__compound-body">
                        <h1 className='intW-page__compound-title title-black'>{iProjectCompound.title}</h1>
                        <div className='intW-page__compound-lists__group'>
                            {
                                iProjectCompound.lists.map((item, ind) => (
                                    <>
                                        <div className={item.className} key={ind}>
                                            <div className='intW-page__compound-listC__wrap'>
                                                <h3 className='intW-page__compound-list__title'>{item.listTitle}</h3>
                                                <ol className='intW-page__compound-list'>
                                                    {
                                                        item.innerList.map((item, ind) => (
                                                            <li key={ind} className='intW-page__compound-list__item'><span className='intW-page__compound-list__item-numb'>{ind + 1}.</span> {item}</li>
                                                        ))
                                                    }
                                                </ol>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                            <div className='intW-page__compound-form__block'>
                                <div className='intW-page__compound-form__wrap'>
                                    <img className='intW-page__compound-form__bg' src="./assets/images/intW-pageForm-bg.png" alt="form-background"/>
                                    <div className='intW-page__compound-form__overlay'></div>
                                    <CustomForm btnText='Заказать звонок' className='intW-page__compound-form' inputsList={iProjectCompound.inputsList} textColor='white'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section2 />
            <Agreement alwaysBlack={true} className='intW-page__agreement-section'/>
            <IntWworkStages stagesData={generalData.stagesData} />
            <IntWorkPrcpsSec sectionData={generalData.principlesData}/>
            <IntWorkFormSec sectionData={generalData.MainformSecData} />
        </section>
    )
}

export default IntWorkPage