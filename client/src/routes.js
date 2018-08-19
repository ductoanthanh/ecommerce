import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/layout';
import RegisterLogin from './components/Register_Login';
import Register from './components/Register_Login/register';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/register_login" component={RegisterLogin} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
