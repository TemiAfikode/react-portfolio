import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const url =
        process.env.NODE_ENV === 'development'
          ? process.env.REACT_APP_API_LOCAL_URL
          : process.env.REACT_APP_API_PROD_URL;
      try {
        const { data } = await axios.get(`${url}/projects`);
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='experience' id='projects'>
      <h1 className='heading'>Projects</h1>
      <ul className='grid'>
        {projects.map((exp, i) => (
          <ProjectItem key={i} values={exp} />
        ))}
      </ul>
    </div>
  );
}
