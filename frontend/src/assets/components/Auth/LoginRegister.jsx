import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import './LoginRegister.css';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ Import SweetAlert2

const LoginRegister = () => {
  const navigate = useNavigate();  

  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'attendee'
  });

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields.',
        position: 'top',  // Shows at the top of the screen
        toast: true,      // Makes it small and toast-like
        showConfirmButton: false,
        timer: 3000,      // Closes after 3 seconds
      });
      return;
    }
  
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered.',
        position: 'top',  // Shows at the top of the screen
        toast: true,      // Toast-like alert
        showConfirmButton: false,
        timer: 3000,      // Closes after 3 seconds
      });
      setForm({ name: '', email: '', password: '', role: 'attendee' });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed!',
        text:  (error.response?.data?.error || 'Please try again later.'),
        position: 'top',  // Shows at the top of the screen
        toast: true,      // Toast-like alert
        showConfirmButton: false,
        timer: 3000,      // Closes after 3 seconds
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

   
       axios.post('http://localhost:5000/login', form).then((resp)=>{
        if(resp.data.role === "attendee"){
          localStorage.setItem('user', JSON.stringify(resp.data));  
          navigate('/Websiteindex');
        }else if(resp.data.role === "admin"){
          localStorage.setItem('admin', JSON.stringify(resp.data));  
          // navigate('/Websiteindex');
          alert("admin")
        }
      })  
   
  };

  return (
    <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`} onSubmit={handleLogin}> 
            <h2 className="title">Login</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          {/* Sign Up Form */}
          <form className={`sign-up-form ${isSignUpMode ? 'visible' : ''}`} onSubmit={handleSubmit}>
            <h2 className="title">Register</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <PanelLeft onClick={handleSignUpClick} />
        <PanelRight onClick={handleSignInClick} />
      </div>
    </div>
  );
};

export default LoginRegister;
