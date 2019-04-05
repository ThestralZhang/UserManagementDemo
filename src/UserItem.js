import React from "react";

export default class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.user.nickname}</td>
        <td>{this.props.user.realname}</td>
        <td>{this.props.user.email}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}
