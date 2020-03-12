import React, { Component, useState,  useEffect } from 'react';

const Counter = () => {
    const[count, setCount] = useState(0);
    const [firstName, setFirstName] = useState(()=> localStorage.getItem('hooksFirstName') ||  "")
    const [lastName, setLastName] = useState(()=> localStorage.getItem('hooksLastName') ||  "")
    const incrementCount = () => setCount(count  + 1);
    const  handleFirstNameChange = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`
        localStorage.setItem('hooksFirstName', firstName);
        localStorage.setItem('hooksLastName', lastName);
      });
    
    return  (
        <div>
            Hello! {firstName} {lastName}
            <p>
                You Click {count} times
            </p>
            <button onClick={incrementCount}>
                Click  Me
            </button>
            <div>
                <input value={firstName}  onChange={handleFirstNameChange}/>
                <br/>
                <input value={lastName} onChange={handleLastNameChange}/>
            </div>
        </div>
    )
}

export default Counter