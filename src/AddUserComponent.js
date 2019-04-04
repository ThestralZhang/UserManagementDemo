import React from "react";
import { Link } from "react-router-3";

const AddUserComponent = _ => (
  <div>
    <input type={"text"} />
    <button>add</button>
    <Link to={"/"}>cancel</Link>
  </div>
);

export default AddUserComponent;
