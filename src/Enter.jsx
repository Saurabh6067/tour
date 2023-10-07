import React from 'react'
import { useState } from 'react'
import './Enter.css'
function Enter() {
    // create the function hold the varible value 
    const [inputvalue, setinputvalue] = useState('');
    const [inputpassword, setinputpassword] = useState('');
    console.log(inputvalue);
    // create a function to handle the change in input 
    const changeInput = (e) => {
        setinputvalue(e.target.value); 
    }
    const changePass =(e)=>{
        setinputpassword(e.target.value); 
    }
    

    return (
        <>
            <form className='text-center hi ' action="">
                <div className="box">
                    <label htmlFor="" >Full Name:- </label>
                    <input type="text" value={inputvalue} onChange={changeInput} /> <br />
                    <h1 className='text-warning'>{inputvalue}</h1>
                    <label htmlFor="">Password:-</label> 
                    <input value={inputpassword} onChange={changePass} type="password" />
                    <p>{inputpassword}</p>

                </div>


            </form>

        </>
    )
}

export default Enter
