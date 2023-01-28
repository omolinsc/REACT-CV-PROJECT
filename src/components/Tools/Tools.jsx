import React from 'react'
import { Button } from '../Button/Button';
import "./Tools.scss"
import {renderSquares as itemLevel} from '../renderSkillsFunction';

const Tools = (props) => {

  const {name, open, setOpen} = props;
  let separation = "{";

  return (
    <div>
      <div className='titleBox'>
        <Button open={open} setOpen={setOpen} id={5}/>
        <h1 className="classTitle"><span>class</span> Tools  <span>extends</span> <span style={{color:"aquamarine", fontStyle:"normal"}}>Person</span> {separation} </h1>
      </div>

      <div className='toolsContainer'>
      {open === 5 &&
        name.map((item,index) => {
            return(
            <div key={`${item.language}-${index}`} className="tools">
                <h3 className='toolsTitle'>
                  <img src={item.icon} alt={item.tool} className="toolsIcon" />
                  <em className='toolsName'> {item.tool}</em> : <span className='toolsLevel'>{itemLevel(item.level, 15)}</span></h3> 
            </div>
        )})
      }
      </div>
    </div>
  )
}

export default Tools
