import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Form from "./common/form";
import auth from "../services/authService";
import { signup } from "../redux/actions/auth.actions";

class registerForm extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: ""
    },
    errors: {}
  };

  doSubmit = async () => {
    const { data } = this.state;
    const { signup: signupUser, isAuthenticated } = this.props;
    await signupUser(data);
    if (isAuthenticated) this.props.history.push("/");
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <div className="row shadow-effect or-y fit-content">
          <div className="row centered">
            <h4> Sign Up to Auto Mart. </h4>
          </div>
          <form className="row or-y" onSubmit={this.handleSubmit}>
            {this.renderInput("text", "first_name", "Enter your first name")}
            {this.renderInput("text", "last_name", "Enter your last name")}
            {this.renderInput("text", "address", "Enter your address")}
            {this.renderInput("text", "email", "Enter your email")}
            {this.renderInput("password", "password", "Enter your password")}
            {this.renderInput(
              "password",
              "confirmPassword",
              "Confirm password"
            )}
            {this.renderButton("Register")}
          </form>
          <div className="row centered">
            Alreay have an acount with Auto mart ? <br />
            <Link to="/login"> Login </Link>
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
export default connect(mapStateToProps, {
  signup
})(registerForm);
