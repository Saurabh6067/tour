import React, { useEffect, useState } from 'react'
import './Enter.css'

function Numer() {
    const[count,setCount]=useState(0);
    const[Sub,setSub]=useState(0);
    const[calc,setcal]=useState(0);

    useEffect(() =>{
        setcal(() => count*100); 
     },
     [count]
    )
  return (
    <div className='hi'>
        <h3>
            Count : {count}
        </h3>
        <h3>
            Count : {Sub}
        </h3>
        
         <br />
        <button onClick={ () =>setCount((c)=> c+1)} className='btn btn-dark'>
            + Add Me
        </button> <br /> <br />

        <button onClick={ () =>setSub((c)=> c-1)} className='btn btn-dark'>
            - Click Me 
        </button> <br /> <br />
        <h4>
            calc:{calc}
        </h4>
      
    </div>
  )
}

export default Numer
