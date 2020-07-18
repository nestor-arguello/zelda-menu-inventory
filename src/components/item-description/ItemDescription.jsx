import React from 'react';

import './ItemDescription.scss';

import { categoriesIcons } from '../../images/svgs';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getCurrentItem,
  getCurrentCategory,
} from '../../redux/selectors/inventorySelectors';

const ItemDescription = ({
  title,
  currentValue,
  nextValue,
  text,
  isEquipped,
  item,
  category,
  ...props
}) => {
  return (
    item && <div className="ItemDescription">
      <div className="ItemDescription__is-equipped" />
      <div className="ItemDescription__title">{item.name}</div>
      <div className="ItemDescription__values">
        <div className="category-icon">{categoriesIcons[category]}</div>
        {/* <div className="value current">{2}</div> */}
        {/* <div className="arrow">&#10142;</div> */}
        <div className="value next">{item.value}</div>
      </div>
      <div className="ItemDescription__text">{item.description}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  item: getCurrentItem,
  category: getCurrentCategory,
})

export default connect(mapStateToProps)(ItemDescription);
