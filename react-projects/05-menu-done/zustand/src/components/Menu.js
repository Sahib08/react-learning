import { React, useState } from 'react';
import { truncateAfterWord } from "../utils/helper";

const Menu = ({items}) => {
  const [menuItem, setMenuItem] = useState(items);

  return <div className='section-center'>
    {
      items.map((menuItem) => {
        const {id, title, photoUrl, directions, calories} = menuItem;
        return (
          <article keys={id} className='menu-item'>
            <img src={photoUrl} alt={title} className='photo'/>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
              </header>
              <p className='item-text'>{truncateAfterWord(directions)}</p>
              <h4 className='price'>Calories: {calories}</h4>
            </div>
          </article>
        )
      })
    }
  </div>;
};

export default Menu;
