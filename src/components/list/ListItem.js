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
            <Link to='/info' onClick={this.props.clickEdit}>Edit</Link>
          <button onClick={this.props.clickDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}
