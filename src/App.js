import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import ContactsPage from './pages/contacts';
import HomePage from './pages/home';
import styled from 'styled-components';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from './redux/auth/auth-selectors';
import { authOperations } from './redux/auth';
import { contactsSelectors } from './redux/contacts';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUserOperation());
  }, [dispatch]);

  const [showAuth, setShowAuth] = useState(false);
  const [authButtonText, setAuthButtonText] = useState('authorization');
  const [authActive, setAuthActive] = useState(false);

  const userStatus = useSelector(authSelectors.getAuthStatus);
  const currentUserName = useSelector(authSelectors.getUserName);

  const currentError = useSelector(contactsSelectors.getError);
  const isRefreshing = useSelector(authSelectors.getRefreshing);

  useEffect(() => {
    if (currentError) error({ text: currentError });
  }, [currentError]);

  const handleLogOut = () => {
    dispatch(authOperations.logoutUserOperation());
  };

  return (
    !isRefreshing && (
      <div style={{ textAlign: 'center' }} className="App">
        <nav>
          <Navlist>
            <NavItem className="navItem">
              <CustomNavLink
                onClick={() => {
                  setAuthActive(false);
                }}
                exact
                className="navLink"
                activeClassName="navLinkActive"
                to="/"
              >
                home
              </CustomNavLink>
            </NavItem>
            {userStatus && (
              <NavItem className="navItem">
                <CustomNavLink
                  onClick={() => {
                    setAuthActive(false);
                  }}
                  className="navLink"
                  activeClassName="navLinkActive"
                  to="/contacts"
                >
                  contacts
                </CustomNavLink>
              </NavItem>
            )}
            {!userStatus ? (
              <NavItem
                onClick={() => {
                  setAuthButtonText('authorization');
                  setShowAuth(!showAuth);
                  setAuthActive(!authActive);

                  if (
                    window.location.href.includes('register') ||
                    window.location.href.includes('login')
                  ) {
                    setAuthActive(true);
                  }
                }}
                className={classNames('navItem', ' withList', {
                  current: authActive,
                })}
                style={{ borderRadius: !showAuth && '20px' }}
              >
                {authButtonText}

                {showAuth && (
                  <AuthList>
                    <li>
                      <CustomNavLink
                        className="navLink"
                        activeClassName="navLinkActive"
                        exact
                        to="/register"
                        onClick={() => {
                          setAuthButtonText('register');
                        }}
                      >
                        register
                      </CustomNavLink>
                    </li>
                    <li>
                      <CustomNavLink
                        onClick={() => {
                          setAuthButtonText('login');
                        }}
                        className="navLink"
                        activeClassName="navLinkActive"
                        to="/login"
                      >
                        login
                      </CustomNavLink>
                    </li>
                  </AuthList>
                )}
              </NavItem>
            ) : (
              <UserMenu>
                <Greeting>Welcome, {currentUserName}!</Greeting>
                <Exit onClick={handleLogOut}>Log out</Exit>
              </UserMenu>
            )}
          </Navlist>
        </nav>
        <PublicRoute path="/" exact>
          <HomePage />
        </PublicRoute>
        <PublicRoute path="/register" exact restricted>
          <Register />
        </PublicRoute>
        <PublicRoute path="/login" exact restricted>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/contacts" exact>
          <ContactsPage />
        </PrivateRoute>
      </div>
    )
  );
};

export default App;

const Navlist = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-bottom: 20px;
  padding: 20px;
  list-style: none;
`;
const NavItem = styled.li`
  position: relative;
  width: calc(100% / 3 - 40px);
  padding: 10px 0;
  color: #ff1493;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 40px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus,
  &:active,
  &.current {
    background-color: #8a2be2;
    color: white;
    border-radius: 20px;
    &.withList {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
const CustomNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  color: #ff1493;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 40px;
  &:hover,
  &:focus,
  &.navLinkActive {
    background-color: #8a2be2;
    color: white;
    border-radius: 20px;
  }
`;
const AuthList = styled.ul`
  position: absolute;
  bottom: -140%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #8a2be2;
  color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  & > li {
  }
`;
const UserMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: calc(100% / 3 - 40px);
  padding: 20px;
  font-size: 20px;
  color: #ff1493;
  border: 2px solid #ff1493;
  border-radius: 10px;
`;
const Greeting = styled.p`
  margin: 0;
  font-weight: bold;
`;
const Exit = styled.button`
  padding: 5px 15px;
  width: 130px;
  background-color: rgb(126, 50, 150);
  color: aliceblue;
  border: none;
  border-radius: 5px;
  transition: background-color 250ms ease, transform 250ms ease;
  &:hover,
  &:focus {
    background-color: rgb(162, 63, 192);
    transform: scale(1.1);
  }
`;
