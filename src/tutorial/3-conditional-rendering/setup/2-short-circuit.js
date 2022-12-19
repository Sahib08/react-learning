import React, { useState } from 'react';
// short-circuit evaluation
// ^^ it helps in if you have one return and need conditionals in that return rather than having multiple returns
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(''); 

  // if text true, if returns first value that is text here if second is true and first false then returns second value
  const firstValue = text || 'hello world';
  
  // if both true then it will return the second value
  const secondValue = text && 'hello world';

  const [isError, setIsError] = useState(false); 

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>{secondValue}</h1> */}

    {/* This is called Short circuit operators */}
    <h1>{text || 'John Doe'}</h1>
    <button className='btn' onClick={()=>{setIsError(!isError)}}>toggle error</button>
    {isError && <h1>Error...</h1>}
    {/* here - if text is not true it is returning the second value */}
    {/* {!text && <h1>Hello World</h1>} */}

  </>;
};

export default ShortCircuit;
