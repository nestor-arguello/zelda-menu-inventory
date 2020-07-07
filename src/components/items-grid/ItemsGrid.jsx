import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './ItemsGrid.scss';

import Items from '../items/Items';
import { getCurrentCategoryItems, getCurrentCategoryIndex } from '../../redux/selectors/inventorySelectors';

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
          <Items categoryItems={currentCategoryItems} />
        </CSSTransition>
      </TransitionGroup>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategoryItems: getCurrentCategoryItems,
  currentCategoryIndex: getCurrentCategoryIndex,
});

export default connect(mapStateToProps)(ItemsGrid);
