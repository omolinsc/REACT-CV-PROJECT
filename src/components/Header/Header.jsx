import React from 'react'
import "./Header.scss"

const Header = (props) => {

  const {firstName, secondName, aboutMe, jobObjective} = props.name;

  let separation = "{";
  let separation2 = "}";
  let parenthesis = "(";
  
  return (
    <header>     
        <div className='hero'>
          <div className='hero-name'>
            <h3><em style={{color:"rgba(48, 155, 255, 0.733)"}}>const</em> jobObjective = <em>new</em><em style={{color:"aquamarine", fontStyle:"normal"}}> Person</em> {parenthesis}</h3>
            <h3 style={{paddingLeft:"20px"}}>{separation} {jobObjective} {separation2}</h3>
            <h1 className='hero-title'>{secondName}</h1>
            <h2>{firstName}</h2>
          </div>
          <div className='hero-quotes'>
          <h1 className="classTitle"><span>class</span> aboutMe  {separation}</h1>
            {
              //! hacer que aparezca 1 mensaje y vaya cambiando cada 3 o 5 segundos 
              aboutMe.map((item, index) => 
                <h3 key={index} className="hero-aboutMe">{item.info}</h3>)
            }
            </div>
        </div>
    </header>
  )
}

export default Header
