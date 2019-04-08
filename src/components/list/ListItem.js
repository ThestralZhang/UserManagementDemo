import React from "react";
import { Link } from "react-router-3";
import PropTypes from "prop-types";

const ListItem = ({user, clickEdit, clickDelete}) => (
  <tr>
    <td>{user.nickname}</td>
    <td>{user.realname}</td>
    <td>{user.email}</td>
    <td className="op-td">
      <Link
        className="op-btn edit-btn"
        to="/info"
        onClick={clickEdit}
      />
      <button className="op-btn delete-btn" onClick={clickDelete} />
    </td>
  </tr>
);

ListItem.propTypes = {
    user: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        realname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }),
    clickEdit: PropTypes.func.isRequired,
    clickDelete: PropTypes.func.isRequired
};

export default ListItem;
