import { useState } from 'react';
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import './LoginRegister.css'; 

const LoginRegister = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);


  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
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
            <p className="social-text">forget password</p>
          </form>

          {/* Sign Up Form */}
          <form className={`sign-up-form ${isSignUpMode ? 'visible' : ''}`}>
            <h2 className="title">Register</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">forget password</p>
          </form>
        </div>
      </div>

      <div className="panels-container">
        {/* Left Panel */}
        <PanelLeft onClick={handleSignUpClick} />

        {/* Right Panel */}
        <PanelRight onClick={handleSignInClick} />
      </div>
    </div>
  );
};

export default LoginRegister;
