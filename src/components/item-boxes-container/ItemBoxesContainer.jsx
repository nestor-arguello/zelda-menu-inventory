import React from 'react';

import { container, active, hollow } from './ItemBoxesContainer.module.scss';

import { BOXES_PER_CATEGORY } from '../../constants';
import ItemBox from '../item-box/ItemBox';

const numberOfBoxes = Array.from({ length: BOXES_PER_CATEGORY });

const ItemBoxesContainer = ({
  categoryItems,
  isActive,
  isHollow,
  ...props
}) => {
  const classes = isActive
    ? `${container} ${active}`
    : isHollow
    ? `${container} ${hollow}`
    : `${container}`;

  return (
    <div className={classes}>
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
