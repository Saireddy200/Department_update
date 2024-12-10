// src/pages/Help.jsx
import './Help.css';

function Help() {
  return (
    <div className="help-page">
      <h2>Help and Support</h2>
      <section>
        <h3>How to Find Scholarships</h3>
        <p>Navigate to the Find Scholarship page, where you can browse available scholarships. Use the search bar to filter scholarships based on specific criteria.</p>
      </section>
      <section>
        <h3>How to Apply for a Scholarship</h3>
        <p>Once you find a scholarship that suits you, click on the Apply button. Fill out the required application form with accurate information and submit it for review.</p>
      </section>
      <section>
        <h3>Tracking Your Applications</h3>
        <p>Use the dashboard to track the status of your applications, including categories like Pending, Accepted, Ongoing, and Completed.</p>
      </section>
      <section>
        <h3>Contact Support</h3>
        <p>If you need further assistance, please contact our support team at <a href="mailto:support@pathwayscholar.com">support@pathwayscholar.com</a>.</p>
      </section>
    </div>
  );
}

export default Help;
