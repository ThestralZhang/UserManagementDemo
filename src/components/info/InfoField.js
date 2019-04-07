import React from 'react';

export default class InfoField extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <div className="info-field">
              <input
                  type={this.props.type || 'text'}
                  placeholder={this.props.placeholder}
                  value={this.props.value}
                  onBlur={this.props.validate}
                  onChange={this.props.onChange}
              />
              <div className={"msg-box" + (this.props.msg? "" : " msg-hidden")}>
                  {this.props.msg}
              </div>
          </div>
        );
    }
}