import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router, Route, hashHistory } from "react-router-3";
// import store from "store";
import "./test.css";
import "./index.less";
import {editAccount, deleteAccount, addAccount} from "./actions/index";


ReactDOM.render(
    <App />,
  document.getElementById("root")
);

//
// console.log(store.getState());
//
// const unsubscribe = store.subscribe(_ => console.log(store.getState()));
//
// store.dispatch(
//     addAccount({ nickname: "ladkl", realname: "Slder", email: "dewf@fw.vre" })
// );
// store.dispatch(
//     addAccount({ nickname: "jll", realname: "Lsif", email: "reaf@fw.vre" })
// );
// store.dispatch(
//     editAccount(0, {
//         nickname: "ofewww",
//         realname: "Slder",
//         email: "dewf@fw.vre"
//     })
// );
// store.dispatch(deleteAccount(1));

