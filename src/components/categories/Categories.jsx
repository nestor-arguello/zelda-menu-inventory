import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { container } from './Categories.module.scss';

import { ReactComponent as Sword } from '../../images/sword.svg';
import { ReactComponent as Shield } from '../../images/shield.svg';
import { ReactComponent as Armor } from '../../images/armor.svg';

import CategoryBox from '../CategoryBox/CategoryBox';
import { getCurrentCategoryIndex } from '../../redux/selectors/inventorySelectors';
import { setCurrentCategoryIndex } from '../../redux/actions/inventoryActions';

const CategoriesIcons = [<Sword />, <Shield />, <Armor />];

const Categories = ({
  currentCategoryIndex,
  setCurrentCategoryIndex,
  ...props
}) => {
  const handleClick = index => () => {
    setCurrentCategoryIndex(index);
  };

  return (
    <div className={container}>
      {CategoriesIcons.map((icon, index) => (
        <CategoryBox
          key={index}
          isActive={currentCategoryIndex === index}
          onClick={handleClick(index)}
        >
          {icon}
        </CategoryBox>
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
