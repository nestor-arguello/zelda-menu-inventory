import React from 'react';
import classNames from 'classnames';

import './Category.scss';

const Category = ({ children, isActive, onClick, ...props }) => {
  const categoryClasses = classNames('Category', {
    active: isActive,
  });

  return (
    <div
      className={categoryClasses}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Category;
