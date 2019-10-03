import React from 'react';
import Index from './views/Index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterPage from './views/RegisterPage';
import ProfilePage from './views/ProfilePage';

function App() {
  return (
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
