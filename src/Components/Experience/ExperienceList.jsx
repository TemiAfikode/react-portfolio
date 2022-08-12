import { useEffect, useState } from 'react';
import axios from 'axios';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getExperience = async () => {
      const url =
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_API_LOCAL_URL
          : process.env.REACT_APP_API_PROD_URL;
      try {
        const { data } = await axios.get(`${url}/experiences`);
        setExperiences(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getExperience();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='experience'>
      <h1 className='heading'>Experiences</h1>
      <ul className='grid'>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} values={exp} />
        ))}
      </ul>
    </div>
  );
}
