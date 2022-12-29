import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() && email.trim()){
      const person = { id: new Date().getTime().toString(), firstName, email};
      setPeople((prevValue) => {
        return [...prevValue, person];
      });
      setFirstName('');
      setEmail('');
      console.log(people);
    }
  }

  // We connect our inputs with the state values.
  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name: </label>
          <input 
          type='text' 
          id='firstName' 
          name='firstName' 
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          ></input>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input 
          type='text' 
          id='email' 
          name='email' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>
        <button type='submit'>Add Person</button>
      </form>
      {people.map((person)=>{
        return (
          <div className='item' key={person.id}>
            <h4>{person.firstName}</h4>
            <p>{person.email}</p>
          </div>
        )
      })}
    </article>
  </>;
};

export default ControlledInputs;
