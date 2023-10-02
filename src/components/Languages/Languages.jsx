import React from 'react'
import { Button } from '../Button/Button';
import "./Languages.scss"
import classNames from 'classnames';

const Languages = (props) => {

  const {name, open, setOpen} = props;
  let separation = "{";
  let separation2 = "}";

  const containerClass = classNames({
    "languageContainer": true,
    "hidden": open !== 2
  })

  return (
    <div>
      <div className='titleBox'>
        <Button open={open} setOpen={setOpen} id={2}/>
        <h1 className="classTitle"><span>class</span> Languages  <span>extends</span> <span style={{color:"aquamarine", fontStyle:"normal"}}>Person</span> {separation} </h1>
      </div>

      <div className={containerClass}>
      {name.map((item,index) => {
            return(
            <div key={`${item.language}-${index}`} className="languages">
                <h3><em>const</em> <span className="languageItem">{item.language}</span> = {separation}</h3> 
                <p className='languageCode'>Escrito: <span style={{color:"white"}}>"{item.wrlevel} sobre 15"</span>;</p>
                <p className='languageCode'>Hablado: <span style={{color:"white"}}>"{item.splevel} sobre 15"</span>;</p>
                <p className='languageCode'>Nativo: <span style={item.isNative === true ? {color:"chartreuse"} : {color:"red"}}>{item.isNative === true ? "true" : "false"}</span>;</p>
                <h3>{separation2}</h3>
            </div>            
        )})
      }
      </div>
    </div>
  )
}

export default Languages
