import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DevelopersList from './components/DevelopersList';
import Developer from './components/Developer';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
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
