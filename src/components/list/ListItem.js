import React from "react";
import { Link } from "react-router-3";

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
        <td className="op-td">
          <Link
            className="op-btn edit-btn"
            to="/info"
            onClick={this.props.clickEdit}
          />
          <button
            className="op-btn delete-btn"
            onClick={this.props.clickDelete}
          >
            d
          </button>
        </td>
      </tr>
    );
  }
}
