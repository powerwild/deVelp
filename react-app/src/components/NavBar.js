import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import NewDevModal from './modals/NewDeveloper';
import SearchForm from './forms/SearchForm';
import { useSelector } from 'react-redux';
import './NavBar.css'

const NavBar = ({ user }) => {
  const devs = useSelector(state => state.developers);
  const developer = Object.values(devs).filter(dev => dev.userId === user.id)

  return (
    <nav>
      <div className='Nav-bar-container'>
        <div className='Dev-container'>
          <div className='Developers-link'>
            <NavLink to='/developers' exact={true} activeClassName='active'>
              Developers
            </NavLink>
          {developer.length > 0 ? (
            <NavLink to={`/developers/${developer[0].id}`}>Developer Profile</NavLink>
            ) : (
              <div className='new-dev-button'>
              <NewDevModal />
            </div>
          )}
          </div>
        </div>
        <div className='search-field'>
          <SearchForm />
        </div>
        <div className='logout-button-container'>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
