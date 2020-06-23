import React, { useState } from 'react';

import { container } from './Categories.module.scss';

import { ReactComponent as Sword } from '../../img/sword.svg';
import { ReactComponent as Shield } from '../../img/shield.svg';
import { ReactComponent as Armor } from '../../img/armor.svg';

import CategoryBox from '../CategoryBox/CategoryBox';

const CategoriesIcons = [<Sword />, <Shield />, <Armor />];

const Categories = ({ ...props }) => {
  const [categoryActivedIndex, setCategoryActivedIndex] = useState(0);

  const handleClick = index => () => {
    setCategoryActivedIndex(index);
  };

  return (
    <div className={container}>
      {CategoriesIcons.map((icon, index) => (
        <CategoryBox
          key={index}
          isActive={categoryActivedIndex === index}
          onClick={handleClick(index)}
        >
          {icon}
        </CategoryBox>
      ))}
    </div>
  );
};

export default Categories;
