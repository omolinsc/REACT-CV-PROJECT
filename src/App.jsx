import { useEffect, useState } from 'react';

import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Habilities from './components/Habilities/Habilities';
import Header from './components/Header/Header';
import Languages from './components/Languages/Languages';
import OtherLanguages from './components/OtherLanguages/OtherLanguages';
import Sidebar from './components/Sidebar/Sidebar';
import Tools from './components/Tools/Tools';

import { CV } from './pages/CV';

import './App.scss';


function App () { 

  const [open, setOpen] = useState();

  const {hero, education, experience, languages, otherLanguages, tools, habilities} = CV;

  useEffect(() => {
    const lockOrientation = async () => {
      try {
        await window.screen.orientation.lock('portrait');
        console.log('Rotación horizontal bloqueada');
      } catch (error) {
        console.error('Error al bloquear la rotación horizontal:', error);
      }
    };
    lockOrientation();
  }, []);

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
            <Education name={education} open={open} setOpen={setOpen} />
            <Experience name={experience} open={open} setOpen={setOpen}/>
            <Languages name={languages} open={open} setOpen={setOpen}/>
            <OtherLanguages name={otherLanguages} open={open} setOpen={setOpen}/>
            <Tools name={tools} open={open} setOpen={setOpen}/>
            <Habilities name={habilities} open={open} setOpen={setOpen}/>
        </div>
        <Footer name={hero}/>
      </main>
    </div>
  );
}

export default App;