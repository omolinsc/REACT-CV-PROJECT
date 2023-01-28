export const renderSquares = (level, maxlevel) => {
    let squares = [];
    for (let i = 0; i < maxlevel; i++) {
      if (i < level) squares = [...squares, "square-green"] 
      else squares = [...squares, "square"]    
      }
    
    return (
      squares.map((item,index) => {
       return <div key={`${item}-${index}`} className={item}></div>
      })
    )
  }

  export default renderSquares