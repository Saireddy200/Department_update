// src/pages/Login.jsx
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <h2>Login to PathwayScholar</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="additional-links">
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
      </div>
      <div className="signup-link">
        <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
