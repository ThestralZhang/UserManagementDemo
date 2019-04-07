import React from "react";
import { Router, Route, hashHistory } from "react-router-3";
import UserInfo from "./components/info/UserInfo";
import UserList from "./components/list/UserList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

let users = [
    {nickname: 'A.Ham', realname: 'Alexander', email: 'd32d@f9e.com'},
    {nickname: 'A.Burr', realname: 'Aaron', email: 'd32d@f9e.com'},
    {nickname: 'Thestral', realname: 'Keith', email: 'd32d@f9e.com'},
    {nickname: 'BBilly', realname: 'Bill', email: 'd32d@f9e.com'},
    {nickname: 'Smiley', realname: 'Mary', email: 'd32d@f9e.com'}

];

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={UserList}/>
                <Route path="/info" component={UserInfo} />
            </Router>
        </Provider>
    );
  }
}

export default App;
