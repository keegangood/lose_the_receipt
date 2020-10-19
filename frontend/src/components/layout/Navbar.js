import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './scss/navbar.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const {
    isAuthenticated,
    user,
    accessToken,
    requestAccessToken,
  } = authContext;

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          <h4 className=''>Register</h4>
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          <h4 className=''>Login</h4>
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/appliances'>
          <h4 className='mr-2'>Appliances</h4>
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/account'>
          <h4 className=''>Account</h4>
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' onClick={onLogout}>
          <h4 className=''>Logout</h4>
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-info'>
      <Link className='navbar-brand ' to='/'>
        <Logo />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav text-center'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
