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
// Too Many Components approach, just to showcase how components can make your life easier
// Sequence for definition of component does not matter - Book can be defined later and used before


// const Image = () => <img src='https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238569.jpg' alt='#'></img>;
// const Title = () => <h1>I am Book Title</h1>;
// const Author = () => <h4 style={{color: '#617d98', fontSize: '20px'}}> John Doe</h4>;


// This Section is for above and JSX
// JSX cin React can allow us to declare variable and use inside the return HTML like below - {}
// As long as we return something in {}, we are good
// We can use JS function of strings or anything with {}

const author = 'John Doe'

function Book () {
  const title = 'I am Book Title';
  return (
    <article className='book'>
      {/* <Image />
      <Title />
      <Author /> */}
      <img src='https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238569.jpg' alt='#'></img>
      <h1>{title}</h1>
      <h4 style={{color: '#617d98', fontSize: '20px'}}> {author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p>  - no no */}
      <p> {6 + 6}</p>
    </article>
  )
}

function BookList () {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);