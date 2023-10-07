import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const[data,setdata]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setdata(data));
    },
    []);
  return (
    <>
    {
        
    data && data.map(
        (item) =>{
            console.log("my Output is Here",item)
            return <p key={item.id}>
                {item.title} <br />  {item.id}
            </p>

        }
    )
    }
    </>
  )
}
