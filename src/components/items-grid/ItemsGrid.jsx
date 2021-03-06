import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './ItemsGrid.scss';

import GridBoxes from '../grid-boxes/GridBoxes';
import { getCurrentCategoryItems, getCurrentCategoryIndex } from '../../redux/selectors/inventorySelectors';

/**
 * TODO: find a component for swipping between grids
 */

const ItemsGrid = ({ currentCategoryItems, currentCategoryIndex, ...props }) => {
  return (
      <TransitionGroup 
        className="ItemsGrid"
      >
        <CSSTransition
          key={currentCategoryIndex}
          in
          timeout={280}
          classNames="slide-right"
          appear
        >
          <GridBoxes categoryItems={currentCategoryItems} />
        </CSSTransition>
      </TransitionGroup>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategoryItems: getCurrentCategoryItems,
  currentCategoryIndex: getCurrentCategoryIndex,
});

export default connect(mapStateToProps)(ItemsGrid);
