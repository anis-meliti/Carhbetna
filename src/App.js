import React from 'react';
// react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components && views
import Index from './views/Index';
import RegisterPage from './views/RegisterPage';
import ProfilePage from './views/ProfilePage';
// redux
import { useSelector } from 'react-redux';
import store from './js/store/index';
import { loadUser } from './js/actions/auth';
// reactstrap components
import { Spinner } from 'reactstrap';
// setauth
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const loading = useSelector(state => state.auth.isLoading);
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return loading ? (
    <Spinner color='primary' />
  ) : (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Index />} />
        <Route exact path='/profile' render={() => <ProfilePage />} />
        <Route exact path='/register' render={() => <RegisterPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
