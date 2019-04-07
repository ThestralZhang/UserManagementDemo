import React from "react";
import { Link } from "react-router-3";
import InfoField from "./InfoField";
import { connect } from "react-redux";
import {editing, confirmEdit, addAccount, validate} from "../../actions/index";
import store from "../../store";

class UserInfo extends React.Component{
    constructor(props){
        super(props);
    }

    static validate_nickname(nickName){
        if(nickName.length > 12 || nickName.length < 4)
            return 'Length of nickname should be between 4 - 12.';
        else if(!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(nickName))
            return 'Nickname should only contains "_", characters, numbers and letters.';
        else if(store.getState().users.findIndex(u => u.nickname === nickName) !== -1)
            return 'This nickname already exists.';
        else
            return '';
    }

    static validate_realname(realName){
        if(realName.length > 12 || realName.length < 2)
            return 'Length of realname should be between 2 - 12.';
        else if(!/^[a-zA-Z]+\s?[a-zA-Z]+$|^[\u4e00-\u9fa5]+$/.test(realName))
            return 'Realname should contains only characters or only letters.';
        else
            return '';
    }
    static validate_email(email){
        if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email))
            return 'The email format is not correct.';
        else if(store.getState().users.findIndex(u => u.email === email) !== -1)
            return 'This email address is already used.';
        else
            return '';
    }

    checkMsg(){
        let isLegal = true;
        ['nickname', 'realname', 'email'].forEach(msgName => {
            let msg = UserInfo['validate_' + msgName](this.props[msgName]);
            if(msg){
                isLegal = false;
                this.props.onValidate(msgName, msg);
            }
        });
        return isLegal;
    }

    componentWillMount(){
        console.log('sasas');
        ['nickname', 'realname', 'email'].forEach(msgName =>
            this.props.onValidate(msgName, '')
        );
    }

    render(){
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <InfoField
                        label='Nick Name'
                        value={this.props.nickname}
                        onChange={e => this.props.onChange('nickname', e.target.value.trim())}
                        validate={_ => this.props.onValidate('nickname', UserInfo.validate_nickname(this.props.nickname))}
                        msg={this.props.validateMsg.nicknameMsg}
                    />
                    <InfoField
                        label='Real Name'
                        value={this.props.realname}
                        onChange={e => this.props.onChange('realname', e.target.value.trim())}
                        validate={_ => this.props.onValidate('realname', UserInfo.validate_realname(this.props.realname))}
                        msg={this.props.validateMsg.realnameMsg}
                    />
                    <InfoField
                        label='Email Address'
                        value={this.props.email}
                        onChange={e => this.props.onChange('email', e.target.value.trim())}
                        validate={_ => this.props.onValidate('email', UserInfo.validate_email(this.props.email))}
                        msg={this.props.validateMsg.emailMsg}
                    />
                    <Link to='/' onClick={e => {
                        // validate before routing
                        if(!this.checkMsg()){
                            e.preventDefault();
                            return;
                        }
                        this.props.onAdd(
                            this.props.id,
                            this.props.nickname,
                            this.props.realname,
                            this.props.email
                        );
                    }}>Add</Link>
                    <Link to='/' onClick={e => {
                        if(!this.checkMsg()){
                            e.preventDefault();
                            return;
                        }
                        this.props.onConfirm(
                            this.props.id,
                            this.props.nickname,
                            this.props.realname,
                            this.props.email
                        );
                    }}>Confirm</Link>
                    <Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    id: state.fieldContents.id,
    nickname: state.fieldContents.nickname,
    realname: state.fieldContents.realname,
    email: state.fieldContents.email,
    validateMsg: state.validateMsg
});

const mapDispatchToProps = dispatch => ({
    onChange: (name, value) => dispatch(editing(name, value)),
    onAdd: (id, nickname, realname, email) => dispatch(addAccount(id, nickname, realname, email)),
    onConfirm: (id, nickname, realname, email) => dispatch(confirmEdit(id, nickname, realname, email)),
    onValidate: (name, msg) => dispatch(validate(name, msg))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);