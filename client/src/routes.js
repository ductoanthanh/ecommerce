import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/layout';
import Auth from './hoc/auth';

import RegisterLogin from './components/Register_Login';
import Register from './components/Register_Login/register';
import Shop from './components/Shop';
import AddProduct from './components/User/Admin/addProduct';
import ProductPage from './components/Product';

import UserDashboard from './components/User/';
import ManageCategories from './components/User/Admin/manageCategories';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />

        {/* Admin Route */}
        <Route path="/add_product" exact component={Auth(AddProduct,true)}/>
        <Route path="/manage_categories" exact component={Auth(ManageCategories,true)}/>

        <Route path="/product_detail/:id" component={Auth(ProductPage, null)} />

        <Route path="/register" component={Auth(Register, false)} />
        <Route path="/register_login" component={Auth(RegisterLogin, false)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  )
}

export default Routes;
