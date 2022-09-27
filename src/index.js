import React from 'react'
import App from './app';
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";


const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);