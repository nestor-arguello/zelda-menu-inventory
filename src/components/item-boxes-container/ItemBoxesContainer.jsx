import React from 'react';

import './ItemBoxesContainer.scss';

import { BOXES_PER_CATEGORY } from '../../constants';
import ItemBox from '../item-box/ItemBox';

const numberOfBoxes = Array.from({ length: BOXES_PER_CATEGORY });

const ItemBoxesContainer = ({
  categoryItems,
  isActive,
  isHollow,
  ...props
}) => {
  return (
    <div className="item-boxes__container">
      {numberOfBoxes.map((_, boxIndex) => {
        const image =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].imageURL;

        return <ItemBox key={boxIndex} img={image} />;
      })}
    </div>
  );
};

export default ItemBoxesContainer;
