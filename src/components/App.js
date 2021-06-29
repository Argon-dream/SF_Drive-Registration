import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
//import { applyMiddleware, compose, createStore } from "redux";

//import rootReducer from './../redux/reducer';
//import { Provider, useSelector } from 'react-redux';

import AboutUs from "../components/AboutUs/AboutUs";
import FAQ from "../components/FAQ/FAQ";
import MainPage from "../components/MainPage/MainPage";
import Registration from "../components/Registration/Registration";

/*import thunk from 'redux-thunk';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));*/

function App() {

    return(
        <>
                <Switch>
                    <Route exact path='/' className="page" id="MainPage"><MainPage/></Route>
                    <Route path="/AboutUs" className="page" id="AboutUs"><AboutUs/></Route>
                    <Route path="/FAQ" className="page" id="FAQ"><FAQ/></Route>
                    <Route path="/Registration" className="page" id="Registration"><Registration/></Route>
                </Switch>
        </>);
}

export default App;