import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";


const render = _ => ReactDOM.render(
    <App />,
    document.getElementById("root")
);

render();

