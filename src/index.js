import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./test.css";
import "./index.less";


const render = _ => ReactDOM.render(
    <App />,
    document.getElementById("root")
);

render();

if(module.hot){
    module.hot.accept("./App", _ => render());
}