import React from "react";
import { Link } from "react-router-3";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import InfoField from "./InfoField";
import {
  editing,
  confirmEdit,
  addAccount,
  validate
} from "../../actions/index";
import store from "../../store";
import "./info.less";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  validate_nickname(nickName) {
    if (nickName.length > 12 || nickName.length < 4)
      return "Length of nick name should be between 4 - 12.";
    else if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(nickName))
      return 'Nickname should only contains "_", characters, numbers and letters.';
    else {
      const foundUser = store
        .getState()
        .users.find(u => u.nickname === nickName);
      if (!foundUser) return "";
      else if (this.props.mode !== "EDIT" || foundUser.id !== this.props.id)
        return "This nick name already exists.";
    }
  }

  validate_realname(realName) {
    if (realName.length > 12 || realName.length < 2)
      return "Length of realname should be between 2 - 12.";
    else if (!/^[a-zA-Z]+\s?[a-zA-Z]+$|^[\u4e00-\u9fa5]+$/.test(realName))
      return "Real name should contains only characters or only letters.";
    else return "";
  }
  validate_email(email) {
    if (
      !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
        email
      )
    )
      return "The email format is not correct.";
    else {
      const foundUser = store.getState().users.find(u => u.email === email);
      if (!foundUser) return "";
      else if (this.props.mode !== "EDIT" || foundUser.id !== this.props.id)
        return "This email address is already used.";
    }
  }

  checkMsg() {
    let isLegal = true;
    ["nickname", "realname", "email"].forEach(msgName => {
      let msg = this["validate_" + msgName](this.props[msgName]);
      if (msg) {
        isLegal = false;
        this.props.onValidate(msgName, msg);
      }
    });
    return isLegal;
  }

  componentWillMount() {
    ["nickname", "realname", "email"].forEach(msgName =>
      this.props.onValidate(msgName, "")
    );
  }

  render() {
    const placeHolders = ["Nick Name", "Real Name", "Email Address"];
    return (
      <div id="info-frame">
        <h2>Input Info</h2>
        <form id="info-form" onSubmit={e => e.preventDefault()}>
          {["nickname", "realname", "email"].map((fieldName, i) => (
            <InfoField
              placeholder={placeHolders[i]}
              value={this.props[fieldName]}
              onChange={e =>
                this.props.onChange(fieldName, e.target.value.trim())
              }
              validate={_ =>
                this.props.onValidate(
                  fieldName,
                  this["validate_" + fieldName](this.props[fieldName])
                )
              }
              msg={this.props.validateMsg[fieldName + "Msg"]}
              key={fieldName}
            />
          ))}
          <Link
            id="add-btn"
            className={
              "info-btn" + (this.props.mode === "ADD" ? "" : " btn-hidden")
            }
            to="/"
            onClick={e => {
              // validate before routing
              if (!this.checkMsg()) {
                e.preventDefault();
                return;
              }
              this.props.onAdd(
                this.props.id,
                this.props.nickname,
                this.props.realname,
                this.props.email
              );
            }}
          >
            Add
          </Link>
          <Link
            id="add-btn"
            className={
              "info-btn" + (this.props.mode === "EDIT" ? "" : " btn-hidden")
            }
            to="/"
            onClick={e => {
              if (!this.checkMsg()) {
                e.preventDefault();
                return;
              }
              this.props.onConfirm(
                this.props.id,
                this.props.nickname,
                this.props.realname,
                this.props.email
              );
            }}
          >
            Confirm
          </Link>
          <Link id="add-btn" className="info-btn" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

UserInfo.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  realname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['EDIT', 'ADD', 'none']),
  validateMsg: PropTypes.shape({
    nicknameMsg: PropTypes.string,
    realnameMsg: PropTypes.string,
    emailMsg: PropTypes.string
  }),
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  id: state.fieldContents.id,
  nickname: state.fieldContents.nickname,
  realname: state.fieldContents.realname,
  email: state.fieldContents.email,
  mode: state.fieldContents.mode,
  validateMsg: state.validateMsg
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(editing(name, value)),
  onAdd: (id, nickname, realname, email) =>
    dispatch(addAccount(id, nickname, realname, email)),
  onConfirm: (id, nickname, realname, email) =>
    dispatch(confirmEdit(id, nickname, realname, email)),
  onValidate: (name, msg) => dispatch(validate(name, msg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
