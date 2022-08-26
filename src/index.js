import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import _ from "lodash";
import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// TODO : whenever the application , check whether jwtToken exists in localstorage
const store = createStore(
    reducers,
    {
        auth: {
            jwtToken: _.isUndefined(localStorage.getItem("jwtToken"))
                ? {}
                : JSON.parse(localStorage.getItem("jwtToken")),
        },
        // role: _.isUndefined(localStorage.getItem("role"))
        //     ? ""
        //     : localStorage.getItem("role"),
    },
    composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
