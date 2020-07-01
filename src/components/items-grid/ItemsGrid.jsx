import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './ItemsGrid.scss';

import ItemBoxesContainer from '../item-boxes-container/ItemBoxesContainer';
import { getCurrentCategoryItems, getCurrentCategoryIndex } from '../../redux/selectors/inventorySelectors';

const ItemsGrid = ({ currentCategoryItems, currentCategoryIndex, ...props }) => {
  return (
      <TransitionGroup 
        className="items-grid"
      >
        <CSSTransition
          key={currentCategoryIndex}
          in
          timeout={280}
          classNames="slide-right"
          appear
        >
          <ItemBoxesContainer categoryItems={currentCategoryItems} />
        </CSSTransition>
      </TransitionGroup>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategoryItems: getCurrentCategoryItems,
  currentCategoryIndex: getCurrentCategoryIndex,
});

export default connect(mapStateToProps)(ItemsGrid);
