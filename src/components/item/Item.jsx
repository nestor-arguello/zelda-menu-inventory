import React from 'react';
import classNames from 'classnames';

import './Item.scss';

const Item = ({ img, value, isActive, onClick, ...props }) => {
  const itemClasses = classNames('Item', {
    active: isActive,
  });
  const cornersClasses = classNames('corners', {
    active: isActive,
  });

  return (
    <div className={itemClasses} onClick={onClick}>
      <div className={cornersClasses}>
        <div className="corner top-left" />
        <div className="corner top-right" />
        <div className="corner bottom-right" />
        <div className="corner bottom-left" />
      </div>
      {img && <img src={img} alt="item" />}
      {img && <div className="quantity-box">{value}</div>}
    </div>
  );
};

export default Item;
