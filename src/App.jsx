import './App.scss';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { CV } from './pages/CV';


function App(props) { 

  let numbers = []

  for ( let i = 0; i < 200; i++) {
    numbers = [...numbers, i];
  }
  console.log(numbers)

  const {hero, education, experience, languages, otherLanguages, tools, habilities} = CV;

  return (
    <div className="App">
      <div className="sidebar">
      {
        numbers.map((item,index) => {
            return(
            <div key={index}>
                <p>{item}</p>
            </div>
        )})
      }
      </div>
      <div className='info'>
        <Header name={hero}/>
        <div className='eduAndExp'>
          <div className="education">
            <Education name={education}/>
          </div>
          <div className="experience">
            <Experience name={experience}/>
          </div>
        </div>
        <Footer name={hero}/>
      </div>
    </div>
  );
}

export default App;
