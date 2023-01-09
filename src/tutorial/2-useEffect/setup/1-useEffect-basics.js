import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // You can call as many useEffect you want.
  // this is [] called dependencies, if empty it will only run at first render and thats it
  useEffect(() => {
    console.log('Another useEffect');
  }, []);
  
  // here useEffect will run only when dependency of [value] is changed
  useEffect(() => {
    console.log('Within UseEffect');
    if(value > 0)
      document.title = `New Messsge(${value})`;
  }, [value]);

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue((prevValue)=>{
      return prevValue+1;
    })}>click me</button>
  </>;
};

export default UseEffectBasics;
