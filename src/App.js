import React from 'react';
import Index from './views/Index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterPage from './views/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Index />} />
        <Route path='/register' render={() => <RegisterPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
