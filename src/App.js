import React from "react";
import { Router, Route, hashHistory } from "react-router-3";
import AddUserComponent from "./AddUserComponent";
import UserListComponent from "./UserListComponent";

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/add" component={AddUserComponent} />
        <Route path="/" component={UserListComponent} />
      </Router>
    );
  }
}

export default App;
