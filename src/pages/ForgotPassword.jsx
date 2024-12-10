// src/pages/ForgotPassword.jsx
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password.</p>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
