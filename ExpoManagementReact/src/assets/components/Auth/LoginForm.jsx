import React from "react";

const LoginForm = () => {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Login</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Forget password</p>
    </form>
  );
};

export default LoginForm;
