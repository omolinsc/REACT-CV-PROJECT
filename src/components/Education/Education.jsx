import React from 'react'
import { Button } from '../Button/Button';
import "./Education.scss"
import classNames from 'classnames';

const Education = (props) => {
  const {name, open, setOpen} = props;
  let separation = "{";
  let separation2 = "}";

  const containerClass = classNames({
    "container": true,
    "hidden": open !== 0
  })

  return (
    <div>
      <div className='titleBox'>
        <Button open={open} setOpen={setOpen} id={0}/>
        <h1 className="classTitle"><span>class</span> Education <span>extends</span> <span style={{color:"aquamarine", fontStyle:"normal"}}>Person</span> {separation} </h1>
      </div>

      <div className={containerClass}>
        <div>
        {name.map((item,index) => {
              return(
              <div key={`${item.name}-${index}`} className="schools">
                  <h3><em>const</em> education ( <span style={{color:"orange", fontStyle:"normal"}}>{item.name}</span> ) = </h3>
                  <p className='code-dates'>{item.start} - {item.date}</p>
                  <p className='code'>{item.where}</p> <h3>{separation2};</h3>
              </div>
          )})
        }
        </div>
      </div>
    </div>
  )
}

export default Education
