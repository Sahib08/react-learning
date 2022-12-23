import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  return <>
    <section>
      <div className='title'>
        <h2>ours tour</h2>
        <div className='underline'></div>
        <div>
        {props.tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={props.removeTour}></Tour>
        })}
        </div>
      </div>
    </section>
  </>;
};

export default Tours;
