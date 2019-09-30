import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "./common/form";
import { signin } from "../redux/actions/auth.actions";
import auth from "../services/authService";

class LoginForm extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  doSubmit = async () => {
    const { data } = this.state;
    const { signin: signinUser, isAuthenticated } = this.props;
    await signinUser(data);
    if (isAuthenticated) this.props.history.push("/");
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
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

export default connect(mapStateToProps, { signin })(LoginForm);
