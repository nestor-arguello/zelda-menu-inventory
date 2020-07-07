import React from 'react';

import './Category.scss';

/**
 * @TODO: remove box and boxes from names in components
 *        add classnames lib
 */

const Category = ({ children, isActive, onClick, ...props }) => {
  return (
    <div
      className={isActive ? 'Category active' : 'Category'}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Category;
