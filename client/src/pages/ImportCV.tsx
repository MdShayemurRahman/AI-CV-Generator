import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Person, Resume } from '../types/Resume';
import { Link } from 'react-router-dom';

const ImportCV = () => {
  const [allResume, setAllResume] = useState<Resume[]>([]);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await axios.get(
          'https://cv-app-server.onrender.com/api/resume/'
        );
        setAllResume(response.data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };
    fetchResumeData();
  }, []);

  return (
    <div className='resume-list'>
      <h2>List of Resumes</h2>
      <ul className='resume-items'>
        {allResume.map((resume, index) => (
          <li key={index} className='resume-item'>
            <Link
              to={`/profile/${resume._id}`}
            >{`${resume.person.first_name} ${resume.person.last_name}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportCV;
