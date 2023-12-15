import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Resume } from '../types/Resume';
import { getAllResumes } from '../service/ResumeService';

const ImportCV = () => {
  const [allResume, setAllResume] = useState<Resume[]>([]);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const resumes = await getAllResumes();
        setAllResume(resumes);
        console.log(resumes);
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
        {allResume.map((resume) => (
          <li key={resume._id} className='resume-item'>
            <Link to={`/profile/${resume._id}`}>
              {`${resume.person.first_name} ${resume.person.last_name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportCV;
