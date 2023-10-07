import React, { useEffect, useRef, useState } from 'react'

export default function Userefff() {
    const [inputvalue,setinputvalue] = useState('');
    const previousinputvalue= useRef('');

    useEffect(()=>{
      previousinputvalue.current=inputvalue;

    },
    [inputvalue]
    )
  return (
    <div>
      <input type="text" value={inputvalue} onChange={(e) =>setinputvalue(e.target.value)} />
      <h2>Current Value:{inputvalue}</h2>
      <h2>Previous Value:{previousinputvalue.current}</h2>
    </div>
  )
}
