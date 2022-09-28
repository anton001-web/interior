import React from 'react'
import App from './app';
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {rootReducer} from "./store/reduceres/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const root = createRoot(document.getElementById('root'));

const store = createStore(rootReducer, composeWithDevTools())

root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);