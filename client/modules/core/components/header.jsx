import React from 'react';

import {pathFor} from '/client/modules/core/libs/helpers';

const Header = ({loginWithTwitter, currentUser, logout}) => (
  <nav className="navbar navbar-light header">
    <div className="container header-content">
      <a className="brand" href={pathFor('home')}>
        <img src="/images/logo.png" className="header-logo" alt="logo"/>
        <h1 className="name">RemoteBase</h1>
      </a>

        {
          currentUser ?
          <div className="header-menu">
            <a href={pathFor('mySubscriptions')}
              className="menu-item">
              My subscriptions
            </a>
            <a href="#"
              className="menu-item"
              onClick={logout}>
              Logout
            </a>
          </div> :
          <div className="header-menu">
            <a className="menu-item"
              href="#"
              onClick={loginWithTwitter}>
              <i className="fa fa-twitter"></i>
              Login
            </a>
          </div>
        }
    </div>
  </nav>
);

export default Header;
