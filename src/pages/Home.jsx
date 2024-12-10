// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    { text: "Scholarship A - Full tuition coverage for top achievers!", link: "/apply" },
    { text: "Scholarship B - $10,000 financial aid for underprivileged students!", link: "/apply" },
    { text: "Scholarship C - Science and math scholarships available!", link: "/apply" },
    { text: "Scholarship D - Supporting arts students worldwide!", link: "/apply" },
  ];

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(bannerInterval);
  }, [banners.length]);

  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to PathwayScholar</h1>
        <p>Your path to education made easier. Find scholarships to pursue your dreams.</p>
        <Link to="/find-scholarship" className="cta-button">Explore Scholarships</Link>
      </header>

      {/* New Banner Advertisement Section */}
      <section className="banner-section">
        <div className="banner-container">
          <p className="banner-text">{banners[currentBannerIndex].text}</p>
          <a href={banners[currentBannerIndex].link} className="banner-apply-button">Apply Now</a>
        </div>
      </section>

      <section className="about-section">
        <h2>About Scholarships</h2>
        <p>Scholarships provide financial aid to students, helping them to pursue education without financial burdens. Whether you are looking for merit-based, need-based, or category-specific scholarships, PathwayScholar is here to help.</p>
      </section>

      <section className="benefits-section">
        <h2>Why Apply for Scholarships?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Financial Assistance</h3>
            <p>Scholarships reduce financial constraints, making education accessible to more students.</p>
          </div>
          <div className="benefit-card">
            <h3>Career Opportunities</h3>
            <p>Scholarships can open doors to specialized career opportunities and academic programs.</p>
          </div>
          <div className="benefit-card">
            <h3>Networking & Support</h3>
            <p>Joining scholarship programs gives you access to networks and mentorship.</p>
          </div>
        </div>
      </section>

      <section className="how-to-apply">
        <h2>How to Apply?</h2>
        <p>PathwayScholar provides a streamlined application process:</p>
        <ul>
          <li>Explore scholarships by category</li>
          <li>Complete your profile and upload required documents</li>
          <li>Track your application status from your dashboard</li>
        </ul>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="testimonial-section">
        <h2>What Students Are Saying</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“PathwayScholar made my dream of studying abroad a reality. I found multiple scholarships that helped me fund my studies.”</p>
            <span>- Alex M.</span>
          </div>
          <div className="testimonial-card">
            <p>“The application process was smooth and easy. PathwayScholar has been a life-changing resource for me.”</p>
            <span>- Sara W.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
