import React, { useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import DashboardNavBar from '../../components/Headers/Navbars/DashboardNavBar';
import Sidebar from '../../components/SideBar/Sidebar';
import AddTraject from '../../components/AddTraject/AddTraject';

const Dashboard = () => {
  document.documentElement.classList.remove('nav-open');

  useEffect(() => {
    document.body.classList.add('landing-page');
    return function cleanup() {
      document.body.classList.remove('landing-page');
    };
  }, []);
  return (
    <>
      <Sidebar />
      <DashboardNavBar />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/dashboard/addtraject'
            component={AddTraject}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
