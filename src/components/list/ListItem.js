import React from "react";
import {Link} from "react-router-3";

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
            <Link to={{pathname: "/info", state: this.props.user.id}}>Edit</Link>
          <button onClick={this.props.handleDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}
