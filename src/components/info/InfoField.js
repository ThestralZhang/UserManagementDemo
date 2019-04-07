import React from 'react';

export default class InfoField extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div>
              <label>{this.props.label}</label>
              <input
                  type={this.props.type || 'text'}
                  value={this.props.value}
                  onBlur={this.props.validate}
                  onChange={this.props.onChange}
              />
              <span>
                  {this.props.msg}
              </span>
          </div>
        );
    }
}