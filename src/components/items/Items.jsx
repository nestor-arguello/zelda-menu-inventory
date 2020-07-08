import React from 'react';
import { createStructuredSelector } from 'reselect';

import './Items.scss';

import { BOXES_PER_CATEGORY } from '../../constants';
import Item from '../item/Item';
import { connect } from 'react-redux';
import { getCurrentItemIndex } from '../../redux/selectors/inventorySelectors';
import { setCurrentItemIndex } from '../../redux/actions/inventoryActions';

const numberOfBoxes = Array.from({ length: BOXES_PER_CATEGORY });

const Items = ({
  categoryItems,
  currentItemIndex,
  setCurrentItemIndex,
  ...props
}) => {
  const handleClick = index => () => {
    console.log(index)
    setCurrentItemIndex(index);
  };

  return (
    <div className="Items">
      {numberOfBoxes.map((_, boxIndex) => {
        const image =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].imageURL;
        const value =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].value;

        const isActive = boxIndex === currentItemIndex;

        return (
          <Item
            key={boxIndex}
            img={image}
            value={value}
            isActive={isActive}
            onClick={handleClick(boxIndex)}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentItemIndex: getCurrentItemIndex,
});

const mapDispatchToProps = {
  setCurrentItemIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
