import React from 'react';
import '../App.css';

export const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer - Intern',
      company: 'ToCodePro - Graduation Internship',
      duration: 'Jan 2024 – June 2024',
      description: `
        Created Automated Data Extraction Module with OCR technology using Tesseract and Azure Cognitive Services for accurate text extraction from scanned documents.
        Implemented Document Classification Module with Machine Learning models (Support Vector Machine) for precise classification; allowed user-defined categories.
        Implemented Document Indexing Module using Algolia API solution with full-text search and logic-based indexing for efficient retrieval.
      `,
      companyLink: 'https://www.tocodepro.com'
    },
    {
      title: 'Software Developer - Intern',
      company: 'Proxym Group - Summer Internship',
      duration: 'July 2023 – Sep 2023',
      description: `
        Spearheaded the development of role-based access control and user authentication for the developers’ dedicated mobile application, resulting in a 25% decrease in login errors.
        Developed RESTful APIs using Kotlin to facilitate communication between front-end and back-end parts and implemented CRUD operations to handle database interactions efficiently.
        Utilized the MVC architecture to maintain separation of concerns and ensure code modularity & optimized API performance through caching and asynchronous programming.
      `,
      companyLink: 'https://www.proxym-group.com'
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="title">My Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-company">
              <a href={exp.companyLink} target="_blank" rel="noreferrer">{exp.company}</a>
            </p>
            <p className="experience-duration">{exp.duration}</p>
            <div className="experience-description">
              {exp.description.split('\n').map((line, index) => (
                line.trim() && <p key={index}>• {line.trim()}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
