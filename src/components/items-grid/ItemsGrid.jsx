import React from 'react';

import { container } from './ItemsGrid.module.scss';
import ItemBox from '../item-box/ItemBox';

const NUMBER_OF_BOXES = 20;
const numberOfBoxes = Array.from(Array(NUMBER_OF_BOXES));

const ItemsGrid = ({ ...props }) => {
  return (
    <div className={container}>
      {numberOfBoxes.map((_, index) => (
        <ItemBox key={index} />
      ))}
    </div>
  );
};

export default ItemsGrid;
