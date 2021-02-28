import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Layout from "./hoc/layout";
import Auth from "./hoc/auth";

import RegisterLogin from "./components/auth";
import Register from "./components/auth/register";
import Shop from "./components/shop";
import AddProduct from "./components/user/admin/addProduct";
import ProductPage from "./components/product";

import UserDashboard from "./components/user/";
import ManageCategories from "./components/user/admin/manageCategories";
import UserCart from "./components/user/cart";
import UpdateProfile from "./components/user/updateProfile";
import ManageSite from "./components/user/admin/manageSite";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route path="/user/cart" exact component={Auth(UserCart, true)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route
          path="/user/user_profile"
          exact
          component={Auth(UpdateProfile, true)}
        />

        {/* Admin Route */}
        <Route
          path="/admin/add_product"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/manage_categories"
          exact
          component={Auth(ManageCategories, true)}
        />
        <Route
          path="/admin/site_info"
          exact
          component={Auth(ManageSite, true)}
        />

        <Route path="/product_detail/:id" component={Auth(ProductPage, null)} />

        <Route path="/register" component={Auth(Register, false)} />
        <Route path="/auth" component={Auth(RegisterLogin, false)} />
        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
