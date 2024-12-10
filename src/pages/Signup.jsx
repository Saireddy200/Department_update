// src/pages/Signup.jsx
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <h2>Create a New Account</h2>
      <form>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter your full name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-link">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
