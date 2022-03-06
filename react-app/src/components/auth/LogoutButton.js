import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  return sessionUser ? <button onClick={onLogout}>Logout</button> : <Redirect to='/' />
};

export default LogoutButton;

