import React from 'react'
import './styles/main.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import ServicesPage from "./components/pages/ServicesPage";

const App = () => {
    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path='/' exact element={<SummaryProject />}/>
                    <Route path='/services' exact element={<ServicesPage />}/>
                </Routes>
            </Main>
            <Footer />
        </>
    )
}

export const SummaryProject = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </>
    )
}

export default App