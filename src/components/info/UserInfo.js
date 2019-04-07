import React from "react";
import { Link } from "react-router-3";
import InfoField from "./InfoField";
import MessageBox from "./MessageBox";
import { connect } from "react-redux";
import { editing } from "../../actions/index";

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        // UserInfo.handleSubmit = UserInfo.handleSubmit.bind(this);
        // this.validateNickName = this.validateNickName.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    validateNickName(nickName){
        console.log(typeof nickName);
        // if(nickName.length > 8)
        //     this.setState({message: 'nick name too long'});
        // else if(nickName.length < 3)
        //     this.setState({message: 'nick name too short'});
    }

    validateRealName(realName){
        // if(realName.length > 8)
        //     this.setState({message: 'real name too long'});
        // else if(realName.length < 3)
        //     this.setState({message: 'real name too short'});
    }

    validateEmailAddress(email){
        // if(email.length > 8)
        //     this.setState({message: 'email too long'});
        // else if(email.length < 3)
        //     this.setState({message: 'email too short'});
    }

    render(){
        // const {}
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <InfoField
                        label='Nick Name'
                        validate={this.validateNickName}
                        value={this.props.nickname}
                        onChange={e => this.props.onChange('nickname', e.target.value)}
                    />
                    <InfoField
                        label='Real Name'
                        validate={this.validateRealName}
                        value={this.props.realname}
                        onChange={e => this.props.onChange('realname', e.target.value)}
                    />
                    <InfoField
                        label='Email Address'
                        validate={this.validateEmailAddress}
                        value={this.props.email}
                        onChange={e => this.props.onChange('email', e.target.value)}
                    />

                    <button>Confirm</button>
                    <Link to='/'>Cancel</Link>
                </form>
                {/*<MessageBox message={this.state.message}/>*/}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    nickname: state.fieldContents.nickname,
    realname: state.fieldContents.realname,
    email: state.fieldContents.email
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (name, value) => dispatch(editing(name, value))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);