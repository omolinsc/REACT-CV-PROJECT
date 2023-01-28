import React from 'react'
import "./Footer.scss"

const Footer = (props) => {

    const {firstName, adress, city, email, image, gitHub, linkedIn} = props.name;

  return (
    <footer>
      <div className='heroContact'>
        <div className='heroContact-image'>
            <img src={image} alt={firstName} className='profileImage'/>
        </div>
        <div className="heroContact-info">
            <p className='heroContact-info__text'>{adress}</p>
            <p className='heroContact-info__text'>{city}</p>
            <a href={`mailto: ${email}`} style={{color:"orange"}}  className='heroContact-info__text'>{email}</a>
        </div>
      </div>
      <div className='socialZone'>
        <a href={gitHub} target="_blank" rel='noreferrer'><img src="/assets/icons/git.png" alt="git" className='socialZone-icon'/></a>
        <a href={linkedIn} target="_blank" rel='noreferrer'><img src="/assets/icons/linkedin.png" alt="git" className='socialZone-icon'/></a>
      </div>
    </footer>
  )
}

export default Footer
