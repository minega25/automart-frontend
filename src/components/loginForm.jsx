import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./common/form";
import auth from "../services/authService";
import * as authAction from "../redux/actions/auth.actions";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      this.props.login();
      const { state } = this.props.location;
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        console.log(errors);
        errors.email = ex.response.data;
        this.setState({ errors });
      }
      console.log(ex);
    }
  };

  render() {
    if (this.state.isAuthenticated) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <div className="row shadow-effect or-y fit-content">
          <div className="row centered">
            <h4>Login to Auto Mart.</h4>
          </div>
          <form className="row or-y" onSubmit={this.handleSubmit}>
            {this.renderInput("text", "email", "Enter your email")}
            {this.renderInput("password", "password", "Enter your password")}
            {this.renderButton("Login")}
          </form>
          <div className="row centered">
            Don't have an account yet! <br />
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { login: authAction.login }
)(LoginForm);
