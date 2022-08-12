import ProjectList from './Components/Projects/ProjectList';
import ExperienceList from './Components/Experience/ExperienceList';
import AboutMe from './Components/AboutMe';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <>
    <Navigation />
    <div className='container'>
      <AboutMe />
      <ExperienceList />
      <ProjectList />
    </div>
    <Footer />
    </>
  );
}

export default App;
