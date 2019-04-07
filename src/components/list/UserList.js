import React from "react";
import { Link } from "react-router-3";
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {startEdit, deleteAccount} from "../../actions/index";

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableContent = this.props.users.length ? (
      this.props.users.map(u =>
          <ListItem
              user={u}
              key={u.id}
              clickEdit={_ => this.props.clickEdit(u.id, u.nickname, u.realname, u.email)}
              clickDelete={_ => this.props.clickDelete(u.id)}
          />)
    ) : (
        <tr><td>No User in List yet</td></tr>
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

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    clickEdit: (id, nickname, realname, email) => dispatch(startEdit(id, nickname, realname, email)),
    clickDelete: id => dispatch(deleteAccount(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);