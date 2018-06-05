import React, { Component } from 'react';
import { connect } from 'react-redux';
import { passwordChange } from '../../../actions';

import { InlineMessage } from '../InlineMessage';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.passwordChange(passwordOne);

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="New Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        <InlineMessage />
      </form>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  passwordChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordChangeForm);