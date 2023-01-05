import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// useRef is basically a refernence to a specific element

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  }

  useEffect(() => {
    console.log(refContainer.current);
    // ref making reference to input and using focus to focus on it
    refContainer.current.focus();
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer}></input>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
