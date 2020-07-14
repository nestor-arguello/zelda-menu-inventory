import React from 'react';
import { createStructuredSelector } from 'reselect';

import './GridBoxes.scss';

import { BOXES_PER_CATEGORY } from '../../constants';
import GridBox from '../grid-box/GridBox';
import { connect } from 'react-redux';
import { getcurrentGridBoxIndex } from '../../redux/selectors/inventorySelectors';
import { setcurrentGridBoxIndex } from '../../redux/actions/inventoryActions';

const numberOfBoxes = Array.from({ length: BOXES_PER_CATEGORY });

const GridBoxes = ({
  categoryItems,
  currentGridBoxIndex,
  setcurrentGridBoxIndex,
  ...props
}) => {
  const handleClick = index => () => {
    setcurrentGridBoxIndex(index);
  };

  return (
    <div className="GridBoxes">
      {numberOfBoxes.map((_, boxIndex) => {
        const image =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].imageURL;
        const value =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].value;

        const isActive = boxIndex === currentGridBoxIndex;
        const isNew =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].isNew;
        const bonus =
          categoryItems &&
          categoryItems[boxIndex] &&
          categoryItems[boxIndex].bonus;

        return (
          <GridBox
            key={boxIndex}
            img={image}
            value={value}
            bonus={bonus}
            isNew={isNew}
            isActive={isActive}
            onClick={handleClick(boxIndex)}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentGridBoxIndex: getcurrentGridBoxIndex,
});

const mapDispatchToProps = {
  setcurrentGridBoxIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(GridBoxes);
