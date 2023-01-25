import React from 'react'
import "./Education.scss"

const Education = (props) => {
  const {name} = props;
  let separation = "{";

  return (
    <div>
      <h1 className="classTitle"><span>class</span> Education  {separation}</h1>
      {
        name.map((item,index) => {
            return(
            <div key={index} className="schools">
                <h3><em>const</em> education = [ {item.name} ]</h3>
                <p className='code-dates'>{item.start} - {item.date}</p>
                <p className='code'>{item.where}</p>
            </div>
        )})
      }
    </div>
  )
}

export default Education
