import ProjectList from './Components/Projects/ProjectList';
import ExperienceList from './Components/Experience/ExperienceList';
import AboutMe from './Components/AboutMe';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Contact from './Components/Contact/index';
import Skills from './Components/Skills';

import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <div className='container'>
        <AboutMe />
        <Skills />
        <ExperienceList />
        <ProjectList />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
