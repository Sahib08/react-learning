import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);  

  const handleClick = () => {
    setPeople([]);
  };

  const handleSingleClick = (id) => {
    let newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  }

  return <>
    {
      people.map((person) => {
        const {id, name} = person;
        return <div key={id} className="item">
          <h4>{name}</h4>
          <button type='button' className='btn' onClick={() => handleSingleClick(id)}>clear</button>
        </div>
      })
    }
    <button type='button' className='btn' onClick={handleClick}>Clear Button</button>
  </>
};

export default UseStateArray;
