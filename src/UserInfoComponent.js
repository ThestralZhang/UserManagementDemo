import React from "react";
import { Link } from "react-router-3";
import InfoField from "./InfoField";

export default class UserInfoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <InfoField label='Nick Name' />
                <InfoField label='Real Name' />
                <InfoField label='Email Address' />

                <button>Confirm</button>
                <Link to='/'>Cancel</Link>
            </div>
        );
    }
}