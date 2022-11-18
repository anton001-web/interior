import React from 'react'
import {useSelector} from "react-redux";
import Modals from "./Modals";

const Main = ({children}) => {

    const {visible, type} = useSelector(state => {
        const {modal} = state
        return modal
    })

    if(visible) {
        document.getElementById('root').classList.add('modal-open')
    } else {
        setTimeout(() => {
            document.getElementById('root').classList.remove('modal-open')
        }, 200)
    }


    return (
        <>
            <div className='content'>
                {children}
            </div>
            <Modals />
        </>
    )
}

export default Main;