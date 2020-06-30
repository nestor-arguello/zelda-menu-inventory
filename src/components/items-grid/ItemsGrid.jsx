import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { wrapper } from './ItemsGrid.module.scss';

import ItemBoxesContainer from '../item-boxes-container/ItemBoxesContainer';
import { getCurrentCategoryItems } from '../../redux/selectors/inventorySelectors';

const ItemsGrid = ({ currentCategoryItems, ...props }) => {
  return (
    <div className={wrapper}>
    {/* <ItemBoxesContainer isHollow /> */}
      <ItemBoxesContainer isActive categoryItems={currentCategoryItems} />

    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategoryItems: getCurrentCategoryItems,
});

export default connect(mapStateToProps)(ItemsGrid);
