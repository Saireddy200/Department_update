// src/components/Footer.jsx
//import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Us Section */}
        <div className="footer-section about">
          <h4>About PathwayScholar</h4>
          <p>
            PathwayScholar is committed to helping students achieve their educational goals by connecting them with the best scholarship opportunities available worldwide. We believe in making education accessible to all.
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/apply">Apply Now</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        
        {/* Contact Information Section */}
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Email: support@pathwayscholar.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Education Lane, Scholar City</p>
        </div>
        
        {/* Social Media Links Section */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PathwayScholar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
