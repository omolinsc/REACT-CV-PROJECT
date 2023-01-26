import React from 'react'
import "./Experience.scss"

const Experience = (props) => {
  const {name} = props;

  let separation = "{";
  let arrow = "=>>";

return (
  <div>
  <h1 className="classTitle"><span>class</span> Experience  {separation}</h1>
    {
      name.map((item,index) => {
          return(
          <div key={index} className="job">
              <h3><em>function</em> experience = [ <span style={{color:"orange", fontStyle:"normal"}}>{item.name}</span> ] {separation}</h3>
              <p className='code-dates'>( {item.date} ) {arrow} {item.where}</p>
              <p className='code'>{item.description}</p>
          </div>
      )})
    }
  </div>
)
}

export default Experience
