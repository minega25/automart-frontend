import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Form from './common/form';
import auth from '../services/authService';
import { fetchUser } from '../redux/actions/auth.actions';

class LoginForm extends Form {
  state = { data: { email: '', password: '' }, errors: {} };

  doSubmit = async () => {
    const { data } = this.state;
    const { fetchUser: login } = this.props;
    await login(data.email, data.password);
    window.location = '/';
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <>
        <div className="row shadow-effect or-y fit-content">
          <div className="row centered">
            <h4>Login to Auto Mart.</h4>
          </div>
          <form className="row or-y" onSubmit={this.handleSubmit}>
            {this.renderInput('text', 'email', 'Enter your email')}
            {this.renderInput('password', 'password', 'Enter your password')}
            {this.renderButton('Login')}
          </form>
          <div className="row centered">
            Don't have an account yet!
            <br />
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  user: state.authentication.user,
});

export default connect(
  mapStateToProps,
  { fetchUser },
)(LoginForm);
