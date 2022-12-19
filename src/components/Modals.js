import React, {useState} from 'react'
import {ModalWindow} from "./customComponents/ModalWindow";
import {
    headerPrjOrderModalW, intDesServModalW,
    mainPsuccessModalW,
    mainWWPrjOrderModalW, ourTeamAskqstModalW,
    peterBioAskQstModalW, servicesModalW,
    interiorDesignModalW, furnitureWWmodalW,
    authSvisionWW, decorOrdWW
} from "../data/modalsData";

const Modals = () => {
    const headerModalRef = React.createRef()
    const wwSecModalRef = React.createRef()
    const mainBioModalRef = React.createRef()
    const successfulWindow = React.createRef()
    const mainPageForm = React.createRef()
    const servicesModal = React.createRef()
    const intDesignServModal = React.createRef()
    const abtPourTeamModal = React.createRef()
    const intDesModal = React.createRef()
    const furnitureWWmodal = React.createRef()
    const authSvisionModal = React.createRef()
    const decorWWmodal = React.createRef()

    return (
        <>
            <ModalWindow
                modalOptions={headerPrjOrderModalW}
                ref={headerModalRef}
            />
            <ModalWindow
                modalOptions={mainWWPrjOrderModalW}
                ref={wwSecModalRef}
            />
            <ModalWindow
                modalOptions={peterBioAskQstModalW}
                ref={mainBioModalRef}
            />
            <ModalWindow
                modalOptions={mainPsuccessModalW}
                ref={successfulWindow}
            />
            <ModalWindow
                modalOptions={servicesModalW}
                ref={servicesModal}
            />
            <ModalWindow
                modalOptions={intDesServModalW}
                ref={intDesignServModal}
            />
            <ModalWindow
                modalOptions={ourTeamAskqstModalW}
                ref={abtPourTeamModal}
            />
            <ModalWindow
                modalOptions={interiorDesignModalW}
                ref={intDesModal}
            />
            <ModalWindow
                modalOptions={furnitureWWmodalW}
                ref={furnitureWWmodalW}
            />
            <ModalWindow
                modalOptions={authSvisionWW}
                ref={authSvisionModal}
            />
            <ModalWindow
                modalOptions={decorOrdWW}
                ref={decorWWmodal}
            />
        </>
    )
}

export default Modals