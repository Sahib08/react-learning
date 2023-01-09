import { React, useState } from 'react';

const Menu = ({items}) => {
  const [menuItem, setMenuItem] = useState(items);

  return <div className='section-center'>
    {
      items.map((menuItem) => {
        const {id, title, img, desc, price} = menuItem;
        return (
          <article keys={id} className='menu-item'>
            <img src={img} alt={title} className='photo'/>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })
    }
  </div>;
};

export default Menu;
