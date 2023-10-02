import React from 'react'
import { Button } from '../Button/Button';
import "./Habilities.scss"
import classNames from 'classnames';

const Habilities = (props) => {

  const {name, open, setOpen} = props;
  let separation = "{";

  const containerClass = classNames({
    "habilitiesContainer": true,
    "hidden": open !== 4
  })

  return (
    <div>
      <div className='titleBox'>
        <Button open={open} setOpen={setOpen} id={4}/>
        <h1 className="classTitle"><span>class</span> Habilities  <span>extends</span> <span style={{color:"aquamarine", fontStyle:"normal"}}>Person</span> {separation} </h1>
      </div>

      <div className={containerClass}>
        {name.map((item,index) => {
              return(
              <div key={`${item.language}-${index}`} className="habilities">
                  <h3>hability <em className='key'>[</em><em style={{color:"orangered"}}>{index}</em><em className='key'>]</em> = <span style={{color:"aquamarine", fontStyle:"normal"}}> " {item} "</span>;</h3>
              </div>
          )})
        }
      </div>
    </div>
  )
}

export default Habilities
