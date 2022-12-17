import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState([{
    id: 1,
    name: 'Peter', 
    age: 24, 
    message:'random Message'
  }, {
    id: 2,
    name: 'John', 
    age: 26, 
    message:'random Message - 2'
  }]);

  const changeMessage = (id = null) => {
    if(!id){
      if(person.message === 'random Message'){
        setPerson({...person, message: 'Hello World!'});
      }else {
        setPerson({...person, message: 'random Message'});
      }
    }else {
      var newPerson = person.map((p, index) => {
        if(p.id !== id){
          return p;
        }else {
          if(p.message === 'random Message'){
            p.message = 'random Message - 2';
          }else{
            p.message = 'random Message';
          }
          return p;
        }
      });
      setPerson(newPerson);
    }
  }

  return <>
    {
      person.map((p) => {
        return <div key={p.id}>
          <h3>{p.name}</h3>
          <h3>{p.age}</h3>
          <h3>{p.message}</h3>
          <button tyep='button' className='btn' onClick={() => changeMessage(p.id)}>change message</button>
        </div>
      })
    }
  </>;
};

export default UseStateObject;
