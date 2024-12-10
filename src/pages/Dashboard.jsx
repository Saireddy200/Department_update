import { useState } from 'react';
import './Dashboard.css';
import { useDashboard } from '../context/DashboardContext'; // Importing the DashboardContext

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Using the global context for dynamic counts
  const { appliedCount, pendingCount } = useDashboard();

  // Updated dashboardData to use dynamic counts
  const dashboardData = {
    applied: appliedCount,
    accepted: 3, // Example static data, you can integrate dynamically later
    pending: pendingCount,
    completed: 2,
    ongoing: 1,
  };

  const scholarshipDetails = {
    applied: [
      { name: 'Science Scholarship', description: 'For students excelling in science fields.' },
      { name: 'Arts Scholarship', description: 'Supports students in arts programs.' },
      // Add more details here
    ],
    accepted: [
      { name: 'Engineering Excellence', description: 'For top engineering students.' },
    ],
    pending: [
      { name: 'Medical Scholarship', description: 'For students in the medical field awaiting approval.' },
      // Add more details here
    ],
    completed: [
      { name: 'Community Service Scholarship', description: 'Rewarded for outstanding community service.' },
    ],
    ongoing: [
      { name: 'International Studies Fund', description: 'Assists students studying abroad.' },
    ],
  };

  const openModal = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  return (
    <div className="dashboard">
      <h2>Scholarship Dashboard</h2>
      <div className="dashboard-cards">
        {Object.keys(dashboardData).map((key) => (
          <div key={key} className="dashboard-card" onClick={() => openModal(key)}>
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <p>{dashboardData[key]}</p>
          </div>
        ))}
      </div>

      {showModal && selectedCategory && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Scholarships</h3>
            <ul>
              {scholarshipDetails[selectedCategory]?.map((scholarship, index) => (
                <li key={index}>
                  <h4>{scholarship.name}</h4>
                  <p>{scholarship.description}</p>
                </li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
