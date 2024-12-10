// src/components/ScholarshipList.js
import { useEffect, useState } from "react";
import apiService from "../apiService"; // Import the apiService

const ScholarshipList = () => {
  const [scholarships, setScholarships] = useState([]); // State to store scholarships
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch scholarships when the component mounts
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const data = await apiService.getScholarships(); // Get scholarships from the backend
        setScholarships(data); // Update state with the fetched scholarships
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchScholarships(); // Call the function to fetch data
  }, []); // Empty dependency array means this runs only once after the component mounts

  // Function to handle applying for a scholarship
  const handleApply = async (scholarshipId) => {
    const userId = localStorage.getItem("userId"); // Get the user ID from local storage (assumed to be stored after login)
    try {
      await apiService.applyForScholarship(userId, scholarshipId); // Call the API to apply
      alert("Application submitted!"); // Notify user of success
    } catch (error) {
      console.error("Error applying for scholarship:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading scholarships...</p> // Display loading message
      ) : (
        <div>
          <h1>Available Scholarships</h1>
          <ul>
            {scholarships.map((scholarship) => (
              <li key={scholarship.id}>
                <h3>{scholarship.name}</h3>
                <p>{scholarship.description}</p>
                <button onClick={() => handleApply(scholarship.id)}>Apply</button> {/* Apply button */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScholarshipList;
