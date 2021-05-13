import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";

import "./index.css";
import App from "./App";

import store from './redux/store.js'

import reportWebVitals from "./reportWebVitals";
// Provider gives us access to the store and is the parent of everthing 
ReactDOM.render(
  <Provider store={store} > 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
