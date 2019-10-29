import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

import Index from './views/Index';
import RegisterPage from './views/RegisterPage/RegisterPage';
import ProfilePage from './views/ProfilePage/ProfilePage';
// import PrivateRoute from './components/Routing/PrivateRoute';

import store from './js/store/index';
import { loadUser } from './js/actions/auth';
import { getProfile } from './js/actions/profile';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './views/Dashboard/Dashboard';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const loading = useSelector(state => state.auth.isLoading);
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getProfile());
  }, []);
  return loading ? (
    <Spinner color='primary' />
  ) : (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Index />} />
        <Route exact path='/profile' render={() => <ProfilePage />} />
        <Route exact path='/register' render={() => <RegisterPage />} />
        <Route path='/dashboard' render={props => <Dashboard {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
