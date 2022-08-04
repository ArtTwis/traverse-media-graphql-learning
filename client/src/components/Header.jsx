import React from 'react';
import GraphQL_logo from './assets/graphql_logo.svg';

const Header = () => {
  return (
    <nav className='navbar bg-light p-3'>
      <a className='navbar-brand' href='/'>
        <div className='d-flex'>
          <img src={GraphQL_logo} alt='logo' className='mr-2' />
          <div>Project MGMT</div>
        </div>
      </a>
    </nav>
  );
};

export default Header;
