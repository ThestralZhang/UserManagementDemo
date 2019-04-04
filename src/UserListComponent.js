import React from "react";
import { Link } from "react-router-3";

const UserListComponent = _ => (
  <div>
    <Link to={"/add"}>Add</Link>
    <ul>
      <li>Angelica</li>
      <li>ELiza</li>
      <li>Peggy</li>
    </ul>
  </div>
);

export default UserListComponent;
