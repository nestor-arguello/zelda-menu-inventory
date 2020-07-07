import React from 'react';

import './Items.scss';

import { BOXES_PER_CATEGORY } from '../../constants';
import Item from '../item/Item';

const numberOfBoxes = Array.from({ length: BOXES_PER_CATEGORY });

const Items = ({
  categoryItems,
  isActive,
  isHollow,
  ...props
}) => {
  return (
    <div className="Items">
      {numberOfBoxes.map((_, boxIndex) => {
        const image =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].imageURL;

        return <Item key={boxIndex} img={image} />;
      })}
    </div>
  );
};

export default Items;
