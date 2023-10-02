import React from 'react'

const Sidebar = () => {

    let numbers = []

    for ( let i = 0; i < 200; i++) {
      numbers = [...numbers, i];
    }

  return (
    <div style={{overflow: "hidden"}}>
      {
        numbers.map((item,index) => {
            return(
            <div key={index}>
                <p>{item}</p>
            </div>
        )})
      }
    </div>
  )
}

export default Sidebar
