import React from "react";

export default class ListItem extends React.Component {
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
          {/*<button onClick={this.props.handleEdit}>Edit</button>*/}
          <button onClick={this.props.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}
