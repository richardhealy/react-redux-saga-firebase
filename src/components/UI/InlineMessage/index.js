import React, { Component} from 'react';

export class InlineMessage extends Component {

  render() {

    const {
        message
    } = this.props;

    return (
        <div className="message {this.type : null}">{message}</div>
    );
  }
}

export default InlineMessage;