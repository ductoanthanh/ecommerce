import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/layout';
import Auth from './hoc/auth';

import RegisterLogin from './components/Register_Login';
import Register from './components/Register_Login/register';
import UserDashboard from './components/User/';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        <Route path="/register" component={Auth(Register, false)} />
        <Route path="/register_login" component={Auth(RegisterLogin, false)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  )
}

export default Routes;
