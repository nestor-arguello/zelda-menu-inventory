import React from 'react';

import { box, activeBox } from './ItemBox.module.scss';

const ItemBox = ({ img, isActive, ...props }) => {
  return (
    <div className={isActive ? `${box} ${activeBox}` : `${box}`}>
      {img && <img src={img} alt="item"/>}
    </div>
  );
};

export default ItemBox;
