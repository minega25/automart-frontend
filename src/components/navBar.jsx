import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated }) => (
  <>
    <div className="row align-right">
      <a className="mini-menu" href="/AutoMart/UI/pages/login.html" title="">
        Sign In
        </a>
    </div>
    <div className="row or-x-strict">
      <div className="column-3">
        <a href="/AutoMart/UI/" title="" className="logo"></a>
      </div>
      <div className="column-2">
        <div className="navToggle">
          <a>&#9776; Menu</a>
        </div>
      </div>
    </div>
    <div className="row">
      <nav className="column-5 nav">
        <ul>
          <li className="navbar-item">
            <a href="/AutoMart/UI/pages/buy-car.html" className="navbar-link">
              BUY
              </a>
          </li>
          <li className="navbar-item">
            <a
              href="/AutoMart/UI/pages/sell-car.html"
              className="navbar-link"
            >
              SELL/TRADE
              </a>
          </li>
          <li className="navbar-item">
            <span className="auth">
              {!isAuthenticated && (
                <span className="authOut">
                  <Link to="/login">
                    <button className="button hide-button"> Login </button>
                  </Link>
                  <Link to="/signup">
                    <button className="hide-button button button-reverse">
                      Sign Up
                      </button>
                  </Link>
                </span>
              )}
              {isAuthenticated && (
                <Link to="/logout">
                  <img
                    src="/AutoMart/UI/assets/images/icons8-sign-out-40.png"
                    alt=""
                  />
                  <div className="logout">LOGOUT</div>
                </Link>
              )}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </>
);

export default NavBar;
