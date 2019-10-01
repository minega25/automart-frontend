import React, { Component } from 'react';
import { connect } from 'react-redux';
import auth from '../services/authService';
import * as authAction from '../redux/actions/auth.actions';

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    this.props.logout();
    window.location = '/';
  }

  render() {
    return null;
  }
}
const mapStateToProps = (state) => ({});
export default connect(
  mapStateToProps,
  { logout: authAction.logout },
)(Logout);
