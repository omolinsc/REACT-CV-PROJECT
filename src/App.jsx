import { useState } from 'react';
import './App.scss';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { CV } from './pages/CV';


function App(props) { 


  const [open, setOpen] = useState();

  const {hero, education, experience, languages, otherLanguages, tools, habilities} = CV;

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className='webContent'>
        <div className='info'>
          <Header name={hero}/>
        </div>
        <div className='eduAndExp'>
          <div className="education">
            <Education name={education} open={open} setOpen={setOpen} />
          </div>
          <div className="experience">
            <Experience name={experience} open={open} setOpen={setOpen}/>
          </div>
        </div>
        <Footer name={hero}/>
      </main>
    </div>
  );
}

export default App;
