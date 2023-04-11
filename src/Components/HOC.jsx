import React, { useState } from 'react'

function HOC(WrappedComponent) {
    function HocFunction(){
        const [Counter, setCounter] = useState(0);
        const handleClick =()=>{
            setCounter(Counter+1)
        }
        return (
            <div>
                <WrappedComponent Counter ={Counter} updateCounter={handleClick} />
            </div>
        )
        
    }
  return HocFunction
}

export default HOC