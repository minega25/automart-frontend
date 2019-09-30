import React, { Component } from "react";
import { connect } from "react-redux";
import auth from "../services/authService";
import * as authAction from "../redux/actions/auth.actions";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
