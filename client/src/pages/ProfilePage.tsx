import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Resume } from '../types/Resume';

const ProfilePage = () => {
  const { id } = useParams();
  const [resumeDetails, setResumeDetails] = useState<Resume>();

  useEffect(() => {
    const fetchResumeDetails = async () => {
      try {
        const response = await axios.get(
          `https://cv-app-server.onrender.com/api/resume/${id}`
        );
        setResumeDetails(response.data);
      } catch (error) {
        console.error('Error fetching resume details:', error);
      }
    };
    fetchResumeDetails();
  }, [id]);
  console.log(resumeDetails);

  return (
    <div className='profile-container'>
      <h2>Profile Page</h2>
      {resumeDetails && (
        <div className='profile-details'>
          <div className='personal-info'>
            <h3>{`${resumeDetails.person.first_name} ${resumeDetails.person.last_name}`}</h3>
            <p>Email: {resumeDetails.person.email}</p>
            <p>Phone: {resumeDetails.person.phone_no}</p>
            {/* Display other personal info */}
            <p>
              LinkedIn:{' '}
              <a href={resumeDetails.person.linkedin_profile}>
                {resumeDetails.person.linkedin_profile}
              </a>
            </p>
            <p>
              Address: {resumeDetails.person.address.street_addr},{' '}
              {resumeDetails.person.address.city},{' '}
              {resumeDetails.person.address.country}
            </p>
            <p>Headline: {resumeDetails.person.headline}</p>
          </div>
          <div className='skills'>
            <h3>Technical Skills</h3>
            <ul>
              {resumeDetails.skills.technical_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3>Soft Skills</h3>
            <ul>
              {resumeDetails.skills.soft_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
