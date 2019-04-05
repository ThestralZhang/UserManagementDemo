import React from "react";
import { Router, Route, hashHistory } from "react-router-3";
import UserInfo from "./UserInfoComponent";
import UserList from "./UserListComponent";

let users = [
    {nickname: 'A.Ham', realname: 'Alexander', email: 'd32d@f9e.com'},
    {nickname: 'A.Burr', realname: 'Aaron', email: 'd32d@f9e.com'},
    {nickname: 'Thestral', realname: 'Keith', email: 'd32d@f9e.com'},
    {nickname: 'BBilly', realname: 'Bill', email: 'd32d@f9e.com'},
    {nickname: 'Smiley', realname: 'Mary', email: 'd32d@f9e.com'}

];

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/info" component={UserInfo}  />
        <Route path="/" component={() => <UserList users={users}/>}/>
      </Router>
    );
  }
}

export default App;
