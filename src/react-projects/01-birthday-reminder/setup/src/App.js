import React, { useState } from 'react';
// Data
import data from './data';

// List Component
import List from './List';

function App() {
  // Use State
  const [person, deletePerson] = useState(data);

  // onClick event set up
  const setPeople = () => {
    deletePerson((prevState) => {
      return [];
    })
  };
  return (
    <main>
      <section className='container'>
        <h3>{person.length} birthdays today</h3>
        <List data={person} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
