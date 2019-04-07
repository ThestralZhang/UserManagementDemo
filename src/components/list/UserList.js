import React from "react";
import { Link } from "react-router-3";
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {deleteAccount} from "../../actions/index";

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
              handleDelete={_ => this.props.handleDelete(u.id)}
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
    handleDelete: id => dispatch(deleteAccount(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);