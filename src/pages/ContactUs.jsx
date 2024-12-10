import "./ContactUs.css"; // Link to the CSS file

const ContactUs = () => {
  return (
    <div>

      <main>
        <section className="contact">
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Please fill out the form below to get in touch with us.</p>
          <form action="/submit-contact-form" method="POST">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 PathwayScholar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
