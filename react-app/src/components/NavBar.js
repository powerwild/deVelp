
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/developers' exact={true} activeClassName='active'>
            Developers
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
