import React from 'react';
import { createStructuredSelector } from 'reselect';

import './GridBoxes.scss';

import { BOXES_PER_CATEGORY } from '../../constants';
import GridBox from '../grid-box/GridBox';
import { connect } from 'react-redux';
import {
  getCurrentGridBoxIndex,
  getCurrentItem,
  getCurrentCategoryIndex,
  getIsItemSelected,
} from '../../redux/selectors/inventorySelectors';
import { setCurrentGridBoxIndex } from '../../redux/actions/inventoryActions';

const numberOfBoxes = Array.from({ length: BOXES_PER_CATEGORY });

const GridBoxes = ({
  categoryItems,
  currentGridBoxIndex,
  setCurrentGridBoxIndex,
  currentCategoryIndex,
  currentItem,
  isItemSelected,
  ...props
}) => {
  const handleClick = index => () => {
    setCurrentGridBoxIndex(index);
  };

  return (
    <div className="GridBoxes">
      {console.log('gridBoxes rendered!!')}
      {numberOfBoxes.map((_, boxIndex) => {
        const item = categoryItems && categoryItems[boxIndex];

        const isActive = boxIndex === currentGridBoxIndex;

        return (
          <GridBox
            key={boxIndex}
            item={item}
            isActive={isActive}
            isSelected={isItemSelected}
            onClick={handleClick(boxIndex)}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentGridBoxIndex: getCurrentGridBoxIndex,
  currentCategoryIndex: getCurrentCategoryIndex,
  currentItem: getCurrentItem,
  isItemSelected: getIsItemSelected,
});

const mapDispatchToProps = {
  setCurrentGridBoxIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(GridBoxes);
