import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DevelopersList from './components/DevelopersList';
import SplashPage from './components/Splash';
import Developer from './components/Developer';
import { authenticate } from './store/session';
import { getSkillsThunk } from './store/skills';

function App() {
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
    dispatch(getSkillsThunk())
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {sessionUser && <NavBar />}
      <Switch>
        <Route path='/' exact={true} >
          <SplashPage/>
        </Route>
        <ProtectedRoute path='/developers' exact={true} >
          <DevelopersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/developers/:id' exact={true} >
          <Developer />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
