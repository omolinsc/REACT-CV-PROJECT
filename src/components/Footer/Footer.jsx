import React from 'react'
import "./Footer.scss"

const Footer = (props) => {

    const {firstName, adress, city, email, image, gitHub, linkedIn} = props.name;

  return (
    <footer>
      <div className='socialZone'>
        <img src="/assets/icons/linkedin.png" alt="git" className='socialZone-icon'/>
        <img src="/assets/icons/git.png" alt="git" className='socialZone-icon'/>
      </div>
      <div className='heroContact'>
        <div className="heroContact-info">
            <p>{adress}</p>
            <p>{city}</p>
            <a href={`mailto: ${email}`} style={{color:"orange"}}>{email}</a>
        </div>
        <div className='heroContact-image'>
            <img src={image} alt={firstName} className='profileImage'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
