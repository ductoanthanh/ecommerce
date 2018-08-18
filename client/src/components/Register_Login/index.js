import React from 'react';
import MyButton from '../utils/button';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>IAHSFHASIFHAISFIAHSDASDBASUDBASBD</p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className="right">
            <h2>Register Customers</h2>
            <p>If you have account please log in</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  )
};

export default RegisterLogin;
