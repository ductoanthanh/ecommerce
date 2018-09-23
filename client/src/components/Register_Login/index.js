import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className=" row register_login_container">
          <div className="col-md-6" style={{paddingTop: '10px'}}>
            <h1>New Customers</h1>
            <p>Welcome to VIBE. Please register here!</p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className="col-md-6">
            <h2>Log In</h2>
            <p>Welcome back! Sign in with your account</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
};

export default RegisterLogin;
