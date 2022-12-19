import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    // here we are cleaning the resize, this way comes in help when there is coditional rendering of a component
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  });

  return <>
    <h1>Window</h1>
    <h2>{size} px</h2>
  </>;
};

export default UseEffectCleanup;
