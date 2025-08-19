import React from "react";
import "../styles/Contact.css"; // for Contact.js
export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          <strong>📧 Email:</strong>
          <a href="mailto:artistshubhankar@gmail.com"> artistshubhankar@gmail.com</a>
        </p>
        <p>
          <strong>📞 Phone:</strong>
          <a href="tel:+919555452173"> +91 95554 52173</a>
        </p>
        <p>
          <strong>💼 LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/shubhankar-kumar-biswas-28745a24b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}LinkedIn
          </a>
        </p>
        <p>
          <strong>📷 Instagram:</strong>
          <a
            href="https://www.instagram.com/shubhankar_ceramics?igsh=MWlqZ2lxMHVpemN5Yg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}@shubhankar_ceramics
          </a>
        </p>
      </div>
    </section>
  );
}
