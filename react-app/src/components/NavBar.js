
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import NewDevModal from './modals/NewDeveloper';

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
          <NewDevModal/>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
