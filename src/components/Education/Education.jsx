import React from 'react'
import { Button } from '../Button/Button';
import "./Education.scss"

const Education = (props) => {
  const {name, open, setOpen} = props;
  let separation = "{";

  return (
    <div>
      <div className='titleBox'>
        <Button open={open} setOpen={setOpen} id={0}/>
        <h1 className="classTitle"><span>class</span> Education  {separation} </h1>
      </div>

      <div className='container'>
      {open === 0 &&
        name.map((item,index) => {
            return(
            <div key={`${item.name}-${item.index}`} className="schools">
                <h3><em>const</em> education = [ <span style={{color:"orange", fontStyle:"normal"}}>{item.name}</span> ]</h3>
                <p className='code-dates'>{item.start} - {item.date}</p>
                <p className='code'>{item.where}</p>
            </div>
        )})
      }
      </div>
    </div>
  )
}

export default Education
