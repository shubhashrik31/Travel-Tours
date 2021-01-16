import React from "react";
import ReactDOM from "react-dom";
import { createStore,compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import reducer from "./redux-utilities/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

reportWebVitals();
