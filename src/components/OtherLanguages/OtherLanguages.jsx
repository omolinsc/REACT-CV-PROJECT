import React from 'react'
import { Button } from '../Button/Button';
import "./OtherLanguages.scss"
import {renderSquares as itemLevel} from '../renderSkillsFunction';
import classNames from 'classnames';

const OtherLanguages = (props) => {

  const {name, open, setOpen} = props;
  let separation = "{";

  const containerClass = classNames({
    "otherLanguagesContainer": true,
    "hidden": open !== 3
  })

  return (
    <div>
      <div className='titleBox'>
        <Button open={open} setOpen={setOpen} id={3}/>
        <h1 className="classTitle"><span>class</span> OtherLanguages  <span>extends</span> <span style={{color:"aquamarine", fontStyle:"normal"}}>Person</span> {separation} </h1>
      </div>

      <div className={containerClass}>
      {name.map((item,index) => {
            return(
            <div key={`${item.language}-${index}`} className="otherLanguages">
                <h3 className='otherLanguagesTitle'>
                  <img src={item.icon} alt={item.language} className="languageIcon" />
                  <em className='languagesName'> {item.language}</em> : <span className='languagesLevel'>{itemLevel(item.level, 15)}</span></h3> 
            </div>
        )})
      }
      </div>
    </div>
  )
}

export default OtherLanguages
