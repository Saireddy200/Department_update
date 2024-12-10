// src/pages/ViewDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import './ViewDetails.css';

// Updated mock scholarship data with descriptions
const scholarshipData = {
  1: { 
    name: "STEM Scholarship", 
    description: "A scholarship designed to support students pursuing careers in Science, Technology, Engineering, and Mathematics (STEM) fields. This scholarship aims to help students with tuition costs and encourage careers in these high-demand sectors.",
    amount: "$5,000", 
    eligibility: "Undergraduate students majoring in STEM fields.", 
    deadline: "2024-12-31" 
  },
  2: { 
    name: "Arts Scholarship", 
    description: "An opportunity for students passionate about the arts, including visual arts, music, theatre, and dance. This scholarship supports creativity and innovation in arts education.",
    amount: "$3,000", 
    eligibility: "Students enrolled in arts-related programs.", 
    deadline: "2025-03-15" 
  },
  3: { 
    name: "Medical Scholarship", 
    description: "Financial aid for aspiring healthcare professionals. This scholarship is for students pursuing degrees in fields such as medicine, nursing, and other health sciences.",
    amount: "$4,500", 
    eligibility: "Students enrolled in a healthcare or medical program.", 
    deadline: "2024-11-30" 
  },
  4: { 
    name: "Business Scholarship", 
    description: "Designed for future business leaders, this scholarship provides financial support to students studying business, finance, marketing, or entrepreneurship.",
    amount: "$2,500", 
    eligibility: "Students majoring in business-related fields.", 
    deadline: "2025-01-10" 
  },
  5: { 
    name: "Education Scholarship", 
    description: "Supports students who are passionate about teaching and making a difference in education. This scholarship helps future educators with their academic expenses.",
    amount: "$3,200", 
    eligibility: "Students enrolled in education programs.", 
    deadline: "2025-02-28" 
  },
  6: { 
    name: "Tech Scholarship", 
    description: "Encourages students pursuing studies in technology-related fields like computer science, software development, and IT. The scholarship aims to boost innovation and development in tech industries.",
    amount: "$4,000", 
    eligibility: "Students in technology-related majors.", 
    deadline: "2024-12-01" 
  },
  7: { 
    name: "Law Scholarship", 
    description: "Financial assistance for students pursuing careers in law. This scholarship helps future lawyers, paralegals, and criminal justice professionals with education expenses.",
    amount: "$3,500", 
    eligibility: "Law or criminal justice students.", 
    deadline: "2025-04-01" 
  },
  8: { 
    name: "Literature Scholarship", 
    description: "Supports students passionate about literature, writing, and language arts. This scholarship is for those aiming to pursue careers in writing, publishing, or academia.",
    amount: "$2,800", 
    eligibility: "Literature, English, or related majors.", 
    deadline: "2025-03-30" 
  },
  9: { 
    name: "Engineering Scholarship", 
    description: "A scholarship for future engineers specializing in civil, mechanical, electrical, and other engineering disciplines. This scholarship aids in covering costs for engineering studies.",
    amount: "$5,500", 
    eligibility: "Students enrolled in engineering programs.", 
    deadline: "2024-11-15" 
  },
  10: { 
    name: "Music Scholarship", 
    description: "A scholarship aimed at supporting musically talented students who wish to pursue careers in music performance, composition, or music education.",
    amount: "$3,000", 
    eligibility: "Students in music-related programs.", 
    deadline: "2025-06-01" 
  },
};

function ViewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scholarship = scholarshipData[id];

  if (!scholarship) {
    return <div className="view-details-page">Scholarship not found.</div>;
  }

  const handleApplyClick = () => {
    navigate(`/apply?name=${encodeURIComponent(scholarship.name)}`);
  };

  return (
    <div className="view-details-page">
      <div className="details-container">
        <h2>{scholarship.name}</h2>
        <p><strong>Description:</strong> {scholarship.description}</p>
        <p><strong>Amount:</strong> {scholarship.amount}</p>
        <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
        <p><strong>Deadline:</strong> {scholarship.deadline}</p>
      </div>
      <button className="apply-button" onClick={handleApplyClick}>
        Apply Now
      </button>
    </div>
  );
}

export default ViewDetails;
