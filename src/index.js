import React from 'react';
import ReactDom from 'react-dom';

// CSS

import './index.css';

// React Component - Example

// function Greeting(props){
//   return (
//     <div>
//       <h1>Hello World! </h1>
//       <h5>This is {props.name} and it is my {props.number} component</h5>
//       <ul>
//         <li>
//           <a href='https://www.google.com'>Hello</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

// React Fragment - Example

// function Greetings(){
//   return (
//     <React.Fragment>
//       <h1>Hello World!</h1>
//       <ul>
//         <li><a href='#'>Hello</a></li>
//       </ul>
//     </React.Fragment>
//   )
// }

// React.createElement - Example

// function GreetingManual() {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!'))
// }

// Nested Components - Example

// function Greeting(){
//   return (
//     <div>
//       <Person name='Sahib' />
//       <Message message='ha la luia' />
//     </div>
//   )
// }

// const Person = (props) => <h2>This is {props.name}</h2>;
// const Message = (props) => {
//   return (
//     <p>This is my {props.message}</p>
//   )
// }

// Mini Book Project - Example
// Too Many Components approach, just to showcase how components can make your life easier but if component for every small thing it can make life hell
// Sequence for definition of component does not matter - Book can be defined later and used before


// const Image = () => <img src='https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238569.jpg' alt='#'></img>;
// const Title = () => <h1>I am Book Title</h1>;
// const Author = () => <h4 style={{color: '#617d98', fontSize: '20px'}}> John Doe</h4>;


// This Section is for above and JSX
// JSX cin React can allow us to declare variable and use inside the return HTML like below - {}
// As long as we return something in {}, we are good
// We can use JS function of strings or anything with {}

// Props example --
// -- Props are nothing much but passing data to elements

// const firstBook = {
//   author: 'John Doe',
//   title: 'I am Book Title',
//   imgSrc: 'https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238569.jpg'
// } 

// const secondBook = {
//   author: 'Lebron James',
//   title: 'This is Title',
//   imgSrc: 'https://www.shutterstock.com/image-photo/lotus-flower-hd-background-wallpaper-260nw-1273798846.jpg'
// } 

// function Book (props) {

//   // Destructuring Props
//   const {imgSrc, title, author } = props; // or same thing at function def. Book ({imgSrc, title, author})
  
//   console.log(props);
//   return (
//     <article className='book'>
//       {/* <Image />
//       <Title />
//       <Author /> */} { /* This is how we comment within the return */}

//       <img src={imgSrc} alt='#'></img>
//       <h1>{title /* variable defined above and used here */}</h1>
//       <h4 style={{color: '#617d98', fontSize: '20px'}}> {author}</h4>
//       {props.children} {/* accessing children props - cannot access like [0][1] */} 
//       {/* <p>{let x = 6}</p>  - no no cuz it is not returning anything */}
//       <p> {6 + 6 /* ok becuase returning 12 at the end */}</p>
//     </article>
//   )
// }

// function BookList () {
//   return (
//     <section className='booklist'>
//       <Book 
//       imgSrc={firstBook.imgSrc} 
//       title={firstBook.title} 
//       author={firstBook.author}>
//         <p>lorem20lorem20lorem20lorem20lorem20lorem20lorem20</p> {/* This is how you pass children props */}
//         <p>lorem20lorem20lorem20lorem20lorem20lorem20lorem20</p> {/* Testing second Children */}
//         {/* findings - both go as one children can't separate */}
//       </Book>

//       <Book 
//       imgSrc={secondBook.imgSrc} 
//       title={secondBook.title} 
//       author={secondBook.author}/>
//     </section>
//   )
// }

// ----- End of Props -----

// ---- Examples of List -----

// This example particularly shows that we can render the array but not objects in the react
// Cannot render Objects in React
// Simple list

// But can render Arrays
// const names = ['John', 'Peter', 'Susan'];

// // Map function mapping every value and returning the new one
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);

// function BookList () {
//   return (
//     <section className='booklist'>
//       {newNames}
//     </section>
//   )
// }

// -- Example of Proper List

// const books = [{
//   id: 1,
//   author: 'John Doe',
//   title: 'I am Book Title',
//   imgSrc: 'https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238569.jpg'
// },
// {
//   id: 2,
//   author: 'Sachin Tendulkar',
//   title: 'The Story of God',
//   imgSrc: 'https://static.toiimg.com/thumb/8205226.cms?width=170&height=240&imgsize=37487'
// },
// {
//   id: 3,
//   author: 'Lebron James',
//   title: 'This is Title',
//   imgSrc: 'https://www.shutterstock.com/image-photo/lotus-flower-hd-background-wallpaper-260nw-1273798846.jpg'
// }];

// // Withour Spead Operator

// function Book (props) {

//   // Destructuring Props
//   const {imgSrc, title, author } = props; // or same thing at function def. Book ({imgSrc, title, author})

//   return (
//     <article className='book'>

//       <img src={imgSrc} alt='#'></img>
//       <h1>{title /* variable defined above and used here */}</h1>
//       <h4 style={{color: '#617d98', fontSize: '20px'}}> {author}</h4>

//     </article>
//   )
// }

// function BookList () {
//   return (
//     <section className='booklist'>
//       {books.map((book, index) => {
//         return (
//           //In React you should add a key prop to tell that this makes this object unique
//           // We can use index but could cause problems
//           <Book key={book.id} {...book} /> /* or it could be book={book} and then accessed via props.book */
//         )
//       })}
//     </section>
//   )
// }

// List End


// Events - details - https://reactjs.org/docs/events.html

const books = [{
  id: 1,
  author: 'John Doe',
  title: 'I am Book Title',
  imgSrc: 'https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238569.jpg'
},
{
  id: 2,
  author: 'Sachin Tendulkar',
  title: 'The Story of God',
  imgSrc: 'https://static.toiimg.com/thumb/8205226.cms?width=170&height=240&imgsize=37487'
},
{
  id: 3,
  author: 'Lebron James',
  title: 'This is Title',
  imgSrc: 'https://www.shutterstock.com/image-photo/lotus-flower-hd-background-wallpaper-260nw-1273798846.jpg'
}];

// Withour Spead Operator

function Book (props) {

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

function BookList () {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return (
          //In React you should add a key prop to tell that this makes this object unique
          // We can use index but could cause problems
          <Book key={book.id} {...book} /> /* or it could be book={book} and then accessed via props.book */
        )
      })}
    </section>
  )
}

// End of Events

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);