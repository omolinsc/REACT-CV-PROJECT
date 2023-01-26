import React from 'react'
import "./Header.scss"

const Header = (props) => {

  const {firstName, secondName, aboutMe} = props.name;

  let separation = "{";
  
  return (
    <header>     
        <div className='hero'>
          <div className='hero-name'>
            <h1>{secondName}</h1>
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
