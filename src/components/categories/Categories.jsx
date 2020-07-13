import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Categories.scss';

import { categoriesIcons } from '../../images/svgs';
import Category from '../category/Category';

import { getCurrentCategoryIndex } from '../../redux/selectors/inventorySelectors';
import { setCurrentCategoryIndex } from '../../redux/actions/inventoryActions';

const Categories = ({
  currentCategoryIndex,
  setCurrentCategoryIndex,
  ...props
}) => {
  const handleClick = index => () => {
    setCurrentCategoryIndex(index);
  };

  return (
    <div className="Categories">
      {Object.values(categoriesIcons).map((icon, index) => (
        <Category
          key={index}
          isActive={currentCategoryIndex === index}
          onClick={handleClick(index)}
        >
          {icon}
        </Category>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCategoryIndex: getCurrentCategoryIndex,
});

const mapDispatchToProps = {
  setCurrentCategoryIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
