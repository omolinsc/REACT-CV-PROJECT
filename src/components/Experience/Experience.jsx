import React from 'react'
import { Button } from '../Button/Button';
import "./Experience.scss"

const Experience = (props) => {
  const {name, open, setOpen} = props;

  let separation = "{";
  let arrow = "=>>";
  let separation2 = "}";

return (
  <div>
    <div className='titleBox'>
      <Button open={open} setOpen={setOpen} id={1}/>
      <h1 className="classTitle"><span>class</span> Experience <span>extends</span> <span style={{color:"aquamarine", fontStyle:"normal"}}>Person</span> {separation}</h1>
    </div>
    <div className='container'>
    { open === 1 &&
      name.map((item,index) => {
          return(
          <div key={`${item.name}-${index}`} className="job">
              <h3><em>function</em> experience = [ <span style={{color:"orange", fontStyle:"normal"}}>{item.name}</span> ] {separation}</h3>
              <p className='code-dates'>( {item.date} ) {arrow} {item.where}</p>
              <p className='code'>{item.description}</p>
          </div>
      )})
    }
    </div>
  </div>
)
}

export default Experience
