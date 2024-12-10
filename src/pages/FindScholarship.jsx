// src/pages/FindScholarship.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FindScholarship.css';

const scholarshipsData = [
  { id: 1, name: 'STEM Excellence Scholarship', description: 'For outstanding students in Science, Technology, Engineering, and Math.' },
  { id: 2, name: 'Merit-Based Scholarship', description: 'Awarded to top-performing students across all disciplines.' },
  { id: 3, name: 'Arts and Culture Scholarship', description: 'For students in visual and performing arts.' },
  { id: 4, name: 'Women in Tech Scholarship', description: 'Supporting women pursuing degrees in tech fields.' },
  { id: 5, name: 'First-Generation Scholarship', description: 'For first-generation college students.' },
  { id: 6, name: 'Community Leadership Scholarship', description: 'For students with strong leadership in their communities.' },
  { id: 7, name: 'Research Scholarship', description: 'For students participating in scientific research programs.' },
  { id: 8, name: 'Business and Management Scholarship', description: 'Supporting future business leaders and entrepreneurs.' },
  { id: 9, name: 'Athletics Scholarship', description: 'For students excelling in sports and academics.' },
  { id: 10, name: 'Global Studies Scholarship', description: 'For students pursuing studies in international relations and global studies.' },
];

function FindScholarship() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredScholarships = scholarshipsData.filter((scholarship) =>
    scholarship.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="find-scholarship">
      <h1>Find Scholarships</h1>
      <input
        type="text"
        placeholder="Search for scholarships..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="scholarship-list">
        {filteredScholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <h3>{scholarship.name}</h3>
            <p>{scholarship.description}</p>
            <div className="scholarship-actions">
            <Link to={`/apply?name=${encodeURIComponent(scholarship.name)}`} className="apply-button">
                Apply
              </Link>
              <Link to={`/view-details/${scholarship.id}`} className="view-details-button">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindScholarship;
