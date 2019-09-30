import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Footer from "./components/footer";
import Logout from "./components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/main.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getJwt();
    if (user) {
      this.setState({ isAuthenticated: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      this.setState({ isAuthenticated: !this.state.isAuthenticated });
    }
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <>
        <main className="container">
          <NavBar isAuthenticated={isAuthenticated} />
          <ToastContainer />
          <Switch>
            <Route path="/signup" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={Home} />
            <Redirect to="/not-found" />
          </Switch>

          <Footer />
        </main>
      </>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated
});

export default connect(mapStateToProps)(App);
