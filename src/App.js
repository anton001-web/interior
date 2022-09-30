import React from 'react'
import './styles/main.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const App = () => {
    return (
        <>
            <Header/>
            <Main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </Main>
        </>
    )
}

export default App