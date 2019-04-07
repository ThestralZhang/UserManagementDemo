import React from "react";
import { Router, Route, hashHistory } from "react-router-3";
import UserInfo from "./components/info/UserInfo";
import UserList from "./components/list/UserList";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={UserList} />
          <Route path="/info" component={UserInfo} />
        </Router>
      </Provider>
    );
  }
}

export default App;
