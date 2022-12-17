import React, { useState } from 'react';

// useState is state hook
// all hooks start with `use` also apply to hooks we create
// Component must be uppercase if we use a hook
// hook must be within component/function body
// cannot call conditionally - not the function useState(1)[1]
// basically for above point useState cannot be in if, it is basically unique to a function or component 

const UseStateBasics = () => {
  // console.log(useState('Hello World!'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  // We can have multiple useState if we want...
  const [text, setText] = useState('Random Title');
  const [btnText, setBtnText] = useState('I am button text');

  // Basically in useState - first value is the value of the variable at useState(1)[0]
  // second is the function which holds power to change that value useState(1)[1] - function
  const handleClick = () => {
    if(text !== 'Hello World!'){
      setText('Hello World!');
    }else {
      setText('Random Title!');
    }

    if(btnText !== 'I am button text'){
      setBtnText('I am button text');
    }else{
      setBtnText('Button text changed');
    }
    
  };

  return (
    <div>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>{btnText}</button>
    </div>
  );
};

export default UseStateBasics;
