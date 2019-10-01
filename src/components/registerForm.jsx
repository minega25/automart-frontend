import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from './common/form';
import auth from '../services/authService';
import register from '../services/userService';

class registerForm extends Form {
  state = {
    data: {
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      password: '',
      confirmPassword: '',
    },
    errors: {},
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await register(data);
      const res = auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        toast.error(errors);
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <>
        <div className="row shadow-effect or-y fit-content">
          <div className="row centered">
            <h4>Sign Up to Auto Mart.</h4>
          </div>
          <form className="row or-y" onSubmit={this.handleSubmit}>
            {this.renderInput('text', 'first_name', 'Enter your first name')}
            {this.renderInput('text', 'last_name', 'Enter your last name')}
            {this.renderInput('text', 'address', 'Enter your address')}
            {this.renderInput('text', 'email', 'Enter your email')}
            {this.renderInput('password', 'password', 'Enter your password')}
            {this.renderInput(
              'password',
              'confirmPassword',
              'Confirm password',
            )}
            {this.renderButton('Register')}
          </form>
          <div className="row centered">
            Alreay have an acount with Auto mart?
            <br />
            <Link to="/login">Login</Link>
          </div>
        </div>
      </>
    );
  }
}

export default registerForm;
