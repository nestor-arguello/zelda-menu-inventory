import React from 'react';

import './Item.scss';

const Item = ({ img, isActive, ...props }) => {
  return (
    <div className={isActive ? "Item active" : "Item"}>
      {img && <img src={img} alt="item"/>}
    </div>
  );
};

export default Item;
