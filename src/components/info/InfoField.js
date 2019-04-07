import React from 'react';

export default class InfoField extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        // this.validate = props.validate;
    }

    render() {
        return (
          <div>
              <label>{this.props.label}</label>
              <input type={this.props.type || 'text'} value={this.props.value} onBlur={_ => this.props.validate(this.props.value)}/>
          </div>
        );
    }
}