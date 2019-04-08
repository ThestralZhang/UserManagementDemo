import React from "react";
import PropTypes from "prop-types";

const InfoField = ({ type, placeholder, value, validate, onChange, msg }) => (
  <div className="info-field">
    <input
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onBlur={validate}
      onChange={onChange}
    />
    <div className={"msg-box" + (msg ? "" : " msg-hidden")}>{msg}</div>
  </div>
);

InfoField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  msg: PropTypes.string
};

export default InfoField;
