import React from 'react'
import { CV } from '../pages/CV'

console.log(CV)

const {hero, education, experience, languages, otherLanguages, tools, habilities} = CV;

console.log(hero);

const Header = () => {
  return (
    <header>
        <div>
            <h1>{hero.secondName}</h1>
            <h2>{hero.firstName}</h2>
            <h3>{hero.aboutMe[0].info}</h3>
        </div>
        <div>
            {hero.image}
        </div>
    </header>
  )
}

export default Header
