import React from 'react';

import { box, boxActive } from './CategoryBox.module.scss';

const CategoryBox = ({ children, isActive, onClick, ...props }) => {
  const boxClasses = isActive ? `${box} ${boxActive}` : `${box}`;

  return (
    <div className={boxClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default CategoryBox;
