import React from 'react'
import useMatchMedia from "use-match-media";
import ArchPageWWdesktop from "./ArchPageWWdesktop";
import ArchPageWWmobile from "./ArchPageWWmobile";

const ArchPageWorkWay = () => {
    const [mob] = [useMatchMedia('(max-width: 480px)') || false]

    return (
        <section className='architecture-workWay-section'>
            <div className='architecture-workWay__body'>
                <img src="./assets/images/archWorkWaySecBG.png" alt="background pic" className="architecture-workWay-section__bg-img"/>
                <div className="architecture-workWay-section__overlay"></div>
                <div className="container">
                    { !mob ? <ArchPageWWdesktop /> : <ArchPageWWmobile /> }
                </div>
            </div>
        </section>
    )
}

export default ArchPageWorkWay