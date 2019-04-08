import React from "react";
import { Link } from "react-router-3";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startAdd, startEdit, deleteAccount } from "../../actions/index";
import "./list.less";

const UserList = ({users, clickAdd, clickEdit, clickDelete}) => (
  <div>
    <div id="list-header">
      <span>count: {users.length}</span>
      <h2>User List</h2>
      <Link
        id="add-link"
        to="/info"
        onClick={_ => {
          const us = users;
          clickAdd(us.length ? us[us.length - 1].id + 1 : 0);
        }}
      >
        +
      </Link>
    </div>
    <table id="user-list">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>Nick Name</th>
          <th>Real Name</th>
          <th>Email Address</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {users.length ? (
          users.map(u => (
            <ListItem
              user={u}
              key={u.id}
              clickEdit={_ =>
                clickEdit(u.id, u.nickname, u.realname, u.email)
              }
              clickDelete={_ => clickDelete(u.id)}
            />
          ))
        ) : (
          <tr>
            <td colSpan={4}> No User in List yet</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    realname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })).isRequired,
  clickAdd: PropTypes.func.isRequired,
  clickEdit: PropTypes.func.isRequired,
  clickDelete: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  clickAdd: id => dispatch(startAdd(id)),
  clickEdit: (id, nickname, realname, email) =>
    dispatch(startEdit(id, nickname, realname, email)),
  clickDelete: id => dispatch(deleteAccount(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
