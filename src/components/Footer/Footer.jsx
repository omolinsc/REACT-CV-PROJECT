import React from 'react'
import "./Footer.scss"

const Footer = (props) => {

    const {firstName, adress, city, email, image} = props.name;

  return (
    <footer>
        <div className="hero-info">
            <p>{adress}</p>
            <p>{city}</p>
            <p>{email}</p>
        </div>
        <div className='hero-image'>
            <img src={image} alt={firstName} className='profileImage'/>
        </div>
    </footer>
  )
}

export default Footer
