// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">PathwayScholar</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/find-scholarship">Find Scholarship</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login" className="auth-button">Login</Link>
        <Link to="/signup" className="auth-button signup-button">Signup</Link>
      </div>
    </nav>
  );
}

export default NavBar;
