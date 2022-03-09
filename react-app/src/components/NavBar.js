
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import NewDevModal from './modals/NewDeveloper';
import SearchForm from './forms/SearchForm';
import { useSelector } from 'react-redux';

const NavBar = ({user}) => {
  const devs = useSelector(state => state.developers);
  console.log(devs)
  const developer = Object.values(devs).filter(dev => dev.userId === user.id)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/developers' exact={true} activeClassName='active'>
            Developers
          </NavLink>
        </li>
        { developer.length > 0 ? (
          <NavLink to={`/developers/${developer[0].id}`}>Your Developer Page</NavLink>
        ) : (
        <li>
          <NewDevModal/>
        </li>
        )}
        <li>
          <SearchForm />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
