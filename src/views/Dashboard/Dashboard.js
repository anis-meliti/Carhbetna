import React, { useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import DashboardNavBar from '../../components/Headers/Navbars/DashboardNavBar';
import Sidebar from '../../components/SideBar/Sidebar';
import AddTraject from '../../components/AddTraject/AddTraject';
import '../../assets/css/dashboard.css';
import Alterprofile from '../../components/AlterProfile/Alterprofile';

const Dashboard = () => {
  document.documentElement.classList.remove('nav-open');

  useEffect(() => {
    document.body.classList.add('landing-page');
    return function cleanup() {
      document.body.classList.remove('landing-page');
    };
  }, []);
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='main-panel'>
        <DashboardNavBar />
        <Switch>
          <Route exact path='/dashboard/addtraject' component={AddTraject} />
          <Route exact path='/dashboard/user' component={Alterprofile} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
