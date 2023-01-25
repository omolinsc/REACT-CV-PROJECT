import React from 'react'
import "./Experience.scss"

const Experience = (props) => {
  const {name} = props;
  console.log(name)

return (
  <div>
    {
      name.map((item,index) => {
          return(
          <div key={index} className="job">
              <h3>{item.name}</h3>
              <p>{item.start}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
          </div>
      )})
    }
  </div>
)
}

export default Experience
