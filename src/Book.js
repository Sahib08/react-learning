import React from 'react'

const Book = (props) => {
     // Destructuring Props
  const {imgSrc, title, author } = props; // or same thing at function def. Book ({imgSrc, title, author})

  // Attribute, eventhandler
  // onClick, onMouseOver
  
  // function defined outside and used as reference in inline event 
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World!');
  };

  const moreComplexExample = (author) => {
    console.log(author);
  }

  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>

      <img src={imgSrc} alt='#'></img>
      
      {/* Inline function - not preferred but can be used for small things */}
      <h1 onClick={()=>{ console.log({title})}}>{title}</h1> {/* InLine function */}
      
      <h4 style={{color: '#617d98', fontSize: '20px'}}> {author}</h4>
      
      {/* reference of function used - preferred method - no argument passed no need to wrap un arrow function will only run when button is clicked */}
      <button type='button' onClick={clickHandler}>Alert Me</button>
      
      {/* If an argument is passed to a reference method it should be enwrapped in an arrow function otherwise it runs when the page loads */}
      <button type='button' onClick={() => moreComplexExample(author)}>Complex Example</button>
      
    </article>
  )
}

export default Book
