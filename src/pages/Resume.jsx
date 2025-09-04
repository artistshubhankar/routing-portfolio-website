import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  // Add a timestamp or version to bust the cache
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf?v=${new Date().getTime()}`;

  return (
    <section>
      <h2>Resume</h2>

      <div className="resume-viewer">
        <iframe
          src={resumeUrl}
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      <a
        href={resumeUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        📄 Download Resume (PDF)
      </a>
    </section>
  );
}
