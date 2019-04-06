import React from "react";
import { Link } from "react-router-3";
import UserItem from "./UserItem";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableContent = this.props.users.length ? (
      this.props.users.map(u => <UserItem user={u} key={u.nickname} />)
    ) : (
      <div>No User in List yet</div>
    );
    return (
      <div>
        <div>
          <h3>User List</h3>
          <span>count: {this.props.users.length}</span>
          <Link to="/info">Add</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nick Name</th>
              <th>Real Name</th>
              <th>Email Address</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    );
  }
}
