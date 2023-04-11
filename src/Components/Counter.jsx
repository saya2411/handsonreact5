import React from 'react'
import HOC from './HOC'


function Counter(props) {
   

  return (
    <>
        
     <div>Counter: {props.Counter}</div>
      <div><button onClick={props.updateCounter}>Increase</button></div>
    </>
  )
}

export default HOC(Counter)