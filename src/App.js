import React from "react";
import { Router, Route, hashHistory, Link } from "react-router-3";
import { component } from "react-router-3/es/InternalPropTypes";
import Angelica from "./Angelica";
import Eliza from "./Eliza";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>The Schuyler Sisters</h3>
        <ul>
          {["Angelica", "Eliza"].map(name => (
            <li>
              {name}
              <Link onlyActiveOnIndex={false} to='/ELiza' />
            </li>
          ))}
        </ul>
        <Router history={hashHistory}>
          <Route path="/Angelica" component={Angelica} />
          <Route path="/Eliza" component={Eliza} />
        </Router>
      </div>
    );
  }
}

export default App;
